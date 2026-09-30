import { ChevronDown } from "lucide-react";
import { Section } from "./section";
import { faq } from "@/lib/data";
export function FAQ() {
  return (
    <Section alt eyebrow="FAQ" title="Frequently Asked Questions">
      <div className="mx-auto max-w-3xl space-y-3">
        {faq.map(([q, a]) => (
          <details key={q} className="group rounded-2xl border border-line bg-bg px-5 transition open:border-brand">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 font-semibold [&::-webkit-details-marker]:hidden">{q}<ChevronDown size={18} className="shrink-0 text-brand transition group-open:rotate-180" /></summary>
            <p className="pb-4 text-muted">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
