'use client';

import Link from 'next/link';
import { facebookUrl } from '@/lib/data';
import { REOPEN_EVENT } from './CookieConsent';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl text-chalk">
              NET <span className="text-ember">NINJAS</span>
            </p>
            <p className="mt-1 text-sm text-steel">Broadclyst Sports Hall, Exeter, Devon</p>
          </div>

          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-ember hover:text-ember2"
          >
            Facebook Group &rarr;
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-steelDark">
          <Link href="/privacy" className="transition-colors hover:text-ember">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="transition-colors hover:text-ember">
            Cookie Policy
          </Link>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent(REOPEN_EVENT))}
            className="transition-colors hover:text-ember"
          >
            Cookie Settings
          </button>
        </div>

        <p className="mt-6 text-xs text-steelDark">
          &copy; {new Date().getFullYear()} Net Ninjas Junior Badminton Club. Founded by David
          &amp; Becky Follett.
        </p>
        <p className="mt-2 text-xs text-steelDark">
          Website built by{' '}
          <a
            href="https://www.webdog.marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-steel underline decoration-steelDark/40 underline-offset-2 transition-colors hover:text-ember"
          >
            Webdog Marketing
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
