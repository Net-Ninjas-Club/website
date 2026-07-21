import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { facebookUrl } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy | Net Ninjas Junior Badminton Club',
  description: 'How Net Ninjas Junior Badminton Club collects, uses and protects your information.',
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl text-chalk sm:text-3xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-steel">{children}</p>;
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-ink">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <p className="eyebrow text-ember">Legal</p>
          <h1 className="mt-3 font-display text-4xl text-chalk sm:text-5xl">PRIVACY POLICY</h1>
          <p className="mt-4 text-sm text-steelDark">Last updated: July 2026</p>

          <P>
            Net Ninjas Junior Badminton Club (&ldquo;Net Ninjas&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) runs weekly junior badminton sessions at Broadclyst Sports Hall,
            Exeter, Devon. This policy explains what information we collect through this
            website, why, and what you can do about it.
          </P>

          <H2>Who to contact</H2>
          <P>
            For anything relating to this policy or your data, contact us at{' '}
            <a
              href="mailto:netninjasclub@proton.me"
              className="text-ember underline decoration-ember/40 underline-offset-2 hover:text-ember2"
            >
              netninjasclub@proton.me
            </a>
            .
          </P>

          <H2>What we collect</H2>
          <P>
            When you submit the &ldquo;Register Your Interest&rdquo; form, we collect: your
            name (as a parent or guardian), your child&rsquo;s name, your child&rsquo;s age or
            school year, your email address, your phone number (optional), your preferred
            session, and any message you choose to add.
          </P>
          <P>
            If you accept cookies via the banner on this site, we also collect anonymous
            website usage data through Google Analytics &mdash; see our{' '}
            <a
              href="/cookies"
              className="text-ember underline decoration-ember/40 underline-offset-2 hover:text-ember2"
            >
              Cookie Policy
            </a>{' '}
            for details.
          </P>

          <H2>Why we collect it</H2>
          <P>
            We use enquiry information to respond to you, arrange a trial or first session for
            your child, and answer any questions you&rsquo;ve asked. We don&rsquo;t use it for
            any other purpose, and we don&rsquo;t sell or share it with third parties for
            marketing purposes.
          </P>

          <H2>Where it&rsquo;s stored</H2>
          <P>
            Enquiry form submissions are stored in Airtable, a cloud database used to manage
            club administration. Access is limited to Net Ninjas coaches and organisers who
            need it to run the club. The website itself is hosted by Vercel.
          </P>

          <H2>How long we keep it</H2>
          <P>
            We keep enquiry information for as long as reasonably necessary to respond to you
            and arrange a session. If your child joins the club, relevant details are kept for
            the duration of their membership and for a reasonable period afterwards for
            administrative and safeguarding purposes. If you&rsquo;d like your information
            removed sooner, contact us and we&rsquo;ll action this unless we&rsquo;re required
            to keep it for a legal or safeguarding reason.
          </P>

          <H2>Children&rsquo;s information</H2>
          <P>
            Some of the information we collect relates to children, but it is submitted to us
            by a parent or guardian, not directly by the child. We only use it for club
            administration &mdash; arranging sessions, contacting parents, and safeguarding
            purposes &mdash; and treat it with particular care given its sensitivity.
          </P>

          <H2>Other services we use</H2>
          <P>
            Beyond Airtable and Vercel, this site links to our{' '}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ember underline decoration-ember/40 underline-offset-2 hover:text-ember2"
            >
              Facebook group
            </a>{' '}
            (Facebook has its own privacy policy for anything you share there), and, if you
            accept cookies, uses Google Analytics via Google Tag Manager to understand website
            traffic. Google&rsquo;s own privacy policy covers how they handle this data.
          </P>

          <H2>Your rights</H2>
          <P>
            Under UK GDPR, you have the right to ask what information we hold about you or
            your child, to have it corrected if it&rsquo;s wrong, and to have it deleted where
            there&rsquo;s no good reason for us to keep it. To exercise any of these rights,
            email{' '}
            <a
              href="mailto:netninjasclub@proton.me"
              className="text-ember underline decoration-ember/40 underline-offset-2 hover:text-ember2"
            >
              netninjasclub@proton.me
            </a>
            .
          </P>

          <H2>Changes to this policy</H2>
          <P>
            We may update this policy from time to time as the club or website changes. The
            date at the top shows when it was last revised.
          </P>
        </div>
      </main>
      <Footer />
    </>
  );
}
