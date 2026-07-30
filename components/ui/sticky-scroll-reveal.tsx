'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

export interface StickyScrollItem {
  number?: number;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  accentColor?: string;
  lightBg?: string;
  textColor?: string;
  badgeBg?: string;
  borderColor?: string;
  details?: string[];
  content?: React.ReactNode;
}

interface StickyScrollProps {
  content: StickyScrollItem[];
  stickyTopOffset?: number;
}

export const StickyScroll = ({ content, stickyTopOffset = 112 }: StickyScrollProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          root: null,
          rootMargin: '-35% 0px -35% 0px',
          threshold: 0.1,
        }
      );
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [content.length]);

  const scrollToStep = (index: number) => {
    const target = sectionRefs.current[index];
    if (target) {
      const yOffset = -stickyTopOffset - 20;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative space-y-8">
      {/* Step Navigation Pill Bar */}
      <div className="sticky top-20 z-20 flex items-center justify-center gap-2 py-3 px-4 bg-white/80 backdrop-blur-xl border border-[#E2E5ED] rounded-2xl shadow-sm max-w-2xl mx-auto">
        {content.map((item, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => scrollToStep(idx)}
              className={`px-3 py-1.5 rounded-xl text-[12px] font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? `${item.badgeBg || 'bg-[#402291] text-white'} shadow-md scale-105`
                  : 'bg-[#F8F9FC] text-[#667085] hover:bg-white hover:text-[#0F172A] border border-[#E2E5ED]'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-lg text-[11px] font-extrabold flex items-center justify-center ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#E2E5ED] text-[#402291]'
                }`}
              >
                {item.number || idx + 1}
              </span>
              <span className="hidden sm:inline">
                {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Scrollytelling Two-Column Grid */}
      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Column: Scrolling Step Cards */}
        <div className="w-full lg:w-5/12 space-y-16 lg:space-y-28 py-4">
          {content.map((item, index) => {
            const isActive = activeIndex === index;
            const Icon = item.icon;
            return (
              <div
                key={item.title + index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="scroll-mt-36 min-h-[380px] flex flex-col justify-center"
              >
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1 : 0.97,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`p-6 sm:p-7 rounded-3xl bg-white border-2 transition-all duration-300 ${
                    isActive
                      ? `${item.borderColor || 'border-[#402291]'} shadow-xl ring-4 ring-[#8C6FCF]/10`
                      : 'border-[#E2E5ED] shadow-sm hover:border-[#CBD0DC]'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Card Header Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {Icon && (
                          <div
                            className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                              isActive
                                ? item.badgeBg || 'bg-[#402291] text-white'
                                : 'bg-[#F5F3FC] text-[#402291]'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                        )}
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            item.lightBg && item.textColor
                              ? `${item.lightBg} ${item.textColor} border border-current/20`
                              : 'bg-[#F5F3FC] text-[#402291]'
                          }`}
                        >
                          Step {item.number || index + 1} of {content.length}
                        </span>
                      </div>

                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          isActive ? `${item.textColor || 'text-[#402291]'} translate-x-0.5` : 'text-[#98A2B3]'
                        }`}
                      />
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0F172A] leading-tight">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className={`text-[13px] font-semibold ${item.textColor || 'text-[#402291]'}`}>
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-[14px] text-[#475467] leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Details Bullet List */}
                    {item.details && item.details.length > 0 && (
                      <div className="pt-3 border-t border-[#E2E5ED] space-y-2 bg-[#F8F9FC] p-3.5 rounded-2xl">
                        <span className="text-[10.5px] font-bold text-[#667085] uppercase tracking-wider block">
                          Key Operational Details
                        </span>
                        <ul className="space-y-1.5">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-[12.5px] text-[#0F172A] font-medium">
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 mt-0.5 ${item.textColor || 'text-[#402291]'}`}
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Inline Content for Mobile (Hidden on Desktop) */}
                  {item.content && (
                    <div className="mt-5 pt-4 border-t border-[#E2E5ED] lg:hidden">
                      {item.content}
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Sticky Dashboard Preview (Desktop) */}
        <div className="hidden lg:block w-7/12 sticky" style={{ top: stickyTopOffset }}>
          <div className="min-h-[520px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {content[activeIndex]?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
