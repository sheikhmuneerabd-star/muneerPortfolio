"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { nav, site } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => { const el = document.querySelector(n.href); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const resize = () => window.innerWidth > 1024 && setOpen(false);
    window.addEventListener("keydown", esc);
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("keydown", esc); window.removeEventListener("resize", resize); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* blur lives on its own layer so it never traps the fixed mobile drawer */}
      <div aria-hidden className={cn("absolute inset-0 -z-10 border-b border-line bg-bg/80 backdrop-blur-md transition-opacity", scrolled ? "opacity-100" : "opacity-0")} />
      <nav aria-label="Main" className="container-x flex h-[68px] items-center justify-between">
        <a href="#home" className="text-xl font-extrabold">Muneer<span className="text-brand">.</span></a>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href}
              className={cn("relative rounded-lg px-3 py-2 text-sm font-medium transition-colors", active === n.href ? "text-fg" : "text-muted hover:text-fg")}>
              {n.label}
              {active === n.href && <motion.span layoutId="nav-dot" className="absolute inset-x-3 bottom-0.5 h-0.5 rounded bg-teal" />}
            </a>
          ))}
          <a href={site.cvUrl} download className="btn btn-primary ml-2 !py-2"><Download size={16} />Download CV</a>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}
            className="relative z-[3] grid h-10 w-10 place-items-center rounded-xl border border-line bg-card lg:hidden">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div key="ov" onClick={() => setOpen(false)} className="fixed inset-0 z-[1] bg-fg/50 lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.aside key="dr" className="fixed inset-y-0 right-0 z-[2] flex w-[min(300px,82vw)] flex-col gap-1 overflow-y-auto border-l border-line bg-card px-5 pb-6 pt-24 lg:hidden"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.28 }}>
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className={cn("rounded-lg px-3 py-3 font-medium", active === n.href ? "bg-soft text-brand" : "text-muted")}>{n.label}</a>
              ))}
              <a href={site.cvUrl} download className="btn btn-primary mt-3 justify-center"><Download size={16} />Download CV</a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
