import { Card } from "@/components/ui/Card";

const phases = [
  {
    phase: "01",
    title: "Launch & Awareness",
    items: ["Token deployed on pump.fun", "Beautiful community site live", "Initial social push with GKTW story"],
  },
  {
    phase: "02",
    title: "First Community Gift",
    items: ["Transparent on-chain donation to GKTW", "Public multisig / donate.gg routing activated", "Announce first dollar amount sent"],
  },
  {
    phase: "03",
    title: "Events & Connection",
    items: ["Community meetups & virtual Village tours", "Merch / storytelling drops", "Partnership conversations with GKTW"],
  },
  {
    phase: "04",
    title: "Long-term Stewardship",
    items: ["Public treasury dashboard", "Holder benefits (events, updates, recognition)", "Continued direct donation education"],
  },
];

export function UtilityRoadmap() {
  return (
    <section id="roadmap" className="section bg-white border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-10">
          <div className="uppercase tracking-[2px] text-xs font-medium text-text-muted mb-3">
            TOKEN UTILITY & PATH
          </div>
          <h2 className="font-serif text-5xl tracking-tighter">What $VILLAGE actually does.</h2>
        </div>

        <div className="space-y-6">
          {phases.map((p, index) => (
            <Card key={index} className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="font-serif text-7xl text-rose/60 font-semibold tracking-[-3px] w-16 shrink-0">
                {p.phase}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl tracking-tight mb-3">{p.title}</h3>
                <ul className="grid md:grid-cols-2 gap-x-8 text-text-muted text-[15px]">
                  {p.items.map((item, i) => (
                    <li key={i} className="py-1 flex items-start gap-2">
                      <span className="mt-2 block h-1 w-1 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted max-w-lg mx-auto">
          $VILLAGE is a community awareness and participation token. It is not a promise of financial returns.
          The real magic happens when people also give directly to Give Kids The World Village.
        </p>
      </div>
    </section>
  );
}
