'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CONSENT_STORAGE_KEY, CONSENT_EVENT } from './GTMLoader';

export const REOPEN_EVENT = 'net-ninjas-open-cookie-settings';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!existing) setVisible(true);

    function handleReopen() {
      setVisible(true);
    }
    window.addEventListener(REOPEN_EVENT, handleReopen);
    return () => window.removeEventListener(REOPEN_EVENT, handleReopen);
  }, []);

  function respond(choice: 'accepted' | 'rejected') {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-ink/97 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="text-sm text-steel">
          We&rsquo;d like to use cookies for basic site analytics, to help us understand how
          the site is used. These are only set if you accept &mdash; see our{' '}
          <Link href="/cookies" className="text-ember underline decoration-ember/40 underline-offset-2 hover:text-ember2">
            Cookie Policy
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-ember underline decoration-ember/40 underline-offset-2 hover:text-ember2">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => respond('rejected')}
            className="rounded-sm border border-steel/40 px-4 py-2 font-display text-sm tracking-wide text-chalk transition-colors hover:border-ember hover:text-ember"
          >
            REJECT
          </button>
          <button
            onClick={() => respond('accepted')}
            className="rounded-sm bg-ember px-4 py-2 font-display text-sm tracking-wide text-ink transition-colors hover:bg-ember2"
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
}
