'use client';

import { ArrowRight, ShieldCheck, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface FinalCtaProps {
  onOpenDemo: () => void;
}

export default function FinalCta({ onOpenDemo }: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white border-t border-[#E2E5ED]">
      {/* Background Radial Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] pointer-events-none z-0 opacity-70"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(64,34,145,0.12), transparent 70%)'
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        <div className="w-12 h-12 rounded-2xl bg-[#402291]/10 text-[#402291] mx-auto flex items-center justify-center shadow-xs">
          <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0F172A] max-w-3xl mx-auto leading-tight tracking-tight">
          Ready to transform field event execution with real-time proof?
        </h2>

        <p className="text-[15px] md:text-[16px] text-[#475467] max-w-xl mx-auto leading-relaxed">
          Book a personalized platform walkthrough to see how Eventclick streamlines live streaming, verified photo quotas, and stakeholder audit reporting.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenDemo}
            className="px-8 py-3.5 text-[15px] font-medium text-white rounded-xl bg-gradient-to-r from-[#402291] to-[#3160B7] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2 focus-ring"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Live Demo</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <p className="text-[12px] text-[#98A2B3] pt-2">
          Fast onboarding • Role-based access controls • Secure encrypted cloud storage
        </p>
      </motion.div>
    </section>
  );
}

