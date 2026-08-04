'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Cookie, CheckCircle2, Settings2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CookiesPage() {
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#059669]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669]/10 text-[#059669] text-[12px] font-semibold uppercase tracking-wider">
              <Cookie className="w-3.5 h-3.5" />
              <span>Cookie Policy</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              Cookie Policy
            </h1>

            <p className="text-[14px] text-[#475467] leading-relaxed max-w-2xl">
              This Cookie Policy explains how Eventclick uses cookies and similar technologies across our marketing website and web application.
            </p>

            <div className="pt-2 flex items-center gap-4 text-[12px] text-[#667085] border-t border-[#F1F5F9]">
              <span>Last Updated: <strong className="text-[#0F172A]">{lastUpdated}</strong></span>
              <span>•</span>
              <span>Scope: <strong className="text-[#166534]">eventclick.live & app.eventclick.live</strong></span>
            </div>
          </div>

          {/* Quick Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#402291] font-semibold text-[13px]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Essential Only by Default</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Only strictly necessary cookies are active until you provide explicit consent.
              </p>
            </div>

            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#0891B2] font-semibold text-[13px]">
                <Settings2 className="w-4 h-4" />
                <span>Granular Preferences</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Choose which categories of cookies to allow. Preferences can be changed at any time.
              </p>
            </div>

            <div className="bg-white border border-[#E2E5ED] rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-[#059669] font-semibold text-[13px]">
                <ShieldCheck className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
              <p className="text-[12px] text-[#475467]">
                Consent is recorded in a first-party cookie scoped to .eventclick.live for consistent enforcement.
              </p>
            </div>
          </div>

          {/* Body Policy Content */}
          <div className="bg-white border border-[#E2E5ED] rounded-2xl p-6 md:p-10 shadow-xs space-y-8 text-[14px] text-[#334155] leading-relaxed">

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center text-[13px] font-bold">1</span>
                <span>What Are Cookies</span>
              </h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work more efficiently, to remember user preferences, and to provide information to the site owners. This policy covers cookies used on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li><strong>Marketing website:</strong> https://eventclick.live</li>
                <li><strong>Web application:</strong> https://app.eventclick.live</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center text-[13px] font-bold">2</span>
                <span>Essential Cookies</span>
              </h2>
              <p>
                These cookies are necessary for the website or application to function securely. They enable core functionality such as authentication, session management, and security. The application cannot function properly without these cookies.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px] border border-[#E2E5ED] rounded-xl overflow-hidden">
                  <thead className="bg-[#F8F9FC] text-[#0F172A]">
                    <tr>
                      <th className="text-left p-3 font-semibold">Cookie Name</th>
                      <th className="text-left p-3 font-semibold">Purpose</th>
                      <th className="text-left p-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E5ED]">
                    <tr className="text-[#475467]">
                      <td className="p-3 font-mono text-[#0F172A]">eventclick_consent</td>
                      <td className="p-3">Records your cookie consent preferences</td>
                      <td className="p-3">1 year</td>
                    </tr>
                    <tr className="text-[#475467]">
                      <td className="p-3 font-mono text-[#0F172A]">Eventclick_rt</td>
                      <td className="p-3">HTTP-only refresh token for authentication</td>
                      <td className="p-3">7 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center text-[13px] font-bold">3</span>
                <span>Analytical Cookies</span>
              </h2>
              <p>
                Analytical cookies help us understand how visitors interact with our website and application by collecting and reporting information anonymously. This helps us improve our services.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px] border border-[#E2E5ED] rounded-xl overflow-hidden">
                  <thead className="bg-[#F8F9FC] text-[#0F172A]">
                    <tr>
                      <th className="text-left p-3 font-semibold">Cookie / Service</th>
                      <th className="text-left p-3 font-semibold">Purpose</th>
                      <th className="text-left p-3 font-semibold">Provider</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E5ED]">
                    <tr className="text-[#475467]">
                      <td className="p-3 font-mono text-[#0F172A]">_ga, _gid, _gat</td>
                      <td className="p-3">Google Analytics — distinguishes unique users and throttles request rate</td>
                      <td className="p-3">Google LLC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] text-[#475467]">
                Analytical cookies are only activated after you provide explicit consent. If you decline, we will not collect analytics data.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center text-[13px] font-bold">4</span>
                <span>Marketing & Ad Cookies</span>
              </h2>
              <p>
                Marketing cookies are used to track visitors across websites to display relevant advertisements. Currently, Eventclick does not use marketing cookies on our marketing website or web application. This category is listed for transparency and future expansion.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center text-[13px] font-bold">5</span>
                <span>Third-Party Cookies</span>
              </h2>
              <p>
                Some third-party services embedded in our pages may set their own cookies. Eventclick does not control these cookies. We recommend reviewing the privacy policies of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li>Google LLC (Google Analytics)</li>
                <li>LiveKit Inc. (LiveKit Cloud streaming)</li>
                <li>Cloudflare Inc. (CDN and R2 storage)</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center text-[13px] font-bold">6</span>
                <span>Managing Preferences</span>
              </h2>
              <p>
                You can manage your cookie preferences at any time:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#475467]">
                <li><strong>Cookie Banner:</strong> Click the &quot;Customise&quot; button in the cookie banner to update your preferences.</li>
                <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings. Note that blocking essential cookies may break application functionality.</li>
                <li><strong>Google Analytics Opt-out:</strong> You can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#402291] hover:underline">Google Analytics Opt-out Browser Add-on</a>.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center text-[13px] font-bold">7</span>
                <span>Updates to This Policy</span>
              </h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. The updated version will be indicated by an updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <h2 className="font-heading font-semibold text-xl text-[#0F172A] flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center text-[13px] font-bold">8</span>
                <span>Contact</span>
              </h2>
              <p>
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="p-4 bg-[#F5F3FC] border border-[#8C6FCF]/20 rounded-xl text-[13px] text-[#402291] space-y-1 font-mono">
                <p><strong>Email:</strong> privacy@eventclick.live</p>
                <p><strong>Privacy Policy:</strong> <Link href="/privacy" className="hover:underline">https://eventclick.live/privacy</Link></p>
                <p><strong>GDPR DPA:</strong> <Link href="/gdpr-dpa" className="hover:underline">https://eventclick.live/gdpr-dpa</Link></p>
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
