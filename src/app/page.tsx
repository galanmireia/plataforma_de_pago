import Link from "next/link";

const CREATORS = [
  { name: "Mia Rose", handle: "@miarose", earned: "$4,280", avatar: "https://i.pravatar.cc/150?img=47", top: "8%", left: "62%", rotate: "3deg" },
  { name: "Luna", handle: "@lunaxo", earned: "$2,940", avatar: "https://i.pravatar.cc/150?img=44", top: "52%", left: "68%", rotate: "-4deg" },
  { name: "Aria", handle: "@ariafindom", earned: "$6,100", avatar: "https://i.pravatar.cc/150?img=43", top: "28%", left: "80%", rotate: "2deg" },
  { name: "Jade K.", handle: "@jadek", earned: "$1,870", avatar: "https://i.pravatar.cc/150?img=45", top: "70%", left: "58%", rotate: "-2deg" },
];

const TICKER = [
  { fan: "anonymous", creator: "Luna", amount: "$50", item: "Amazon Gift Card" },
  { fan: "DarkKnight99", creator: "Mia Rose", amount: "$120", item: "Wishlist item" },
  { fan: "anonymous", creator: "Aria", amount: "$200", item: "Cash tribute" },
  { fan: "LoyalSub", creator: "Jade K.", amount: "$75", item: "Gift card" },
  { fan: "anonymous", creator: "Luna", amount: "$300", item: "Cash tribute" },
  { fan: "TopFan", creator: "Mia Rose", amount: "$99", item: "Wishlist item" },
];

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-4 bg-black/70 backdrop-blur-xl border-b border-white/5">
        <span className="text-2xl font-extrabold tracking-tight">
          Spoil<span style={{ color: "#ff2d78" }}>Me</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#creators" className="hover:text-white transition-colors">Creators</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/sign-in" className="text-sm text-white/50 hover:text-white transition-colors hidden md:block">
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #ff2d78, #c4005e)" }}
          >
            Get started free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(255,45,120,0.12) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 40% 40% at 20% 80%, rgba(124,16,64,0.2) 0%, transparent 60%)",
            }}
          />
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Left: copy */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-8 border"
              style={{ borderColor: "rgba(255,45,120,0.4)", color: "#ff2d78", background: "rgba(255,45,120,0.08)" }}
            >
              💖 Built for OnlyFans, Findom, LoyalFans & more
            </div>

            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
              Get spoiled
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #ff2d78, #ff8cb4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                by your fans.
              </span>
              <br />
              You keep 100%.
            </h1>

            <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-lg">
              Wishlists, cash tributes & digital gifts — all in one link.
              Zero commission. Instant payouts. Your address stays private.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/sign-up"
                className="px-8 py-4 rounded-full text-lg font-bold text-center transition-all hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #ff2d78, #c4005e)",
                  boxShadow: "0 0 40px rgba(255,45,120,0.3)",
                }}
              >
                Create your wishlist — free ✨
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 rounded-full text-lg font-semibold text-center border border-white/15 text-white/60 hover:border-white/30 hover:text-white transition-all"
              >
                See how it works
              </Link>
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-6">
              {[
                { v: "0%", l: "Commission" },
                { v: "Instant", l: "Payouts" },
                { v: "100%", l: "Privacy" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-2xl font-extrabold" style={{ color: "#ff2d78" }}>{s.v}</p>
                  <p className="text-xs text-white/30 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating creator cards */}
          <div className="relative hidden lg:block h-[520px]">
            {CREATORS.map((c) => (
              <div
                key={c.handle}
                className="absolute bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-52 shadow-2xl"
                style={{
                  top: c.top,
                  left: c.left,
                  transform: `rotate(${c.rotate})`,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover mb-3 border-2" style={{ borderColor: "#ff2d78" }} />
                <p className="font-bold text-sm">{c.name}</p>
                <p className="text-xs text-white/40 mb-2">{c.handle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30">earned</span>
                  <span className="text-sm font-bold" style={{ color: "#ff2d78" }}>{c.earned}</span>
                </div>
                {/* Pulse dot */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live activity ticker */}
      <div className="relative border-y border-white/10 py-4 overflow-hidden bg-white/[0.02]">
        <div className="flex gap-8 animate-none whitespace-nowrap" style={{ animation: "scroll 20s linear infinite" }}>
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm text-white/40 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              <strong className="text-white/60">{t.fan}</strong> gifted{" "}
              <strong style={{ color: "#ff2d78" }}>{t.amount}</strong> to{" "}
              <strong className="text-white/60">{t.creator}</strong> · {t.item}
              <span className="ml-4 text-white/20">·</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* How it works */}
      <section id="how-it-works" className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold mb-3" style={{ color: "#ff2d78" }}>HOW IT WORKS</p>
            <h2 className="text-5xl font-extrabold">Three steps to<br />start getting spoiled</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div
              className="absolute top-16 left-1/4 right-1/4 h-px hidden md:block"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.3), transparent)" }}
            />
            {[
              {
                step: "01",
                emoji: "✍️",
                title: "Create your profile",
                desc: "Set up your wishlist with products, cash requests, or tributes. Your real address is never exposed.",
                img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
              },
              {
                step: "02",
                emoji: "🔗",
                title: "Share your link",
                desc: "Drop spoilme.es/yourname in your bio, streams, or DMs. Fans can gift you in seconds.",
                img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&q=80",
              },
              {
                step: "03",
                emoji: "💸",
                title: "Get paid instantly",
                desc: "100% of every gift goes to you. Zero commission. Withdraw anytime to your bank.",
                img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl overflow-hidden border border-white/10 group hover:border-pink-500/40 transition-all hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="h-44 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.9))" }} />
                  <span className="absolute bottom-4 left-5 text-5xl font-extrabold opacity-20">{item.step}</span>
                </div>
                <div className="p-6">
                  <span className="text-2xl mb-3 block">{item.emoji}</span>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator showcase */}
      <section id="creators" className="py-20 px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold mb-3" style={{ color: "#ff2d78" }}>REAL CREATORS</p>
            <h2 className="text-4xl font-extrabold">Join thousands of creators<br />already getting spoiled</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Mia Rose", handle: "@miarose", earned: "$4,280 this month", avatar: "https://i.pravatar.cc/300?img=47", platform: "OnlyFans" },
              { name: "Luna", handle: "@lunaxo", earned: "$2,940 this month", avatar: "https://i.pravatar.cc/300?img=44", platform: "Findom" },
              { name: "Aria K.", handle: "@ariak", earned: "$6,100 this month", avatar: "https://i.pravatar.cc/300?img=43", platform: "LoyalFans" },
              { name: "Jade", handle: "@jadexo", earned: "$1,870 this month", avatar: "https://i.pravatar.cc/300?img=45", platform: "Fansly" },
            ].map((c) => (
              <div
                key={c.handle}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.avatar} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)" }}
                />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: "rgba(255,45,120,0.2)", color: "#ff2d78", border: "1px solid rgba(255,45,120,0.3)" }}
                  >
                    {c.platform}
                  </span>
                  <p className="font-bold">{c.name}</p>
                  <p className="text-xs text-white/50">{c.handle}</p>
                  <p className="text-xs font-semibold mt-1" style={{ color: "#ff2d78" }}>{c.earned}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: "#ff2d78" }}>WHY SPOILME</p>
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Everything you need.<br />Nothing you don't.
            </h2>
            <p className="text-white/40 text-lg mb-10 leading-relaxed">
              Designed specifically for adult creators and findommes. No judgement, no hidden fees, no drama.
            </p>
            <div className="space-y-4">
              {[
                { icon: "🔒", title: "Total anonymity", desc: "Your home address is never revealed. Ship gifts to our secure relay address." },
                { icon: "💸", title: "Zero commission", desc: "We take nothing. Every dollar your fan sends lands in your account." },
                { icon: "⚡", title: "Instant payouts", desc: "No weekly holds. Withdraw whenever you want, as much as you want." },
                { icon: "🎁", title: "Wishlists + cash", desc: "Mix physical gifts, Amazon items, and direct cash tributes in one profile." },
                { icon: "📊", title: "Fan analytics", desc: "See who's spending, how much, and how often. Know your top fans." },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-5 rounded-2xl border border-white/8 hover:border-pink-500/30 transition-colors group"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span className="text-2xl mt-0.5">{f.icon}</span>
                  <div>
                    <h3 className="font-bold mb-1 group-hover:text-pink-400 transition-colors">{f.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative hidden lg:flex justify-center">
            <div
              className="relative w-72 rounded-[3rem] border-4 border-white/10 overflow-hidden shadow-2xl"
              style={{ background: "#0d0d0d", boxShadow: "0 40px 100px rgba(255,45,120,0.2)" }}
            >
              {/* Phone screen */}
              <div className="p-5 pt-8">
                {/* Profile */}
                <div className="flex items-center gap-3 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://i.pravatar.cc/100?img=47" alt="creator" className="w-14 h-14 rounded-full border-2" style={{ borderColor: "#ff2d78" }} />
                  <div>
                    <p className="font-bold text-sm">Mia Rose <span style={{ color: "#ff2d78" }}>✓</span></p>
                    <p className="text-xs text-white/40">@miarose</p>
                    <p className="text-xs text-white/30 mt-0.5">spoilme.es/miarose</p>
                  </div>
                </div>
                {/* Wishlist items */}
                {[
                  { name: "Amazon Gift Card", price: "$50", img: "https://i.pravatar.cc/60?img=10" },
                  { name: "Luxury Candle Set", price: "$89", img: "https://i.pravatar.cc/60?img=20" },
                  { name: "Cash Tribute", price: "$200", img: "https://i.pravatar.cc/60?img=30" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 p-3 rounded-xl mb-2 border border-white/8"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate">{item.name}</p>
                      <p className="text-xs font-bold" style={{ color: "#ff2d78" }}>{item.price}</p>
                    </div>
                    <button
                      className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#ff2d78" }}
                    >
                      Gift
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* Glow */}
            <div
              className="absolute -inset-10 -z-10 opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, #ff2d78, transparent 70%)" }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 border-t border-white/10" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold mb-3" style={{ color: "#ff2d78" }}>TESTIMONIALS</p>
            <h2 className="text-4xl font-extrabold">They love SpoilMe</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "I made $1,200 in my first week. The zero commission policy is real — everything goes straight to me.", name: "Luna", handle: "@lunaxo", avatar: "https://i.pravatar.cc/100?img=44" },
              { text: "Finally a platform that gets what findom actually is. My address is private and my fans can send cash or buy from my wishlist.", name: "Aria K.", handle: "@ariak", avatar: "https://i.pravatar.cc/100?img=43" },
              { text: "I moved from Throne the moment I heard about SpoilMe. The instant payouts alone are worth it.", name: "Jade", handle: "@jadexo", avatar: "https://i.pravatar.cc/100?img=45" },
            ].map((t) => (
              <div
                key={t.handle}
                className="p-6 rounded-3xl border border-white/10 hover:border-pink-500/30 transition-colors"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <p className="text-white/60 leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border-2" style={{ borderColor: "#ff2d78" }} />
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-white/30">{t.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,45,120,0.15), transparent)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-6xl font-extrabold mb-6 leading-tight">
            Ready to be<br />
            <span style={{
              background: "linear-gradient(90deg, #ff2d78, #ff8cb4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              spoiled?
            </span>
          </h2>
          <p className="text-white/40 text-xl mb-10 leading-relaxed">
            Create your free profile in 2 minutes. Share your link. Start receiving gifts today.
          </p>
          <Link
            href="/sign-up"
            className="inline-block px-12 py-5 rounded-full text-xl font-bold transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ff2d78, #c4005e)",
              boxShadow: "0 0 60px rgba(255,45,120,0.4)",
            }}
          >
            Create my wishlist — free 💖
          </Link>
          <p className="mt-5 text-white/20 text-sm">No credit card required · Takes 2 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-extrabold">
            Spoil<span style={{ color: "#ff2d78" }}>Me</span>
          </span>
          <div className="flex gap-8 text-sm text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <p className="text-sm text-white/20">© {new Date().getFullYear()} SpoilMe. Built for creators.</p>
        </div>
      </footer>
    </main>
  );
}
