import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatCurrency } from "@/lib/utils";
import GiftButton from "@/components/gifting/GiftButton";

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { username } = await params;
  const user = await prisma.user.findUnique({
    where: { username },
    select: { displayName: true, bio: true },
  });
  if (!user) return {};
  return {
    title: `${user.displayName}'s Wishlist — SpoilMe`,
    description: user.bio ?? `Spoil ${user.displayName} on SpoilMe.`,
  };
}

export default async function CreatorPage({ params }: Props) {
  const { username } = await params;

  const creator = await prisma.user.findUnique({
    where: { username, isActive: true },
    include: {
      wishlists: {
        where: { isPublic: true },
        include: {
          items: {
            where: { isReceived: false },
            orderBy: { position: "asc" },
          },
        },
      },
    },
  });

  if (!creator) notFound();

  const allItems = creator.wishlists.flatMap((w) => w.items);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Cover */}
      <div
        className="h-52 relative overflow-hidden"
        style={{
          background: creator.coverUrl
            ? undefined
            : "linear-gradient(135deg, #ff2d78 0%, #7c1040 100%)",
        }}
      >
        {creator.coverUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={creator.coverUrl} alt="cover" className="w-full h-full object-cover" />
        )}
        {/* Fade to black at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{ background: "linear-gradient(to bottom, transparent, #000)" }}
        />
      </div>

      {/* Profile */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="-mt-14 mb-8 relative z-10">
          <div
            className="w-24 h-24 rounded-full border-4 overflow-hidden"
            style={{ borderColor: "#ff2d78", background: "#1a0010" }}
          >
            {creator.avatarUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={creator.avatarUrl} alt={creator.displayName} className="w-full h-full object-cover" />
            )}
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-extrabold">
              {creator.displayName}
              {creator.isVerified && (
                <span className="ml-2 text-lg" style={{ color: "#ff2d78" }}>✓</span>
              )}
            </h1>
            <p className="text-white/40 text-sm">@{creator.username}</p>
            {creator.bio && (
              <p className="mt-3 text-white/70 leading-relaxed">{creator.bio}</p>
            )}
          </div>
        </div>

        {/* Wishlists */}
        {creator.wishlists.map((wishlist) => (
          <div key={wishlist.id} className="mb-10">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span style={{ color: "#ff2d78" }}>✦</span> {wishlist.title}
            </h2>
            <div className="space-y-3">
              {wishlist.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl p-4 border border-white/10 bg-white/5 hover:border-pink-500/30 transition-colors"
                >
                  {item.imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{item.title}</p>
                    {item.description && (
                      <p className="text-sm text-white/40 truncate">{item.description}</p>
                    )}
                    <p className="font-bold mt-1" style={{ color: "#ff2d78" }}>
                      {formatCurrency(item.price, item.currency)}
                    </p>
                  </div>
                  <GiftButton item={item} creatorName={creator.displayName} />
                </div>
              ))}
              {wishlist.items.length === 0 && (
                <p className="text-white/30 text-sm text-center py-10">No items yet.</p>
              )}
            </div>
          </div>
        ))}

        {allItems.length === 0 && (
          <p className="text-center text-white/30 py-20">
            {creator.displayName} hasn&apos;t added any items yet.
          </p>
        )}

        <p className="text-center text-xs text-white/20 py-10">
          Powered by{" "}
          <a href="/" className="font-semibold" style={{ color: "#ff2d78" }}>
            SpoilMe
          </a>{" "}
          — creators keep 100%
        </p>
      </div>
    </main>
  );
}
