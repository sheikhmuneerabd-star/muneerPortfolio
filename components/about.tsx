import { Download } from "lucide-react";
import { Section, Grid } from "./section";
import { Reveal } from "./reveal";
import { IconBox } from "./icons";
import { principles, site } from "@/lib/data";
export function About() {
  return (
    <Section id="about" eyebrow="About" title="More Than Just Writing Code"
      sub="I'm a full-stack developer passionate about building digital products that combine thoughtful design with reliable engineering. I work across the entire development process — from planning and interface design to backend architecture, integration, testing, and deployment.">
      <p className="-mt-4 mb-8 max-w-2xl text-muted">My approach: start from the problem, keep the stack simple, and communicate clearly at every step.</p>
      <Grid cols="md:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.07}><div className="card group h-full"><IconBox name={p.i} /><h3 className="mb-2 mt-4 text-lg font-bold">{p.t}</h3><p className="text-sm text-muted">{p.d}</p></div></Reveal>
        ))}
        <Reveal delay={0.21}><div className="card group h-full bg-gradient-to-br from-soft to-card"><h3 className="text-lg font-bold">Muneer</h3><p className="mb-1 mt-1 text-sm text-muted">Full-Stack Developer · MERN &amp; Next.js</p><p className="mb-4 text-xs font-semibold text-amber">[Add location / experience]</p><a href={site.cvUrl} download className="btn"><Download size={16} />Download CV</a></div></Reveal>
      </Grid>
    </Section>
  );
}
