"use client";

import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { Card } from "@/components/ui/Card";
import { ExternalLink } from "lucide-react";
import { TOKEN, GKTW, LAUNCH_PARTNERS } from "@/lib/config";

export function BuySection() {
  const hasMint = TOKEN.mint !== "YOUR_SOLANA_MINT_ADDRESS_HERE";

  const jupiterUrl = hasMint
    ? `https://jup.ag/swap/SOL-${TOKEN.mint}`
    : "https://jup.ag/swap";

  return (
    <section id="buy" className="section bg-cream border-b border-black/5">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl mb-10">
          <div className="uppercase tracking-[2px] text-xs font-medium text-text-muted mb-3">
            TAKE ACTION
          </div>
          <h2 className="font-serif text-5xl tracking-tighter leading-none mb-4">
            Support in the way that feels right.
          </h2>
          <p className="text-xl text-text-muted">
            The most direct and powerful way to help Give Kids The World Village is to donate straight to them.
            $VILLAGE exists as a community vehicle to spread awareness and participation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Direct Donation - Primary recommendation */}
          <Card className="border-rose/30 bg-white/80">
            <div className="mb-6">
              <div className="inline-block rounded-full bg-rose px-3 py-1 text-xs font-medium tracking-wider mb-4">
                MOST IMPACTFUL
              </div>
              <h3 className="font-serif text-3xl tracking-tight mb-3">Donate directly to GKTW</h3>
              <p className="text-text-muted">
                100% of your gift goes to the Village. This is the gold standard and how the organization has
                maintained its 4/4 Charity Navigator rating for 20+ years.
              </p>
            </div>

            <a href={GKTW.donate} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="w-full justify-center">
                Give to Give Kids The World Village <ExternalLink size={16} />
              </Button>
            </a>
            <div className="mt-3 text-xs text-center text-text-muted">
              Official donation page • Tax-deductible
            </div>
          </Card>

          {/* Token participation */}
          <Card>
            <div className="mb-6">
              <div className="inline-block rounded-full bg-gold/70 px-3 py-1 text-xs font-medium tracking-wider mb-4">
                COMMUNITY PARTICIPATION
              </div>
              <h3 className="font-serif text-3xl tracking-tight mb-3">Buy $VILLAGE on Solana</h3>
              <p className="text-text-muted mb-4">
                Join the community token. When the pair is live, you can swap via Jupiter (best price) or
                participate through pump.fun + donate.gg infrastructure.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={jupiterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="primary" className="w-full justify-center">
                  Swap on Jupiter (recommended) <ExternalLink size={16} />
                </Button>
              </a>

              <a
                href={LAUNCH_PARTNERS.pumpFun}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="secondary" className="w-full justify-center">
                  View on pump.fun
                </Button>
              </a>

              <div className="pt-2 border-t border-black/5">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium">Contract Address</div>
                  <CopyButton />
                </div>
                <div className="font-mono text-[11px] text-text-muted break-all bg-black/5 p-2 rounded-xl">
                  {TOKEN.mint}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Affiliated programs credibility block */}
        <div className="mt-10 rounded-3xl border border-black/5 bg-white p-8 text-sm">
          <div className="uppercase tracking-[1.5px] text-xs font-medium text-text-muted mb-4">
            AFFILIATED PROGRAMS & INFRASTRUCTURE
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-text-muted">
            <div>
              <span className="font-medium text-text">pump.fun</span> — Primary launch platform for the token.
            </div>
            <div>
              <span className="font-medium text-text">donate.gg</span> — Charity Coins partnership enabling compliant,
              verified routing of creator fees to 501(c)(3) organizations.
            </div>
          </div>

          <p className="mt-4 text-xs text-text-muted">
            These partnerships provide structure and transparency that many community tokens lack. When speaking with
            Give Kids The World leadership, this infrastructure demonstrates serious intent.
          </p>
        </div>
      </div>
    </section>
  );
}
