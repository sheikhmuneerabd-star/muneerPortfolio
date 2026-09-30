import { Check } from "lucide-react";
import { credibility, tech } from "@/lib/data";

export function TrustStrip() {
  return (
    <div className="border-y border-line bg-card py-11">
      <div className="container-x text-center">
        <h2 className="text-xl font-bold">Technology Meets Thoughtful Execution</h2>
        <ul className="my-5 flex flex-wrap justify-center gap-2.5">
          {tech.map((t) => <li key={t} className="rounded-xl border border-line px-4 py-2 text-sm font-semibold">{t}</li>)}
        </ul>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-muted">
          {credibility.map((c) => <li key={c} className="flex items-center gap-1.5"><Check size={16} className="text-teal" />{c}</li>)}
        </ul>
      </div>
    </div>
  );
}
