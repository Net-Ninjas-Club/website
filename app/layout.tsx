import type { Metadata } from 'next';
import { Anton, Work_Sans } from 'next/font/google';
import './globals.css';
import GTMLoader from './components/GTMLoader';
import CookieConsent from './components/CookieConsent';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Net Ninjas Junior Badminton Club | Broadclyst, Exeter',
  description:
    'Net Ninjas is a junior badminton club in Broadclyst, Exeter, welcoming players from Reception to Year 11 every Friday at Broadclyst Sports Hall.',
  metadataBase: new URL('https://netninjas.club'),
  openGraph: {
    title: 'Net Ninjas Junior Badminton Club',
    description:
      'A safe, welcoming junior badminton club in Broadclyst, Exeter. Friday sessions for Reception to Year 11.',
    type: 'website',
    locale: 'en_GB',
  },
};

// Set NEXT_PUBLIC_GTM_ID in Vercel's Environment Variables (e.g. "GTM-XXXXXXX") to
// activate Google Tag Manager. It only actually loads once a visitor accepts cookies
// via the banner (see CookieConsent.tsx / GTMLoader.tsx) — required under UK PECR,
// since GA4 sets non-essential analytics cookies.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${workSans.variable}`}>
      <body className="font-body antialiased">
        <GTMLoader />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
