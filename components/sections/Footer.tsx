import { GKTW, LAUNCH_PARTNERS } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-text text-cream pt-14 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-3xl tracking-tight mb-3">$VILLAGE</div>
            <div className="text-sm text-cream/70 max-w-[18ch]">
              Community token supporting Give Kids The World Village.
            </div>
          </div>

          {/* GKTW Links */}
          <div>
            <div className="font-medium mb-4 text-sm tracking-wider">GIVE KIDS THE WORLD VILLAGE</div>
            <div className="space-y-2 text-sm text-cream/80">
              <a href={GKTW.officialSite} target="_blank" className="block hover:text-white">Official Website</a>
              <a href={GKTW.donate} target="_blank" className="block hover:text-white">Donate Directly</a>
              <a href={GKTW.financials} target="_blank" className="block hover:text-white">Financials & Reports</a>
              <a href={GKTW.partners} target="_blank" className="block hover:text-white">Our Partners</a>
              <a href={GKTW.charityNavigator} target="_blank" className="block hover:text-white">Charity Navigator Profile</a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <div className="font-medium mb-4 text-sm tracking-wider">THE VILLAGE ONLINE</div>
            <div className="space-y-2 text-sm text-cream/80">
              <a href={GKTW.x} target="_blank" className="block hover:text-white">X / Twitter</a>
              <a href={GKTW.instagram} target="_blank" className="block hover:text-white">Instagram (@gktwvillage)</a>
              <a href={GKTW.facebook} target="_blank" className="block hover:text-white">Facebook</a>
              <a href={GKTW.youtube} target="_blank" className="block hover:text-white">YouTube</a>
            </div>
          </div>

          {/* Affiliated Programs */}
          <div>
            <div className="font-medium mb-4 text-sm tracking-wider">LAUNCH & DISTRIBUTION</div>
            <div className="space-y-2 text-sm text-cream/80">
              <a href={LAUNCH_PARTNERS.pumpFun} target="_blank" className="block hover:text-white">pump.fun</a>
              <a href={LAUNCH_PARTNERS.donateGg} target="_blank" className="block hover:text-white">donate.gg (Charity Coins)</a>
            </div>
            <div className="mt-3 text-[12px] text-cream/60 leading-snug">
              Structured, compliant creator fee routing to verified nonprofits.
            </div>
          </div>
        </div>

        {/* Disclaimers - non-negotiable honesty */}
        <div className="mt-16 pt-8 border-t border-white/15 text-[12px] leading-relaxed text-cream/60 disclaimer">
          <p className="mb-3">
            $VILLAGE is a community-driven token created to raise awareness and participation for Give Kids The World Village.
            It is <span className="text-cream/80">not</span> an official token, product, or program of Give Kids The World, Inc.
            and is not endorsed by the organization.
          </p>
          <p className="mb-3">
            Cryptocurrency involves substantial risk. Most community tokens lose value. This is not financial advice.
            Past performance or charitable intent does not predict future results.
          </p>
          <p>
            The most effective way to support the children and families served by Give Kids The World Village is to donate
            directly through their official website. We strongly encourage everyone who cares about this cause to give there first.
          </p>
          <div className="mt-6 text-[11px] text-cream/50">
            © {new Date().getFullYear()} Community project in support of Give Kids The World Village. All rights to the Village name and imagery belong to Give Kids The World, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
