"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2, Layers } from "lucide-react";
import Image from "next/image";

const badges = [
  { t: "React", c: "left-0 top-10" }, { t: "Next.js", c: "right-2 top-0" },
  { t: "Node.js", c: "-right-1 top-32" }, { t: "MongoDB", c: "right-6 bottom-28" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (d: number) => ({ initial: reduce ? false : { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d } });
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-20 h-[520px] w-[520px] rounded-full bg-brand/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-[-140px] right-40 h-[380px] w-[380px] rounded-full bg-teal/20 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <motion.div {...fade(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm font-semibold">
            <span className="h-2 w-2 animate-pulse rounded-full bg-teal" />Available for Freelance &amp; Remote Opportunities
          </motion.div>
          <motion.h1 {...fade(0.08)} className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Building Digital Experiences That{" "}
            <span className="bg-gradient-to-r from-brand to-teal bg-clip-text text-transparent">Move Businesses Forward.</span>
          </motion.h1>
          <motion.p {...fade(0.16)} className="mb-2 mt-5 text-lg font-semibold">Full-Stack Developer specializing in MERN Stack &amp; Next.js.</motion.p>
          <motion.p {...fade(0.22)} className="max-w-xl text-muted">
            I transform ideas into fast, scalable, and beautifully crafted web applications — from modern business websites to complex SaaS platforms and e-commerce solutions.
          </motion.p>
          <motion.div {...fade(0.3)} className="my-7 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary group">Let&apos;s Work Together<ArrowRight size={18} className="transition group-hover:translate-x-1" /></a>
            <a href="#projects" className="btn"><Layers size={18} />Explore My Work</a>
          </motion.div>
          <motion.p {...fade(0.36)} className="text-sm text-muted">Have a project in mind? Let&apos;s turn it into something meaningful.</motion.p>
        </div>

        <motion.div {...fade(0.2)} className="relative min-h-[500px]">
          <div className="absolute inset-x-5 bottom-14 top-5 grid place-items-center rounded-[28px] bg-gradient-to-br from-brand to-teal p-6 text-center text-sm font-semibold text-white sm:inset-x-10">
            <Image src="/me.jpg" alt="Muneer" fill className="object-cover object-top rounded-[28px]" priority />
          </div>
          {badges.map((b, i) => (
            <motion.span key={b.t} className={`absolute rounded-xl border border-line bg-card px-3 py-1.5 text-xs font-bold shadow-lg ${b.c}`}
              animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}>
              {b.t}
            </motion.span>
          ))}
          <div className="absolute bottom-0 left-0 w-64 rounded-2xl bg-slate-900 p-4 font-mono text-xs leading-6 text-slate-300 shadow-2xl">
            <Code2 size={14} className="mb-1 text-teal" />
            <span className="text-teal">const</span> muneer = {"{"}<br />
            &nbsp;&nbsp;frontend: <span className="text-amber">&quot;React&quot;</span>,<br />
            &nbsp;&nbsp;backend: <span className="text-amber">&quot;Node&quot;</span>,<br />
            &nbsp;&nbsp;stack: <span className="text-amber">&quot;Full-Stack&quot;</span><br />{"};"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
