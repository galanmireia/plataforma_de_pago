"use client";

import { useState } from "react";
import { WishlistItem } from "@prisma/client";
import { formatCurrency } from "@/lib/utils";
import { fanTotal } from "@/lib/stripe";

interface Props {
  item: WishlistItem;
  creatorName: string;
}

export default function GiftButton({ item, creatorName }: Props) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "done">("form");
  const [fanName, setFanName] = useState("");
  const [fanEmail, setFanEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = fanTotal(item.price);

  async function handleGift() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wishlistItemId: item.id,
          fanName: isAnonymous ? undefined : fanName,
          fanEmail: fanEmail || undefined,
          isAnonymous,
          message: message || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStep("done");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm font-bold px-4 py-2 rounded-full flex-shrink-0 transition-all hover:scale-105 hover:shadow-lg"
        style={{ background: "linear-gradient(135deg, #ff2d78, #c4005e)", color: "#fff", boxShadow: "0 4px 20px rgba(255,45,120,0.3)" }}
      >
        Gift 💖
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-white/10 overflow-hidden"
            style={{ background: "#0f0f0f", boxShadow: "0 40px 100px rgba(255,45,120,0.2)" }}
          >
            {step === "done" ? (
              <div className="p-10 text-center">
                <div className="text-6xl mb-4">💖</div>
                <h3 className="text-2xl font-extrabold mb-2">Gift sent!</h3>
                <p className="text-white/40 mb-8">
                  {creatorName} will receive your gift. Thank you for spoiling them!
                </p>
                <button
                  onClick={() => { setOpen(false); setStep("form"); }}
                  className="px-8 py-3 rounded-full font-bold transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #ff2d78, #c4005e)" }}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                  <div>
                    <h3 className="font-extrabold text-lg">Send a gift 💖</h3>
                    <p className="text-white/40 text-xs mt-0.5">to {creatorName}</p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors text-xl"
                  >
                    ×
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  {/* Item preview */}
                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/8"
                    style={{ background: "rgba(255,45,120,0.05)" }}
                  >
                    {item.imageUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.imageUrl} alt={item.title} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{item.title}</p>
                      {item.description && (
                        <p className="text-xs text-white/30 truncate">{item.description}</p>
                      )}
                    </div>
                    <p className="font-extrabold flex-shrink-0" style={{ color: "#ff2d78" }}>
                      {formatCurrency(item.price, item.currency)}
                    </p>
                  </div>

                  {/* Anonymous toggle */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className="relative w-11 h-6 rounded-full transition-colors flex-shrink-0"
                      style={{ background: isAnonymous ? "#ff2d78" : "rgba(255,255,255,0.1)" }}
                      onClick={() => setIsAnonymous(!isAnonymous)}
                    >
                      <div
                        className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform"
                        style={{ transform: isAnonymous ? "translateX(22px)" : "translateX(2px)" }}
                      />
                    </div>
                    <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                      Send anonymously
                    </span>
                  </label>

                  {!isAnonymous && (
                    <input
                      type="text"
                      placeholder="Your name (optional)"
                      value={fanName}
                      onChange={(e) => setFanName(e.target.value)}
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border border-white/10 focus:border-pink-500 transition-colors bg-white/5 text-white placeholder-white/20"
                    />
                  )}

                  <input
                    type="email"
                    placeholder="Your email (for receipt)"
                    value={fanEmail}
                    onChange={(e) => setFanEmail(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border border-white/10 focus:border-pink-500 transition-colors bg-white/5 text-white placeholder-white/20"
                  />

                  <textarea
                    placeholder="Leave a message... (optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={300}
                    rows={3}
                    className="w-full rounded-xl px-4 py-3 text-sm resize-none focus:outline-none border border-white/10 focus:border-pink-500 transition-colors bg-white/5 text-white placeholder-white/20"
                  />

                  {error && (
                    <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  {/* Price breakdown */}
                  <div className="border-t border-white/8 pt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-white/40">
                      <span>Gift amount</span>
                      <span>{formatCurrency(item.price, item.currency)}</span>
                    </div>
                    <div className="flex justify-between text-white/40">
                      <span>Processing fee</span>
                      <span>{formatCurrency(total - item.price, item.currency)}</span>
                    </div>
                    <div className="flex justify-between font-extrabold text-white pt-1 border-t border-white/8">
                      <span>Total</span>
                      <span>{formatCurrency(total, item.currency)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleGift}
                    disabled={loading}
                    className="w-full py-4 rounded-full font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-40 disabled:scale-100"
                    style={{
                      background: "linear-gradient(135deg, #ff2d78, #c4005e)",
                      boxShadow: "0 8px 30px rgba(255,45,120,0.3)",
                    }}
                  >
                    {loading ? "Processing..." : `Pay ${formatCurrency(total, item.currency)} 💖`}
                  </button>

                  <p className="text-xs text-center text-white/20">
                    {creatorName} receives 100% — SpoilMe takes zero commission
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
