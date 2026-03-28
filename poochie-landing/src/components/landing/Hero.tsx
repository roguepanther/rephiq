export default function Hero() {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-white">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[520px] w-[520px] rounded-full bg-gradient-to-r from-white/10 via-zinc-400/10 to-transparent blur-3xl" />
        </div>
  
        {/* Soft top light */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
  
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-zinc-400 backdrop-blur">
            iOS • Android • Web
          </div>
  
          {/* Headline */}
          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Coaching-first fitness
            </span>
            <br />
            <span className="text-white/85">for serious training.</span>
          </h1>
  
          {/* Subtext */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Adaptive progression, real-time workout guidance, and clean progress
            insights — all in one premium training experience.
          </p>
  
          {/* CTA buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 active:scale-95">
              Join Waitlist
            </button>
  
            <button className="rounded-full border border-white/10 px-8 py-4 font-semibold text-zinc-300 transition duration-300 hover:bg-white/5 hover:text-white active:scale-95">
              See Features
            </button>
          </div>
        </div>
  
        {/* Bottom fade */}
        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-zinc-950 to-transparent" />
      </section>
    );
  }