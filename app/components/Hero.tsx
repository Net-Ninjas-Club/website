import Image from 'next/image';
import { sessions, facebookUrl } from '@/lib/data';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-speedlines" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <div className="order-2 md:order-1">
            <p className="eyebrow text-ember">Broadclyst Sports Hall &middot; Exeter, Devon</p>

            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-chalk sm:text-6xl md:text-7xl">
              JUNIOR
              <br />
              BADMINTON,
              <br />
              <span className="text-outline">TAUGHT WITH HEART</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-steel">
              Net Ninjas is a friendly badminton club for children from Reception right
              through to Year 11 &mdash; built on the belief that every young player deserves
              a safe, welcoming court to learn on.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#join"
                className="rounded-sm bg-ember px-6 py-3 font-display text-base tracking-wide text-ink transition-colors hover:bg-ember2"
              >
                REGISTER YOUR INTEREST
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-steel/40 px-6 py-3 font-display text-base tracking-wide text-chalk transition-colors hover:border-ember hover:text-ember"
              >
                FIND US ON FACEBOOK
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative w-56 sm:w-72 md:w-full md:max-w-sm">
              <div
                className="absolute inset-0 scale-95 rounded-lg bg-ember/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden border border-white/10">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/hero-action.jpg"
                    alt="A young Net Ninjas player mid-shot at a training session"
                    fill
                    priority
                    sizes="(max-width: 768px) 60vw, 380px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {sessions.map((s) => (
            <div key={s.id} className="belt border border-white/10 bg-smoke px-6 py-5">
              <p className="eyebrow text-ember">{s.ageGroup}</p>
              <p className="mt-2 font-display text-2xl text-chalk">
                {s.day}, {s.time}
              </p>
              <p className="mt-1 text-sm text-steel">{s.venue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
