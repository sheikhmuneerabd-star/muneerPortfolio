import { ArrowUp, Briefcase, Github, Linkedin, MessageCircle } from "lucide-react";
import { nav, site } from "@/lib/data";
const soc = [["GitHub", Github, site.socials.github], ["LinkedIn", Linkedin, site.socials.linkedin], ["Fiverr", Briefcase, site.socials.fiverr], ["WhatsApp", MessageCircle, site.socials.whatsapp]] as const;
export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-sm text-muted">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div><p className="font-bold text-fg">Muneer — Full-Stack Developer</p><p>Building thoughtful digital experiences with modern technology.</p></div>
          <nav aria-label="Footer" className="flex flex-wrap gap-4">{nav.slice(1).map((n) => <a key={n.href} href={n.href} className="hover:text-fg">{n.label}</a>)}</nav>
          <div className="flex items-center gap-2">
            {soc.map(([l, I, h]) => <a key={l} href={h} aria-label={l} className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card transition hover:-translate-y-1 hover:border-brand hover:text-brand"><I size={18} /></a>)}
            <a href="#home" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card transition hover:-translate-y-1 hover:border-brand hover:text-brand"><ArrowUp size={18} /></a>
          </div>
        </div>
        <p className="mt-6">© {new Date().getFullYear()} Muneer. Designed with purpose. Built with care.</p>
      </div>
    </footer>
  );
}
