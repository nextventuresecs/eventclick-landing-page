'use client';

import React from 'react';
import { HelpCircle, ShieldCheck, Lock, CheckCircle2, Radio, Sparkles } from 'lucide-react';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FaqRow {
  id: string;
  speed?: string;
  direction?: 'left' | 'right';
  faqItems: FaqItem[];
}

export interface FaqData {
  mainTitle: string;
  mainSubtitle: string;
  rows: FaqRow[];
}

export interface FaqCardProps {
  question: string;
  answer: string;
  category?: string;
}

/**
 * FaqCard
 * Reusable card for a single FAQ item styled for Eventclick SaaS platform.
 */
export const FaqCard: React.FC<FaqCardProps> = ({ question, answer, category }) => {
  return (
    <div className="flex flex-col items-start gap-3.5 p-6 bg-white border border-[#E2E5ED] hover:border-[#8C6FCF]/50 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 w-80 sm:w-96 flex-shrink-0 faq-card group cursor-pointer relative overflow-hidden">
      {/* Subtle background glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#402291]/5 rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-center justify-between w-full">
        <div className="w-8 h-8 rounded-xl bg-[#F5F3FC] border border-[#8C6FCF]/20 flex items-center justify-center text-[#402291] group-hover:bg-[#402291] group-hover:text-white transition-colors">
          <HelpCircle className="w-4 h-4" />
        </div>

        {category && (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#475467] border border-[#E2E5ED]">
            {category}
          </span>
        )}
      </div>

      <h3 className="text-[16px] font-heading font-semibold text-[#0F172A] leading-snug faq-title group-hover:text-[#402291] transition-colors">
        {question}
      </h3>
      
      <p className="text-[13px] text-[#475467] leading-relaxed faq-answer">
        {answer}
      </p>

      <div className="pt-2 border-t border-[#F1F5F9] w-full flex items-center gap-1.5 text-[11px] font-medium text-[#3160B7]">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" />
        <span>Verified Field Specification</span>
      </div>
    </div>
  );
};

export interface HorizontalScrollerProps {
  children: React.ReactNode;
  speed?: string;
  direction?: 'left' | 'right';
}

/**
 * HorizontalScroller
 * Wraps children and creates a seamless horizontal looping animation with hover-pause.
 */
export const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  speed = '40s',
  direction = 'left'
}) => {
  const animationClass =
    direction === 'right' ? 'animate-scroll-horizontal-reverse' : 'animate-scroll-horizontal';

  // Inline style to set the CSS custom property for scroll duration.
  const style = { '--scroll-duration': speed } as React.CSSProperties;

  return (
    <div className="w-full overflow-hidden group relative scroller-mask py-2">
      <div className={`flex ${animationClass}`} style={style}>
        <div className="flex items-stretch justify-center flex-shrink-0 gap-6 px-3">
          {children}
        </div>
        {/* duplicate for seamless loop */}
        <div className="flex items-stretch justify-center flex-shrink-0 gap-6 px-3" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export interface FaqSectionProps {
  data: FaqData;
}

/**
 * FaqSection
 * Assembles title, subtitle, and multiple horizontal scrolling rows.
 */
export const FaqSection: React.FC<FaqSectionProps> = ({ data }) => {
  return (
    <div className="relative flex flex-col items-center gap-10 p-6 md:p-12 w-full max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[300px] bg-gradient-to-r from-[#402291]/5 via-[#3160B7]/5 to-[#8C6FCF]/5 blur-3xl pointer-events-none rounded-full" />

      {/* Header Container */}
      <div className="flex flex-col items-center gap-3 text-center z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#402291]/10 border border-[#8C6FCF]/20 text-[#402291] text-[12px] font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Knowledge Base</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#0F172A] leading-tight tracking-tight"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.2s forwards' }}
        >
          {data.mainTitle}
        </h2>

        <p
          className="text-[15px] sm:text-base text-[#475467] leading-relaxed max-w-2xl"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.4s forwards' }}
        >
          {data.mainSubtitle}
        </p>
      </div>

      {/* Rows Container */}
      <div className="flex flex-col gap-6 z-10 w-full">
        {data.rows.map((row) => (
          <HorizontalScroller key={row.id} speed={row.speed} direction={row.direction}>
            {row.faqItems.map((item) => (
              <FaqCard 
                key={item.id} 
                question={item.question} 
                answer={item.answer} 
                category={item.category}
              />
            ))}
          </HorizontalScroller>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
