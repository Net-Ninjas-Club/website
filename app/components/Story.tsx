import Image from 'next/image';

const stats = [
  { value: '2024', label: 'Club founded' },
  { value: '60+', label: 'Juniors training weekly' },
  { value: '10', label: 'Volunteer coaches' },
  { value: '6', label: 'Players representing Devon County' },
];

export default function Story() {
  return (
    <section className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-ember">Our story</p>
            <h2 className="mt-3 font-display text-4xl leading-[0.95] text-chalk sm:text-5xl">
              STARTED BY TWO PLAYERS.
              <br />
              BUILT FOR THE WHOLE
              <br />
              COMMUNITY.
            </h2>

            <div className="mt-8 overflow-hidden border border-white/10">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/founders.jpg"
                  alt="David and Becky Follett with their two daughters, all in Net Ninjas kit"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              <p className="bg-smoke px-4 py-3 text-xs text-steelDark">
                David &amp; Becky Follett with their daughters &mdash; the family this club
                started for.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-steel md:pt-2">
            <p>
              Net Ninjas started as something simple:{' '}
              <strong className="text-chalk">David and Becky Follett</strong> wanted to give
              their daughters the best possible start in badminton, and to show them what
              sport can build &mdash; confidence, resilience and belief in yourself.
            </p>
            <p>
              Becky picked up a racket at four years old and never really put it down &mdash;
              her mum has coached badminton for over 40 years, so she grew up in sports halls
              surrounded by shuttlecocks and score sheets. At the very first Net Ninjas
              session, 25 children came along. Just over two years on, that&rsquo;s grown to
              42 juniors and 18 teenagers training every week.
            </p>
            <p>
              Six of our players now represent Devon County, including one of David and
              Becky&rsquo;s own daughters in the Under 12 squad. But for us, success isn&rsquo;t
              only about medals &mdash; it&rsquo;s the child who walks in too nervous to speak
              and, months later, is laughing with friends.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl text-ember">{s.value}</p>
              <p className="mt-1 text-sm text-steel">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-14 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-ember">David&rsquo;s story</p>
            <h2 className="mt-3 font-display text-4xl leading-[0.95] text-chalk sm:text-5xl">
              RESILIENCE, LIVED
              <br />
              NOT JUST TAUGHT.
            </h2>
          </div>
          <div className="space-y-5 text-steel md:pt-2">
            <p>
              This club is personal to David in another way too. Nineteen years ago, a road
              accident broke his neck and left him paralysed from the chest down. Badminton
              gave him a way to find purpose and strength again.
            </p>
            <p>
              Today David represents England in para-badminton, currently ranked{' '}
              <strong className="text-chalk">No.1 in England for singles</strong>,{' '}
              <strong className="text-chalk">No.14 in the world for singles</strong>, and{' '}
              <strong className="text-chalk">No.6 in the world for mixed doubles</strong>. He
              brings that same determination to every Net Ninjas session, showing our juniors
              that resilience is something you live, not just something you talk about.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-sm text-steel">
            Net Ninjas&rsquo; first equipment was funded by{' '}
            <strong className="text-chalk">Broadclyst Parish Council</strong> &mdash; support
            that helped turn a family idea into a club serving dozens of local children every
            week. We also regularly support players attending Devon County&rsquo;s Mini
            Shuttlers development sessions.
          </p>
        </div>
      </div>
    </section>
  );
}
