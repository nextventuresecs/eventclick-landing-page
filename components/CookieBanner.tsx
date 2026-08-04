'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Settings2, Check } from 'lucide-react';
import Link from 'next/link';
import {
  getConsentCookie,
  setConsentCookie,
  hasConsent,
  type ConsentPreferences,
} from '@/lib/cookie-consent';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [view, setView] = useState<'notice' | 'preferences'>('notice');
  const [preferences, setPreferences] = useState<Omit<ConsentPreferences, 'timestamp'>>({
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    if (!hasConsent()) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    setConsentCookie({ analytics, marketing });
    setShowBanner(false);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
      });
    }
  };

  const handleAcceptAll = () => saveConsent(true, true);
  const handleDeclineAll = () => saveConsent(false, false);
  const handleSavePreferences = () => saveConsent(preferences.analytics, preferences.marketing);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[100] md:w-[420px] max-w-full"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-black/[0.08] shadow-[0_20px_40px_rgb(0,0,0,0.12)] rounded-2xl p-5 sm:p-6 overflow-hidden relative">
            
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[#402291]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F3FC] flex items-center justify-center border border-[#402291]/10">
                    <ShieldCheck className="w-4 h-4 text-[#402291]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0F172A] leading-tight">
                    {view === 'notice' ? 'Your Privacy Preferences' : 'Customise Cookies'}
                  </h3>
                </div>
                <button 
                  onClick={handleDeclineAll}
                  className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {view === 'notice' ? (
                // --- NOTICE VIEW ---
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <div className="text-[13px] text-[#475467] leading-relaxed space-y-2">
                    <p>
                      We use essential, analytical, and marketing cookies to optimise your experience, analyze site usage, and share relevant data with our advertising partners. 
                    </p>
                    <p>
                      By clicking "Accept All", you consent to the storage of these cookies on your device. You can manage your preferences or withdraw consent at any time. Read our <Link href="/cookies" className="text-[#402291] font-semibold hover:underline">Cookie Policy</Link> for details.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 px-4 py-2.5 bg-[#402291] hover:bg-[#3160B7] text-white text-[13px] font-semibold rounded-xl shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#402291]/50"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={() => setView('preferences')}
                      className="flex-1 px-4 py-2.5 bg-white hover:bg-gray-50 text-[#475467] hover:text-[#0F172A] border border-gray-200 text-[13px] font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 flex items-center justify-center gap-2"
                    >
                      <Settings2 className="w-4 h-4" />
                      Customise
                    </button>
                  </div>
                </motion.div>
              ) : (
                // --- PREFERENCES VIEW ---
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="space-y-3 pt-2">
                    
                    {/* Essential Cookies (Always On) */}
                    <div className="flex items-start justify-between p-3 rounded-xl bg-gray-50/50 border border-gray-100">
                      <div>
                        <p className="text-[13px] font-semibold text-[#0F172A]">Essential Cookies</p>
                        <p className="text-[11px] text-[#64748B] mt-0.5 pr-4">Required for the website to function securely and properly. Cannot be disabled.</p>
                      </div>
                      <div className="w-8 h-5 bg-[#402291]/60 rounded-full relative opacity-50 shrink-0 mt-1 cursor-not-allowed">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <Check className="w-2.5 h-2.5 text-[#402291]" />
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start justify-between p-3 rounded-xl hover:bg-gray-50/50 border border-transparent hover:border-gray-100 transition-colors cursor-pointer" onClick={() => setPreferences(p => ({...p, analytics: !p.analytics}))}>
                      <div>
                        <p className="text-[13px] font-semibold text-[#0F172A]">Analytical Cookies</p>
                        <p className="text-[11px] text-[#64748B] mt-0.5 pr-4">Help us understand how visitors interact with the website by collecting reporting information anonymously.</p>
                      </div>
                      <button 
                        className={`w-8 h-5 rounded-full relative transition-colors shrink-0 mt-1 ${preferences.analytics ? 'bg-[#402291]' : 'bg-gray-200'}`}
                        role="switch"
                        aria-checked={preferences.analytics}
                      >
                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${preferences.analytics ? 'left-3.5' : 'left-0.5'}`} />
                      </button>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start justify-between p-3 rounded-xl hover:bg-gray-50/50 border border-transparent hover:border-gray-100 transition-colors cursor-pointer" onClick={() => setPreferences(p => ({...p, marketing: !p.marketing}))}>
                      <div>
                        <p className="text-[13px] font-semibold text-[#0F172A]">Marketing & Ad Cookies</p>
                        <p className="text-[11px] text-[#64748B] mt-0.5 pr-4">Used to track visitors across websites to display relevant advertisements and campaigns.</p>
                      </div>
                      <button 
                        className={`w-8 h-5 rounded-full relative transition-colors shrink-0 mt-1 ${preferences.marketing ? 'bg-[#402291]' : 'bg-gray-200'}`}
                        role="switch"
                        aria-checked={preferences.marketing}
                      >
                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${preferences.marketing ? 'left-3.5' : 'left-0.5'}`} />
                      </button>
                    </div>

                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-gray-100">
                    <button
                      onClick={handleSavePreferences}
                      className="flex-1 px-4 py-2.5 bg-[#402291] hover:bg-[#3160B7] text-white text-[13px] font-semibold rounded-xl shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#402291]/50"
                    >
                      Save Preferences
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 px-4 py-2.5 bg-white hover:bg-gray-50 text-[#475467] hover:text-[#0F172A] border border-gray-200 text-[13px] font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                      Accept All
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
