import type {Config} from "tailwindcss";
const c=(v:string)=>`rgb(var(--${v}) / <alpha-value>)`;
export default {
  darkMode:"class",
  content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme:{extend:{colors:{bg:c("bg"),card:c("card"),fg:c("fg"),muted:c("muted"),line:c("line"),brand:c("brand"),teal:c("teal"),amber:c("amber"),soft:c("soft")},
  fontFamily:{sans:["var(--font-sans)","system-ui","sans-serif"]}}},
  plugins:[],
} satisfies Config;
