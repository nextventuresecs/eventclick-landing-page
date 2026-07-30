'use client';

import React from 'react';
import {
  Video,
  Camera,
  ShieldCheck,
  Sparkles,
  X,
  Check
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function ProblemSolution() {
  const painPoints = [
    {
      id: 'visibility',
      title: 'Live WebRTC Broadcasts',
      solutionDetail:
        'Stream live event rooms via LiveKit with instant, encrypted stakeholder links for zero-latency remote field monitoring.',
      solutionMetric: '<500ms Latency',
      problem: 'Delayed summary photos & spreadsheets',
      icon: Video,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 'verification',
      title: 'Time-Bound Geotagged Proof',
      solutionDetail:
        'Volunteers capture live camera photos bound directly to room time windows, uploaded via short-lived signed S3 URLs.',
      solutionMetric: '100% GPS Verified',
      problem: 'Fake or backdated manual sign-ins',
      icon: Camera,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'governance',
      title: 'Automated QC Quota Gates',
      solutionDetail:
        'Define minimum photo quotas per activity. Platform automatically blocks room closure until all QC thresholds are met.',
      solutionMetric: 'Cryptographic Audit',
      problem: 'Zero quality control before budget release',
      icon: ShieldCheck,
      color: 'from-indigo-500 to-cyan-500',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#FAFAFC] overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#402291]/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] text-[#1D1D1F] text-[13px] font-medium tracking-wide">
            <Sparkles className="w-4 h-4 text-[#402291]" />
            <span>Field Governance, Reimagined</span>
          </div>

          <h2 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl text-[#1D1D1F] tracking-tight leading-[1.1]">
            Unverified operations.<br />
            <span className="bg-gradient-to-r from-[#402291] to-[#3160B7] bg-clip-text text-transparent">
              Now tamper-evident.
            </span>
          </h2>

          <p className="text-[17px] sm:text-[19px] text-[#86868B] leading-relaxed max-w-2xl mx-auto font-medium">
            Replace manual spreadsheets and delayed photos with real-time video streams, geotagged proof, and automated quality control.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full"
              >
                {/* Subtle gradient hover reveal */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                <div className="relative z-10 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
                    <Icon className="w-7 h-7 text-[#1D1D1F]" />
                  </div>
                  
                  <h3 className="font-heading font-semibold text-2xl text-[#1D1D1F] leading-tight mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-[15px] text-[#86868B] leading-relaxed font-medium mb-8">
                    {item.solutionDetail}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-black/[0.04] mt-auto">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2.5 text-[14px] text-[#1D1D1F] font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#10B981]" />
                      </div>
                      <span>{item.solutionMetric}</span>
                    </div>
                    
                    <div className="flex items-start gap-2.5 text-[14px] text-[#86868B]">
                      <div className="w-5 h-5 rounded-full bg-[#FEE2E2] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-[#EF4444]" />
                      </div>
                      <span className="line-through decoration-[#EF4444]/40">{item.problem}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}