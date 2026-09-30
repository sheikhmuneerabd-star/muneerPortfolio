"use client";
import { ThemeProvider as P } from "next-themes";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <P attribute="class" defaultTheme="light" enableSystem={false}>{children}</P>;
}
