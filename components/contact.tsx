"use client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Briefcase, CheckCircle2, Github, Linkedin, Loader2, Mail, MessageCircle, Send, TriangleAlert } from "lucide-react";
import { Section } from "./section";
import { Select } from "./select";
import { budgets, contactSchema, types, type ContactInput } from "@/lib/schema";
import { site } from "@/lib/data";

const links = [
  { n: "Email", h: `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`, I: Mail, s: site.email },
  { n: "LinkedIn", h: site.socials.linkedin, I: Linkedin, s: "Connect" },
  { n: "GitHub", h: site.socials.github, I: Github, s: "See my code" },
  { n: "Fiverr", h: site.socials.fiverr, I: Briefcase, s: "Hire me" },
  { n: "WhatsApp", h: site.socials.whatsapp, I: MessageCircle, s: "Chat" },
];
const input = "w-full rounded-xl border bg-bg px-3.5 py-3 outline-none transition focus:ring-brand/15";

export function Contact() {
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<ContactInput>({ resolver: zodResolver(contactSchema), defaultValues: { type: types[0], budget: budgets[0] } });
  const [st, setSt] = useState<{ s: "idle" | "loading" | "ok" | "err"; m?: string }>({ s: "idle" });
  const onSubmit = async (d: ContactInput) => {
    setSt({ s: "loading" });
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Something went wrong.");
      setSt({ s: "ok" });
      reset();
    } catch (e) { setSt({ s: "err", m: e instanceof Error ? e.message : "Something went wrong." }); }
  };
  const err = (k: "name" | "email" | "message") => errors[k] && <p id={`${k}-e`} role="alert" className="mt-1 text-sm text-red-600">{errors[k]?.message}</p>;
  const cls = (k: "name" | "email" | "message") => `${input} ${errors[k] ? "border-red-500" : "border-line"}`;
  return (
    <Section id="contact" alt eyebrow="Contact" title="Let's Build Something Meaningful." sub="Have an idea, a project, or an opportunity? I'd love to hear what you're working on.">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
          <label className="text-sm font-semibold">Name<input {...register("name")} autoComplete="name" aria-invalid={!!errors.name} aria-describedby="name-e" className={`${cls("name")} mt-1.5 font-normal`} /></label>{err("name")}
          <label className="text-sm font-semibold">Email<input {...register("email")} type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="email-e" className={`${cls("email")} mt-1.5 font-normal`} /></label>{err("email")}
          <div className="grid gap-4 sm:grid-cols-2">
            <Controller control={control} name="type" render={({ field }) => <Select id="type" label="Project type" options={types} value={field.value} onChange={field.onChange} />} />
            <Controller control={control} name="budget" render={({ field }) => <Select id="budget" label="Budget range (optional)" options={budgets} value={field.value ?? budgets[0]} onChange={field.onChange} />} />
          </div>
          <label className="text-sm font-semibold">Project details<textarea {...register("message")} rows={5} aria-invalid={!!errors.message} aria-describedby="message-e" className={`${cls("message")} mt-1.5 font-normal`} /></label>{err("message")}
          <input {...register("website")} tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px]" />
          <button type="submit" disabled={st.s === "loading"} className="btn btn-primary group justify-center disabled:opacity-70">
            {st.s === "loading" ? <><Loader2 size={17} className="animate-spin" />Sending…</> : <><Send size={17} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-1" />Send message</>}
          </button>
          <div aria-live="polite">
            {st.s === "ok" && <p className="flex items-center gap-2 text-sm font-semibold text-teal"><CheckCircle2 size={18} />Thanks! Your message was sent — I&apos;ll reply soon.</p>}
            {st.s === "err" && <p className="flex items-center gap-2 text-sm font-semibold text-red-600"><TriangleAlert size={18} />{st.m}</p>}
          </div>
        </form>
        <div className="grid content-start gap-3">
          {links.map(({ n, h, I, s }) => (
            <a key={n} href={h} className="card group flex items-center gap-4 !p-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-soft text-brand transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-teal group-hover:text-white"><I size={22} /></span>
              <span><b className="block">{n}</b><small className="text-muted">{s}</small></span>
              <ArrowRight size={18} className="ml-auto text-muted transition group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
