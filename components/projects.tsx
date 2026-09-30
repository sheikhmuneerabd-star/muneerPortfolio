"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Section, Grid } from "./section";
import { Reveal } from "./reveal";
import { projects, type Project } from "@/lib/data";

const Badges = ({ items }: { items: string[] }) => <div className="flex flex-wrap gap-1.5">{items.map((t) => <span key={t} className="rounded-full bg-soft px-2.5 py-1 text-xs font-semibold text-brand">{t}</span>)}</div>;
const Preview = ({ p }: { p: Project }) =>
  p.image ? <Image src={p.image} alt={`${p.name} interface preview`} width={800} height={500} className="h-[190px] w-full rounded-xl border border-line object-cover" /> : (
    <div aria-hidden className="h-44 rounded-xl border border-line bg-gradient-to-br from-soft to-bg p-3">
      <div className="mb-2 flex gap-1.5">{[0, 1, 2].map((i) => <i key={i} className="h-2 w-2 rounded-full bg-line" />)}</div>
      <div className="grid h-[7.5rem] grid-cols-[.6fr_1.4fr] gap-2"><div className="rounded-lg border border-line bg-card" /><div className="rounded-lg bg-gradient-to-br from-brand to-teal opacity-85" /></div>
    </div>
  );
const Links = ({ p }: { p: Project }) => (<>
  <a href={p.live} className="btn !px-3.5 !py-2"><ExternalLink size={15} />Live Demo</a>
  <a href={p.repo} className="btn !px-3.5 !py-2"><Github size={15} />Source Code</a></>);
const Field = ({ h, children }: { h: string; children: React.ReactNode }) => <><h4 className="mb-1 mt-5 text-xs font-bold uppercase tracking-wider text-teal">{h}</h4>{children}</>;

export function Projects() {
  const [sel, setSel] = useState<Project | null>(null);
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { const d = ref.current; if (!d) return; if (sel && !d.open) d.showModal(); if (!sel && d.open) d.close(); }, [sel]);
  const ph = (t: string) => <p className="text-sm font-semibold text-amber">{t}</p>;
  return (
    <Section id="projects" eyebrow="Projects" title="Selected Work" sub="A collection of digital experiences built with attention to performance, usability, and real-world functionality. These are sample projects — replace them in lib/data.ts.">
      <Grid cols="md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <article className="card group flex h-full flex-col">
              <Preview p={p} />
              <p className="mt-4 text-xs font-semibold text-muted">{p.cat}</p>
              <h3 className="mb-1 text-xl font-bold">{p.name}</h3>
              <p className="mb-3 text-sm text-muted">{p.desc}</p>
              <Badges items={p.stack} />
              <div className="mt-auto flex flex-wrap gap-2 pt-5"><Links p={p} />
                <button onClick={() => setSel(p)} className="btn btn-primary !px-3.5 !py-2">Case study<ArrowRight size={15} className="transition group-hover:translate-x-1" /></button></div>
            </article>
          </Reveal>
        ))}
      </Grid>
      <dialog ref={ref} aria-labelledby="cs-title" onClose={() => setSel(null)} onClick={(e) => e.target === e.currentTarget && setSel(null)}
        className="w-[calc(100%-2rem)] max-w-2xl rounded-3xl border border-line bg-card p-0 text-fg backdrop:bg-fg/60">
        {sel && (
          <div className="max-h-[85vh] overflow-auto p-7">
            <p className="text-xs font-semibold text-muted">{sel.cat}</p>
            <h3 id="cs-title" className="mb-4 text-2xl font-extrabold">{sel.name}</h3>
            <Preview p={sel} />
            <Field h="Overview"><p className="text-sm text-muted">{sel.desc}</p></Field>
            <Field h="Problem">{sel.problem ? <p className="text-sm text-muted">{sel.problem}</p> : ph("[Describe the problem this project solved]")}</Field>
            <Field h="Solution">{sel.solution ? <p className="text-sm text-muted">{sel.solution}</p> : ph("[Describe your approach]")}</Field>
            <Field h="My role">{sel.role ? <p className="text-sm text-muted">{sel.role}</p> : ph("[Your responsibilities]")}</Field>
            <Field h="Technology stack"><Badges items={sel.stack} /></Field>
            <Field h="Key features"><ul className="list-disc pl-5 text-sm text-muted">{sel.features.map((f) => <li key={f}>{f}</li>)}</ul></Field>
            <Field h="Challenges">{sel.challenges ? <p className="text-sm text-muted">{sel.challenges}</p> : ph("[Challenges and how you solved them]")}</Field>
            <div className="mt-6 flex flex-wrap gap-2"><Links p={sel} /><button onClick={() => setSel(null)} className="btn !px-3.5 !py-2">Close</button></div>
          </div>
        )}
      </dialog>
    </Section>
  );
}
