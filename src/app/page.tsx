import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="text-2xl font-extrabold tracking-tight">
          Spoil<span style={{ color: "#ff2d78" }}>Me</span>
        </span>
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="text-sm text-white/60 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            style={{ background: "#ff2d78", color: "#fff" }}
          >
            Get started free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-28">
        <div
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-8 border"
          style={{ borderColor: "#ff2d78", color: "#ff2d78" }}
        >
          💖 The gifting platform for creators
        </div>
        <h1 className="text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
          Get spoiled by{" "}
          <span style={{ color: "#ff2d78" }}>your fans.</span>
          <br />
          You keep 100%.
        </h1>
        <p className="mt-6 text-xl text-white/50 max-w-xl leading-relaxed">
          Wishlists, cash gifts & digital tributes — all in one link. No commissions,
          instant payouts, complete privacy.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/sign-up"
            className="px-8 py-4 rounded-full text-lg font-bold transition-opacity hover:opacity-90"
            style={{ background: "#ff2d78", color: "#fff" }}
          >
            Create your wishlist — free
          </Link>
          <Link
            href="#how-it-works"
            className="px-8 py-4 rounded-full text-lg font-semibold border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-colors"
          >
            How it works
          </Link>
        </div>
        <p className="mt-5 text-sm text-white/30">
          Join with a referral? Get{" "}
          <strong className="text-white/60">$5 free</strong> on your first gift received.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-8 max-w-3xl mx-auto px-6 py-10 text-center border-t border-b border-white/10 w-full">
        {[
          { value: "0%", label: "Commission on gifts" },
          { value: "100%", label: "Privacy protected" },
          { value: "Instant", label: "Payouts available" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-extrabold" style={{ color: "#ff2d78" }}>
              {s.value}
            </p>
            <p className="mt-1 text-white/50 text-sm">{s.label}</p>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-4">How it works</h2>
          <p className="text-center text-white/40 mb-14">Three steps to start getting spoiled.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Create your profile",
                desc: "Set up your wishlist with products, cash requests, or tributes. Your real address stays private — always.",
              },
              {
                step: "02",
                title: "Share your link",
                desc: "Drop your SpoilMe link in your bio, streams, or DMs. Fans can send gifts in seconds.",
              },
              {
                step: "03",
                title: "Get paid instantly",
                desc: "Receive 100% of every gift with zero commission. Withdraw anytime to your bank.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl p-6 border border-white/10 bg-white/5 hover:border-pink-500/40 transition-colors"
              >
                <p className="text-5xl font-extrabold mb-4" style={{ color: "#ff2d78", opacity: 0.3 }}>
                  {item.step}
                </p>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For creators like you */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Built for creators like you</h2>
          <p className="text-white/40 mb-12">OnlyFans · Findom · LoyalFans · Fansly · Twitch · YouTube</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { icon: "🔒", title: "Total privacy", desc: "Your home address is never exposed. Fans only see what you choose to share." },
              { icon: "💸", title: "Zero fees", desc: "We don't take a cut. Ever. Every dollar your fan sends goes to you." },
              { icon: "⚡", title: "Instant payouts", desc: "Don't wait for weekly disbursements. Withdraw when you want." },
              { icon: "🎁", title: "Wishlists + cash", desc: "Let fans buy specific items or send a direct cash tribute — or both." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 p-5 rounded-2xl border border-white/10 bg-white/5">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold mb-1">{f.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #ff2d78 0%, #7c1040 100%)" }}
      >
        <h2 className="text-4xl font-extrabold mb-4">Ready to get spoiled?</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
          Create your free profile in under 2 minutes. Share your link. Start receiving gifts today.
        </p>
        <Link
          href="/sign-up"
          className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-colors"
        >
          Create my wishlist — free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-sm text-white/30">
        © {new Date().getFullYear()} SpoilMe. Built for creators.
      </footer>
    </main>
  );
}
