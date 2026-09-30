import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schema";

const hits = new Map<string, number[]>(); // simple per-instance rate limit; use Upstash/Redis for multi-instance
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  if (recent.length >= 5) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  hits.set(ip, [...recent, now]);

  const parsed = contactSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  const d = parsed.data;
  if (d.website) return NextResponse.json({ ok: true }); // honeypot filled: bot, drop silently

  const { RESEND_API_KEY: key, CONTACT_TO_EMAIL: to, CONTACT_FROM_EMAIL: from } = process.env;
  if (!key || !to || !from) return NextResponse.json({ error: "The contact form isn't configured yet. Please email me directly." }, { status: 503 });

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: d.email, subject: `Project inquiry from ${d.name}`, text: `Name: ${d.name}\nEmail: ${d.email}\nType: ${d.type}\nBudget: ${d.budget ?? "n/a"}\n\n${d.message}` }),
  }).catch(() => null);
  if (!r?.ok) return NextResponse.json({ error: "Couldn't send your message. Please try again." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
