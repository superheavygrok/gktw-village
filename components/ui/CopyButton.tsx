"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { TOKEN } from "@/lib/config";

export function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (TOKEN.mint === "YOUR_SOLANA_MINT_ADDRESS_HERE") {
      toast.error("Token address not configured yet. Check lib/config.ts");
      return;
    }

    try {
      await navigator.clipboard.writeText(TOKEN.mint);
      setCopied(true);
      toast.success("$VILLAGE contract address copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-xl border border-text/15 bg-surface px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-cream transition-all"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Copied" : "Copy CA"}
    </button>
  );
}
