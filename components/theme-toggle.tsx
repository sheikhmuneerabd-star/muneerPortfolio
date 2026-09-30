"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  const dark = m && resolvedTheme === "dark";
  return (
    <button aria-label="Toggle dark mode" onClick={() => setTheme(dark ? "light" : "dark")}
      className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card transition hover:-translate-y-0.5 hover:border-brand hover:text-brand">
      {dark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}
