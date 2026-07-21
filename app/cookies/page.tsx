'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { REOPEN_EVENT } from '../components/CookieConsent';

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl text-chalk sm:text-3xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-steel">{children}</p>;
}

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="bg-ink">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <p className="eyebrow text-ember">Legal</p>
          <h1 className="mt-3 font-display text-4xl text-chalk sm:text-5xl">COOKIE POLICY</h1>
          <p className="mt-4 text-sm text-steelDark">Last updated: July 2026</p>

          <P>
            Cookies are small text files a website stores on your device. This page explains
            what we use them for on netninjas.club and how to control them.
          </P>

          <H2>Your choice</H2>
          <P>
            When you first visit this site, a banner asks whether you&rsquo;re happy for us to
            use analytics cookies. If you choose &ldquo;Reject,&rdquo; no analytics cookies are
            set. You can change your mind at any time using the &ldquo;Cookie Settings&rdquo;
            link in the footer of any page.
          </P>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent(REOPEN_EVENT))}
            className="mt-5 rounded-sm border border-steel/40 px-5 py-2.5 font-display text-sm tracking-wide text-chalk transition-colors hover:border-ember hover:text-ember"
          >
            OPEN COOKIE SETTINGS
          </button>

          <H2>Strictly necessary</H2>
          <P>
            Your cookie choice itself is remembered in your browser&rsquo;s local storage so we
            don&rsquo;t ask again on every visit. This isn&rsquo;t a tracking cookie and
            doesn&rsquo;t require consent &mdash; it only stores your preference.
          </P>

          <H2>Analytics (only if you accept)</H2>
          <P>
            If you accept, we load Google Tag Manager, which in turn runs Google Analytics
            (GA4). This helps us understand roughly how many people visit the site and which
            pages are useful, so we can improve it. It does not identify you personally.
            Google sets its own cookies for this &mdash; details are in{' '}
            <a
              href="https://policies.google.com/technologies/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ember underline decoration-ember/40 underline-offset-2 hover:text-ember2"
            >
              Google&rsquo;s cookie policy
            </a>
            .
          </P>

          <H2>Controlling cookies via your browser</H2>
          <P>
            Most browsers let you block or delete cookies through their settings. Blocking all
            cookies may affect how some websites work, though this site will function normally
            either way &mdash; the only thing analytics cookies affect is our ability to see
            anonymous visit statistics.
          </P>

          <H2>Questions</H2>
          <P>
            Contact{' '}
            <a
              href="mailto:netninjasclub@proton.me"
              className="text-ember underline decoration-ember/40 underline-offset-2 hover:text-ember2"
            >
              netninjasclub@proton.me
            </a>{' '}
            with any questions about this policy.
          </P>
        </div>
      </main>
      <Footer />
    </>
  );
}
