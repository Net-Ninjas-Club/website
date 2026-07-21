'use client';

import { useState, type FormEvent } from 'react';
import { sessions } from '@/lib/data';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function JoinForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="belt border border-ember/40 bg-smoke p-8 text-center">
        <p className="font-display text-2xl text-ember">THANKS &mdash; MESSAGE RECEIVED!</p>
        <p className="mt-2 text-steel">
          We&rsquo;ll be in touch soon to get you booked in for a session. In the meantime, feel
          free to say hello on our Facebook group.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field, hidden from real users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Parent / guardian name" name="parentName" required />
        <Field label="Child's name" name="childName" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email address" name="email" type="email" required />
        <Field label="Phone number" name="phone" type="tel" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Child's age / school year" name="ageGroup" required />
        <div>
          <label className="mb-1.5 block text-sm text-steel" htmlFor="preferredSession">
            Preferred session <span className="text-ember">*</span>
          </label>
          <select
            id="preferredSession"
            name="preferredSession"
            required
            className="w-full rounded-sm border border-white/15 bg-ink px-3 py-2.5 text-chalk outline-none focus:border-ember"
          >
            <option value="">Select a session</option>
            {sessions.map((s) => (
              <option key={s.id} value={`${s.ageGroup} (${s.day} ${s.time})`}>
                {s.ageGroup} &mdash; {s.day} {s.time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-steel" htmlFor="message">
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-sm border border-white/15 bg-ink px-3 py-2.5 text-chalk outline-none focus:border-ember"
        />
      </div>

      {status === 'error' && (
        <p className="rounded-sm border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-sm bg-ember px-6 py-3.5 font-display text-lg tracking-wide text-ink transition-colors hover:bg-ember2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'SENDING\u2026' : 'SEND ENQUIRY'}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-steel" htmlFor={name}>
        {label} {required && <span className="text-ember">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-white/15 bg-ink px-3 py-2.5 text-chalk outline-none focus:border-ember"
      />
    </div>
  );
}
