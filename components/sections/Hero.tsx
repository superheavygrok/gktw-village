import { Button } from "@/components/ui/Button";
import { GKTW } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-[#F8F3ED]">
      {/* Subtle magical gradient + storybook warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(#EDE4F7_0.6px,transparent_1px)] bg-[length:4px_4px] opacity-40" />

      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-24 md:pb-20 text-center">
        <div className="inline-block rounded-full bg-rose/70 px-4 py-1 text-xs tracking-[2px] font-medium text-text/70 mb-6">
          GIVE KIDS THE WORLD VILLAGE
        </div>

        <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-1.5px] text-text mb-6">
          Every child<br />deserves a little magic.
        </h1>

        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-text-muted mb-10">
          $VILLAGE is the community token dedicated to amplifying hope for
          critically ill children and their families at Give Kids The World Village.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#buy">
            <Button variant="primary" className="text-lg px-10 py-4">
              Support the Village
            </Button>
          </a>
          <a
            href={GKTW.donate}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="text-lg px-10 py-4">
              Donate directly to GKTW
            </Button>
          </a>
        </div>

        <p className="mt-8 text-sm text-text-muted max-w-md mx-auto">
          205,000+ families helped since 1986 • 4/4 Charity Navigator rating every year since 2005
        </p>
      </div>

      {/* Decorative soft elements */}
      <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
    </section>
  );
}
