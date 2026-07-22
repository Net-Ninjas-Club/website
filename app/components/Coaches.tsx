import Image from 'next/image';
import { getCoaches } from '@/lib/airtable';
import { clubTeam, playerLeadership, photoCaptions } from '@/lib/data';

export default async function Coaches() {
  const coaches = await getCoaches();

  return (
    <section id="coaches" className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow text-ember">Meet the team</p>
        <h2 className="mt-3 font-display text-4xl text-chalk sm:text-5xl">OUR COACHES</h2>
        <p className="mt-4 max-w-2xl text-steel">
          Net Ninjas is supported by 10 volunteer coaches who give up their Friday evenings for
          our players &mdash; here&rsquo;s who you&rsquo;ll meet at the hall.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((c) => (
            <div key={c.id} className="overflow-hidden border border-white/10 bg-smoke">
              <div className="relative aspect-[4/5] w-full bg-ink">
                {c.photo ? (
                  <Image
                    src={c.photo}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-smoke to-ink">
                    <span className="font-display text-6xl text-ember/50">
                      {c.name
                        .split(' ')
                        .map((p) => p[0])
                        .join('')
                        .slice(0, 2)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-chalk">{c.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {c.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-sm bg-ember/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-ember2"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-steel">{c.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {playerLeadership.length > 0 && (
          <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="overflow-hidden border border-white/10">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/player-leadership.jpg"
                  alt={photoCaptions.playerLeadership.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="eyebrow text-steelDark">Player leadership</p>
              <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
                {playerLeadership.map((p) => (
                  <p key={p.name} className="text-steel">
                    <span className="text-chalk">{p.name}</span> &mdash; {p.role}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {clubTeam.length > 0 && (
          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="eyebrow text-steelDark">Also behind the club</p>
            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
              {clubTeam.map((member) => (
                <p key={member.name} className="text-steel">
                  <span className="text-chalk">{member.name}</span> &mdash; {member.role}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
