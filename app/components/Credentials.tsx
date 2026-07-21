import { getCredentials } from '@/lib/airtable';
import { safeguardingPolicyUrl } from '@/lib/data';
import type { Credential } from '@/lib/data';

const beltColors: Record<Credential['belt'], string> = {
  white: '#F3EEE1',
  yellow: '#E8C531',
  orange: '#E8641F',
  green: '#4A8B5C',
  blue: '#3D74B8',
  brown: '#7A5230',
  black: '#1c1a18',
};

function Belt({ color }: { color: Credential['belt'] }) {
  return (
    <div
      className="relative h-3 w-full overflow-hidden rounded-full"
      style={{ backgroundColor: beltColors[color] }}
      aria-hidden="true"
    >
      {color === 'white' && <div className="absolute inset-0 rounded-full border border-ink/15" />}
    </div>
  );
}

export default async function Credentials() {
  const credentials = await getCredentials();

  return (
    <section id="credentials" className="border-t border-white/10 bg-chalk">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow text-ember">Trust &amp; safety</p>
        <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          CREDENTIALS ON THE WALL
        </h2>
        <p className="mt-4 max-w-2xl text-ink/70">
          The experience and qualifications our coaching team brings to every session &mdash;
          worn like belts, earned over years on court.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c) => (
            <div key={c.id} className="border border-ink/10 bg-white p-6 shadow-sm">
              <Belt color={c.belt} />
              <h3 className="mt-5 font-display text-xl leading-tight text-ink">{c.title}</h3>
              {c.holder && <p className="mt-1 text-sm text-ink/60">{c.holder}</p>}
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-3 border-t border-ink/10 pt-8">
          <p>
            <a
              href={safeguardingPolicyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ember underline decoration-ember/40 underline-offset-2 transition-colors hover:text-ember2"
            >
              Badminton England Safeguarding and Protecting Children and Young People Policy
            </a>
          </p>
          <p className="text-ink/70">All adult coaches and volunteers are fully DBS checked.</p>
        </div>
      </div>
    </section>
  );
}
