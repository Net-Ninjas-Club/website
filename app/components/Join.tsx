import JoinForm from './JoinForm';

export default function Join() {
  return (
    <section id="join" className="border-t border-white/10 bg-smoke">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow text-center text-ember">Get involved</p>
          <h2 className="mt-3 text-center font-display text-4xl text-chalk sm:text-5xl">
            REGISTER YOUR INTEREST
          </h2>
          <p className="mt-4 text-center text-steel">
            Tell us a bit about your child and we&rsquo;ll get back to you with everything you
            need to come along to a session.
          </p>

          <div className="mt-10">
            <JoinForm />
          </div>
        </div>
      </div>
    </section>
  );
}
