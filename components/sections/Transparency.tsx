import { Card } from "@/components/ui/Card";
import { GKTW, LAUNCH_PARTNERS } from "@/lib/config";

export function Transparency() {
  return (
    <section id="transparency" className="section bg-cream border-b border-black/5">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl mb-10">
          <div className="uppercase tracking-[2px] text-xs font-medium text-text-muted mb-3">
            COMMUNITY-LED & TRANSPARENT
          </div>
          <h2 className="font-serif text-5xl tracking-tighter">No hidden wallets. No illusions.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-xl tracking-tight mb-4">The Real Organization</h3>
            <ul className="space-y-3 text-text-muted">
              <li>Give Kids The World Village has published audited financials for decades.</li>
              <li>4/4 Charity Navigator rating every single year since 2005.</li>
              <li>Over 93 cents of every dollar goes directly to programs.</li>
              <li>Full leadership, 990s, and annual reports available on their site.</li>
            </ul>
            <a
              href={GKTW.financials}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-text-muted hover:text-text underline underline-offset-4"
            >
              View GKTW Financials →
            </a>
          </Card>

          <Card>
            <h3 className="font-semibold text-xl tracking-tight mb-4">Our Approach</h3>
            <ul className="space-y-3 text-text-muted">
              <li>This is a pure community project. No “team allocation” hidden in the contract.</li>
              <li>Any future community treasury will be on a transparent multisig.</li>
              <li>We are using pump.fun + donate.gg infrastructure for structured, compliant giving.</li>
              <li>We will never claim this token is “official” or endorsed by GKTW.</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-black/5 text-xs text-text-muted">
              Launch infrastructure: <span className="font-medium text-text">{LAUNCH_PARTNERS.note}</span>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-text-muted">
          Direct donations to <a href={GKTW.donate} target="_blank" className="underline">gktw.org</a> will always be the most effective way to support the Village.
        </div>
      </div>
    </section>
  );
}
