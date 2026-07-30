'use client';

import { X, ShieldCheck, Scale, Lock, ExternalLink, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface PolicyModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function PolicyModal({ isOpen, type, onClose }: PolicyModalProps) {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#E2E5ED] overflow-hidden flex flex-col max-h-[85vh] z-10"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-[#F8F9FC] border-b border-[#E2E5ED] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
                isPrivacy ? 'bg-gradient-to-br from-[#402291] to-[#3160B7]' : 'bg-gradient-to-br from-[#3160B7] to-[#0891B2]'
              }`}>
                {isPrivacy ? <Lock className="w-5 h-5" /> : <Scale className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-[#0F172A]">
                  {isPrivacy ? 'Eventclick Privacy Policy' : 'Eventclick Terms of Service'}
                </h3>
                <p className="text-[12px] text-[#667085]">
                  {isPrivacy ? 'Data Protection & Security Statement' : 'Master Service Agreement for Enterprise SaaS'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#667085] hover:text-[#0F172A] hover:bg-black/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-[13px] text-[#334155] leading-relaxed">
            {isPrivacy ? (
              <>
                <div className="p-4 bg-[#F5F3FC] border border-[#8C6FCF]/20 rounded-xl space-y-1 text-[#402291]">
                  <strong className="block text-[14px]">🔐 Zero-Trust Data Protection Commitment</strong>
                  <p className="text-[12px] text-[#475467]">
                    Eventclick protects field attendance photos using 15-minute expiring signed links, isolated private storage, and short-lived JWT token authorization.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[15px] text-[#0F172A]">1. Data Collection Scope</h4>
                  <p>
                    We collect account data (name, email, organization role), geotagged camera photos captured during on-site verification, participant intake forms, and WebRTC streaming session metadata.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[15px] text-[#0F172A]">2. Purpose & Use of Information</h4>
                  <p>
                    Information is strictly used to provide verifiable field execution proof for sponsors, calculate required photo quotas, manage live broadcasts, and generate tamper-evident audit reports.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[15px] text-[#0F172A]">3. Media Security & Presigned URLs</h4>
                  <p>
                    Photos and stream archives are stored in private cloud buckets with public access strictly blocked. Media access is provided via time-bound 15-minute pre-signed links.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[15px] text-[#0F172A]">4. Retention & Deletion Rights</h4>
                  <p>
                    Organizations retain complete ownership over their records and may request data deletion or CSV/PDF exports at any time.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 bg-[#ECFEFF] border border-[#67E8F9]/40 rounded-xl space-y-1 text-[#0E7490]">
                  <strong className="block text-[14px]">📜 SaaS Master Agreement Summary</strong>
                  <p className="text-[12px] text-[#475467]">
                    Governing the deployment of live stream event rooms, geotagged proof quotas, and role-based operational permissions.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[15px] text-[#0F172A]">1. Service Scope & Roles</h4>
                  <p>
                    Eventclick grants organizations access to real-time event verification, LiveKit video broadcasting, and attendance tracking structured across Org Admin, Event Admin, and Field Volunteer roles.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[15px] text-[#0F172A]">2. Acceptable Use & Geotag Integrity</h4>
                  <p>
                    Users must not tamper with GPS location coordinates, falsify photo submissions, or broadcast unauthorized stream content. Falsification results in immediate account suspension.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[15px] text-[#0F172A]">3. IP & Media Ownership</h4>
                  <p>
                    Clients retain 100% intellectual property ownership over all uploaded media, photo evidence, and attendee form records.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[15px] text-[#0F172A]">4. Service Availability SLA</h4>
                  <p>
                    Eventclick maintains a 99.9% uptime target for live event streaming and verified photo upload processing.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Footer Bar with Link to Full Page */}
          <div className="px-6 py-4 bg-[#F8F9FC] border-t border-[#E2E5ED] flex items-center justify-between shrink-0">
            <Link
              href={isPrivacy ? '/privacy' : '/terms'}
              onClick={onClose}
              className="text-[12px] font-semibold text-[#402291] hover:text-[#3160B7] inline-flex items-center gap-1.5"
            >
              <span>Read Full Dedicated Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#402291] text-white text-[13px] font-medium rounded-xl hover:bg-[#3160B7] transition-all"
            >
              Got it, thanks
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
