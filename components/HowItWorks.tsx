'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Sliders,
  Radio,
  Camera,
  CheckCheck,
  Video,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Share2,
  Check,
  ArrowRight,
  MapPin,
  Download,
  Play,
  Pause,
  Clock,
  Layers,
  Activity,
  Award,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      id: 'step-1',
      title: 'Admin QC Quotas',
      subtitle: 'Set operational rules and required photo proof.',
      description:
        'Initialize secure event rooms, set strict time windows, and define mandatory verification photo quotas for field operations.',
      icon: Sliders,
      colorStart: '#402291',
      colorEnd: '#8C6FCF',
      mockup: (
        <div className="flex flex-col gap-4 w-full text-[#1D1D1F]">
          <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-xl rounded-[24px] shadow-sm border border-black/[0.04]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#402291] to-[#8C6FCF] flex items-center justify-center text-white">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[15px]">Community Clean-up</h4>
                <p className="text-[13px] text-[#86868B]">ID: RM-9402</p>
              </div>
            </div>
            <span className="bg-[#E8F5E9] text-[#10B981] px-3 py-1 rounded-full text-[12px] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Active
            </span>
          </div>

          <div className="p-5 bg-white/80 backdrop-blur-xl rounded-[24px] shadow-sm border border-black/[0.04] space-y-4">
            <h5 className="text-[13px] font-semibold text-[#86868B] flex items-center gap-2 uppercase tracking-wide">
              <Layers className="w-4 h-4" /> Required Quotas
            </h5>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 bg-[#F5F5F7] rounded-[16px]">
                <span className="font-medium text-[14px]">1. Site Check-in</span>
                <span className="text-[#402291] font-medium bg-white px-3 py-1 rounded-full text-[13px] shadow-sm">
                  3 Photos
                </span>
              </div>
              <div className="flex items-center justify-between p-3.5 bg-[#F5F5F7] rounded-[16px]">
                <span className="font-medium text-[14px]">2. Waste Sorting</span>
                <span className="text-[#402291] font-medium bg-white px-3 py-1 rounded-full text-[13px] shadow-sm">
                  10 Photos
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'step-2',
      title: 'Live Streaming',
      subtitle: 'Zero-latency WebRTC broadcast & presence.',
      description:
        'Launch ultra-low latency WebRTC streams via LiveKit. Stakeholders get zero-friction links to monitor live presence and operations.',
      icon: Radio,
      colorStart: '#3160B7',
      colorEnd: '#38BDF8',
      mockup: (
        <div className="flex flex-col gap-4 w-full">
          <div className="relative aspect-video bg-[#1D1D1F] rounded-[24px] overflow-hidden shadow-2xl flex flex-col justify-between p-4 border border-white/10">
            <div className="flex justify-between items-center z-10">
              <span className="bg-[#EF4444] text-white px-3 py-1 rounded-full font-medium text-[12px] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> LIVE
              </span>
              <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[12px] text-white flex items-center gap-1.5 border border-white/10">
                <Users className="w-3.5 h-3.5" /> 42 Viewers
              </span>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                 <Video className="w-7 h-7 text-white/90" />
               </div>
            </div>

            <div className="z-10 flex items-center justify-between bg-black/40 backdrop-blur-md p-3 rounded-[16px] border border-white/10 text-white text-[13px]">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#38BDF8]" />
                <span className="font-medium">CAM-01 • 1080p60</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-xl rounded-[20px] shadow-sm border border-black/[0.04]">
            <div className="flex items-center gap-2 text-[#3160B7] font-medium text-[14px]">
              <Share2 className="w-4 h-4" /> eventclick.live/rm-9402
            </div>
            <button className="bg-[#3160B7] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:scale-105 transition-transform">
              Copy
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'step-3',
      title: 'Geotagged Uploads',
      subtitle: 'Signed S3 uploads with GPS verification.',
      description:
        'Volunteers capture live photos bound to time windows, uploaded directly to AWS S3 using pre-signed URLs and GPS embedding.',
      icon: Camera,
      colorStart: '#0284C7',
      colorEnd: '#06B6D4',
      mockup: (
        <div className="flex flex-col gap-4 w-full">
          <div className="p-5 bg-white/80 backdrop-blur-xl rounded-[24px] shadow-sm border border-black/[0.04] space-y-5 text-[#1D1D1F]">
            <div className="flex items-center gap-3 border-b border-black/[0.04] pb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0284C7] to-[#06B6D4] flex items-center justify-center text-white font-medium text-[16px]">
                SJ
              </div>
              <div>
                <h5 className="font-semibold text-[15px]">Sarah Jenkins</h5>
                <p className="text-[13px] text-[#86868B]">Zone 04 Lead</p>
              </div>
            </div>

            <div className="bg-[#F5F5F7] p-4 rounded-[16px] space-y-4">
               <div className="flex items-center justify-between text-[13px] font-medium text-[#1D1D1F]">
                 <span className="flex items-center gap-2">
                   <Camera className="w-4 h-4 text-[#0284C7]" /> proof_01.jpg
                 </span>
                 <span className="text-[#10B981]">100%</span>
               </div>
               <div className="h-2 bg-white rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: '0%' }}
                   whileInView={{ width: '100%' }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="h-full bg-[#0284C7]" 
                 />
               </div>
               <div className="flex justify-between items-center text-[12px] text-[#86868B]">
                 <span className="flex items-center gap-1.5 text-[#10B981] font-medium">
                   <MapPin className="w-3.5 h-3.5" /> GPS Verified
                 </span>
                 <span className="font-mono">S3: act-02/img_8923.jpg</span>
               </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'step-4',
      title: 'Automated QC Gate',
      subtitle: 'Blocks closure until quotas are met.',
      description:
        'Platform automatically verifies all photos against initial quotas. Once satisfied, generates cryptographic PDF audit trails.',
      icon: CheckCheck,
      colorStart: '#10B981',
      colorEnd: '#059669',
      mockup: (
        <div className="flex flex-col gap-4 w-full">
          <div className="p-5 bg-white/80 backdrop-blur-xl rounded-[24px] shadow-sm border border-black/[0.04] space-y-4 text-[#1D1D1F]">
             <div className="flex items-center justify-between">
                <h4 className="font-semibold text-[15px] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#10B981]" /> QC Checklist
                </h4>
                <span className="bg-[#E8F5E9] text-[#10B981] px-3 py-1 rounded-full text-[12px] font-semibold">
                  100% Passed
                </span>
             </div>

             <div className="space-y-3">
               <div className="flex items-center justify-between p-3.5 bg-[#F5F5F7] rounded-[16px]">
                  <div className="flex items-center gap-2 font-medium text-[14px]">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#10B981]" /> Site Setup
                  </div>
                  <span className="text-[13px] font-medium">3/3</span>
               </div>
               <div className="flex items-center justify-between p-3.5 bg-[#F5F5F7] rounded-[16px]">
                  <div className="flex items-center gap-2 font-medium text-[14px]">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#10B981]" /> Sorting Ops
                  </div>
                  <span className="text-[13px] font-medium">10/10</span>
               </div>
             </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-[24px] flex items-center justify-between text-white shadow-lg">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                 <Award className="w-5 h-5" />
               </div>
               <div>
                 <h5 className="font-medium text-[14px]">Audit Complete</h5>
                 <p className="text-[12px] text-white/80">Tamper-evident hash generated</p>
               </div>
             </div>
             <button className="bg-white text-[#059669] w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-sm">
               <Download className="w-4 h-4" />
             </button>
          </div>
        </div>
      ),
    },
  ];

  const handleNextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  }, [steps.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(handleNextStep, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNextStep]);

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-[#F5F5F7] overflow-hidden">
      {/* Animated Brand Color Background Blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full rounded-full blur-[100px] sm:blur-[120px] opacity-[0.12]"
              style={{
                background: `linear-gradient(135deg, ${steps[activeStep].colorStart} 0%, ${steps[activeStep].colorEnd} 100%)`
              }}
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-6 mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] text-[#1D1D1F] text-[13px] font-medium tracking-wide">
            <Sparkles className="w-4 h-4 text-[#402291]" />
            <span>End-to-End Workflow</span>
          </div>

          <h2 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl text-[#1D1D1F] tracking-tight leading-[1.1]">
            How Eventclick Works.<br />
            <span className="bg-gradient-to-r from-[#402291] to-[#3160B7] bg-clip-text text-transparent">From Setup to Audit.</span>
          </h2>
        </motion.div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Navigation & Narrative */}
          <div className="space-y-10 lg:pr-10 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const Icon = step.icon;
                
                return (
                  <button
                    key={step.id}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`relative p-5 sm:p-6 rounded-[28px] text-left transition-all duration-500 ease-out flex gap-5 overflow-hidden ${
                      isActive 
                        ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/[0.03] scale-100' 
                        : 'hover:bg-black/[0.02] scale-95 opacity-60 hover:opacity-100'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeStepIndicator"
                        className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b"
                        style={{ backgroundImage: `linear-gradient(to bottom, ${step.colorStart}, ${step.colorEnd})` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ${
                      isActive ? 'bg-[#F5F5F7]' : 'bg-transparent'
                    }`}>
                      <Icon className={`w-6 h-6 transition-colors duration-500`} style={{ color: isActive ? step.colorStart : '#86868B' }} />
                    </div>

                    <div className="space-y-1">
                      <p className="text-[12px] font-semibold tracking-wider uppercase mb-1" style={{ color: isActive ? step.colorStart : '#86868B' }}>
                        Phase 0{idx + 1}
                      </p>
                      <h3 className={`font-semibold text-[20px] transition-colors duration-500 ${
                        isActive ? 'text-[#1D1D1F]' : 'text-[#86868B]'
                      }`}>
                        {step.title}
                      </h3>
                      
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pt-2"
                        >
                          <p className="text-[15px] text-[#1D1D1F] font-medium mb-1">
                            {step.subtitle}
                          </p>
                          <p className="text-[14px] text-[#86868B] leading-relaxed">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4 pl-5">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-10 h-10 rounded-full bg-white border border-black/[0.05] shadow-sm flex items-center justify-center text-[#1D1D1F] hover:scale-105 transition-transform"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <span className="text-[13px] font-medium text-[#86868B]">
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </span>
            </div>
          </div>

          {/* Right: Mockup Display */}
          <div className="order-1 lg:order-2 w-full max-w-[500px] mx-auto lg:mx-0 h-[450px] sm:h-[550px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                {steps[activeStep].mockup}
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
