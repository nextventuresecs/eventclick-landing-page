'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import { 
  Building2,
  Mail,
  User,
  Send,
  HelpCircle,
  CheckCircle2,
  MessageSquare,
  Presentation,
  TrendingUp,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { submitContactRequest, ContactSubmitError } from '@/lib/contact';

export default function ContactPageClient() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    orgName: '',
    supportType: 'Demo',
    additionalContext: '',
    consentGiven: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await submitContactRequest({ kind: 'support', ...formData });
      setSubmitted(true);
    } catch (err) {
      // The success state is reached only on an accepted request — this form
      // previously showed it unconditionally, sending nothing.
      setError(
        err instanceof ContactSubmitError
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3FC] text-[#1D2939] selection:bg-[#8C6FCF]/20 selection:text-[#402291] flex flex-col relative font-sans overflow-x-hidden">
      
      {/* Background ambient gradient to match landing page */}
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#8C6FCF]/20 to-transparent blur-[100px] mix-blend-multiply" />
        <div className="absolute -top-20 -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#3160B7]/15 to-transparent blur-[100px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenDemo={() => setDemoOpen(true)} />

        <main className="flex-grow flex flex-col relative z-10 w-full pt-[120px] sm:pt-[150px] pb-24">
          
          {/* SECTION 1: HERO */}
          <section className="relative w-full pb-16 sm:pb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-5"
            >
              <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl text-[#0F172A] tracking-tight leading-[1.1]">
                Talk to a human
              </h1>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#475467] leading-relaxed max-w-2xl mx-auto font-medium">
                Have questions about EventClick? We&apos;ll answer all of them.
              </p>
            </motion.div>
          </section>

          {/* SUBTLE DIVIDER */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#402291]/15 to-transparent mb-16 sm:mb-20" 
          />

          {/* SECTION 2: TWO COLUMNS (TEXT + BULLETS | FORM) */}
          <section className="relative w-full px-4 sm:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
              
              {/* LEFT COLUMN: Copy & Value Props */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 lg:pt-4 xl:pt-8 order-2 lg:order-1"
              >
                <div className="space-y-4">
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-[1.1]">
                    Talk to Us
                  </h2>
                  <p className="text-[16px] sm:text-[18px] text-[#475467] leading-relaxed max-w-lg font-medium">
                    Get all of Eventclick&apos;s core features plus enterprise capabilities to suit your business and workflow:
                  </p>
                </div>

                <ul className="space-y-5">
                  {[
                    { icon: Presentation, title: 'Get a Demo', color: 'text-[#402291]', bg: 'bg-[#402291]/10' },
                    { icon: TrendingUp, title: 'Get Volume Pricing', color: 'text-[#10B981]', bg: 'bg-[#10B981]/10' },
                    { icon: FileText, title: 'Pay by Invoice', color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10' },
                    { icon: ShieldCheck, title: 'Learn about our Security & Compliance Policies', color: 'text-[#3160B7]', bg: 'bg-[#3160B7]/10' },
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                      className="flex items-center gap-4 bg-white/60 border border-white p-3 rounded-2xl shadow-sm backdrop-blur-md"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                        <item.icon className={`w-5.5 h-5.5 ${item.color}`} />
                      </div>
                      <span className="text-[15px] font-bold text-[#0F172A]">
                        {item.title}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>


              {/* RIGHT COLUMN: The Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="order-1 lg:order-2"
              >
                <div className="bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_40px_rgb(0,0,0,0.06)] rounded-[32px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
                  
                  <div className="px-6 sm:px-8 py-6 border-b border-[#E2E5ED]/80 bg-white/90 relative z-10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F5F3FC] flex items-center justify-center">
                      <MessageSquare className="w-4.5 h-4.5 text-[#402291]" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#0F172A]">
                      Contact our team
                    </h3>
                  </div>

                  <div className="p-6 sm:p-8 relative z-10">
                    <AnimatePresence mode="wait">
                      {!submitted ? (
                        <motion.form 
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, y: -10 }}
                          onSubmit={handleSubmit} 
                          className="space-y-6"
                        >
                          {/* Name & Email */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                              <label className="text-[13px] font-bold text-[#0F172A]">
                                Full Name <span className="text-[#DC2626]">*</span>
                              </label>
                              <div className="relative group">
                                <User className="w-4 h-4 text-[#94A3B8] group-focus-within:text-[#402291] absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors" />
                                <input
                                  type="text"
                                  required
                                  placeholder="Sarah Jenkins"
                                  value={formData.fullName}
                                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                  className="w-full pl-10 pr-4 py-3 text-[14px] border-2 border-[#E2E5ED] rounded-xl bg-[#F8F9FC] focus:outline-none focus:border-[#402291] focus:bg-white focus:ring-4 focus:ring-[#402291]/10 transition-all font-semibold text-[#0F172A] placeholder:text-[#94A3B8]"
                                />
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[13px] font-bold text-[#0F172A]">
                                Work Email <span className="text-[#DC2626]">*</span>
                              </label>
                              <div className="relative group">
                                <Mail className="w-4 h-4 text-[#94A3B8] group-focus-within:text-[#402291] absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors" />
                                <input
                                  type="email"
                                  required
                                  placeholder="sarah@organization.org"
                                  value={formData.workEmail}
                                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                                  className="w-full pl-10 pr-4 py-3 text-[14px] border-2 border-[#E2E5ED] rounded-xl bg-[#F8F9FC] focus:outline-none focus:border-[#402291] focus:bg-white focus:ring-4 focus:ring-[#402291]/10 transition-all font-semibold text-[#0F172A] placeholder:text-[#94A3B8]"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Org Name & Support Type */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                              <label className="text-[13px] font-bold text-[#0F172A]">
                                Organization Name <span className="text-[#DC2626]">*</span>
                              </label>
                              <div className="relative group">
                                <Building2 className="w-4 h-4 text-[#94A3B8] group-focus-within:text-[#402291] absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors" />
                                <input
                                  type="text"
                                  required
                                  placeholder="Global Aid Org"
                                  value={formData.orgName}
                                  onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                                  className="w-full pl-10 pr-4 py-3 text-[14px] border-2 border-[#E2E5ED] rounded-xl bg-[#F8F9FC] focus:outline-none focus:border-[#402291] focus:bg-white focus:ring-4 focus:ring-[#402291]/10 transition-all font-semibold text-[#0F172A] placeholder:text-[#94A3B8]"
                                />
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[13px] font-bold text-[#0F172A]">
                                How can we help? <span className="text-[#DC2626]">*</span>
                              </label>
                              <div className="relative group">
                                <HelpCircle className="w-4 h-4 text-[#94A3B8] group-focus-within:text-[#402291] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10 transition-colors" />
                                <select
                                  value={formData.supportType}
                                  onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                                  className="w-full pl-10 pr-4 py-3 text-[14px] border-2 border-[#E2E5ED] rounded-xl bg-[#F8F9FC] focus:outline-none focus:border-[#402291] focus:bg-white focus:ring-4 focus:ring-[#402291]/10 transition-all font-semibold text-[#0F172A] appearance-none cursor-pointer"
                                >
                                  <option value="Demo">Demo</option>
                                  <option value="Technical Support">Technical Support</option>
                                  <option value="Billing Support">Billing Support</option>
                                  <option value="Partnership">Partnership</option>
                                  <option value="Legal Requirements">Legal Requirements</option>
                                </select>
                                <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none">
                                  <svg className="w-4 h-4 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Additional Context */}
                          <div className="space-y-1.5">
                            <label className="text-[13px] font-bold text-[#0F172A]">
                              Additional Context <span className="text-[#DC2626]">*</span>
                            </label>
                            <textarea
                              required
                              placeholder="Tell us how can we help you"
                              value={formData.additionalContext}
                              onChange={(e) => setFormData({ ...formData, additionalContext: e.target.value })}
                              rows={4}
                              className="w-full px-4 py-3 text-[14px] border-2 border-[#E2E5ED] rounded-xl bg-[#F8F9FC] focus:outline-none focus:border-[#402291] focus:bg-white focus:ring-4 focus:ring-[#402291]/10 transition-all font-semibold text-[#0F172A] placeholder:text-[#94A3B8] resize-none"
                            />
                          </div>

                          {/* Consent Checkbox */}
                          <div className="pt-2 pb-2">
                            <label className="flex items-start gap-3 cursor-pointer group">
                              <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                                <input
                                  type="checkbox"
                                  required
                                  checked={formData.consentGiven}
                                  onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                                  className="peer appearance-none w-5 h-5 border-2 border-[#D0D5DD] rounded-md bg-white checked:bg-[#402291] checked:border-[#402291] focus:outline-none focus:ring-4 focus:ring-[#402291]/20 transition-all"
                                />
                                <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 14" fill="none">
                                  <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <span className="text-[13px] text-[#475467] leading-relaxed group-hover:text-[#0F172A] transition-colors font-medium">
                                I consent to the processing of my personal data in accordance with the{' '}
                                <Link href="/privacy" className="text-[#402291] font-bold hover:underline">Privacy Policy</Link> and{' '}
                                <Link href="/terms" className="text-[#402291] font-bold hover:underline">Terms of Service</Link>.
                              </span>
                            </label>
                          </div>

                          {error && (
                            <div
                              role="alert"
                              className="px-3.5 py-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-[13px] text-[#B42318]"
                            >
                              {error}
                            </div>
                          )}

                          {/* Submit */}
                          <div className="pt-2">
                            <button
                              type="submit"
                              disabled={submitting}
                              className="w-full py-3.5 text-[15px] font-bold text-white rounded-xl bg-gradient-to-r from-[#402291] to-[#3160B7] shadow-lg shadow-[#402291]/25 hover:shadow-xl hover:shadow-[#402291]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                              <span>{submitting ? 'Sending…' : 'Send Message'}</span>
                              <Send className="w-4 h-4 ml-1" />
                            </button>
                          </div>
                        </motion.form>
                      ) : (
                        /* SUCCESS STATE */
                        <motion.div 
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="py-12 text-center space-y-6"
                        >
                          <div className="w-20 h-20 rounded-full bg-[#DCFCE7] text-[#166534] mx-auto flex items-center justify-center border-4 border-[#86EFAC] shadow-lg relative">
                            <div className="absolute inset-0 bg-[#86EFAC]/30 rounded-full animate-ping" />
                            <CheckCircle2 className="w-10 h-10 stroke-[2.5] relative z-10" />
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-heading font-bold text-3xl text-[#0F172A]">
                              Message Received
                            </h4>
                            <p className="text-[15px] text-[#475467] max-w-md mx-auto leading-relaxed font-medium">
                              Thanks for reaching out, <strong className="text-[#0F172A]">{formData.fullName}</strong>. Your inquiry regarding <strong className="text-[#402291]">{formData.supportType}</strong> has been routed to our team. We will be in touch at <strong className="text-[#0F172A]">{formData.workEmail}</strong> soon.
                            </p>
                          </div>

                          <div className="pt-6">
                            <button
                              onClick={() => {
                                setSubmitted(false);
                                setFormData({
                                  fullName: '',
                                  workEmail: '',
                                  orgName: '',
                                  supportType: 'Demo',
                                  additionalContext: '',
                                  consentGiven: false
                                });
                              }}
                              className="px-6 py-3 text-[14px] font-bold text-[#475467] bg-[#F8F9FC] border-2 border-[#E2E5ED] rounded-xl hover:bg-[#E2E5ED]/60 hover:text-[#0F172A] transition-colors"
                            >
                              Submit Another Request
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>
        </main>

        <Footer onOpenDemo={() => setDemoOpen(true)} />

        <DemoModal 
          isOpen={demoOpen} 
          onClose={() => setDemoOpen(false)}
          onLaunchRoom={(id) => setSelectedRoomId(id)}
        />
      </div>
    </div>
  );
}
