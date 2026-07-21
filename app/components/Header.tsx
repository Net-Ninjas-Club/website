import Link from 'next/link';
import Image from 'next/image';
import { facebookUrl } from '@/lib/data';

const links = [
  { href: '/#sessions', label: 'Sessions' },
  { href: '/#coaches', label: 'Coaches' },
  { href: '/#credentials', label: 'Credentials' },
  { href: '/#gallery', label: 'Gallery' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.jpg"
            alt="Net Ninjas Junior Badminton Club badge"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-display text-2xl tracking-wide text-chalk">
            NET <span className="text-ember">NINJAS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="eyebrow text-steel transition-colors hover:text-ember"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden eyebrow text-steel transition-colors hover:text-ember sm:inline"
          >
            Facebook
          </a>
          <Link
            href="/#join"
            className="rounded-sm bg-ember px-4 py-2 font-display text-sm tracking-wide text-ink transition-colors hover:bg-ember2"
          >
            JOIN THE CLUB
          </Link>
        </div>
      </div>
    </header>
  );
}
