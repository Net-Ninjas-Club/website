'use client';

import { useEffect, useState } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
export const CONSENT_STORAGE_KEY = 'net-ninjas-cookie-consent';
export const CONSENT_EVENT = 'net-ninjas-cookie-consent-changed';

function injectGTM() {
  if (!GTM_ID) return;
  if (document.getElementById('gtm-script')) return; // already injected, avoid duplicates

  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;
  document.head.appendChild(script);
}

export default function GTMLoader() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(localStorage.getItem(CONSENT_STORAGE_KEY));

    function handleChange(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      setConsent(detail);
    }
    window.addEventListener(CONSENT_EVENT, handleChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleChange);
  }, []);

  useEffect(() => {
    if (consent === 'accepted') injectGTM();
  }, [consent]);

  return null;
}
