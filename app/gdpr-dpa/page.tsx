'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Scale, FileText, CheckCircle2, Server, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GdprDpaPage() {
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
              <Scale className="w-3.5 h-3.5" />
              <span>GDPR & Data Processing Agreement</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              GDPR & Data Framework Page
            </h1>

            <p className="text-[14px] text-[#475467] leading-relaxed max-w-2xl">
              This Data Processing Agreement (DPA) defines the roles, responsibilities, and safeguards applicable when Eventclick processes personal data on behalf of EU data controllers under the General Data Protection Regulation (GDPR).
            </p>

            <div className="pt-2 flex items-center gap-4 text-[12px] text-[#667085] border-t border-[#F1F5F9]">
              <span>Last Updated: <strong className="text-[#0F172A]">{lastUpdated}</strong></span>
              <span>•</span>
              <span>Framework: <strong className="text-[#166534]">EU GDPR / Standard Contractual Clauses</strong></span>
            </div>
          </div>

          {/* Quick Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#402291] font-semibold text-[13px]">
                <FileText className="w-4 h-4" />
                <span>Controller / Processor Roles</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Clear delineation of data responsibilities between organizations and Eventclick under GDPR Article 28.
              </p>
            </div>

            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#0891B2] font-semibold text-[13px]">
                <Server className="w-4 h-4" />
                <span>Subprocessor Transparency</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Full disclosure of infrastructure providers including LiveKit, Cloudflare R2, AWS, Resend, and Gotenberg.
              </p>
            </div>

            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#059669] font-semibold text-[13px]">
                <UserCheck className="w-4 h-4" />
                <span>Data Subject Rights</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Processes for access, rectification, erasure, portability, and objection requests within statutory timelines.
              </p>
            </div>
          </div>

          {/* Body Policy Content */}
          <div className="bg-white border border-[#E2E5ED] rounded-2xl p-6 md:p-10 shadow-xs space-y-8 text-[14px] text-[#334155] leading-relaxed">

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">1</span>
                <span>Definitions & Parties</span>
              </h2>
              <p>For the purposes of this Data Processing Agreement (DPA):</p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li><strong>Controller</strong> means the NGO, corporate CSR foundation, government department, or enterprise entity that subscribes to Eventclick and determines the purposes and means of processing personal data.</li>
                <li><strong>Processor</strong> means Eventclick (Next Venture Community & Enterprise Solutions), which processes personal data only on the Controller&apos;s documented instructions.</li>
                <li><strong>Data Subject</strong> means any identified or identifiable natural person whose personal data is processed through the platform, including field volunteers, event attendees, and beneficiaries.</li>
                <li><strong>Personal Data</strong> means any information relating to a Data Subject that is processed by Eventclick on behalf of the Controller, including names, emails, geotagged photos, attendance records, and live stream metadata.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">2</span>
                <span>Scope & Nature of Processing</span>
              </h2>
              <p>
                Eventclick processes personal data solely to provide the SaaS services described in the Master Service Agreement. The processing activities include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Account creation and authentication management (email, name, role assignment).</li>
                <li>Live event room orchestration and WebRTC stream coordination via LiveKit Cloud.</li>
                <li>Geotagged photo capture, storage, and presigned URL generation for attendance verification.</li>
                <li>Attendance form submission processing and audit report generation.</li>
                <li>Activity submission tracking and photo quota validation.</li>
                <li>Email notification dispatch via Resend for verification and password reset flows.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">3</span>
                <span>Processor Obligations</span>
              </h2>
              <p>Eventclick, as Processor, agrees to:</p>
              <div className="p-4 bg-[#F8F9FC] border border-[#E2E5ED] rounded-xl space-y-2">
                <div className="font-semibold text-[#0F172A] flex items-center gap-2 text-[13px]">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span>Security & Confidentiality</span>
                </div>
                <p className="text-[13px] text-[#475467]">
                  Implement and maintain appropriate technical and organizational measures including encryption in transit (TLS 1.3), encryption at rest (AES-256), role-based access control, and short-lived JWT token authorization.
                </p>
              </div>
              <div className="p-4 bg-[#F8F9FC] border border-[#E2E5ED] rounded-xl space-y-2">
                <div className="font-semibold text-[#0F172A] flex items-center gap-2 text-[13px]">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span>Subprocessor Management</span>
                </div>
                <p className="text-[13px] text-[#475467]">
                  Maintain a current list of subprocessors and inform the Controller of any intended changes, providing the Controller with the opportunity to object to such changes in accordance with Article 28(2) of the GDPR.
                </p>
              </div>
              <div className="p-4 bg-[#F8F9FC] border border-[#E2E5ED] rounded-xl space-y-2">
                <div className="font-semibold text-[#0F172A] flex items-center gap-2 text-[13px]">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span>Data Subject Rights Assistance</span>
                </div>
                <p className="text-[13px] text-[#475467]">
                  Assist the Controller, to the extent required by GDPR, in responding to Data Subject requests including access, rectification, erasure, restriction of processing, data portability, and objection. Response times shall be proportionate to the complexity of the request but shall not exceed 30 calendar days without Controller notification.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">4</span>
                <span>International Data Transfers</span>
              </h2>
              <p>
                Personal data may be processed in jurisdictions outside the European Economic Area (EEA). Eventclick ensures appropriate safeguards are in place for such transfers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li><strong>Standard Contractual Clauses (SCCs):</strong> Eventclick has executed the European Commission&apos;s standard contractual clauses with relevant subprocessors where required.</li>
                <li><strong>Adequacy Decisions:</strong> Where the destination country has received an adequacy decision from the European Commission, transfers may proceed without additional safeguards.</li>
                <li><strong>Supplementary Measures:</strong> Encryption at rest and in transit is applied universally, ensuring that personal data remains protected regardless of processing location.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">5</span>
                <span>Subprocessors</span>
              </h2>
              <p>
                The Controller grants Eventclick general authorization to engage the following subprocessors, each of which has entered into a data processing agreement with Eventclick:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px] border border-[#E2E5ED] rounded-xl overflow-hidden">
                  <thead className="bg-[#F8F9FC] text-[#0F172A]">
                    <tr>
                      <th className="text-left p-3 font-semibold">Subprocessor</th>
                      <th className="text-left p-3 font-semibold">Service</th>
                      <th className="text-left p-3 font-semibold">Location</th>
                      <th className="text-left p-3 font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E5ED]">
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">LiveKit Cloud</td>
                      <td className="p-3">WebRTC Streaming</td>
                      <td className="p-3">USA / Global</td>
                      <td className="p-3">Real-time video/audio broadcasting</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">Cloudflare R2</td>
                      <td className="p-3">Object Storage</td>
                      <td className="p-3">Global</td>
                      <td className="p-3">Encrypted private media storage</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">Amazon Web Services</td>
                      <td className="p-3">Cloud Infrastructure</td>
                      <td className="p-3">USA / EU</td>
                      <td className="p-3">Hosting, compute, and networking</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">Resend</td>
                      <td className="p-3">Transactional Email</td>
                      <td className="p-3">USA</td>
                      <td className="p-3">Verification and password reset emails</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-medium text-[#0F172A]">Gotenberg</td>
                      <td className="p-3">PDF Generation</td>
                      <td className="p-3">EU / Self-hosted</td>
                      <td className="p-3">Audit report PDF rendering</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">6</span>
                <span>Audit & Inspection Rights</span>
              </h2>
              <p>
                The Controller has the right to request documentation of Eventclick&apos;s security controls and processing activities. Upon reasonable notice (minimum 14 calendar days), Eventclick shall:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Provide evidence of compliance with this DPA and applicable GDPR provisions.</li>
                <li>Submit to an annual security audit conducted by a qualified third-party assessor, at the Controller&apos;s expense (if mutually agreed).</li>
                <li>Permit on-site or remote inspection of processing facilities, subject to reasonable confidentiality and security protocols.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">7</span>
                <span>Data Breach Notification</span>
              </h2>
              <p>
                Eventclick shall notify the Controller without undue delay upon becoming aware of a personal data breach affecting Controller data. Notification shall include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>The nature of the breach and categories / approximate number of Data Subjects affected.</li>
                <li>The likely consequences of the breach.</li>
                <li>Measures taken or proposed to mitigate the breach and its effects.</li>
                <li>Contact details of the Eventclick Data Protection Officer or designated contact.</li>
              </ul>
              <p className="text-[13px] text-[#475467]">
                Notification shall be provided within 72 hours of Eventclick becoming aware of the breach, or such shorter period as required by applicable law.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">8</span>
                <span>Term & Termination</span>
              </h2>
              <p>
                This DPA shall remain in effect for the duration of the Master Service Agreement. Upon termination, Eventclick shall, at the Controller&apos;s election:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Return all Personal Data to the Controller in a commonly used, machine-readable format within 30 days.</li>
                <li>Delete all remaining Personal Data from its systems and those of its subprocessors, providing written certification of deletion.</li>
                <li>Retain only such data as is required by applicable law, and notify the Controller of such retention obligation.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#402291]/10 text-[#402291] flex items-center justify-center text-[13px] font-bold">9</span>
                <span>Contact — Data Protection Officer</span>
              </h2>
              <p>
                For DPA-related inquiries, data subject rights requests, or breach notifications, contact our security team:
              </p>
              <div className="p-4 bg-[#F5F3FC] border border-[#8C6FCF]/20 rounded-xl text-[13px] text-[#402291] space-y-1 font-mono">
                <p><strong>Email:</strong> privacy@eventclick.live</p>
                <p><strong>Security Portal:</strong> https://eventclick.live/security</p>
                <p><strong>Response Time:</strong> Within 24 business hours for critical matters; 72 hours for standard inquiries.</p>
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
