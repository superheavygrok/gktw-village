"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GKTW, TOKEN } from "@/lib/config";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Impact", href: "#impact" },
    { label: "Buy", href: "#buy" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Transparency", href: "#transparency" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-cream/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="font-serif text-2xl tracking-tight text-text">
            $VILLAGE
          </div>
          <span className="rounded-full bg-rose/60 px-2.5 py-px text-[10px] font-medium tracking-[1px] text-text/70">
            FOR THE VILLAGE
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={GKTW.donate}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-muted hover:text-text"
          >
            Donate to GKTW
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`https://jup.ag/swap/SOL-${TOKEN.mint}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="sm">
              Buy $VILLAGE
            </Button>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-xl p-2 text-text-muted hover:bg-surface"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-cream px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href={GKTW.donate}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg font-medium text-text-muted"
          >
            Donate directly to GKTW
          </a>
        </div>
      )}
    </nav>
  );
}
