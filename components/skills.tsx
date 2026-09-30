import { Section, Grid } from "./section";
import { Reveal } from "./reveal";
import { IconBox } from "./icons";
import { skills } from "@/lib/data";
export function Skills() {
  return (
    <Section id="skills" alt eyebrow="Skills" title="Tools Behind the Experience">
      <Grid cols="sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.07}>
            <div className="card group h-full"><IconBox name={s.i} /><h3 className="mb-3 mt-4 text-lg font-bold">{s.t}</h3>
              <ul className="flex flex-wrap gap-1.5">{s.items.map((t) => <li key={t} className="rounded-full bg-soft px-2.5 py-1 text-xs font-semibold text-brand transition hover:-translate-y-0.5">{t}</li>)}</ul></div>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
