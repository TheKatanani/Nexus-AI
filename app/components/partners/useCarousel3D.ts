"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

type Options = {
  totalCards: number;
  autoplayMs?: number; // 4500
  enableKeyboardOnDesktop?: boolean;
};

export function useCarousel3D({
  totalCards,
  autoplayMs = 4500,
  enableKeyboardOnDesktop = true,
}: Options) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // === Reference variables ===
  const thetaRef = useRef(0); // in degrees
  const currentIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const step = useMemo(
    () => (totalCards ? 360 / totalCards : 60),
    [totalCards]
  );

  // Drag state (same idea as reference)
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);

  // Autoplay pause flags
  const isPausedRef = useRef(false);

  const applyRotation = useCallback(
    (theta: number, animate = true) => {
      if (!carouselRef.current) return;

      thetaRef.current = theta;

      // index calc identical in spirit (round + mod)
      const idx = totalCards
        ? Math.round(Math.abs(theta / step)) % totalCards
        : 0;

      currentIndexRef.current = idx;
      setActiveIndex(idx);

      if (animate) {
        gsap.to(carouselRef.current, {
          rotateY: theta,
          duration: 0.55,
          ease: "power4.out",
        });
      } else {
        gsap.set(carouselRef.current, { rotateY: theta });
      }
    },
    [step, totalCards]
  );

  const nextCard = useCallback(() => {
    applyRotation(thetaRef.current - step, true);
  }, [applyRotation, step]);

  const prevCard = useCallback(() => {
    applyRotation(thetaRef.current + step, true);
  }, [applyRotation, step]);

  const goToIndex = useCallback(
    (index: number) => {
      // Same “dots functionality”: set theta so that index becomes active
      // In reference: currentIndex is derived from theta, so we reverse it.
      // Using negative direction keeps Next consistent with nextCard().
      applyRotation(-index * step, true);
    },
    [applyRotation, step]
  );

  // Snap to nearest index like reference
  const snapToNearest = useCallback(() => {
    const snapped = Math.round(thetaRef.current / step) * step;

    gsap.to(carouselRef.current, {
      rotateY: snapped,
      duration: 0.6,
      ease: "power4.out",
    });

    thetaRef.current = snapped;
    // We update state for active index too
    const idx = totalCards
      ? Math.round(Math.abs(snapped / step)) % totalCards
      : 0;
    currentIndexRef.current = idx;
    setActiveIndex(idx);
  }, [step, totalCards]);

  // Constants for swipe physics
  const SWIPE_THRESHOLD = 24; // px
  const DRAG_PREVIEW_MAX = 6; // degrees

  // === Drag handlers (match reference feel) ===
  const dragStart = useCallback((clientX: number) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;

    isPausedRef.current = true;
    gsap.killTweensOf(carouselRef.current);
  }, []);

  const drag = useCallback((clientX: number) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    currentXRef.current = clientX;

    const diffX = currentXRef.current - startXRef.current;

    // Small elastic preview, clamped
    const preview = Math.max(
      -DRAG_PREVIEW_MAX,
      Math.min(DRAG_PREVIEW_MAX, diffX * 0.15)
    );

    gsap.set(carouselRef.current, {
      rotateY: thetaRef.current + preview,
    });
  }, []);

  const dragEnd = useCallback(() => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    isDraggingRef.current = false;

    const diffX = currentXRef.current - startXRef.current;

    if (Math.abs(diffX) > SWIPE_THRESHOLD) {
      if (diffX > 0) {
        // swipe right -> prev
        prevCard();
      } else {
        // swipe left -> next
        nextCard();
      }
    } else {
      // snap back to current
      gsap.to(carouselRef.current, {
        rotateY: thetaRef.current,
        duration: 0.35,
        ease: "power3.out",
      });
    }

    isPausedRef.current = false;
  }, [nextCard, prevCard]);

  // Autoplay (infinite)
  useEffect(() => {
    if (!totalCards) return;

    const id = window.setInterval(() => {
      if (isPausedRef.current) return;
      if (isDraggingRef.current) return;
      nextCard();
    }, autoplayMs);

    return () => window.clearInterval(id);
  }, [autoplayMs, nextCard, totalCards]);

  // Desktop keyboard only
  useEffect(() => {
    if (!enableKeyboardOnDesktop) return;

    const isDesktop = () =>
      window.matchMedia("(min-width: 1024px)").matches &&
      window.matchMedia("(pointer:fine)").matches;

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isDesktop()) return;
      if (e.key === "ArrowRight") nextCard();
      if (e.key === "ArrowLeft") prevCard();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enableKeyboardOnDesktop, nextCard, prevCard]);

  // Hover pause
  const bindPauseHandlers = {
    onMouseEnter: () => (isPausedRef.current = true),
    onMouseLeave: () => (isPausedRef.current = false),
    onFocusCapture: () => (isPausedRef.current = true),
    onBlurCapture: () => (isPausedRef.current = false),
  };

  // Pointer bindings (mouse + touch)
  const bindDragHandlers = {
    onMouseDown: (e: React.MouseEvent) => dragStart(e.clientX),
    onMouseMove: (e: React.MouseEvent) => drag(e.clientX),
    onMouseUp: () => dragEnd(),
    onMouseLeave: () => dragEnd(),

    onTouchStart: (e: React.TouchEvent) =>
      dragStart(e.touches[0]?.clientX ?? 0),
    onTouchMove: (e: React.TouchEvent) => drag(e.touches[0]?.clientX ?? 0),
    onTouchEnd: () => dragEnd(),
    onTouchCancel: () => dragEnd(),
  };

  // Initialize rotation
  useEffect(() => {
    if (!carouselRef.current) return;
    // Initial camera placement: z: -40 keeps depth without flattening cards
    gsap.set(carouselRef.current, { rotateY: 0, z: -40 });
    applyRotation(0, false);
  }, [applyRotation]);

  return {
    carouselRef,
    activeIndex,
    step,
    nextCard,
    prevCard,
    goToIndex,
    bindPauseHandlers,
    bindDragHandlers,
  };
}
