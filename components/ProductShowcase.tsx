'use client';

import { useState, useRef } from 'react';
import { 
  Camera, 
  CheckSquare, 
  Share2, 
  Clock, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Copy, 
  Video,
  Sparkles,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { TracingBeamZ } from '@/components/ui/tracing-beam-z';

export default function ProductShowcase() {
  // Ref setup for S-curve TracingBeamZ
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Simulator state for Section 1: Attendance Photo Verification
  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [photoUploading, setPhotoUploading] = useState(false);

  // Simulator state for Section 2: QC Checklist
  const [qcState, setQcState] = useState([
    { id: 'qc1', label: 'Field Medical Station Setup', current: 3, required: 3 },
    { id: 'qc2', label: 'Patient Register Verification', current: 5, required: 5 },
    { id: 'qc3', label: 'Medicine Distribution Proof', current: 8, required: 10 },
  ]);

  // Simulator state for Section 3: Secure Link Generator
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCapturePhoto = () => {
    setPhotoUploading(true);
    setTimeout(() => {
      setPhotoUploading(false);
      setPhotoCaptured(true);
    }, 800);
  };

  const handleIncrementQC = (id: string) => {
    setQcState(prev => prev.map(item => {
      if (item.id === id && item.current < item.required) {
        return { ...item, current: item.current + 1 };
      }
      return item;
    }));
  };

  const isQcComplete = qcState.every(item => item.current >= item.required);

  const handleCopyLink = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#F5F3FC] border-b border-[#E2E5ED] overflow-hidden">
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c6fcf0d_1px,transparent_1px),linear-gradient(to_bottom,#8c6fcf0d_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#402291]/8 via-[#3160B7]/8 to-[#8C6FCF]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#402291] text-[12px] font-bold uppercase tracking-wider border border-[#8C6FCF]/25 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#402291]" />
            <span>Interactive Platform Walkthrough</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0F172A] tracking-tight leading-tight">
            Designed for <span className="bg-gradient-to-r from-[#402291] via-[#3160B7] to-[#8C6FCF] bg-clip-text text-transparent">Verification at Scale</span>
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#475467] leading-relaxed max-w-2xl mx-auto font-normal">
            Test the live interactive simulators below to see how Eventclick handles time-bound photo capture, automated QC gates, and secure links.
          </p>
        </motion.div>

        {/* WORKFLOW CONTAINER WITH TRACING BEAM Z (S-CURVE) */}
        <div ref={containerRef} className="relative space-y-16 sm:space-y-24 max-w-6xl mx-auto">
          
          {/* Animated S-Curve Tracing Beam Overlay */}
          <TracingBeamZ 
            containerRef={containerRef} 
            itemsRef={itemRefs} 
            itemCount={3} 
            xRatios={[0.01, 0.985, 0.01]} 
          />

          {/* ================= WORKFLOW 01 ================= */}
          <div
            ref={(el) => { itemRefs.current[0] = el; }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Text Description Left (5 cols) */}
            <div className="lg:col-span-5 space-y-4 py-2 min-h-[350px] flex flex-col justify-between pl-4">
              <div className="space-y-3">
                <div className="relative p-[1.5px] rounded-full overflow-hidden inline-flex items-center justify-center">
                  <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,#402291_0deg,#3160B7_120deg,#10B981_240deg,#402291_360deg)] animate-[spin_4s_linear_infinite]" />
                  <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#402291] text-[12px] font-extrabold shadow-2xs">
                    <Camera className="w-3.5 h-3.5 text-[#3160B7]" />
                    <span>Workflow 01</span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-[#0F172A] leading-tight">
                  Attendance verification with time-bound photo evidence
                </h3>

                <p className="text-[14px] text-[#475467] leading-relaxed">
                  Volunteers capture participant details directly alongside live camera photo proof. Every photo is cryptographically validated against the room&apos;s schedule and uploaded via 15-minute signed S3 URLs.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E2E5ED] text-[13px] text-[#1D2939]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>Live camera capture (disables static gallery uploads)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>GPS coordinates & local time-stamp verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>Direct signed S3 pre-signed upload URL generation</span>
                </div>
              </div>
            </div>

            {/* Interactive Solution Card Right (7 cols) */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl border border-[#E2E5ED] rounded-2xl p-6 sm:p-7 shadow-xl shadow-[#402291]/5 min-h-[350px] flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E5ED]">
                <span className="text-[13.5px] font-bold text-[#0F172A] flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#402291]" />
                  <span>Volunteer Attendance Entry Form</span>
                </span>
                <span className="text-[11px] font-bold bg-[#DCFCE7] text-[#166534] px-2.5 py-0.5 rounded-full border border-[#86EFAC] flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#166534]" />
                  Room Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px]">
                <div className="p-3 bg-[#F8F9FC] rounded-xl border border-[#E2E5ED] space-y-0.5">
                  <span className="text-[#64748B] block text-[10.5px] font-medium">Event Room</span>
                  <span className="font-bold text-[#0F172A] text-[12.5px]">Regional Health Camp #2</span>
                </div>
                <div className="p-3 bg-[#F8F9FC] rounded-xl border border-[#E2E5ED] space-y-0.5">
                  <span className="text-[#64748B] block text-[10.5px] font-medium">Time-Stamp</span>
                  <span className="font-bold text-[#0F172A] text-[12.5px]">Today • 11:24:08 AM</span>
                </div>
              </div>

              {/* Photo Capture Area Simulator */}
              <div className="border border-[#E2E5ED] rounded-xl p-4 bg-[#F8F9FC] space-y-3">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="font-bold text-[#0F172A]">Photo Evidence Required</span>
                  <span className="text-[10.5px] font-mono text-[#402291] bg-[#F5F3FC] px-2 py-0.5 rounded">
                    S3 Key: /rooms/r-102/photo-49.jpg
                  </span>
                </div>

                {!photoCaptured ? (
                  <div className="border-2 border-dashed border-[#CBD0DC] rounded-xl p-5 text-center space-y-2 bg-white">
                    {photoUploading ? (
                      <div className="space-y-2 py-2">
                        <RefreshCw className="w-6 h-6 text-[#402291] animate-spin mx-auto" />
                        <p className="text-[12px] font-bold text-[#402291]">Signing S3 URL & Uploading...</p>
                      </div>
                    ) : (
                      <>
                        <Camera className="w-7 h-7 text-[#402291] mx-auto" />
                        <div>
                          <p className="text-[13px] font-bold text-[#0F172A]">Click to Capture Live Photo Proof</p>
                          <p className="text-[11px] text-[#64748B]">Simulate volunteer camera capture</p>
                        </div>
                        <button
                          onClick={handleCapturePhoto}
                          className="px-4 py-2 text-[12px] font-bold text-white bg-[#402291] hover:bg-[#3160B7] rounded-xl transition-all shadow-sm cursor-pointer"
                        >
                          Capture Camera Photo
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="bg-[#DCFCE7] border border-[#86EFAC] rounded-xl p-4 flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#166534] text-white flex items-center justify-center font-bold shrink-0">
                        ✓
                      </div>
                      <div>
                        <span className="font-bold text-[#166534] block text-[12.5px]">Photo Proof Uploaded & Verified</span>
                        <span className="text-[11px] text-[#15803D]">Signed S3 key generated • GPS Verified</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setPhotoCaptured(false)}
                      className="text-[11px] font-bold text-[#166534] underline hover:text-[#14532D] cursor-pointer"
                    >
                      Reset Demo
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= WORKFLOW 02 ================= */}
          <div
            ref={(el) => { itemRefs.current[1] = el; }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Interactive Solution Card Left (7 cols) */}
            <div className="lg:col-span-7 lg:order-1 order-2 bg-white/95 backdrop-blur-xl border border-[#E2E5ED] rounded-2xl p-6 sm:p-7 shadow-xl shadow-[#402291]/5 min-h-[350px] flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E5ED]">
                <span className="text-[13.5px] font-bold text-[#0F172A] flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#402291]" />
                  <span>QC Quota Evaluation Gate</span>
                </span>
                <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${
                  isQcComplete 
                    ? 'bg-[#DCFCE7] text-[#166534] border-[#86EFAC]' 
                    : 'bg-[#FEE2E2] text-[#991B1B] border-[#FCA5A5]'
                }`}>
                  {isQcComplete ? 'Completion Unlocked' : 'Completion Blocked'}
                </span>
              </div>

              <div className="space-y-2.5">
                {qcState.map(item => {
                  const complete = item.current >= item.required;
                  const pct = Math.round((item.current / item.required) * 100);
                  return (
                    <div key={item.id} className="p-3 bg-[#F8F9FC] border border-[#E2E5ED] rounded-xl space-y-1.5">
                      <div className="flex items-center justify-between text-[12px]">
                        <span className="font-bold text-[#0F172A]">{item.label}</span>
                        <span className="font-mono text-[#64748B] text-[11px] font-semibold">
                          {item.current} / {item.required} photos ({pct}%)
                        </span>
                      </div>

                      <div className="w-full h-2 bg-[#E2E5ED] rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-300 ${complete ? 'bg-[#16A34A]' : 'bg-[#3160B7]'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>

                      {!complete && (
                        <div className="flex justify-between items-center pt-0.5">
                          <span className="text-[10.5px] text-[#991B1B] font-medium flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> Missing {item.required - item.current} photos
                          </span>
                          <button
                            onClick={() => handleIncrementQC(item.id)}
                            className="px-2 py-0.5 text-[10.5px] font-bold bg-white border border-[#CBD0DC] text-[#402291] rounded-md hover:bg-[#F5F3FC] transition-colors cursor-pointer"
                          >
                            + Simulate Photo
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Room Completion Action Button */}
              <div className="pt-2 border-t border-[#E2E5ED]">
                <button
                  disabled={!isQcComplete}
                  className={`w-full py-2.5 rounded-xl text-[12.5px] font-bold transition-all flex items-center justify-center gap-2 ${
                    isQcComplete
                      ? 'bg-[#166534] text-white shadow-sm hover:bg-[#14532D] cursor-pointer'
                      : 'bg-[#E2E5ED] text-[#94A3B8] cursor-not-allowed'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isQcComplete ? 'Finalize & Close Event Room' : 'Room Completion Blocked (Quotas Unmet)'}</span>
                </button>
              </div>
            </div>

            {/* Text Description Right (5 cols) */}
            <div className="lg:col-span-5 lg:order-2 order-1 space-y-4 py-2 min-h-[350px] flex flex-col justify-between pr-4">
              <div className="space-y-3">
                <div className="relative p-[1.5px] rounded-full overflow-hidden inline-flex items-center justify-center">
                  <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,#166534_0deg,#3160B7_120deg,#8C6FCF_240deg,#166534_360deg)] animate-[spin_4s_linear_infinite]" />
                  <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#166534] text-[12px] font-extrabold shadow-2xs">
                    <CheckSquare className="w-3.5 h-3.5 text-[#166534]" />
                    <span>Workflow 02</span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-[#0F172A] leading-tight">
                  Quality-Control activity tracking & completion gate
                </h3>

                <p className="text-[14px] text-[#475467] leading-relaxed">
                  Define required field activity checklists with minimum photo quotas. The application automatically evaluates incoming uploads and blocks room completion until every activity meets its mandatory photo quota.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E2E5ED] text-[13px] text-[#1D2939]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>Mandatory activity photo thresholds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>Automated hard-gate room completion block</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>Immutable audit trail generation for leadership</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= WORKFLOW 03 ================= */}
          <div
            ref={(el) => { itemRefs.current[2] = el; }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Text Description Left (5 cols) */}
            <div className="lg:col-span-5 space-y-4 py-2 min-h-[350px] flex flex-col justify-between pl-4">
              <div className="space-y-3">
                <div className="relative p-[1.5px] rounded-full overflow-hidden inline-flex items-center justify-center">
                  <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,#3160B7_0deg,#402291_120deg,#10B981_240deg,#3160B7_360deg)] animate-[spin_4s_linear_infinite]" />
                  <div className="relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#3160B7] text-[12px] font-extrabold shadow-2xs">
                    <Share2 className="w-3.5 h-3.5 text-[#3160B7]" />
                    <span>Workflow 03</span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-[#0F172A] leading-tight">
                  Live event streaming & secure shareable links
                </h3>

                <p className="text-[14px] text-[#475467] leading-relaxed">
                  Stream live video using LiveKit WebRTC media servers with automatic failover to embedded YouTube feeds. Share time-bound live view links with external stakeholders without exposing admin credentials.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E2E5ED] text-[13px] text-[#1D2939]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>Low-latency LiveKit WebRTC streaming</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>Automatic YouTube stream fallback player</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>Time-bound secure shareable viewer links</span>
                </div>
              </div>
            </div>

            {/* Interactive Solution Card Right (7 cols) */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl border border-[#E2E5ED] rounded-2xl p-6 sm:p-7 shadow-xl shadow-[#402291]/5 min-h-[350px] flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E5ED]">
                <span className="text-[13.5px] font-bold text-[#0F172A] flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#402291]" />
                  <span>Live Room Stream & Link Security</span>
                </span>
                <span className="text-[11px] font-mono text-[#402291] bg-[#F5F3FC] px-2.5 py-0.5 rounded border border-[#8C6FCF]/20 font-semibold">
                  LiveKit WebRTC
                </span>
              </div>

              {/* Shareable Link Simulator Box */}
              <div className="p-4 bg-[#F8F9FC] border border-[#E2E5ED] rounded-xl space-y-3">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="font-bold text-[#0F172A]">Stakeholder Live-View Link</span>
                  <span className="text-[11px] font-semibold text-[#166534] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#166534]" /> Valid for 15 mins
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value="https://app.eventclick.live/share/live-r892a?token=exp_1785290"
                    className="w-full bg-white border border-[#E2E5ED] rounded-lg px-3 py-2 text-[11.5px] font-mono text-[#1D2939] focus:outline-none"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 text-[12px] font-bold text-white bg-[#402291] hover:bg-[#3160B7] rounded-lg transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{linkCopied ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-1">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#10B981]" /> Access: Viewer-Only
                  </span>
                  <span className="font-mono text-[#402291]">Signed Token Active</span>
                </div>
              </div>

              <div className="p-3 bg-[#EFF6FF] border border-[#3B82F6]/30 rounded-xl flex items-center justify-between text-[11.5px] text-[#1E40AF]">
                <span className="font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Real-time presence: 42 active viewers on WebRTC</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
