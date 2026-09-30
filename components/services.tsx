import { ArrowRight } from "lucide-react";
import { Section, Grid } from "./section";
import { Reveal } from "./reveal";
import { IconBox } from "./icons";
import { services } from "@/lib/data";
export function Services() {
  return (
    <Section id="services" alt eyebrow="Services" title="Solutions I Can Build for You">
      <Grid>
        {services.map((s, i) => (
          <Reveal key={s.t} delay={(i % 3) * 0.07}>
            <div className="card group h-full"><IconBox name={s.i} /><h3 className="mb-2 mt-4 text-lg font-bold">{s.t}</h3><p className="mb-4 text-sm text-muted">{s.d}</p>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">Discuss Your Project<ArrowRight size={15} className="transition group-hover:translate-x-1" /></a></div>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
