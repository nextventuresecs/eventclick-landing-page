'use client';

import { useState } from 'react';
import { 
  Shield, 
  KeyRound, 
  RotateCw, 
  Lock, 
  Clock, 
  FileCheck2, 
  ShieldCheck,
  CheckCircle2,
  EyeOff,
  Building2,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SecuritySection() {
  const [activeTab, setActiveTab] = useState<'session' | 'privacy' | 'audit'>('session');

  const trustPillars = [
    {
      title: "Bank-Grade Session Protection",
      subtitle: "Short-lived tokens with httpOnly cookie shields",
      description: "User authentication relies on short-lived encrypted memory access tokens and secure, httpOnly, SameSite cookie refresh handling to prevent token theft.",
      icon: KeyRound,
      badge: "Zero-Trust Auth"
    },
    {
      title: "Single-Use Rotation & Replay Defense",
      subtitle: "Instant session family revocation on stale token reuse",
      description: "Every refresh operation invalidates stale credentials and issues fresh single-use keys. Any attempt to reuse spent tokens instantly revokes the session family.",
      icon: RotateCw,
      badge: "Replay Prevention"
    },
    {
      title: "Time-Bound Encrypted Media Links",
      subtitle: "15-minute expiring presigned links for photo proof",
      description: "Sensitive field attendance media and participant photo records are never exposed publicly. Access is strictly granted via time-limited, cryptographically signed links.",
      icon: Clock,
      badge: "Privacy First"
    },
    {
      title: "Institutional Role-Based Governance",
      subtitle: "Multi-tier endpoint authorization controls",
      description: "Organization Executives hold strategic management rights, Event Coordinators control live rooms and forms, and Field Volunteers are limited to active verification.",
      icon: Lock,
      badge: "RBAC Compliance"
    },
    {
      title: "Strict Payload & Schema Validation",
      subtitle: "Automated input sanitization on all API routes",
      description: "All incoming form submissions, API payloads, and configuration settings pass through strict runtime schema validation before processing to guarantee data integrity.",
      icon: FileCheck2,
      badge: "Data Integrity"
    },
    {
      title: "Tamper-Evident Audit Archiving",
      subtitle: "Complete verifiable history for sponsors & auditors",
      description: "Every room creation, stream session, photo submission, and completion gate approval is logged into an immutable, audit-ready event lifecycle record.",
      icon: FileText,
      badge: "Audit Ready"
    }
  ];

  const tabs = [
    { id: 'session', label: 'Session Defense' },
    { id: 'privacy', label: 'Media Privacy' },
    { id: 'audit', label: 'Audit Compliance' }
  ];

  return (
    <section id="security" className="relative py-24 md:py-32 bg-[#FAFAFC] overflow-hidden">
      {/* Subtle Apple-style Background Blur */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#402291]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#3160B7]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] text-[#1D1D1F] text-[13px] font-semibold tracking-wide">
            <Shield className="w-4 h-4 text-[#402291]" />
            <span>Enterprise Data Protection</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1D1D1F] tracking-tight leading-tight">
            Built to institutional{' '}
            <span className="bg-gradient-to-r from-[#402291] to-[#3160B7] bg-clip-text text-transparent">
              security & privacy
            </span> standards.
          </h2>
          
          <p className="text-[16px] md:text-[18px] text-[#86868B] leading-relaxed max-w-2xl mx-auto font-medium">
            Zero-trust authentication, cryptographic media signing, and tamper-resistant audit logs ensure your field data is completely protected.
          </p>
        </motion.div>

        {/* Security Cards Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
          {trustPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 20
                }}
                className="bg-white rounded-[28px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 flex flex-col h-full group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Icon className="w-6 h-6 text-[#1D1D1F]" />
                </div>
                
                <h3 className="font-heading font-bold text-[18px] text-[#1D1D1F] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] font-semibold text-[#402291] mb-4">
                  {item.subtitle}
                </p>
                
                <p className="text-[14.5px] text-[#86868B] leading-relaxed flex-grow">
                  {item.description}
                </p>

                <div className="pt-6 mt-6 border-t border-black/[0.04] flex items-center justify-between">
                  <span className="text-[12px] font-medium text-[#1D1D1F] bg-[#F5F5F7] px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#10B981]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Security & Compliance Inspector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-[13px] font-semibold text-[#402291] uppercase tracking-wider">
                Trust Assurance Inspector
              </span>
              <h3 className="font-heading font-bold text-[24px] text-[#1D1D1F]">
                Explore Governance Layers
              </h3>
            </div>

            {/* iOS Style Segmented Control */}
            <div className="flex items-center p-1.5 bg-black/[0.04] rounded-full relative">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative px-5 py-2.5 text-[14px] font-medium rounded-full transition-colors z-10 ${
                    activeTab === tab.id ? 'text-[#1D1D1F]' : 'text-[#86868B] hover:text-[#1D1D1F]'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/[0.04]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="w-full relative min-h-[220px]">
              <AnimatePresence mode="wait">
                
                {activeTab === 'session' && (
                  <motion.div 
                    key="session"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  >
                    <div className="p-6 bg-white/80 backdrop-blur-xl border border-black/[0.04] shadow-sm rounded-[24px] space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#1D1D1F] flex items-center gap-2">
                          <KeyRound className="w-5 h-5 text-[#402291]" />
                          Token Rotation
                        </span>
                        <span className="bg-[#E8F5E9] text-[#10B981] px-2.5 py-1 rounded-full text-[12px] font-medium">
                          Active Shield
                        </span>
                      </div>
                      <p className="text-[#86868B] text-[14px] leading-relaxed">
                        Access tokens expire every 15 minutes. Every refresh request rotates the token pair and invalidates old credentials automatically.
                      </p>
                      <div className="p-3 bg-[#F5F5F7] rounded-[16px] font-mono text-[12px] text-[#1D1D1F] font-medium flex items-center justify-between">
                        <span>httpOnly; SameSite=Strict</span>
                        <span className="text-[#10B981]">✓ Encrypted</span>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-[#10B981]/10 to-[#059669]/10 border border-[#10B981]/20 rounded-[24px] space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#059669] flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5" />
                          Replay Revocation
                        </span>
                        <span className="bg-white text-[#059669] px-2.5 py-1 rounded-full text-[12px] font-medium shadow-sm">
                          Auto-Revoke
                        </span>
                      </div>
                      <p className="text-[#065F46] text-[14px] leading-relaxed">
                        If an attacker attempts to reuse a spent token, the system instantly revokes the entire session family.
                      </p>
                      <div className="p-3 bg-white/50 backdrop-blur-sm rounded-[16px] font-mono text-[12px] text-[#059669] font-medium flex items-center justify-between">
                        <span>Replay Guard</span>
                        <span>100% Protected</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'privacy' && (
                  <motion.div 
                    key="privacy"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  >
                    <div className="p-6 bg-white/80 backdrop-blur-xl border border-black/[0.04] shadow-sm rounded-[24px] space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#1D1D1F] flex items-center gap-2">
                          <EyeOff className="w-5 h-5 text-[#402291]" />
                          Zero Exposure
                        </span>
                        <span className="bg-[#E8F5E9] text-[#10B981] px-2.5 py-1 rounded-full text-[12px] font-medium">
                          Private Cloud
                        </span>
                      </div>
                      <p className="text-[#86868B] text-[14px] leading-relaxed">
                        Attendance media is stored in isolated private cloud storage. Unauthenticated public access is strictly blocked.
                      </p>
                      <div className="p-3 bg-[#F5F5F7] rounded-[16px] font-mono text-[12px] text-[#1D1D1F] font-medium flex items-center justify-between">
                        <span>S3 Bucket Policy</span>
                        <span className="text-[#10B981]">BlockPublic: TRUE</span>
                      </div>
                    </div>

                    <div className="p-6 bg-white/80 backdrop-blur-xl border border-black/[0.04] shadow-sm rounded-[24px] space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#1D1D1F] flex items-center gap-2">
                          <Clock className="w-5 h-5 text-[#402291]" />
                          Signed URLs
                        </span>
                        <span className="bg-[#EEF2FF] text-[#4F46E5] px-2.5 py-1 rounded-full text-[12px] font-medium">
                          15m Expiry
                        </span>
                      </div>
                      <p className="text-[#86868B] text-[14px] leading-relaxed">
                        Managers receive temporary pre-signed links that expire after 15 minutes, preventing unauthorized sharing.
                      </p>
                      <div className="p-3 bg-[#F5F5F7] rounded-[16px] font-mono text-[12px] text-[#1D1D1F] font-medium flex items-center justify-between">
                        <span>Verification</span>
                        <span className="text-[#4F46E5]">AWS SigV4</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'audit' && (
                  <motion.div 
                    key="audit"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  >
                    <div className="p-6 bg-white/80 backdrop-blur-xl border border-black/[0.04] shadow-sm rounded-[24px] space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#1D1D1F] flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-[#402291]" />
                          Donor Reporting
                        </span>
                        <span className="bg-[#E8F5E9] text-[#10B981] px-2.5 py-1 rounded-full text-[12px] font-medium">
                          Export Ready
                        </span>
                      </div>
                      <p className="text-[#86868B] text-[14px] leading-relaxed">
                        Generate comprehensive PDF compliance reports with verified room time logs, photo evidence, and check-in totals.
                      </p>
                      <div className="p-3 bg-[#F5F5F7] rounded-[16px] font-mono text-[12px] text-[#1D1D1F] font-medium flex items-center justify-between">
                        <span>Audit Format</span>
                        <span className="text-[#10B981]">Lifecycle Record</span>
                      </div>
                    </div>

                    <div className="p-6 bg-white/80 backdrop-blur-xl border border-black/[0.04] shadow-sm rounded-[24px] space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#1D1D1F] flex items-center gap-2">
                          <FileCheck2 className="w-5 h-5 text-[#402291]" />
                          Tamper-Evident
                        </span>
                        <span className="bg-[#EEF2FF] text-[#4F46E5] px-2.5 py-1 rounded-full text-[12px] font-medium">
                          Immutable
                        </span>
                      </div>
                      <p className="text-[#86868B] text-[14px] leading-relaxed">
                        All activity and verification steps are timestamped and tied to verified account IDs for absolute accountability.
                      </p>
                      <div className="p-3 bg-[#F5F5F7] rounded-[16px] font-mono text-[12px] text-[#1D1D1F] font-medium flex items-center justify-between">
                        <span>Log Status</span>
                        <span className="text-[#4F46E5]">Cryptographically Sealed</span>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
