'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Scale, Building2, Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SaasAgreementPage() {
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
              <span>Master Service Agreement</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              SaaS Agreement Page
            </h1>

            <p className="text-[14px] text-[#475467] leading-relaxed max-w-2xl">
              This Master Service Agreement governs the subscription, use, and operational responsibilities for Eventclick&apos;s institutional verification and live streaming SaaS platform.
            </p>

            <div className="pt-2 flex items-center gap-4 text-[12px] text-[#667085] border-t border-[#F1F5F9]">
              <span>Last Updated: <strong className="text-[#0F172A]">{lastUpdated}</strong></span>
              <span>•</span>
              <span>Agreement Type: <strong className="text-[#3160B7]">Institutional & Enterprise SaaS</strong></span>
            </div>
          </div>

          {/* Quick Summary Cards */}
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

          {/* Body Policy Content */}
          <div className="bg-white border border-[#E2E5ED] rounded-2xl p-6 md:p-10 shadow-xs space-y-8 text-[14px] text-[#334155] leading-relaxed">

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">1</span>
                <span>Parties & Scope</span>
              </h2>
              <p>
                This Agreement is entered into between Eventclick (Next Venture Community & Enterprise Solutions, herein &quot;Provider&quot;) and the subscribing organization (herein &quot;Customer&quot;). It governs the Customer&apos;s use of the Eventclick SaaS platform, including live event streaming, geotagged photo verification, attendance tracking, and compliance reporting.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">2</span>
                <span>Subscription & Pricing</span>
              </h2>
              <p>
                Eventclick offers tiered subscriptions based on organizational size, event volume, and feature access. Pricing is determined at the time of subscription and may be subject to annual review. All fees are non-refundable except as expressly provided in this Agreement or as required by applicable law.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Subscription fees are billed in advance on a monthly or annual basis.</li>
                <li>Overage charges may apply for storage, streaming minutes, or report generation exceeding plan limits.</li>
                <li>Prices are subject to change with 30 days&apos; prior notice to the Customer.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">3</span>
                <span>Account Governance & User Management</span>
              </h2>
              <p>
                The Customer is responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Maintaining the confidentiality of administrative account credentials.</li>
                <li>Provisioning and deprovisioning user access in a timely manner.</li>
                <li>Ensuring that user roles (NGO Admin, Event Admin, Volunteer) are assigned correctly and reflect actual job responsibilities.</li>
                <li>Notifying Eventclick promptly of any unauthorized access or suspected security incidents.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">4</span>
                <span>Acceptable Use & Geotag Integrity</span>
              </h2>
              <p>
                The Customer agrees to use Eventclick strictly for lawful operational verification and donor transparency. Prohibited activities include:
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

            {/* Section 5 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">5</span>
                <span>Intellectual Property & Data Ownership</span>
              </h2>
              <p>
                <strong>Client Data Ownership:</strong> The Customer retains exclusive ownership and copyright over all field photos, beneficiary intake forms, event room video recordings, and audit logs uploaded to or generated by the platform. Eventclick asserts no ownership claim over Customer evidence data.
              </p>
              <p>
                <strong>Platform IP:</strong> Eventclick retains all rights, title, and interest in and to the platform code, user interface, brand trademarks, and streaming architecture.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">6</span>
                <span>Service Level Agreement (SLA)</span>
              </h2>
              <p>
                Eventclick targets a 99.9% monthly uptime SLA for live video broadcasting and API endpoint access. Scheduled maintenance windows are communicated at least 48 hours in advance and executed outside peak field event hours. Service credits are available in accordance with the standalone SLA document.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">7</span>
                <span>Limitation of Liability & Indemnification</span>
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Eventclick shall not be liable for indirect, incidental, consequential, or punitive damages resulting from field connectivity interruptions, cellular network degradation, or unauthorized account access due to Customer credential compromise. Eventclick&apos;s total liability under this Agreement shall not exceed the total fees paid by the Customer during the 12 months preceding the claim.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">8</span>
                <span>Governing Law & Dispute Resolution</span>
              </h2>
              <p>
                This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which the Customer entity is registered, without regard to conflict of law principles. Any legal disputes shall be resolved through binding arbitration or mediation before escalation to competent courts.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#3160B7]/10 text-[#3160B7] flex items-center justify-center text-[13px] font-bold">9</span>
                <span>Contact & Notices</span>
              </h2>
              <p>
                Legal notices, contract amendments, and SLA communications should be directed to:
              </p>
              <div className="p-4 bg-[#F5F3FC] border border-[#8C6FCF]/20 rounded-xl text-[13px] text-[#402291] space-y-1 font-mono">
                <p><strong>Email:</strong> legal@eventclick.live</p>
                <p><strong>Security Portal:</strong> https://eventclick.live/security</p>
                <p><strong>Response Time:</strong> Within 3 business days for contract matters.</p>
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
