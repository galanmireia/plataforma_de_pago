"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function OnboardingForm() {
  const router = useRouter();
  const params = useSearchParams();
  const referralCode = params.get("ref") ?? "";

  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, displayName, bio, referralCode: referralCode || undefined }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(typeof data.error === "string" ? data.error : "Something went wrong");
      router.push("/dashboard");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Background glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,45,120,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-3xl font-extrabold tracking-tight">
            Spoil<span style={{ color: "#ff2d78" }}>Me</span>
          </span>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h1 className="text-2xl font-extrabold text-center mb-2">Set up your profile</h1>
          <p className="text-white/40 text-center text-sm mb-8">
            You&apos;re almost ready to start receiving gifts.
            {referralCode && (
              <span className="block mt-2 font-semibold" style={{ color: "#ff2d78" }}>
                🎁 You&apos;ll get $5 when you receive your first gift!
              </span>
            )}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-white/70 mb-2">Username</label>
              <div
                className="flex items-center rounded-xl overflow-hidden border border-white/10 focus-within:border-pink-500 transition-colors"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <span className="px-3 text-white/30 text-sm py-3 border-r border-white/10 whitespace-nowrap">
                  spoilme.es/
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                  placeholder="yourname"
                  required
                  minLength={3}
                  maxLength={30}
                  className="flex-1 px-3 py-3 text-sm focus:outline-none bg-transparent text-white placeholder-white/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/70 mb-2">Display name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your Name"
                required
                maxLength={50}
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border border-white/10 focus:border-pink-500 transition-colors bg-white/5 text-white placeholder-white/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/70 mb-2">
                Bio <span className="text-white/30 font-normal">(optional)</span>
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell your fans about yourself..."
                maxLength={160}
                rows={3}
                className="w-full rounded-xl px-4 py-3 text-sm resize-none focus:outline-none border border-white/10 focus:border-pink-500 transition-colors bg-white/5 text-white placeholder-white/20"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
              style={{ background: "#ff2d78" }}
            >
              {loading ? "Creating profile..." : "Create my profile ✨"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-white/20 mt-6">
          By continuing you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </main>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense>
      <OnboardingForm />
    </Suspense>
  );
}
