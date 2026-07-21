import { sessions } from '@/lib/data';

export default function Sessions() {
  return (
    <section id="sessions" className="border-t border-white/10 bg-smoke">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow text-ember">Weekly sessions</p>
        <h2 className="mt-3 font-display text-4xl text-chalk sm:text-5xl">WHEN &amp; WHERE WE TRAIN</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sessions.map((s, i) => (
            <div key={s.id} className="belt border border-white/10 bg-ink p-7">
              <span className="eyebrow text-steelDark">Group {i + 1}</span>
              <h3 className="mt-2 font-display text-3xl text-ember">{s.ageGroup}</h3>
              <dl className="mt-5 space-y-3 text-steel">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <dt>Day</dt>
                  <dd className="text-chalk">{s.day}</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <dt>Time</dt>
                  <dd className="text-chalk">{s.time}</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <dt>Venue</dt>
                  <dd className="text-chalk">{s.venue}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Cost</dt>
                  <dd className="text-chalk">{s.cost}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-sm border border-white/10 bg-ink p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl text-chalk">Broadclyst Sports Hall</p>
            <p className="text-sm text-steel">Broadclyst, Exeter, Devon</p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Broadclyst+Sports+Centre"
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-ember hover:text-ember2"
          >
            Get directions &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
