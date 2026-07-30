'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  Users, 
  Play, 
  Plus, 
  Search, 
  Calendar, 
  Camera, 
  ChevronRight,
  Eye,
  Lock,
  ArrowRight,
  ShieldCheck,
  Radio,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onSelectRoom: (roomId: string) => void;
}

export default function HeroSection({ onOpenDemo, onSelectRoom }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<'rooms' | 'live_stream' | 'photo_proof'>('rooms');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample room data representing real marketing event states
  const sampleRooms = [
    {
      id: 'room-1',
      title: 'Community Clean-up & River Conservation',
      location: 'Riverside Park, Sector 4',
      status: 'Live Stream',
      statusClass: 'bg-[#DCFCE7] text-[#166534]',
      viewers: 28,
      photosCount: '14/15 Verified Photos',
      quotaPercent: 93,
      time: 'Live Now • Started 10:00 AM'
    },
    {
      id: 'room-2',
      title: 'Regional Free Health & Medical Camp',
      location: 'Community Center, Sector B',
      status: 'Scheduled',
      statusClass: 'bg-[#E6F1FB] text-[#0C447C]',
      viewers: 0,
      photosCount: '0/20 Required Photos',
      quotaPercent: 0,
      time: 'Today • 2:00 PM - 5:00 PM'
    },
    {
      id: 'room-3',
      title: 'Youth Leadership & Career Workshop',
      location: 'City Auditorium Main Hall',
      status: 'Completed',
      statusClass: 'bg-[#F1F5F9] text-[#475467]',
      viewers: 0,
      photosCount: '25/25 Audit Verified',
      quotaPercent: 100,
      time: 'Yesterday • Audit Passed'
    },
    {
      id: 'room-4',
      title: 'Emergency Relief Supply Assembly',
      location: 'St. Mary School Ground',
      status: 'Live Stream',
      statusClass: 'bg-[#DCFCE7] text-[#166534]',
      viewers: 42,
      photosCount: '8/10 Verified Photos',
      quotaPercent: 80,
      time: 'Live Now • Active Field Operations'
    }
  ];

  const filteredRooms = sampleRooms.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section className="relative overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-24 bg-gradient-to-b from-white/80 via-white/40 to-[#F5F3FC]/50 backdrop-blur-3xl border-b border-white/80">
      
      {/* Glassmorphism Background Aceternity-style Subtle Grid Overlay & Ambient Radial Glows */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8c6fcf0d_1px,transparent_1px),linear-gradient(to_bottom,#8c6fcf0d_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_80%,transparent_100%)] pointer-events-none z-0"
      />

      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none z-0 opacity-80"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 10%, rgba(64,34,145,0.15), rgba(49,96,183,0.08) 50%, transparent 80%)'
        }}
      />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#402291]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#3160B7]/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Decorative Floating Sparkle Elements */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-[10%] text-[#8C6FCF]/50 pointer-events-none hidden sm:block z-10"
      >
        <Sparkles className="w-4 h-4 animate-pulse" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 right-[12%] text-[#8C6FCF]/40 pointer-events-none hidden sm:block z-10"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header Content & Floating Heading Side Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-6 mb-12 md:mb-16 relative"
        >
          {/* Floating Scattered Chip 1 - Left of Heading (Desktop) */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="hidden lg:flex p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-white/95 via-white/80 to-[#F5F3FC]/70 backdrop-blur-xl border border-white/90 shadow-lg shadow-[#402291]/10 hover:shadow-xl hover:border-[#8C6FCF]/50 transition-all items-center gap-3 absolute -left-30 top-12 -rotate-3 z-20 cursor-default"
          >
            <div className="w-8 h-8 rounded-xl bg-[#402291]/10 text-[#402291] flex items-center justify-center border border-[#8C6FCF]/20 shadow-2xs shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-base text-[#0F172A] leading-none">10,000+</span>
                <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded-full bg-[#402291]/10 text-[#402291]">Verified</span>
              </div>
              <span className="text-[11px] text-[#475467] font-medium leading-tight mt-0.5">Field Events</span>
            </div>
          </motion.div>

          {/* Floating Scattered Chip 2 - Right of Heading (Desktop) */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="hidden lg:flex p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-white/95 via-white/80 to-[#ECFDF5]/70 backdrop-blur-xl border border-white/90 shadow-lg shadow-[#059669]/10 hover:shadow-xl hover:border-[#34D399]/50 transition-all items-center gap-3 absolute -right-24 top-16 rotate-3 z-20 cursor-default"
          >
            <div className="w-8 h-8 rounded-xl bg-[#059669]/10 text-[#059669] flex items-center justify-center border border-[#34D399]/20 shadow-2xs shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-base text-[#059669] leading-none">99.9%</span>
                <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded-full bg-[#059669]/10 text-[#059669]">SLA</span>
              </div>
              <span className="text-[11px] text-[#475467] font-medium leading-tight mt-0.5">Audit Compliance</span>
            </div>
          </motion.div>

          {/* Badge Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#402291]/10 text-[#402291] border border-[#8C6FCF]/30 text-[13px] font-semibold tracking-wide shadow-2xs hover:bg-[#402291]/15 transition-colors backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 fill-current text-[#402291]" />
            <span>Real-Time Field Verification & Event Streaming Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#0F172A] leading-[1.15] tracking-tight">
            Stream Live Events. Verify Field Execution.{' '}
            <span className="bg-gradient-to-r from-[#402291] via-[#3160B7] to-[#8C6FCF] bg-clip-text text-transparent">
              Deliver Proof in Real Time.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-[16px] md:text-[18px] text-[#475467] max-w-2xl mx-auto leading-relaxed font-normal">
            Eventclick empowers field supervisors, non-profits, and event teams to run low-latency live streams, capture verified time-stamped photo evidence, and share tamper-evident audit reports with stakeholders.
          </motion.p>

          {/* Action Group */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onOpenDemo}
              className="px-7 py-3.5 text-[15px] font-medium text-white rounded-xl bg-gradient-to-r from-[#402291] to-[#3160B7] shadow-md hover:shadow-lg hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 focus-ring"
            >
              <Calendar className="w-4.5 h-4.5" />
              <span>Book a Live Demo</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('live_stream');
                const showcase = document.getElementById('browser-mockup');
                if (showcase) {
                  showcase.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
              }}
              className="px-6 py-3.5 text-[15px] font-medium text-[#402291] bg-white/80 backdrop-blur-md border border-[#E2E5ED] rounded-xl hover:bg-white hover:border-[#8C6FCF]/40 transition-all focus-ring shadow-2xs flex items-center gap-2"
            >
              <Eye className="w-4.5 h-4.5 text-[#402291]" />
              <span>Explore Live Stream Demo</span>
            </button>
          </motion.div>

          {/* Mobile & Tablet Scattered Mini Info Cards Grid (Hidden on lg desktop) */}
          <motion.div 
            variants={itemVariants} 
            className="pt-6 grid grid-cols-2 gap-3 lg:hidden max-w-lg mx-auto text-left"
          >
            {/* Card 1 Mobile */}
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-white/95 via-white/80 to-[#F5F3FC]/70 backdrop-blur-xl border border-white/90 shadow-md flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm text-[#0F172A]">10,000+</span>
                <span className="text-[10px] text-[#475467] font-medium">Field Events</span>
              </div>
            </div>

            {/* Card 2 Mobile */}
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-white/95 via-white/80 to-[#ECFDF5]/70 backdrop-blur-xl border border-white/90 shadow-md flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm text-[#059669]">99.9%</span>
                <span className="text-[10px] text-[#475467] font-medium">Audit SLA</span>
              </div>
            </div>

            {/* Card 3 Mobile */}
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-white/95 via-white/80 to-[#E6F1FB]/70 backdrop-blur-xl border border-white/90 shadow-md flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center shrink-0">
                <Radio className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm text-[#3160B7]">&lt; 2s</span>
                <span className="text-[10px] text-[#475467] font-medium">Stream Latency</span>
              </div>
            </div>

            {/* Card 4 Mobile */}
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-white/95 via-white/80 to-[#FAF5FF]/70 backdrop-blur-xl border border-white/90 shadow-md flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#8C6FCF]/10 text-[#8C6FCF] flex items-center justify-center shrink-0">
                <Camera className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm text-[#7E22CE]">100%</span>
                <span className="text-[10px] text-[#475467] font-medium">Geotag Proof</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Product Showcase Browser Mockup Wrapper with Scattered Floating Cards at Top (Desktop) */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Scattered Floating Chip 3 - Top Left of Browser Mockup (Desktop) */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="hidden lg:flex p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-white/95 via-white/80 to-[#E6F1FB]/70 backdrop-blur-xl border border-white/90 shadow-lg shadow-[#3160B7]/10 hover:shadow-xl hover:border-[#38BDF8]/50 transition-all items-center gap-3 absolute left-8 -top-20 -rotate-2 z-30 cursor-default"
          >
            <div className="w-8 h-8 rounded-xl bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center border border-[#38BDF8]/20 shadow-2xs shrink-0">
              <Radio className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-base text-[#3160B7] leading-none">&lt; 2s</span>
                <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded-full bg-[#3160B7]/10 text-[#3160B7]">WebRTC</span>
              </div>
              <span className="text-[11px] text-[#475467] font-medium leading-tight mt-0.5">Stream Broadcast Latency</span>
            </div>
          </motion.div>

          {/* Scattered Floating Chip 4 - Top Right of Browser Mockup (Desktop) */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="hidden lg:flex p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-white/95 via-white/80 to-[#FAF5FF]/70 backdrop-blur-xl border border-white/90 shadow-lg shadow-[#8C6FCF]/10 hover:shadow-xl hover:border-[#A855F7]/50 transition-all items-center gap-3 absolute right-20 -top-35 rotate-2 z-30 cursor-default"
          >
            <div className="w-8 h-8 rounded-xl bg-[#8C6FCF]/10 text-[#8C6FCF] flex items-center justify-center border border-[#A855F7]/20 shadow-2xs shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-base text-[#7E22CE] leading-none">100%</span>
                <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded-full bg-[#8C6FCF]/10 text-[#8C6FCF]">GPS</span>
              </div>
              <span className="text-[11px] text-[#475467] font-medium leading-tight mt-0.5">Geotagged Photo Proof</span>
            </div>
          </motion.div>

          {/* Product Showcase Browser Mockup */}
          <motion.div 
            id="browser-mockup"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="p-2.5 sm:p-3.5 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(64,34,145,0.15)] ring-1 ring-[#8C6FCF]/25 max-w-6xl mx-auto relative group hover:ring-[#8C6FCF]/50 hover:bg-white/50 transition-all duration-300"
          >
          <div className="bg-white border border-[#E2E5ED] rounded-2xl shadow-xl overflow-hidden relative">
          
          {/* Top Browser Bar */}
          <div className="bg-[#F8F9FC] border-b border-[#E2E5ED] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />
              </div>
              <div className="bg-white border border-[#E2E5ED] px-3 py-1 rounded-md text-[12px] text-[#667085] flex items-center gap-1.5 font-mono shadow-2xs">
                <Lock className="w-3 h-3 text-[#166534]" />
                <span>app.eventclick.live/overview</span>
              </div>
            </div>

            {/* Aceternity Style Animated View Tab Selector */}
            <div className="flex items-center gap-1 bg-[#E2E5ED]/60 p-1 rounded-xl text-[12px] font-medium relative">
              <button
                onClick={() => setActiveTab('rooms')}
                className={`relative px-3 py-1.5 rounded-lg transition-colors z-10 ${
                  activeTab === 'rooms' ? 'text-[#402291] font-semibold' : 'text-[#667085] hover:text-[#0F172A]'
                }`}
              >
                {activeTab === 'rooms' && (
                  <motion.div 
                    layoutId="activeTabPill" 
                    className="absolute inset-0 bg-white rounded-lg shadow-xs -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>Event Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('live_stream')}
                className={`relative px-3 py-1.5 rounded-lg transition-colors z-10 ${
                  activeTab === 'live_stream' ? 'text-[#402291] font-semibold' : 'text-[#667085] hover:text-[#0F172A]'
                }`}
              >
                {activeTab === 'live_stream' && (
                  <motion.div 
                    layoutId="activeTabPill" 
                    className="absolute inset-0 bg-white rounded-lg shadow-xs -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>Live Stream Feed</span>
              </button>

              <button
                onClick={() => setActiveTab('photo_proof')}
                className={`relative px-3 py-1.5 rounded-lg transition-colors z-10 ${
                  activeTab === 'photo_proof' ? 'text-[#402291] font-semibold' : 'text-[#667085] hover:text-[#0F172A]'
                }`}
              >
                {activeTab === 'photo_proof' && (
                  <motion.div 
                    layoutId="activeTabPill" 
                    className="absolute inset-0 bg-white rounded-lg shadow-xs -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>Photo Audit Evidence</span>
              </button>
            </div>
          </div>

          {/* Dynamic Interactive Body View */}
          <div className="p-4 md:p-6 bg-white space-y-6 min-h-[460px]">
            <AnimatePresence mode="wait">
              
              {/* View 1: Event Dashboard */}
              {activeTab === 'rooms' && (
                <motion.div 
                  key="rooms"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Dashboard Subheader */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-[#0F172A]">
                        Live Event Rooms & Field Verification
                      </h3>
                      <p className="text-[13px] text-[#667085]">
                        Monitor live events, video feeds, and photo verification progress in real time.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative flex-1 sm:w-52">
                        <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#98A2B3]" />
                        <input
                          type="text"
                          placeholder="Filter event rooms..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-8 pr-3 py-1.5 text-[12px] border border-[#E2E5ED] rounded-lg bg-[#F8F9FC] focus:outline-none focus:border-[#402291]"
                        />
                      </div>

                      <button
                        onClick={onOpenDemo}
                        className="px-3.5 py-1.5 text-[12px] font-medium text-white bg-[#402291] rounded-lg hover:bg-[#28226E] transition-colors flex items-center gap-1 shrink-0 shadow-2xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Schedule Room</span>
                      </button>
                    </div>
                  </div>

                  {/* Event Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredRooms.map((room) => (
                      <motion.div
                        key={room.id}
                        whileHover={{ y: -2, transition: { duration: 0.15 } }}
                        onClick={() => onSelectRoom(room.id)}
                        className="p-4 border border-[#E2E5ED] rounded-xl bg-white hover:border-[#402291]/50 hover:shadow-md transition-all cursor-pointer group space-y-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-wider inline-block ${room.statusClass}`}>
                              {room.status === 'Live Stream' ? '● ' + room.status : room.status}
                            </span>
                            <h4 className="font-heading font-semibold text-[15px] text-[#0F172A] group-hover:text-[#402291] transition-colors leading-snug">
                              {room.title}
                            </h4>
                          </div>
                          <ChevronRight className="w-5 h-5 text-[#98A2B3] group-hover:text-[#402291] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                        </div>

                        <div className="flex items-center gap-2 text-[12px] text-[#667085]">
                          <MapPin className="w-3.5 h-3.5 text-[#98A2B3]" />
                          <span className="truncate">{room.location}</span>
                        </div>

                        {/* Photo Quota Progress Bar */}
                        <div className="space-y-1.5 pt-1 border-t border-[#E2E5ED]/60">
                          <div className="flex justify-between items-center text-[12px]">
                            <span className="text-[#667085] flex items-center gap-1">
                              <Camera className="w-3.5 h-3.5 text-[#402291]" /> Photo Quota Evidence
                            </span>
                            <span className="font-semibold text-[#0F172A]">{room.photosCount}</span>
                          </div>
                          <div className="w-full h-2 bg-[#E2E5ED] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#402291] to-[#3160B7] transition-all duration-500"
                              style={{ width: `${room.quotaPercent}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-[#667085] pt-1">
                          <span>{room.time}</span>
                          {room.viewers > 0 && (
                            <span className="text-[#166534] font-medium flex items-center gap-1 bg-[#DCFCE7] px-2 py-0.5 rounded">
                              <Eye className="w-3 h-3" /> {room.viewers} Viewers
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              )}

              {/* View 2: Live Stream Feed Preview */}
              {activeTab === 'live_stream' && (
                <motion.div 
                  key="live_stream"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="relative aspect-video max-h-[380px] bg-[#0F172A] rounded-xl overflow-hidden shadow-inner flex flex-col justify-between p-4 text-white">
                    <div className="flex justify-between items-center text-[12px]">
                      <span className="bg-black/60 backdrop-blur px-3 py-1 rounded-md font-medium flex items-center gap-1.5 text-[#27C93F]">
                        <Radio className="w-3.5 h-3.5 animate-pulse" />
                        <span>LiveKit Low-Latency WebRTC Stream</span>
                      </span>
                      <span className="bg-black/60 backdrop-blur px-3 py-1 rounded-md font-medium flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#93C5FD]" /> 42 Active Viewers
                      </span>
                    </div>

                    <div className="text-center py-10 space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSelectRoom('room-1')}
                        className="w-16 h-16 rounded-full bg-white/10 backdrop-blur mx-auto flex items-center justify-center text-white border border-white/20 shadow-lg"
                      >
                        <Play className="w-7 h-7 fill-current ml-0.5" />
                      </motion.button>
                      <div>
                        <h4 className="font-heading font-semibold text-lg text-white">
                          Community Clean-up & River Conservation Drive
                        </h4>
                        <p className="text-[13px] text-white/80">
                          Live stream broadcast from Ward 4 Riverside Park
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-white/70 border-t border-white/10 pt-2">
                      <span>Stream Resolution: 1080p HD • Latency: &lt; 500ms</span>
                      <button
                        onClick={() => onSelectRoom('room-1')}
                        className="px-3 py-1 bg-[#402291] text-white rounded font-medium hover:bg-[#3160B7] transition-colors"
                      >
                        Open Stream Inspector
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* View 3: Photo Audit Evidence */}
              {activeTab === 'photo_proof' && (
                <motion.div 
                  key="photo_proof"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="p-4 bg-[#F8F9FC] border border-[#E2E5ED] rounded-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-heading font-semibold text-[15px] text-[#0F172A]">
                          Verified Photo Audit Trail
                        </h4>
                        <p className="text-[12px] text-[#667085]">
                          Photos captured live in field with time-stamps & cryptographic signature
                        </p>
                      </div>
                      <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#DCFCE7] text-[#166534] rounded-full">
                        ✓ Audit Passed
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="p-2.5 bg-white border border-[#E2E5ED] rounded-lg space-y-2 text-center hover:border-[#402291]/40 transition-colors">
                          <div className="aspect-4/3 bg-[#E2E5ED] rounded flex items-center justify-center text-[#667085] text-[11px] font-mono">
                            <Camera className="w-6 h-6 text-[#402291] opacity-70" />
                          </div>
                          <div className="text-[11px] text-[#0F172A] font-medium truncate">
                            Photo #{item} • Time-stamped
                          </div>
                          <span className="text-[10px] text-[#166534] font-semibold block">
                            ✓ Signed & Encrypted
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Browser Footer Summary Bar */}
          <div className="bg-[#F8F9FC] border-t border-[#E2E5ED] px-4 py-3 text-center text-[12px] text-[#667085] flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#402291]" />
              <span>Real-time stream streaming • Time-bound photo quota validation • Instant audit sharing</span>
            </span>
            <button
              onClick={onOpenDemo}
              className="font-medium text-[#402291] hover:underline inline-flex items-center gap-1"
            >
              <span>Schedule Custom Walkthrough</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          </div>
        </motion.div>
        </div>

      </div>
    </section>
  );
}

