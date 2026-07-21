import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { sponsors } from '@/lib/data';

function findLogoFile(slug: string): string | null {
  const dir = path.join(process.cwd(), 'public/images/sponsors');
  const extensions = ['png', 'svg', 'jpg', 'jpeg', 'webp'];
  for (const ext of extensions) {
    const file = `${slug}.${ext}`;
    if (fs.existsSync(path.join(dir, file))) return file;
  }
  return null;
}

export default function Sponsors() {
  return (
    <section className="border-t border-white/10 bg-chalk">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow text-ember">Thank you</p>
        <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          SPONSORS &amp; SUPPORTERS
        </h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          Net Ninjas wouldn&rsquo;t be possible without the organisations that back us.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {sponsors.map((s) => {
            const file = findLogoFile(s.slug);
            return (
              <div
                key={s.id}
                className="belt flex aspect-[3/2] items-center justify-center border border-ink/10 bg-white p-6 shadow-sm"
              >
                {file ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={`/images/sponsors/${file}`}
                      alt={s.name}
                      fill
                      sizes="200px"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="font-display text-sm tracking-wide text-ember">{s.name}</p>
                    <p className="mt-1 text-xs text-ink/50">
                      Add logo to /public/images/sponsors/{s.slug}.png
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
