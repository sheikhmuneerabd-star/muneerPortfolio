import { Code2, LayoutDashboard, ShoppingCart, Layers, Globe, Plug, Monitor, Server, Database, Wrench, User, Cog, Sparkles, MessageCircle, Target, Lightbulb, ShieldCheck, type LucideIcon } from "lucide-react";
const I: Record<string, LucideIcon> = { code: Code2, dash: LayoutDashboard, cart: ShoppingCart, layers: Layers, globe: Globe, plug: Plug, monitor: Monitor, server: Server, db: Database, tool: Wrench, user: User, cog: Cog, star: Sparkles, chat: MessageCircle, target: Target, bulb: Lightbulb, shield: ShieldCheck };
export function IconBox({ name }: { name: string }) {
  const C = I[name];
  return (
    <span className="grid h-11 w-11 place-items-center rounded-xl bg-soft text-brand transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-teal group-hover:text-white">
      <C size={22} />
    </span>
  );
}
