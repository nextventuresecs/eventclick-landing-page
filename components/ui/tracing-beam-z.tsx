'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ElementBounds {
  x: number;
  yTop: number;
  yBottom: number;
}

interface TracingBeamZProps {
  /** Ref to the relatively-positioned container the SVG overlay should fill */
  containerRef: React.RefObject<HTMLDivElement | null>;
  /** Ref to the array of item elements the beam should pass through, in order */
  itemsRef: React.RefObject<Array<HTMLDivElement | null>>;
  /** Number of items (points) the beam connects */
  itemCount: number;
  /** Horizontal position of each point as a 0–1 ratio of container width, in order. */
  xRatios?: number[];
  className?: string;
}

export const TracingBeamZ = ({
  containerRef,
  itemsRef,
  itemCount,
  xRatios = [0.01, 0.985, 0.01],
  className = '',
}: TracingBeamZProps) => {
  const [bounds, setBounds] = useState<ElementBounds[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      setSize({ width: containerRect.width, height: containerRect.height });

      const next: ElementBounds[] = [];
      for (let i = 0; i < itemCount; i++) {
        const el = itemsRef.current?.[i];
        const ratio = xRatios[i % xRatios.length];
        if (!el) {
          next.push({ x: containerRect.width * ratio, yTop: 0, yBottom: 100 });
          continue;
        }
        const rect = el.getBoundingClientRect();
        next.push({
          x: containerRect.width * ratio,
          yTop: rect.top - containerRect.top,
          yBottom: rect.bottom - containerRect.top,
        });
      }
      setBounds(next);
    };

    measure();
    window.addEventListener('resize', measure);
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      window.removeEventListener('resize', measure);
      ro.disconnect();
    };
  }, [containerRef, itemCount, itemsRef, xRatios]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Unconditional safe fallback bounds for Rules of Hooks compliance
  const validBounds =
    bounds.length >= 3
      ? bounds
      : [
          { x: 15, yTop: 20, yBottom: 250 },
          { x: size.width ? size.width * 0.985 : 500, yTop: 350, yBottom: 580 },
          { x: 15, yTop: 680, yBottom: 900 },
        ];

  const b1 = validBounds[0];
  const b2 = validBounds[1];
  const b3 = validBounds[2];

  // Corner radius for smooth rounded turns at top/bottom corners of workflow cards
  const r = 24;
  const r1 = Math.min(r, Math.abs(b1.yBottom - b1.yTop) / 3, Math.abs(b2.yTop - b1.yBottom) / 3);
  const r2 = Math.min(r, Math.abs(b2.yBottom - b2.yTop) / 3, Math.abs(b3.yTop - b2.yBottom) / 3);

  // SVG Path with clean rounded 90° corners entering/exiting each workflow container:
  const d = `
    M ${b1.x} ${b1.yTop}
    L ${b1.x} ${b1.yBottom - r1}
    Q ${b1.x} ${b1.yBottom}, ${b1.x + r1} ${b1.yBottom}
    C ${b1.x + (b2.x - b1.x) * 0.5} ${b1.yBottom}, ${b2.x - (b2.x - b1.x) * 0.5} ${b2.yTop}, ${b2.x - r1} ${b2.yTop}
    Q ${b2.x} ${b2.yTop}, ${b2.x} ${b2.yTop + r1}
    L ${b2.x} ${b2.yBottom - r2}
    Q ${b2.x} ${b2.yBottom}, ${b2.x - r2} ${b2.yBottom}
    C ${b2.x - (b2.x - b3.x) * 0.5} ${b2.yBottom}, ${b3.x + (b2.x - b3.x) * 0.5} ${b3.yTop}, ${b3.x + r2} ${b3.yTop}
    Q ${b3.x} ${b3.yTop}, ${b3.x} ${b3.yTop + r2}
    L ${b3.x} ${b3.yBottom}
  `.replace(/\s+/g, ' ');

  // Distance calculations for smooth dot scroll transform stops
  const len1 = Math.max(1, b1.yBottom - b1.yTop);
  const len2 = Math.hypot(b2.x - b1.x, b2.yTop - b1.yBottom);
  const len3 = Math.max(1, b2.yBottom - b2.yTop);
  const len4 = Math.hypot(b3.x - b2.x, b3.yTop - b2.yBottom);
  const len5 = Math.max(1, b3.yBottom - b3.yTop);

  const totalLen = len1 + len2 + len3 + len4 + len5;

  const f1 = len1 / totalLen;
  const f2 = (len1 + len2) / totalLen;
  const f3 = (len1 + len2 + len3) / totalLen;
  const f4 = (len1 + len2 + len3 + len4) / totalLen;

  const stops = [0, f1, f2, f3, f4, 1];
  const xStops = [b1.x, b1.x, b2.x, b2.x, b3.x, b3.x];
  const yStops = [b1.yTop, b1.yBottom, b2.yTop, b2.yBottom, b3.yTop, b3.yBottom];

  // Raw transforms
  const rawDotX = useTransform(scrollYProgress, stops, xStops);
  const rawDotY = useTransform(scrollYProgress, stops, yStops);

  // Aceternity UI spring physics for smooth momentum motion
  const dotX = useSpring(rawDotX, { stiffness: 400, damping: 40 });
  const dotY = useSpring(rawDotY, { stiffness: 400, damping: 40 });

  // Early return after all hooks execute
  if (bounds.length < 3 || size.width === 0) return null;

  return (
    <svg
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      fill="none"
    >
      <defs>
        {/* Sleek Aceternity UI Multi-Stop Neon Glass Gradient */}
        <linearGradient id="glass-tracing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#18CCFC" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#6366F1" stopOpacity="0.9" />
          <stop offset="65%" stopColor="#a855f7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.95" />
        </linearGradient>

        {/* Aceternity Soft Glow Filter */}
        <filter id="glass-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComponentTransfer in="blur" result="glow">
            <feFuncA type="linear" slope="0.6" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Thin faint background guide line track (2px) */}
      <path d={d} stroke="#6366F1" strokeOpacity="0.2" strokeWidth={2} fill="none" />

      {/* Thin Aceternity Glass Gradient Animated Path (2.5px) */}
      <motion.path
        d={d}
        stroke="url(#glass-tracing-gradient)"
        strokeWidth={2.5}
        strokeLinecap="round"
        fill="none"
        filter="url(#glass-glow)"
        style={{ pathLength: scrollYProgress }}
      />

      {/* Aceternity Refined Spring Head Pulse Dot */}
      <motion.circle r={5.5} fill="#06B6D4" stroke="#FFFFFF" strokeWidth={2} style={{ cx: dotX, cy: dotY }} className="shadow-md" />
      <motion.circle r={11} fill="#6366F1" opacity={0.25} style={{ cx: dotX, cy: dotY }} className="animate-ping" />
    </svg>
  );
};