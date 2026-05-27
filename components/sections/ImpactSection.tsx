import { Card } from "@/components/ui/Card";
import { GKTW } from "@/lib/config";

const stats = [
  {
    number: "205,000+",
    label: "Families welcomed since 1986",
    detail: "From all 50 states and 78 countries",
  },
  {
    number: "4/4",
    label: "Charity Navigator rating",
    detail: "Top rating every year since 2005",
  },
  {
    number: "93¢",
    label: "Of every dollar to programs",
    detail: "Exceptional efficiency & transparency",
  },
  {
    number: "89",
    label: "Acres of storybook magic",
    detail: "Whimsical resort in Kissimmee, Florida",
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="section bg-white border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-10">
          <div className="uppercase tracking-[2px] text-xs font-medium text-text-muted mb-3">
            THE CAUSE THAT INSPIRES US
          </div>
          <h2 className="font-serif text-5xl tracking-tighter leading-none">
            Real magic.<br />Real families. Real impact.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <Card key={index} className="flex flex-col">
              <div className="stat-number text-text mb-2">{stat.number}</div>
              <div className="font-medium text-lg tracking-tight mb-2">{stat.label}</div>
              <div className="text-sm text-text-muted mt-auto pt-2 border-t border-black/5">
                {stat.detail}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={GKTW.financials}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-text-muted hover:text-text underline underline-offset-4"
          >
            View GKTW’s audited financials and Charity Navigator profile →
          </a>
        </div>
      </div>
    </section>
  );
}
