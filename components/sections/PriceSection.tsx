"use client";

import { CopyButton } from "@/components/ui/CopyButton";
import { TOKEN, GKTW } from "@/lib/config";

export function PriceSection() {
  const hasRealPair = TOKEN.pairAddress !== "YOUR_DEXSCREENER_PAIR_ADDRESS_HERE";

  return (
    <section id="price" className="section bg-cream border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="uppercase tracking-[2px] text-xs font-medium text-text-muted mb-2">
              LIVE ON SOLANA
            </div>
            <h2 className="font-serif text-5xl tracking-tighter">The Village, on-chain.</h2>
          </div>
          <div className="flex items-center gap-3">
            <CopyButton />
            <a
              href={GKTW.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text underline underline-offset-4"
            >
              Learn about the Village
            </a>
          </div>
        </div>

        {/* Market data row (placeholder ready for real Birdeye data) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Price", value: "—", sub: "USD" },
            { label: "Market Cap", value: "—", sub: "Fully diluted" },
            { label: "24h Volume", value: "—", sub: "Solana" },
            { label: "Liquidity", value: "—", sub: "Raydium / Pump" },
          ].map((stat, i) => (
            <div key={i} className="card p-5">
              <div className="text-xs uppercase tracking-widest text-text-muted mb-1.5">{stat.label}</div>
              <div className="font-serif text-3xl tracking-tight text-text">{stat.value}</div>
              <div className="text-xs text-text-muted mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Chart embed — the heart of the section, wishsolana-style */}
        <div className="chart-container aspect-[16/9] md:aspect-[16/8] w-full bg-white">
          {hasRealPair ? (
            <iframe
              src={`https://dexscreener.com/solana/${TOKEN.pairAddress}?embed=1&theme=light`}
              className="w-full h-full border-0"
              title="$VILLAGE price chart on Dexscreener"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center px-6 bg-[linear-gradient(145deg,#FDFAF7,#F8F3ED)]">
              <div className="max-w-md">
                <p className="font-serif text-2xl tracking-tight mb-3 text-text">
                  Live chart coming soon
                </p>
                <p className="text-text-muted mb-6">
                  Once the official $VILLAGE pair is live on Raydium or Pump Swap, the beautiful Dexscreener
                  embed will appear here — exactly like the highest-converting Solana community sites.
                </p>
                <p className="text-xs text-text-muted">
                  Update <span className="font-mono">pairAddress</span> in <span className="font-mono">lib/config.ts</span> to activate.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-3 text-center text-xs text-text-muted">
          Powered by Dexscreener • Real-time Solana data
        </div>
      </div>
    </section>
  );
}
