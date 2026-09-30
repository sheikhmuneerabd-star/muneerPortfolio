import { Section } from "./section";
import { Reveal } from "./reveal";
import { steps } from "@/lib/data";
export function Process() {
  return (
    <Section id="process" eyebrow="Process" title="From Idea to Launch">
      <ol className="relative grid gap-5 lg:grid-cols-5">
        <span aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brand via-teal to-transparent lg:block" />
        {steps.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.1}>
            <li className="card relative h-full list-none"><b className="mb-3 grid h-12 w-12 place-items-center rounded-full border border-line bg-bg text-lg font-extrabold text-teal">0{i + 1}</b>
              <h3 className="mb-1.5 text-lg font-bold">{s.t}</h3><p className="text-sm text-muted">{s.d}</p></li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
