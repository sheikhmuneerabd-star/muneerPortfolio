import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";
export function Section({ id, eyebrow, title, sub, alt, center, children }: { id?: string; eyebrow: string; title: string; sub?: string; alt?: boolean; center?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("py-20", alt && "border-y border-line bg-card")}>
      <div className="container-x">
        <Reveal className={cn("mb-10 max-w-2xl", center && "mx-auto text-center")}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[.12em] text-teal">{eyebrow}</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          {sub && <p className="mt-3 text-muted">{sub}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
export const Grid = ({ children, cols = "md:grid-cols-2 lg:grid-cols-3" }: { children: React.ReactNode; cols?: string }) => <div className={cn("grid gap-5", cols)}>{children}</div>;
