'use client';

import { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Send,
  Building2,
  Mail,
  User,
  Sparkles,
  Play,
  Calendar,
  Users,
  Clock,
  Lock,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContactRequest, ContactSubmitError } from '@/lib/contact';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchRoom?: (roomId: string) => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [activeTab, setActiveTab] = useState<'request_demo' | 'video_tour'>('request_demo');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    orgName: '',
    teamSize: '10-50 field staff',
    useCase: 'Field Attendance & Photo Verification'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await submitContactRequest({ kind: 'demo', ...formData });
      setSubmitted(true);
    } catch (err) {
      // Only show the success screen once the request is actually accepted —
      // this form previously reported success without sending anything.
      setError(
        err instanceof ContactSubmitError
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError(null);
    setFormData({
      fullName: '',
      workEmail: '',
      orgName: '',
      teamSize: '10-50 field staff',
      useCase: 'Field Attendance & Photo Verification'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white border border-[#E2E5ED] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl space-y-0 relative"
      >
        
        {/* Top Header */}
        <div className="px-6 py-4.5 bg-gradient-to-r from-[#F9F8FD] via-[#F5F3FC] to-[#F0EDFA] border-b border-[#8C6FCF]/20 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#402291] to-[#3160B7] opacity-30 blur-xs" />
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#402291] to-[#3160B7] flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-5.5 h-5.5 stroke-[2.2]" />
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-[#0F172A] leading-tight flex items-center gap-2">
                <span>Eventclick Platform</span>
                <span className="text-[10px] font-semibold bg-[#402291]/10 text-[#402291] px-2 py-0.5 rounded-full border border-[#8C6FCF]/20">
                  Enterprise
                </span>
              </h3>
              <p className="text-[12px] text-[#667085]">
                Automated operational compliance & field photo audit software
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="p-2 rounded-xl text-[#667085] hover:text-[#0F172A] hover:bg-white/80 transition-colors border border-transparent hover:border-[#E2E5ED]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#E2E5ED] bg-[#F8F9FC] text-[13px] font-semibold p-1.5 gap-1.5">
          <button
            onClick={() => setActiveTab('request_demo')}
            className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'request_demo'
                ? 'bg-white text-[#402291] shadow-xs border border-[#8C6FCF]/20 font-bold'
                : 'text-[#667085] hover:text-[#0F172A] hover:bg-white/50'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#402291]" />
            <span>Book Live Demo</span>
          </button>

          <button
            onClick={() => setActiveTab('video_tour')}
            className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'video_tour'
                ? 'bg-white text-[#402291] shadow-xs border border-[#8C6FCF]/20 font-bold'
                : 'text-[#667085] hover:text-[#0F172A] hover:bg-white/50'
            }`}
          >
            <Play className="w-4 h-4 text-[#3160B7] fill-current" />
            <span>2-Min Product Tour</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: BOOK DEMO FORM */}
            {activeTab === 'request_demo' && (
              <motion.div
                key="demo_tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-[13px] text-[#475467] leading-relaxed font-normal">
                      Schedule a 15-minute tailored walkthrough with our operational verification specialists to see how Eventclick coordinates live streams and field photo audits.
                    </p>

                    <div className="space-y-3.5">
                      
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[12px] font-semibold text-[#0F172A] block mb-1">
                            Full Name <span className="text-[#DC2626]">*</span>
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              required
                              placeholder="Sarah Jenkins"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              className="w-full pl-9 pr-3.5 py-2.5 text-[13px] border border-[#E2E5ED] rounded-xl bg-[#F8F9FC] focus:outline-none focus:border-[#402291] focus:bg-white focus:ring-3 focus:ring-[#402291]/10 transition-all font-medium text-[#0F172A]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[12px] font-semibold text-[#0F172A] block mb-1">
                            Work Email <span className="text-[#DC2626]">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="email"
                              required
                              placeholder="sarah@organization.org"
                              value={formData.workEmail}
                              onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                              className="w-full pl-9 pr-3.5 py-2.5 text-[13px] border border-[#E2E5ED] rounded-xl bg-[#F8F9FC] focus:outline-none focus:border-[#402291] focus:bg-white focus:ring-3 focus:ring-[#402291]/10 transition-all font-medium text-[#0F172A]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Organization Name & Team Size */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[12px] font-semibold text-[#0F172A] block mb-1">
                            Organization Name <span className="text-[#DC2626]">*</span>
                          </label>
                          <div className="relative">
                            <Building2 className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              required
                              placeholder="Global Aid Org"
                              value={formData.orgName}
                              onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                              className="w-full pl-9 pr-3.5 py-2.5 text-[13px] border border-[#E2E5ED] rounded-xl bg-[#F8F9FC] focus:outline-none focus:border-[#402291] focus:bg-white focus:ring-3 focus:ring-[#402291]/10 transition-all font-medium text-[#0F172A]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[12px] font-semibold text-[#0F172A] block mb-1">
                            Estimated Field Scale
                          </label>
                          <div className="relative">
                            <Users className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
                            <select
                              value={formData.teamSize}
                              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                              className="w-full pl-9 pr-3.5 py-2.5 text-[13px] border border-[#E2E5ED] rounded-xl bg-[#F8F9FC] focus:outline-none focus:border-[#402291] focus:bg-white focus:ring-3 focus:ring-[#402291]/10 transition-all font-medium text-[#0F172A] appearance-none cursor-pointer"
                            >
                              <option value="1-10 field staff">1–10 field personnel</option>
                              <option value="10-50 field staff">10–50 field personnel</option>
                              <option value="50-250 field staff">50–250 field personnel</option>
                              <option value="250+ enterprise scale">250+ enterprise scale</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Primary Requirement */}
                      <div>
                        <label className="text-[12px] font-semibold text-[#0F172A] block mb-1">
                          Primary Objective
                        </label>
                        <select
                          value={formData.useCase}
                          onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-[13px] border border-[#E2E5ED] rounded-xl bg-[#F8F9FC] focus:outline-none focus:border-[#402291] focus:bg-white focus:ring-3 focus:ring-[#402291]/10 transition-all font-medium text-[#0F172A] cursor-pointer"
                        >
                          <option value="Field Attendance & Photo Verification">Field Attendance & Photo Quota Proof</option>
                          <option value="Live Event Video Streaming">Live WebRTC Video Streaming & Fallback</option>
                          <option value="Stakeholder & Donor Audit Reports">Tamper-Evident Donor Audit Reports</option>
                          <option value="Custom Enterprise Integration">Custom Enterprise API & Workflow Integration</option>
                        </select>
                      </div>

                    </div>

                    {/* Submit Action */}
                    {error && (
                      <div
                        role="alert"
                        className="px-3.5 py-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-[13px] text-[#B42318]"
                      >
                        {error}
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group w-full py-3.5 text-[14px] font-bold text-white rounded-xl bg-gradient-to-r from-[#402291] via-[#382080] to-[#3160B7] shadow-lg shadow-[#402291]/25 hover:shadow-xl hover:shadow-[#402291]/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-white/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        <Sparkles className="w-4 h-4 text-[#A78BFA] group-hover:rotate-12 transition-transform" />
                        <span>{submitting ? 'Sending…' : 'Book Personalized Demo'}</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Trust Microcopy */}
                    <div className="pt-1 flex items-center justify-center gap-4 text-[11px] text-[#667085] border-t border-[#E2E5ED]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Response in &lt; 2 hours</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-[#3160B7]" />
                        <span>14-day full access included</span>
                      </span>
                    </div>

                  </form>
                ) : (
                  
                  /* SUBMITTED SUCCESS STATE */
                  <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-3xl bg-[#DCFCE7] text-[#166534] mx-auto flex items-center justify-center border-2 border-[#86EFAC] shadow-md">
                      <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-heading font-bold text-2xl text-[#0F172A]">
                        Demo Request Submitted!
                      </h4>
                      <p className="text-[13.5px] text-[#475467] max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#0F172A]">{formData.fullName || 'there'}</strong>! Our verification solutions team will reach out to <strong className="text-[#402291]">{formData.workEmail || 'your email'}</strong> within 2 business hours with calendar invite links.
                      </p>
                    </div>

                    <div className="p-4 bg-[#F5F3FC] border border-[#8C6FCF]/20 rounded-2xl text-left text-[12.5px] space-y-1.5 max-w-md mx-auto">
                      <span className="font-bold text-[#402291] flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#8C6FCF]" />
                        <span>What happens next?</span>
                      </span>
                      <p className="text-[#475467]">
                        A dedicated specialist will prepare a customized room configuration matching <strong>{formData.orgName || 'your organization'}</strong>&apos;s specific verification rules and field quotas.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                      <button
                        onClick={() => setActiveTab('video_tour')}
                        className="px-5 py-2.5 text-[13px] font-bold text-white bg-[#402291] rounded-xl hover:bg-[#28226E] transition-colors flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Watch 2-Min Product Tour</span>
                      </button>

                      <button
                        onClick={() => {
                          resetForm();
                          onClose();
                        }}
                        className="px-5 py-2.5 text-[13px] font-semibold text-[#475467] bg-[#F8F9FC] border border-[#E2E5ED] rounded-xl hover:bg-[#E2E5ED]/60 transition-colors"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>

                )}
              </motion.div>
            )}

            {/* TAB 2: VIDEO TOUR */}
            {activeTab === 'video_tour' && (
              <motion.div
                key="video_tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Simulated Video Player */}
                <div className="relative aspect-video bg-[#0F172A] rounded-2xl overflow-hidden shadow-2xl border border-[#1E293B] group">
                  
                  {isPlayingVideo ? (
                    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#0B0F19] text-white">
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#38BDF8]">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                          <span>Playing Eventclick Walkthrough</span>
                        </span>
                        <span>01:14 / 02:15</span>
                      </div>

                      <div className="my-auto text-center space-y-2 p-4">
                        <div className="w-12 h-12 rounded-full bg-[#402291] text-white mx-auto flex items-center justify-center animate-bounce shadow-lg">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <p className="text-[14px] font-bold text-white">
                          Demonstrating Photo Verification Quotas & WebRTC Stream
                        </p>
                        <p className="text-[12px] text-[#94A3B8]">
                          (Simulated video player stream for reviewer review)
                        </p>
                      </div>

                      <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[#402291] h-full w-[55%] rounded-full" />
                      </div>
                    </div>
                  ) : (
                    <div 
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-full h-full flex flex-col justify-between p-5 text-white bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#090D16] cursor-pointer"
                    >
                      <div className="flex justify-between items-center text-[11.5px]">
                        <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg font-medium text-white/90 border border-white/10">
                          Product Overview • 2:15 Min
                        </span>
                        <span className="bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 px-2.5 py-0.5 rounded-md font-mono text-[11px] font-semibold">
                          1080p HD
                        </span>
                      </div>

                      <div className="text-center py-6 space-y-3">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#402291] to-[#3160B7] text-white mx-auto flex items-center justify-center shadow-2xl border border-white/30 group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 fill-current ml-1" />
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                            Click to Play Platform Walkthrough
                          </p>
                          <p className="text-[12px] text-white/70">
                            See how room building & photo proofs work end-to-end
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[10.5px] text-white/60 font-mono border-t border-white/10 pt-2.5">
                        <span>1. Room Builder</span>
                        <span>2. Mobile Photo Quotas</span>
                        <span>3. Audit Reports</span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Key Takeaways */}
                <div className="p-4 bg-[#F8F9FC] border border-[#E2E5ED] rounded-2xl space-y-2 text-[12.5px]">
                  <span className="font-bold text-[#0F172A] block items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#402291]" />
                    <span>What you will discover in this tour:</span>
                  </span>
                  <ul className="space-y-1.5 text-[#475467] pl-1">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-[#8C6FCF] shrink-0 mt-0.5" />
                      <span>How admins set start/end time windows and photo verification quotas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-[#8C6FCF] shrink-0 mt-0.5" />
                      <span>How field volunteers submit direct camera photos via 15-min signed S3 URLs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-[#8C6FCF] shrink-0 mt-0.5" />
                      <span>How completion gates generate tamper-evident PDF audit reports automatically.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-1 text-center">
                  <button
                    onClick={() => setActiveTab('request_demo')}
                    className="w-full py-3 text-[13.5px] font-bold text-white bg-gradient-to-r from-[#402291] to-[#3160B7] rounded-xl hover:opacity-95 transition-opacity"
                  >
                    Ready for a custom setup? Book Live Demo
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F8F9FC] border-t border-[#E2E5ED] flex items-center justify-between text-[12px] text-[#667085]">
          <span className="font-medium">
            Trusted by NGOs, municipal teams & event organizers
          </span>
          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="px-4 py-1.5 font-semibold text-[#402291] hover:text-[#28226E] bg-white border border-[#E2E5ED] rounded-xl hover:bg-[#F5F3FC] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </motion.div>
    </div>
  );
}
