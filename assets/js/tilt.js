/**
 * RetroCollect — Bespoke 3D Archival Card Tilt Engine (tilt.js)
 * Zero external dependencies. Supports:
 * - Perspective ~1000px mouse-tracking 3D tilt (up to 12 deg)
 * - Inner Z-depth pop layers (transform-style: preserve-3d)
 * - Cursor-tracking warm brass/amber specular glare highlight
 * - Touch tap-lift & gentle passive deviceorientation support
 * - Strict prefers-reduced-motion compliance & keyboard focus harmony
 */
(function () {
  'use strict';

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const coarsePointerQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
  const instances = new WeakMap();
  const activeElements = new Set();

  let orientationBound = false;
  let globalBeta = 0;
  let globalGamma = 0;

  function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

  class ArchivalTilt {
    constructor(el) {
      this.el = el;
      this.maxTilt = parseFloat(el.dataset.tiltMax) || 11;
      this.perspective = parseInt(el.dataset.tiltPerspective, 10) || 1000;
      this.scale = parseFloat(el.dataset.tiltScale) || 1.022;
      this.speed = parseInt(el.dataset.tiltSpeed, 10) || 420;
      this.glareMax = parseFloat(el.dataset.tiltGlare) || 0.24;

      this.rect = null;
      this.rafId = null;
      this.targetX = 0;
      this.targetY = 0;
      this.currentX = 0;
      this.currentY = 0;
      this.glareX = 50;
      this.glareY = 50;
      this.glareOpacity = 0;
      this.isHovering = false;

      this._setupDOM();
      this._bindEvents();
    }

    _setupDOM() {
      this.el.classList.add('rc-tilt-ready');
      if (!this.el.querySelector(':scope > .rc-tilt-glare')) {
        const glareWrap = document.createElement('span');
        glareWrap.className = 'rc-tilt-glare';
        glareWrap.setAttribute('aria-hidden', 'true');
        const glareInner = document.createElement('span');
        glareInner.className = 'rc-tilt-glare-inner';
        glareWrap.appendChild(glareInner);
        this.el.appendChild(glareWrap);
        this.glareInner = glareInner;
      } else {
        this.glareInner = this.el.querySelector(':scope > .rc-tilt-glare > .rc-tilt-glare-inner');
      }
    }

    _bindEvents() {
      this._onEnter = this._handleEnter.bind(this);
      this._onMove = this._handleMove.bind(this);
      this._onLeave = this._handleLeave.bind(this);
      this._onTouchStart = this._handleTouchStart.bind(this);
      this._onTouchEnd = this._handleTouchEnd.bind(this);

      this.el.addEventListener('pointerenter', this._onEnter, { passive: true });
      this.el.addEventListener('pointermove', this._onMove, { passive: true });
      this.el.addEventListener('pointerleave', this._onLeave, { passive: true });
      this.el.addEventListener('touchstart', this._onTouchStart, { passive: true });
      this.el.addEventListener('touchend', this._onTouchEnd, { passive: true });
      this.el.addEventListener('touchcancel', this._onTouchEnd, { passive: true });
    }

    _updateRect() {
      this.rect = this.el.getBoundingClientRect();
    }

    _handleEnter(e) {
      if (reducedMotionQuery.matches || e.pointerType === 'touch') return;
      this.isHovering = true;
      this._updateRect();
      this.el.style.transition = 'box-shadow 0.35s ease, border-color 0.35s ease';
      this.el.classList.add('is-tilting');
    }

    _handleMove(e) {
      if (reducedMotionQuery.matches || e.pointerType === 'touch' || !this.isHovering) return;
      if (!this.rect || this.rect.width === 0) this._updateRect();

      const relX = clamp((e.clientX - this.rect.left) / this.rect.width, 0, 1);
      const relY = clamp((e.clientY - this.rect.top) / this.rect.height, 0, 1);

      // Tilt angles: moving cursor top tilts top back/forward naturally
      this.targetY = (relX - 0.5) * 2 * this.maxTilt;
      this.targetX = (0.5 - relY) * 2 * this.maxTilt;
      this.glareX = relX * 100;
      this.glareY = relY * 100;
      this.glareOpacity = this.glareMax;

      if (!this.rafId) {
        this.rafId = requestAnimationFrame(() => this._render());
      }
    }

    _handleLeave(e) {
      if (e && e.pointerType === 'touch') return;
      this.isHovering = false;
      this.targetX = 0;
      this.targetY = 0;
      this.glareOpacity = 0;
      this.el.classList.remove('is-tilting');

      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }

      this.currentX = 0;
      this.currentY = 0;
      this.el.style.transition = `transform ${this.speed}ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease`;
      this.el.style.transform = `perspective(${this.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      if (this.glareInner) {
        this.glareInner.style.opacity = '0';
      }
    }

    _handleTouchStart() {
      if (reducedMotionQuery.matches) return;
      this.el.classList.add('is-touch-lifted');
      if (this.glareInner) {
        this.glareInner.style.background = 'radial-gradient(circle at 50% 25%, rgba(240, 181, 86, 0.22), transparent 68%)';
        this.glareInner.style.opacity = String(this.glareMax * 0.75);
      }
    }

    _handleTouchEnd() {
      this.el.classList.remove('is-touch-lifted');
      if (this.glareInner) {
        this.glareInner.style.opacity = '0';
      }
    }

    applyOrientation(rx, ry) {
      if (reducedMotionQuery.matches || this.isHovering) return;
      const rect = this.el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      this.el.style.transform = `perspective(${this.perspective}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale3d(1, 1, 1)`;
    }

    _render() {
      this.rafId = null;
      // Smooth spring interpolation
      this.currentX += (this.targetX - this.currentX) * 0.24;
      this.currentY += (this.targetY - this.currentY) * 0.24;

      this.el.style.transform =
        `perspective(${this.perspective}px) ` +
        `rotateX(${this.currentX.toFixed(2)}deg) ` +
        `rotateY(${this.currentY.toFixed(2)}deg) ` +
        `scale3d(${this.scale}, ${this.scale}, ${this.scale})`;

      if (this.glareInner) {
        this.glareInner.style.background =
          `radial-gradient(circle at ${this.glareX.toFixed(1)}% ${this.glareY.toFixed(1)}%, ` +
          `rgba(240, 181, 86, 0.42) 0%, rgba(201, 150, 59, 0.14) 38%, transparent 70%)`;
        this.glareInner.style.opacity = String(this.glareOpacity);
      }

      if (
        this.isHovering &&
        (Math.abs(this.targetX - this.currentX) > 0.04 || Math.abs(this.targetY - this.currentY) > 0.04)
      ) {
        this.rafId = requestAnimationFrame(() => this._render());
      }
    }
  }

  function bindGlobalOrientation() {
    if (orientationBound || !coarsePointerQuery.matches || reducedMotionQuery.matches) return;
    if (typeof window.DeviceOrientationEvent === 'undefined') return;
    // Only bind passive non-prompting orientation listener
    if (typeof window.DeviceOrientationEvent.requestPermission === 'function') return;

    orientationBound = true;
    let ticking = false;
    window.addEventListener(
      'deviceorientation',
      (evt) => {
        if (evt.beta == null || evt.gamma == null || reducedMotionQuery.matches) return;
        globalBeta = clamp((evt.beta - 45) * 0.12, -5, 5);
        globalGamma = clamp(evt.gamma * 0.12, -5, 5);
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            ticking = false;
            activeElements.forEach((el) => {
              const inst = instances.get(el);
              if (inst) inst.applyOrientation(-globalBeta, globalGamma);
            });
          });
        }
      },
      { passive: true }
    );
  }

  function attach(el) {
    if (!el || instances.has(el)) return;
    const inst = new ArchivalTilt(el);
    instances.set(el, inst);
    activeElements.add(el);
  }

  function refresh(root = document) {
    const nodes = root.querySelectorAll('[data-tilt]');
    nodes.forEach(attach);
    bindGlobalOrientation();
  }

  window.RetroTilt = {
    init: refresh,
    refresh,
    attach
  };
})();

