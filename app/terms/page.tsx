'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowLeft, FileText, Scale, CheckCircle2, AlertCircle, Building2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3160B7]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3160B7]/10 text-[#3160B7] text-[12px] font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>SaaS Master Service Agreement</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              Terms of Service
            </h1>

            <p className="text-[14px] text-[#475467] leading-relaxed max-w-2xl">
              Terms and conditions governing the use of the Eventclick platform, live video streaming infrastructure, geotagged photo proof engines, and institutional verification services.
            </p>

            <div className="pt-2 flex items-center gap-4 text-[12px] text-[#667085] border-t border-[#F1F5F9]">
              <span>Last Updated: <strong className="text-[#0F172A]">{lastUpdated}</strong></span>
              <span>•</span>
              <span>Service Tier: <strong className="text-[#3160B7]">Institutional & Enterprise SaaS</strong></span>
            </div>
          </div>

          {/* Quick Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#402291] font-semibold text-[13px]">
                <Building2 className="w-4 h-4" />
                <span>Account Governance</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Organizations are responsible for managing staff access, user roles, and field credential provisioning.
              </p>
            </div>

            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#0891B2] font-semibold text-[13px]">
                <CheckCircle2 className="w-4 h-4" />
                <span>99.9% Uptime SLA</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                High-availability stream failover engine engineered for critical field operations and broadcasts.
              </p>
            </div>

            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#059669] font-semibold text-[13px]">
                <Lock className="w-4 h-4" />
                <span>Data Ownership</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Clients retain 100% intellectual property rights and full ownership over all captured evidence media.
              </p>
            </div>
          </div>

          {/* Terms Content Body */}
          <div className="bg-white border border-[#E2E5ED] rounded-2xl p-6 md:p-10 shadow-xs space-y-8 text-[14px] text-[#334155] leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">1</span>
                <span>Acceptance of Agreement</span>
              </h2>
              <p>
                By creating an account, accessing the Eventclick platform, deploying live streaming event rooms, or submitting verification forms, you agree to be legally bound by this Master Service Agreement (&quot;Terms&quot;). If you represent an organization (NGO, CSR foundation, government department, or enterprise), you confirm you hold full legal authority to bind that entity.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">2</span>
                <span>Services Description & Operational Boundaries</span>
              </h2>
              <p>
                Eventclick provides cloud-based software-as-a-service (SaaS) tools for verifying field event execution, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Real-time WebRTC audio/video broadcasting and spectator room management.</li>
                <li>Geotagged and timestamped camera photo capture for site attendance verification.</li>
                <li>Automated quality control completion gates and required photo quota evaluations.</li>
                <li>Role-based access control (RBAC) separating Org Admins, Event Admins, and Field Volunteers.</li>
                <li>Downloadable compliance audit reports and media archiving.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">3</span>
                <span>Acceptable Use & Prohibited Conduct</span>
              </h2>
              <p>
                You agree to utilize Eventclick strictly for lawful operational verification and donor transparency. You are explicitly prohibited from:
              </p>
              <div className="p-4 bg-[#FEF2F2] border border-[#FCA5A5]/60 rounded-xl space-y-2 text-[13px] text-[#991B1B]">
                <div className="font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#EF4444]" />
                  <span>Prohibited System Activities</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-[#7F1D1D]">
                  <li>Falsifying, spoofing, or tampering with camera geotags, GPS coordinates, or intake timestamps.</li>
                  <li>Broadcasting unauthorized, obscene, or illegal video content through LiveKit stream rooms.</li>
                  <li>Attempting to bypass role-based access controls or reverse-engineer JWT authorization tokens.</li>
                  <li>Sharing session refresh cookies or administrative account credentials across unauthorized users.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">4</span>
                <span>Intellectual Property & Content Ownership</span>
              </h2>
              <p>
                <strong>Client Data Ownership:</strong> Subscribing organizations retain exclusive ownership and copyright over all field photos, beneficiary intake forms, event room video recordings, and audit logs uploaded to or generated by the platform. Eventclick asserts no ownership claim over client evidence data.
              </p>
              <p>
                <strong>Platform IP:</strong> Eventclick retains all rights, title, and interest in and to the platform code, user interface, brand trademarks, and streaming architecture.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">5</span>
                <span>Service Level Agreement (SLA) & Availability</span>
              </h2>
              <p>
                Eventclick targets a 99.9% monthly uptime SLA for live video broadcasting and API endpoint access. Scheduled maintenance windows are communicated at least 48 hours in advance and executed outside peak field event hours.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">6</span>
                <span>Limitation of Liability & Indemnification</span>
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Eventclick shall not be liable for indirect, incidental, consequential, or punitive damages resulting from field connectivity interruptions, cellular network degradation, or unauthorized account access due to client credential compromise.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">7</span>
                <span>Governing Law & Dispute Resolution</span>
              </h2>
              <p>
                This agreement shall be governed by and construed in accordance with the laws of the state of jurisdiction, without regard to conflict of law principles. Any legal disputes shall be resolved through binding arbitration.
              </p>
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
