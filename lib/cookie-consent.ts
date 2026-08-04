const CONSENT_COOKIE_NAME = 'eventclick_consent';
const CONSENT_COOKIE_DOMAIN = '.eventclick.live';
const CONSENT_COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export function getConsentCookie(): ConsentPreferences | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.match(
    new RegExp('(^| )' + CONSENT_COOKIE_NAME + '=([^;]+)')
  );
  if (!match) return null;

  try {
    const decoded = decodeURIComponent(match[2]);
    const parsed = JSON.parse(decoded) as ConsentPreferences;
    if (
      typeof parsed.analytics === 'boolean' &&
      typeof parsed.marketing === 'boolean' &&
      typeof parsed.timestamp === 'number'
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export function setConsentCookie(preferences: Omit<ConsentPreferences, 'timestamp'>): void {
  if (typeof document === 'undefined') return;

  const payload: ConsentPreferences = {
    ...preferences,
    timestamp: Date.now(),
  };

  document.cookie = [
    CONSENT_COOKIE_NAME + '=' + encodeURIComponent(JSON.stringify(payload)),
    'domain=' + CONSENT_COOKIE_DOMAIN,
    'path=/',
    'max-age=' + CONSENT_COOKIE_MAX_AGE,
    'SameSite=Lax',
    'Secure',
  ].join('; ');
}

export function hasConsent(): boolean {
  return getConsentCookie() !== null;
}

export function hasAnalyticsConsent(): boolean {
  return getConsentCookie()?.analytics ?? false;
}

export function hasMarketingConsent(): boolean {
  return getConsentCookie()?.marketing ?? false;
}
