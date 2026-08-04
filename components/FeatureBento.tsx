'use client';

import { 
  Video, 
  Camera, 
  CheckSquare, 
  Tv2, 
  Users2, 
  ShieldCheck, 
  HardDriveDownload, 
  Shield, 
  Lock,
  Radio,
  Clock,
  Sparkles,
  Zap,
  Activity,
  CheckCircle2,
  Award,
  BarChart3,
  Globe2,
  FileCheck2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeatureBento() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  const mobileCards = [
    { icon: Video, grad: 'from-[#402291] to-[#3160B7]', badge: 'Real-Time Video', badgeBg: 'bg-[#F5F3FC]', badgeText: 'text-[#402291]', title: 'Ultra-Low Latency Live Field Video', desc: 'Sub-second WebRTC streaming with automated broadcast failover for stakeholders.' },
    { icon: Camera, grad: 'from-[#EC4899] to-[#BE185D]', badge: 'Verification', badgeBg: 'bg-[#FCE7F3]', badgeText: 'text-[#BE185D]', title: 'Geotagged Photo Proof', desc: 'Live camera capture verified against GPS coordinates and time windows.' },
    { icon: CheckSquare, grad: 'from-[#06B6D4] to-[#0891B2]', badge: 'Quality Control', badgeBg: 'bg-[#CFFAFE]', badgeText: 'text-[#0891B2]', title: 'Automated Completion Gates', desc: 'Photo quotas and checklists that gate event completion sign-offs.' },
    { icon: Tv2, grad: 'from-[#6366F1] to-[#4338CA]', badge: 'Reliability', badgeBg: 'bg-[#E0E7FF]', badgeText: 'text-[#4338CA]', title: 'Redundant Failover Engine', desc: 'Automated backup streams prevent blackouts during peak operations.' },
    { icon: Users2, grad: 'from-[#10B981] to-[#047857]', badge: 'Analytics', badgeBg: 'bg-[#DCFCE7]', badgeText: 'text-[#047857]', title: 'Live Audience Analytics', desc: 'Track spectator presence and check-ins live across all active rooms.' },
    { icon: ShieldCheck, grad: 'from-[#A855F7] to-[#7E22CE]', badge: 'Governance', badgeBg: 'bg-[#F3E8FF]', badgeText: 'text-[#7E22CE]', title: 'Role-Based Access Control', desc: 'Multi-tier governance across Executives, Coordinators, and Volunteers.' },
    { icon: HardDriveDownload, grad: 'from-[#F59E0B] to-[#D97706]', badge: 'Archiving', badgeBg: 'bg-[#FEF3C7]', badgeText: 'text-[#D97706]', title: 'Automated Stream Archival', desc: 'Automatic recording for compliance reports and marketing collateral.' },
    { icon: Lock, grad: 'from-[#EF4444] to-[#DC2626]', badge: 'Data Security', badgeBg: 'bg-[#FEF2F2]', badgeText: 'text-[#DC2626]', title: 'Privacy-Guaranteed Storage', desc: 'Time-bound encrypted links protect sensitive participant data.' },
    { icon: Award, grad: 'from-[#8C6FCF] to-[#4C1D95]', dark: true, title: 'Built for NGOs & CSR Leaders', desc: 'Indisputable field evidence, automated reporting, enterprise-grade protection.' },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section id="features" className="relative py-20 md:py-28 bg-[#FAFAFC] border-b border-[#E2E5ED] overflow-hidden">
      {/* Background Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c6fcf0a_1px,transparent_1px),linear-gradient(to_bottom,#8c6fcf0a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(140,111,207,0.12), transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3.5 mb-14 md:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#402291]/10 text-[#402291] text-[12px] font-semibold uppercase tracking-wider border border-[#8C6FCF]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Capabilities & Value</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0F172A] tracking-tight leading-tight">
            Everything you need for verified field operations
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#475467] leading-relaxed max-w-2xl mx-auto">
            Empower your organization with real-time video streaming, tamper-evident photo proof, automated quality control, and enterprise-grade data security.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:grid lg:grid-cols-12 gap-5 md:gap-6 max-w-6xl mx-auto"
        >
          
          {/* Bento Card 1: Live Event Video Broadcasting (Span 8) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="lg:col-span-8 bg-white/90 backdrop-blur-md border border-[#E2E5ED] rounded-2xl p-6 md:p-7 shadow-2xs hover:border-[#8C6FCF]/50 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#402291] to-[#3160B7] flex items-center justify-center text-white shadow-sm">
                  <Video className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#402291] bg-[#F5F3FC] px-2.5 py-1 rounded-md border border-[#8C6FCF]/20">
                  Real-Time Video
                </span>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-xl text-[#0F172A] group-hover:text-[#402291] transition-colors">
                  Ultra-Low Latency Live Field Video
                </h3>
                <p className="text-[14px] text-[#475467] mt-1.5 leading-relaxed max-w-xl">
                  Connect remote sponsors, directors, and donors directly to ground activities with instant sub-second WebRTC video streaming and automated broadcast failover.
                </p>
              </div>

              {/* Mini Interactive Preview Graphic */}
              <div className="bg-[#F8F9FC] border border-[#E2E5ED] rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-[12px]">
                <div className="flex items-center gap-2 text-[#166534] font-semibold">
                  <Radio className="w-4 h-4 text-[#27C93F] animate-pulse" />
                  <span>Sub-second Live Stream Active</span>
                </div>
                
                {/* Audio Waveform SVG Graphic */}
                <div className="flex items-center gap-1">
                  {[40, 70, 30, 90, 50, 80, 40, 100, 60, 30].map((h, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.3}%`] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-[#402291] rounded-full h-5"
                    />
                  ))}
                </div>

                <div className="px-2.5 py-1 bg-[#E0E7FF] text-[#4338CA] rounded-md font-semibold text-[11px]">
                  Sub-380ms Latency
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[12px] text-[#667085]">
              <span className="font-medium text-[#402291] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" /> Transparent Stakeholder Visibility
              </span>
              <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-ping" />
            </div>
          </motion.div>

          {/* Bento Card 2: Tamper-Evident Photo Verification (Span 4) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md border border-[#E2E5ED] rounded-2xl p-6 md:p-7 shadow-2xs hover:border-[#8C6FCF]/50 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#EC4899] to-[#BE185D] flex items-center justify-center text-white shadow-sm">
                  <Camera className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#BE185D] bg-[#FCE7F3] px-2.5 py-1 rounded-md border border-[#F9A8D4]/30">
                  Verification
                </span>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg text-[#0F172A] group-hover:text-[#EC4899] transition-colors">
                  Geotagged Photo Proof
                </h3>
                <p className="text-[14px] text-[#475467] mt-1.5 leading-relaxed">
                  Live camera capture verified against exact GPS coordinates and room time windows for indisputable evidence.
                </p>
              </div>

              {/* Camera Frame Preview */}
              <div className="p-3 bg-[#FCE7F3]/40 border border-[#F9A8D4]/50 rounded-xl space-y-1.5 text-[11px]">
                <div className="flex justify-between items-center text-[#9D174D] font-medium">
                  <span>Audit Record #1042</span>
                  <span className="font-semibold bg-white/90 px-1.5 py-0.5 rounded text-[10px] text-[#BE185D]">✓ Geotagged</span>
                </div>
                <div className="text-[11px] text-[#BE185D] font-mono truncate">
                  GPS: 37.7749° N, 122.4194° W
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[12px] text-[#667085]">
              <span className="font-semibold text-[#EC4899]">100% Authentic Field Data</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
            </div>
          </motion.div>

          {/* Bento Card 3: Smart Quality Control Gates (Span 4) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md border border-[#E2E5ED] rounded-2xl p-6 md:p-7 shadow-2xs hover:border-[#8C6FCF]/50 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center text-white shadow-sm">
                  <CheckSquare className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0891B2] bg-[#CFFAFE] px-2.5 py-1 rounded-md border border-[#67E8F9]/30">
                  Quality Control
                </span>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg text-[#0F172A] group-hover:text-[#06B6D4] transition-colors">
                  Automated Completion Gates
                </h3>
                <p className="text-[14px] text-[#475467] mt-1.5 leading-relaxed">
                  Define customizable photo quotas and field checklists that automatically gate event completion sign-offs.
                </p>
              </div>

              {/* Progress Quota Ring Mockup */}
              <div className="p-3 bg-[#CFFAFE]/40 border border-[#67E8F9]/50 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-[11px] font-medium text-[#0E7490]">
                  <span>Required Site Quota</span>
                  <span className="font-bold">10/10 Photos Verified</span>
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#06B6D4] w-full" />
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[12px] text-[#667085]">
              <span className="font-semibold text-[#06B6D4]">Zero-Tolerance Operational Standards</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
            </div>
          </motion.div>

          {/* Bento Card 4: 99.9% Failover Broadcast Engine (Span 4) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md border border-[#E2E5ED] rounded-2xl p-6 md:p-7 shadow-2xs hover:border-[#8C6FCF]/50 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#4338CA] flex items-center justify-center text-white shadow-sm">
                  <Tv2 className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4338CA] bg-[#E0E7FF] px-2.5 py-1 rounded-md border border-[#A5B4FC]/30">
                  Reliability
                </span>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg text-[#0F172A] group-hover:text-[#6366F1] transition-colors">
                  Redundant Failover Engine
                </h3>
                <p className="text-[14px] text-[#475467] mt-1.5 leading-relaxed">
                  Guaranteed broadcast availability with automated backup streams to prevent blackouts during peak field operations.
                </p>
              </div>

              <div className="p-3 bg-[#E0E7FF]/40 border border-[#A5B4FC]/50 rounded-xl flex items-center justify-between text-[11px] text-[#3730A3]">
                <span className="font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#6366F1]" /> Dual-Layer Redundancy
                </span>
                <span className="font-semibold bg-white/90 px-2 py-0.5 rounded text-[10px]">99.9% Uptime</span>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[12px] text-[#667085]">
              <span className="font-semibold text-[#6366F1]">Uninterrupted Stream Quality</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
            </div>
          </motion.div>

          {/* Bento Card 5: Real-Time Presence & Viewer Analytics (Span 4) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md border border-[#E2E5ED] rounded-2xl p-6 md:p-7 shadow-2xs hover:border-[#8C6FCF]/50 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#10B981] to-[#047857] flex items-center justify-center text-white shadow-sm">
                  <Users2 className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#047857] bg-[#DCFCE7] px-2.5 py-1 rounded-md border border-[#86EFAC]/30">
                  Analytics
                </span>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg text-[#0F172A] group-hover:text-[#10B981] transition-colors">
                  Live Audience Analytics
                </h3>
                <p className="text-[14px] text-[#475467] mt-1.5 leading-relaxed">
                  Track real-time spectator presence, volunteer check-ins, and sponsor engagement live across all active rooms.
                </p>
              </div>

              <div className="p-3 bg-[#DCFCE7]/50 border border-[#86EFAC]/60 rounded-xl flex items-center justify-between text-[11px] text-[#14532D]">
                <span className="font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#10B981]" /> Active Viewers
                </span>
                <span className="font-bold text-[#166534]">42 Live Stakeholders</span>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[12px] text-[#667085]">
              <span className="font-semibold text-[#10B981]">Instant Presence Metrics</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            </div>
          </motion.div>

          {/* Bento Card 6: Institutional Role Governance (Span 4) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md border border-[#E2E5ED] rounded-2xl p-6 md:p-7 shadow-2xs hover:border-[#8C6FCF]/50 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#7E22CE] flex items-center justify-center text-white shadow-sm">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7E22CE] bg-[#F3E8FF] px-2.5 py-1 rounded-md border border-[#D8B4FE]/30">
                  Governance
                </span>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg text-[#0F172A] group-hover:text-[#A855F7] transition-colors">
                  Role-Based Access Control
                </h3>
                <p className="text-[14px] text-[#475467] mt-1.5 leading-relaxed">
                  Multi-tier governance protecting system integrity across Executives, Event Coordinators, and Field Volunteers.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#6B21A8]">
                <span className="px-2 py-0.5 bg-[#F3E8FF] rounded-md border border-[#D8B4FE]">Org Exec</span>
                <span className="px-2 py-0.5 bg-[#F3E8FF] rounded-md border border-[#D8B4FE]">Event Lead</span>
                <span className="px-2 py-0.5 bg-[#F3E8FF] rounded-md border border-[#D8B4FE]">Volunteer</span>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[12px] text-[#667085]">
              <span className="font-semibold text-[#A855F7]">Granular Permissions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
            </div>
          </motion.div>

          {/* Bento Card 7: Instant Cloud Archiving & Reports (Span 4) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md border border-[#E2E5ED] rounded-2xl p-6 md:p-7 shadow-2xs hover:border-[#8C6FCF]/50 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white shadow-sm">
                  <HardDriveDownload className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D97706] bg-[#FEF3C7] px-2.5 py-1 rounded-md border border-[#FCD34D]/30">
                  Archiving
                </span>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg text-[#0F172A] group-hover:text-[#F59E0B] transition-colors">
                  Automated Stream Archival
                </h3>
                <p className="text-[14px] text-[#475467] mt-1.5 leading-relaxed">
                  Automatic recording and media packaging for immediate post-event compliance reports and marketing collateral.
                </p>
              </div>

              <div className="p-3 bg-[#FEF3C7]/40 border border-[#FCD34D]/50 rounded-xl flex items-center justify-between text-[11px] text-[#92400E]">
                <span className="font-semibold">Instant HD Video Export</span>
                <span className="font-bold bg-white/90 px-2 py-0.5 rounded text-[10px]">MP4 Archived</span>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[12px] text-[#667085]">
              <span className="font-semibold text-[#F59E0B]">Downloadable Audit Trail</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            </div>
          </motion.div>

          {/* Bento Card 8: Privacy-Guaranteed Encrypted Storage (Span 4) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white/90 backdrop-blur-md border border-[#E2E5ED] rounded-2xl p-6 md:p-7 shadow-2xs hover:border-[#8C6FCF]/50 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center text-white shadow-sm">
                  <Lock className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-md border border-[#FCA5A5]/30">
                  Data Security
                </span>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg text-[#0F172A] group-hover:text-[#EF4444] transition-colors">
                  Privacy-Guaranteed Storage
                </h3>
                <p className="text-[14px] text-[#475467] mt-1.5 leading-relaxed">
                  Time-bound encrypted links protecting sensitive participant data from unauthorized public exposure.
                </p>
              </div>

              <div className="p-3 bg-[#FEF2F2]/40 border border-[#FCA5A5]/50 rounded-xl flex items-center justify-between text-[11px] text-[#991B1B]">
                <span className="font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#EF4444]" /> Expiring Link Access
                </span>
                <span className="font-bold bg-white/90 px-2 py-0.5 rounded text-[10px]">15m TTL</span>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[12px] text-[#667085]">
              <span className="font-semibold text-[#EF4444]">Enterprise Privacy Compliance</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
            </div>
          </motion.div>

          {/* Bento Card 9: Comprehensive Event Integrity Suite (Span 12 Full Banner) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="lg:col-span-12 bg-gradient-to-r from-[#1E1B4B] via-[#312E81] to-[#4C1D95] text-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden group"
          >
            <div className="absolute right-0 top-0 w-96 h-96 bg-[#8C6FCF]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-white border border-white/20">
                    <Award className="w-4.5 h-4.5 text-[#86EFAC]" />
                  </div>
                  <span className="text-[12px] font-semibold text-[#A5B4FC] uppercase tracking-wider">
                    Designed for Impact & Trust
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-xl md:text-2xl text-white">
                  Built for NGOs, Government Projects, & CSR Leaders
                </h3>

                <p className="text-[14px] text-white/80 leading-relaxed">
                  Eliminate doubt and build unwavering sponsor confidence with indisputable field evidence, automated reporting, and enterprise-grade data protection.
                </p>
              </div>

              {/* High Impact Highlights */}
              <div className="w-full md:w-auto shrink-0 bg-white/10 backdrop-blur border border-white/20 p-4.5 rounded-xl space-y-2.5 text-[12px] text-white">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-white/80">Field Audit Readiness:</span>
                  <span className="text-[#86EFAC] font-bold">100% Guaranteed</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span className="text-white/80">Public Data Exposure:</span>
                  <span className="text-[#86EFAC] font-bold">Zero Risk</span>
                </div>
                <div className="flex items-center justify-between gap-6 pt-1.5 border-t border-white/15">
                  <span className="text-white/80">Operational Uptime:</span>
                  <span className="text-[#A5B4FC] font-bold">99.9% Enterprise</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

                {/* Mobile/Tablet: Apple-style horizontal scroll cards */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {mobileCards.map((c, i) => (
              <div key={i} className={`shrink-0 w-[82%] sm:w-[55%] snap-center rounded-2xl p-6 shadow-2xs border ${c.dark ? 'bg-gradient-to-r from-[#1E1B4B] to-[#4C1D95] border-transparent text-white' : 'bg-white/90 border-[#E2E5ED]'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.grad} flex items-center justify-center text-white shadow-sm`}>
                    <c.icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  {!c.dark && <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${c.badgeBg} ${c.badgeText}`}>{c.badge}</span>}
                </div>
                <h3 className={`font-heading font-semibold text-lg mb-1.5 ${c.dark ? 'text-white' : 'text-[#0F172A]'}`}>{c.title}</h3>
                <p className={`text-[14px] leading-relaxed ${c.dark ? 'text-white/80' : 'text-[#475467]'}`}>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Prev/Next controls, bottom-left */}
          <div className="flex items-center gap-2 mt-4">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="w-9 h-9 rounded-full bg-white border border-[#E2E5ED] shadow-xs flex items-center justify-center text-[#402291] active:scale-95 transition-transform">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next" className="w-9 h-9 rounded-full bg-white border border-[#E2E5ED] shadow-xs flex items-center justify-center text-[#402291] active:scale-95 transition-transform">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
