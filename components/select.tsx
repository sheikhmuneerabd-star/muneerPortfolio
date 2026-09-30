"use client";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Select({ id, label, value, onChange, options }: { id: string; label: string; value: string; onChange: (v: string) => void; options: readonly string[] }) {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const f = (e: MouseEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", f);
    return () => document.removeEventListener("mousedown", f);
  }, []);
  useEffect(() => { if (open) { setHi(Math.max(0, options.indexOf(value))); list.current?.focus({ preventScroll: true }); } }, [open]); // eslint-disable-line react-hooks/exhaustive-deps
  const pick = (o: string) => { onChange(o); setOpen(false); root.current?.querySelector("button")?.focus(); };
  const key = (e: React.KeyboardEvent) => {
    const k = e.key;
    if (k === "ArrowDown") { e.preventDefault(); setHi((h) => Math.min(h + 1, options.length - 1)); }
    else if (k === "ArrowUp") { e.preventDefault(); setHi((h) => Math.max(h - 1, 0)); }
    else if (k === "Enter" || k === " ") { e.preventDefault(); pick(options[hi]); }
    else if (k === "Escape") { setOpen(false); root.current?.querySelector("button")?.focus(); }
    else if (k === "Tab") setOpen(false);
  };
  return (
    <div ref={root} className="relative">
      <span id={`${id}-l`} className="mb-1.5 block text-sm font-semibold">{label}</span>
      <button type="button" id={id} aria-haspopup="listbox" aria-expanded={open} aria-labelledby={`${id}-l ${id}`} onClick={() => setOpen(!open)}
        onKeyDown={(e) => { if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); setOpen(true); } }}
        className={cn("flex w-full items-center justify-between rounded-xl border bg-bg px-3.5 py-3 text-left transition", open ? "border-brand ring-4 ring-brand/15" : "border-line hover:border-brand")}>
        {value}<ChevronDown size={18} className={cn("text-muted transition", open && "rotate-180")} />
      </button>
      <ul ref={list} role="listbox" tabIndex={-1} aria-labelledby={`${id}-l`} aria-activedescendant={`${id}-${hi}`} onKeyDown={key}
        className={cn("absolute inset-x-0 top-full z-20 mt-1.5 max-h-60 origin-top overflow-auto rounded-2xl border border-line bg-card p-1.5 shadow-2xl outline-none transition", open ? "scale-100 opacity-100" : "invisible scale-95 opacity-0")}>
        {options.map((o, i) => (
          <li key={o} id={`${id}-${i}`} role="option" aria-selected={o === value} onMouseEnter={() => setHi(i)} onClick={() => pick(o)}
            className={cn("flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-[15px]", i === hi && "bg-soft", o === value && "font-semibold")}>
            {o}<Check size={16} className={cn("text-teal", o !== value && "opacity-0")} />
          </li>
        ))}
      </ul>
    </div>
  );
}
