'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Lock, FileText, CheckCircle2, Clock, Eye, Server, UserCheck, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 27, 2026";

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#1D2939] selection:bg-[#8C6FCF]/20 selection:text-[#402291]">
      {/* Top Header */}
      <header className="bg-white border-b border-[#E2E5ED] sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#402291] hover:text-[#3160B7] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Eventclick</span>
          </Link>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#402291]" />
            <span className="font-heading font-semibold text-lg text-[#0F172A]">Eventclick</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* Document Title Banner */}
          <div className="bg-white border border-[#E2E5ED] rounded-2xl p-6 md:p-8 shadow-xs space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#402291]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#402291]/10 text-[#402291] text-[12px] font-semibold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>SaaS Data Protection Framework</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              Privacy Policy & Data Security Statement
            </h1>

            <p className="text-[14px] text-[#475467] leading-relaxed max-w-2xl">
              How Eventclick collects, processes, encrypts, and protects sensitive field event data, participant media records, and audit logs for NGOs, CSR programs, and enterprise clients.
            </p>

            <div className="pt-2 flex items-center gap-4 text-[12px] text-[#667085] border-t border-[#F1F5F9]">
              <span>Last Updated: <strong className="text-[#0F172A]">{lastUpdated}</strong></span>
              <span>•</span>
              <span>Compliance: <strong className="text-[#166534]">GDPR & Institutional NGO Standard</strong></span>
            </div>
          </div>

          {/* Quick Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#402291] font-semibold text-[13px]">
                <Clock className="w-4 h-4" />
                <span>15-Min Expiring Presigned Media</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Attendance photos are stored in isolated private buckets with cryptographically signed expiring URLs.
              </p>
            </div>

            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#0891B2] font-semibold text-[13px]">
                <Server className="w-4 h-4" />
                <span>Zero-Trust Auth & Encryption</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Short-lived JWT tokens and single-use refresh rotation defend against credential replay attacks.
              </p>
            </div>

            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#059669] font-semibold text-[13px]">
                <UserCheck className="w-4 h-4" />
                <span>Strict RBAC Isolation</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Field volunteers can only access active room forms; organizational data is strictly gated by role.
              </p>
            </div>
          </div>

          {/* Body Policy Content */}
          <div className="bg-white border border-[#E2E5ED] rounded-2xl p-6 md:p-10 shadow-xs space-y-8 text-[14px] text-[#334155] leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">1</span>
                <span>Information We Collect</span>
              </h2>
              <p>
                To provide verifiable real-time field event execution, live video streaming, and tamper-evident photo proof, Eventclick collects the following categories of data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li><strong>Account & Organization Profile Data:</strong> Full name, professional email address, organization name, assigned user role (Org Admin, Event Admin, or Field Volunteer), and authorization tokens.</li>
                <li><strong>Field Verification Media:</strong> Geotagged camera photos captured during on-site participant intake, event room photo quotas, and live video stream metadata (WebRTC stream logs, duration, and participant counts).</li>
                <li><strong>Participant Intake Records:</strong> Form fields defined by event organizers (e.g. attendee signatures, verification status, intake timestamps, and location GPS coordinates).</li>
                <li><strong>Technical Session Metadata:</strong> IP addresses, browser user agent strings, session refresh tokens (`httpOnly` secure cookies), and API audit logs.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">2</span>
                <span>How We Use Your Data</span>
              </h2>
              <p>
                Eventclick strictly utilizes collected information for operational, verification, and audit compliance purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Establishing verifiable evidence of field event completion for donor, sponsor, and institutional auditor review.</li>
                <li>Facilitating ultra-low latency LiveKit video broadcasts and room streaming failover.</li>
                <li>Enforcing role-based access control (RBAC) to ensure volunteers only access active event rooms.</li>
                <li>Generating downloadable, tamper-evident compliance audit reports.</li>
                <li>Detecting and preventing unauthorized access attempts via single-use token rotation and replay revocation.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">3</span>
                <span>Media Privacy & Storage Encryption</span>
              </h2>
              <p>
                Unlike public video platforms, Eventclick prioritizes the privacy of field workers and beneficiaries:
              </p>
              <div className="p-4 bg-[#F8F9FC] border border-[#E2E5ED] rounded-xl space-y-2">
                <div className="font-semibold text-[#0F172A] flex items-center gap-2 text-[13px]">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span>Private Storage Buckets & Time-Bound Links</span>
                </div>
                <p className="text-[13px] text-[#475467]">
                  All evidence photo captures and recorded stream files are stored in private cloud storage buckets with public access strictly blocked. Media access is granted exclusively through 15-minute cryptographically signed URLs (AWS SigV4). Once expired, links cannot be reused or shared publicly.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">4</span>
                <span>Data Retention & Deletion Rights</span>
              </h2>
              <p>
                Organizations retain full ownership of their event logs and media records:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li><strong>Retention Period:</strong> Active event media is retained for the duration specified by the subscribing organization&apos;s retention policy (default 365 days for audit compliance).</li>
                <li><strong>Right to Erasure:</strong> Organization Administrators may request complete deletion of closed event rooms, participant records, and stored photos at any time.</li>
                <li><strong>Export Rights:</strong> All audit trails and attendance logs can be exported in standardized CSV or PDF format prior to account termination.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">5</span>
                <span>Third-Party Subprocessors</span>
              </h2>
              <p>
                To deliver enterprise-grade performance, Eventclick integrates with trusted infrastructure providers who comply with stringent security standards:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-[#475467]">
                <li><strong>LiveKit Cloud:</strong> Real-time WebRTC audio/video broadcasting.</li>
                <li><strong>Amazon Web Services (AWS S3):</strong> Encrypted private media storage.</li>
                <li><strong>Cloudflare:</strong> Global CDN edge routing, SSL encryption, and DDoS mitigation.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">6</span>
                <span>Enterprise Data Processing Agreement</span>
              </h2>
              <p>
                For enterprise customers and EU data controllers requiring a formal Data Processing Agreement under GDPR Article 28, please review our dedicated DPA:
              </p>
              <div className="p-4 bg-[#F5F3FC] border border-[#8C6FCF]/20 rounded-xl text-[13px] text-[#402291]">
                <p className="font-semibold">📋 GDPR & Data Framework Page</p>
                <p className="text-[#475467] mt-1">
                  Defines controller/processor roles, subprocessor list, data transfer safeguards, and data subject rights assistance procedures.
                </p>
                <Link href="/gdpr-dpa" className="inline-flex items-center gap-1.5 mt-2 text-[#402291] font-semibold hover:underline">
                  <span>View DPA</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">7</span>
                <span>Contact Our Data Protection Officer</span>
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to exercise data subject rights, contact our security team:
              </p>
              <div className="p-4 bg-[#F5F3FC] border border-[#8C6FCF]/20 rounded-xl text-[13px] text-[#402291] space-y-1 font-mono">
                <p><strong>Email:</strong> privacy@eventclick.live</p>
                <p><strong>Security Portal:</strong> https://eventclick.live/security</p>
                <p><strong>Response Time:</strong> Within 24 business hours</p>
              </div>
            </section>

          </div>

          <div className="text-center pt-4">
            <Link 
              href="/"
              className="px-6 py-2.5 bg-[#402291] text-white font-medium text-[13px] rounded-xl hover:bg-[#3160B7] transition-all inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Eventclick Home</span>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
