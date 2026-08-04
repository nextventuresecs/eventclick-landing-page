'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Scale, CheckCircle2, AlertCircle, Clock, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SlaPage() {
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0891B2]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0891B2]/10 text-[#0891B2] text-[12px] font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Service Level Agreement</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              Service Level Agreement
            </h1>

            <p className="text-[14px] text-[#475467] leading-relaxed max-w-2xl">
              This SLA defines the performance standards, availability commitments, and support response times applicable to Eventclick&apos;s institutional verification and live streaming platform.
            </p>

            <div className="pt-2 flex items-center gap-4 text-[12px] text-[#667085] border-t border-[#F1F5F9]">
              <span>Last Updated: <strong className="text-[#0F172A]">{lastUpdated}</strong></span>
              <span>•</span>
              <span>Commitment: <strong className="text-[#166534]">99.9% Uptime Target</strong></span>
            </div>
          </div>

          {/* Quick Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#402291] font-semibold text-[13px]">
                <Server className="w-4 h-4" />
                <span>99.9% Uptime Target</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                API and live streaming services target 99.9% monthly availability, excluding scheduled maintenance.
              </p>
            </div>

            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#0891B2] font-semibold text-[13px]">
                <Clock className="w-4 h-4" />
                <span>Support Response Times</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Critical incidents acknowledged within 1 hour; general inquiries within 4 business hours.
              </p>
            </div>

            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#059669] font-semibold text-[13px]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Service Credits</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Pro-rated account credits issued for verified downtime exceeding the monthly allowance.
              </p>
            </div>
          </div>

          {/* Body Policy Content */}
          <div className="bg-white border border-[#E2E5ED] rounded-2xl p-6 md:p-10 shadow-xs space-y-8 text-[14px] text-[#334155] leading-relaxed">

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#0891B2]/10 text-[#0891B2] flex items-center justify-center text-[13px] font-bold">1</span>
                <span>Service Commitment</span>
              </h2>
              <p>
                Eventclick commits to the following monthly availability targets for its production services:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px] border border-[#E2E5ED] rounded-xl overflow-hidden">
                  <thead className="bg-[#F8F9FC] text-[#0F172A]">
                    <tr>
                      <th className="text-left p-3 font-semibold">Service</th>
                      <th className="text-left p-3 font-semibold">Uptime Target</th>
                      <th className="text-left p-3 font-semibold">Maximum Downtime / Month</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E5ED]">
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">API Endpoints</td>
                      <td className="p-3">99.9%</td>
                      <td className="p-3">~43 minutes</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">LiveKit Streaming</td>
                      <td className="p-3">99.9%</td>
                      <td className="p-3">~43 minutes</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">Cloudflare Edge / CDN</td>
                      <td className="p-3">99.99%</td>
                      <td className="p-3">~4 minutes</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">Cloudflare R2 Storage</td>
                      <td className="p-3">99.99%</td>
                      <td className="p-3">~4 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] text-[#475467]">
                Uptime is measured via automated health checks (`/health` and `/ready` endpoints) and third-party monitoring. Downtime caused by scheduled maintenance, Customer actions, or Force Majeure events is excluded from SLA calculations.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#0891B2]/10 text-[#0891B2] flex items-center justify-center text-[13px] font-bold">2</span>
                <span>Measurement & Monitoring</span>
              </h2>
              <p>
                Eventclick monitors service availability using:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Internal health probes (`/health` for liveness, `/ready` for dependency readiness).</li>
                <li>External uptime monitors from Cloudflare and third-party providers.</li>
                <li>LiveKit Cloud status dashboards for streaming availability.</li>
                <li>Incident logs timestamped to the minute for credit calculations.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#0891B2]/10 text-[#0891B2] flex items-center justify-center text-[13px] font-bold">3</span>
                <span>Support Response Times</span>
              </h2>
              <p>
                Eventclick provides support during business hours (09:00–18:00 UTC, Monday–Friday), excluding public holidays. Response targets are:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px] border border-[#E2E5ED] rounded-xl overflow-hidden">
                  <thead className="bg-[#F8F9FC] text-[#0F172A]">
                    <tr>
                      <th className="text-left p-3 font-semibold">Severity</th>
                      <th className="text-left p-3 font-semibold">Definition</th>
                      <th className="text-left p-3 font-semibold">Target Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E5ED]">
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">Critical (P1)</td>
                      <td className="p-3">Platform completely unavailable; live events cannot proceed</td>
                      <td className="p-3">1 hour</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">High (P2)</td>
                      <td className="p-3">Major feature degraded; workaround available but impacts field operations</td>
                      <td className="p-3">4 hours</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">Medium (P3)</td>
                      <td className="p-3">Minor issue affecting usability; no workaround required</td>
                      <td className="p-3">1 business day</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">Low (P4)</td>
                      <td className="p-3">General inquiry, feature request, or documentation issue</td>
                      <td className="p-3">3 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#0891B2]/10 text-[#0891B2] flex items-center justify-center text-[13px] font-bold">4</span>
                <span>Incident Classification</span>
              </h2>
              <p>
                Incidents are classified based on impact and urgency. Eventclick maintains an incident management process with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Real-time incident status page updates for P1 and P2 incidents.</li>
                <li>Post-incident reviews for all P1 and P2 incidents within 5 business days.</li>
                <li>Communication via email and in-app notifications to affected organization administrators.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#0891B2]/10 text-[#0891B2] flex items-center justify-center text-[13px] font-bold">5</span>
                <span>Service Credits</span>
              </h2>
              <p>
                If Eventclick fails to meet the monthly uptime target, the Customer is eligible for service credits calculated as follows:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px] border border-[#E2E5ED] rounded-xl overflow-hidden">
                  <thead className="bg-[#F8F9FC] text-[#0F172A]">
                    <tr>
                      <th className="text-left p-3 font-semibold">Monthly Uptime</th>
                      <th className="text-left p-3 font-semibold">Service Credit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E5ED]">
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">99.0% – 99.9%</td>
                      <td className="p-3">5% of monthly fee</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">95.0% – 98.9%</td>
                      <td className="p-3">15% of monthly fee</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">Below 95.0%</td>
                      <td className="p-3">30% of monthly fee</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] text-[#475467]">
                Credits are applied to the Customer&apos;s next invoice. Claims must be submitted within 30 days of the incident month. Credits are the sole remedy for SLA breaches.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#0891B2]/10 text-[#0891B2] flex items-center justify-center text-[13px] font-bold">6</span>
                <span>Exclusions & Limitations</span>
              </h2>
              <p>
                The SLA does not apply to downtime or performance issues resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Force Majeure events (natural disasters, war, terrorism, civil unrest).</li>
                <li>Customer or third-party actions, including misconfiguration, abuse, or unauthorized access.</li>
                <li>Scheduled maintenance communicated at least 48 hours in advance.</li>
                <li>Customer-side network, ISP, or browser compatibility issues.</li>
                <li>Bugs or issues in beta or preview features explicitly marked as such.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#0891B2]/10 text-[#0891B2] flex items-center justify-center text-[13px] font-bold">7</span>
                <span>SLA Modifications</span>
              </h2>
              <p>
                Eventclick may update this SLA with 30 days&apos; prior notice. Material reductions in service commitments will be communicated via email and in-app notification. Customers may terminate their subscription without penalty if they do not accept the revised SLA.
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
