import { Check, Quote } from "lucide-react";
import { Section, Grid } from "./section";
import { Reveal } from "./reveal";
import { IconBox } from "./icons";
import { testimonials, why, workingPrinciples } from "@/lib/data";
export function Why() {
  return (
    <Section alt eyebrow="Why Work With Me" title="A Development Partner Who Understands the Bigger Picture">
      <Grid cols="sm:grid-cols-2 lg:grid-cols-4">
        {why.map((w, i) => (
          <Reveal key={w.t} delay={i * 0.07}><div className="card group h-full"><IconBox name={w.i} /><h3 className="mb-2 mt-4 text-lg font-bold">{w.t}</h3><p className="text-sm text-muted">{w.d}</p></div></Reveal>
        ))}
      </Grid>
    </Section>
  );
}
export function Testimonials() {
  if (!testimonials.length)
    return (
      <Section eyebrow="Approach" title="Working Principles">
        <Grid cols="sm:grid-cols-2">{workingPrinciples.map((p, i) => (
          <Reveal key={p} delay={i * 0.07}><div className="card flex items-center gap-3"><Check className="shrink-0 text-teal" size={20} /><span className="font-semibold">{p}</span></div></Reveal>
        ))}</Grid>
      </Section>
    );
  return (
    <Section eyebrow="Testimonials" title="Kind Words">
      <Grid>{testimonials.map((t) => (
        <Reveal key={t.name}><figure className="card h-full"><Quote className="mb-3 text-teal" size={22} /><blockquote className="text-sm">{t.quote}</blockquote>
          <figcaption className="mt-4 text-sm font-bold">{t.name}<span className="block font-normal text-muted">{t.role}{t.project && ` · ${t.project}`}</span></figcaption></figure></Reveal>
      ))}</Grid>
    </Section>
  );
}
