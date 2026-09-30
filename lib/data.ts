// Single place to edit site info. Replace every "TODO" value with your real details.
export const site = {
  name: "Muneer",
  url: "https://your-domain.com", // TODO
  seoTitle: "Muneer | Full-Stack Developer — MERN Stack & Next.js",
  seoDescription:
    "Explore the portfolio of Muneer, a full-stack developer specializing in MERN Stack and Next.js. Discover modern web applications, SaaS platforms, e-commerce solutions, and business websites.",
  email: "muhammadmuneer579op@gmail.com", // TODO
  cvUrl: "/cv.pdf", // TODO: put your CV in /public/cv.pdf
  socials: { github: "https://github.com/sheikhmuneerabd-star", linkedin: "https://www.linkedin.com/in/muneer-hussain-76a458439", fiverr: "https://www.fiverr.com/mbilal1408", whatsapp: "https://wa.me/923069110314?text=Hi%20Muneer%2C%20I%20saw%20your%20portfolio" }, // TODO
};
export const nav = ["Home", "About", "Services", "Projects", "Skills", "Process", "Contact"].map((l) => ({ label: l, href: `#${l.toLowerCase()}` }));
export const tech = ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"];
export const credibility = ["Clean & Maintainable Code", "Responsive & Performance-Focused", "Clear Communication & Reliable Delivery"];

export const services = [
  { t: "Custom Web Applications", d: "Modern, scalable web applications built around specific business requirements.", i: "code" },
  { t: "SaaS Platforms & Dashboards", d: "Subscription-based products, admin panels, analytics dashboards, and management systems.", i: "dash" },
  { t: "E-commerce Development", d: "Feature-rich online stores with product management, shopping carts, checkout, and payment integration.", i: "cart" },
  { t: "Full-Stack Development", d: "Complete frontend and backend solutions with secure APIs and database architecture.", i: "layers" },
  { t: "Business Websites & Landing Pages", d: "Responsive, conversion-focused websites for startups, agencies, and growing businesses.", i: "globe" },
  { t: "API Development & Integration", d: "REST APIs, third-party integrations, authentication, and backend services.", i: "plug" },
];
export const principles = [
  { t: "User-First Thinking", d: "Every interface should feel intuitive, accessible, and effortless to use.", i: "user" },
  { t: "Engineering With Purpose", d: "Clean architecture and maintainable code create products that can grow.", i: "cog" },
  { t: "Quality in Every Detail", d: "From responsive layouts to performance optimization, every detail matters.", i: "star" },
];
// EDIT ME: replace sample projects with real ones. `image` (e.g. "/projects/shop.png" in /public) is optional.
export type Project = { slug: string; name: string; cat: string; desc: string; stack: string[]; features: string[]; live: string; repo: string; image?: string; problem?: string; solution?: string; role?: string; challenges?: string };
export const projects: Project[] = [
  { 
    slug: "ecommerce", name: "Bespoke Wear - Custom Teamwear Platform", cat: "E-commerce", desc: "A full-stack custom sports uniforms store with catalog, cart, checkout, and admin tools.", stack: ["Next.js", "Node.js", "MongoDB", "Paypal"], features: ["Product catalog", "Shopping cart", "Secure checkout", "User authentication", "Order management", "Admin dashboard"], live: "https://bespoketeamwear.vercel.app", repo: "https://github.com/sheikhmuneerabd-star/xteamwear-frontend-next", image: "/projects/bespoke.png",
    problem: "The client needed a modern, scalable online store to showcase highly customizable sports apparel with real-time product variations, interactive sizing options, and an easy checkout process to replace legacy manual order inquiries.",
    solution: "Developed a fully responsive e-commerce web app using Next.js and Tailwind CSS for lightning-fast frontend rendering, coupled with Node.js and MongoDB for flexible product data management. Integrated Stripe payment gateway for seamless, end-to-end checkout automation.",
    role: "Full-Stack Developer & UI Architect — responsible for end-to-end architecture design, frontend UI development, database schema design, admin management endpoints, and payment gateway integration.",
    challenges: "Handling complex dynamic product customization options and responsive UI performance across mobile and desktop devices.", 
  },
  { 
    slug: "ai-saas", name: "AI Content Generator SaaS Platform", cat: "SaaS / AI", desc: "A SaaS web application designed to help creators, marketers, and businesses generate SEO-optimized articles, ad copy, emails, and social media content using advanced AI models.", stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"], features: ["AI-powered workflows", "User dashboard", "Pre-built AI Prompt Templates for Blogs, Ads, Emails & SEO Articles", "Real-time Streaming AI Output Generation", "Credit & Subscription Tier Management."], live: "https://ai-content-generated-next-js.vercel.app", repo: "https://github.com/sheikhmuneerabd-star/ai-content-generated-nextJS", image: "/projects/aiContent.png",
    problem: "Content creators and digital marketers spend hours manually writing and optimizing copy, leading to slow output and high operational costs for business scaling.",
    solution: "Built a full-stack SaaS platform integrated with LLMs (Large Language Models) that provides pre-built prompt templates, custom tone adjustments, and real-time AI generation workflows with a sleek user dashboard.",
    role: "Full-Stack SaaS Developer — handled frontend UI dashboard, secure backend API integrations, user authentication, subscription credit systems, and AI response optimization.",
    challenges: "Managing high-latency AI API response times and preventing token overuse while maintaining smooth user UI rendering.", 
  },
  { 
    slug: "E-commerce / Clone", name: "Xteamwear - Custom Sports Uniforms Store", cat: "E-commerce / Clone", desc: "A full-stack e-commerce app built with React for custom sportswear with live uniform customization, product catalog, and secure checkout.", stack: ["React.js", "JavaScript", "Tailwind CSS"], features: ["Sports category filtering", "Product catalog", "Product option selector", "Shopping cart"], live: "https://xteamwear-frontend.netlify.app", repo: "https://github.com/sheikhmuneerabd-star/xteamwear", image: "/projects/xteamwearClone.png",
    problem: "Standard online stores lack tailored customization options for team uniforms, making it difficult for sports teams to select jersey numbers, sizes, team logos, and roster lists before purchasing.",
    solution: "Built a specialized e-commerce platform using React component architecture with dynamic sports category filters, real-time product option selection, responsive shopping cart management, and seamless payment integration.",
    role: "Full-Stack Developer — built the frontend store interface using React and Tailwind CSS, structured the MongoDB database schema for complex product variations, and handled full-stack integration.",
    challenges: "Managing multi-variant sportswear state (sizes, colors, custom numbers) across multiple components without slowing down app rendering.", 
  },
  { 
    slug: "AI Tool / SaaS", name: "PromptForge - AI Prompt Engineering Platform", cat: "AI Tool / SaaS", desc: "A high-performance prompt engineering tool designed to refine, enhance, and optimize raw ideas into precision-crafted prompts for top AI models like ChatGPT, Claude, Gemini, Midjourney, and DALL-E.", stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"], features: ["Prompt optimization", "Multi-model support", "Enhancement modes", "One-click copy", "Template management"], live: "https://ai-generated-prompt.vercel.app", repo: "https://github.com/sheikhmuneerabd-star/generated-prompt-web", image: "/projects/aiPrompt.png",
    problem: "Users often struggle with writing structured, effective prompts for different AI models, leading to vague outputs, wasted tokens, and inefficient AI interactions.",
    solution: "Developed an interactive AI utility web application featuring multi-platform prompt tailoring, preset enhancement modes, dynamic variable inputs, and instant optimized outputs for various AI models.",
    role: "Full-Stack Developer — built the responsive UI/UX, designed the prompt engineering logic algorithms, integrated multi-model APIs, and implemented user preset management features.",
    challenges: "Formatting a single input prompt accurately according to the diverse syntax guidelines of different models (e.g., text LLMs vs. Midjourney image parameters).", 
  },
  { 
    slug: "AI / SaaS", name: "All-in-One AI Productivity SaaS Platform", cat: "AI / SaaS", desc: "An all-in-one productivity suite featuring 20+ AI tools for content, coding, translation, and document analysis.", stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"], features: ["20+ AI micro-tools", "Unified SaaS dashboard", "Credit management system", "PDF & document chat", "Code & resume generator"], live: "https://ai-productivity-platform-pro-max.vercel.app", repo: "https://github.com/sheikhmuneerabd-star/ai-productivity-platform", image: "/projects/allinOneAiTool.png",
    problem: "Users waste time switching between multiple single-purpose AI apps and managing multiple subscriptions for writing, coding, translating, and document processing.",
    solution: "Developed Workbench, a centralized workspace integrating 20+ AI-driven productivity tools with dynamic prompt engineering, user credit system, usage analytics, and a seamless dashboard experience.",
    role: "Full-Stack Developer & SaaS Architect — responsible for designing the modular micro-tool system, building the dark/light dashboard UI, implementing user credits & subscription tracking, and optimizing API request flows.",
    challenges: "Maintaining fast UI response times and clean state management across 20+ distinct AI tools within a single web application.", 
  },
];
export const skills = [
  { t: "Frontend", i: "monitor", items: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { t: "Backend", i: "server", items: ["Node.js", "Express.js", "REST APIs"] },
  { t: "Database", i: "db", items: ["MongoDB", "MySQL"] },
  { t: "Tools & Workflow", i: "tool", items: ["Git", "GitHub", "Figma", "VS Code", "Vercel"] },
];
export const steps = [
  { t: "Discover", d: "Understand the business, audience, requirements, and project goals." },
  { t: "Plan", d: "Define architecture, user flows, technical stack, and development milestones." },
  { t: "Design & Build", d: "Create responsive interfaces and implement reliable backend functionality." },
  { t: "Test & Refine", d: "Validate functionality, optimize performance, and improve user experience." },
  { t: "Launch & Support", d: "Deploy the application and provide agreed post-launch support." },
];
export const why = [
  { t: "Transparent Communication", d: "Clear updates and honest conversations throughout the project.", i: "chat" },
  { t: "Business-Oriented Solutions", d: "Technology choices that support real business goals.", i: "target" },
  { t: "Thoughtful Problem Solving", d: "Practical solutions designed around your specific requirements.", i: "bulb" },
  { t: "Quality-Focused Delivery", d: "Attention to usability, responsiveness, performance, and maintainability.", i: "shield" },
];
// Add REAL testimonials here. While empty, a "Working Principles" section is shown instead (no fake social proof).
export const testimonials: { name: string; role: string; quote: string; project?: string }[] = [];
export const workingPrinciples = ["Understand the problem before writing code", "Keep the stack simple and the code maintainable", "Ship in small, reviewable steps", "Be honest about scope, time, and trade-offs"];
export const faq = [
  ["What types of projects do you work on?", "Web applications, SaaS dashboards, e-commerce stores, business websites, and API integrations."],
  ["Do you build both frontend and backend?", "Yes. I handle interfaces, APIs, databases, and deployment end to end."],
  ["Can you develop a complete e-commerce website?", "Yes — catalog, cart, checkout, payments, and an admin area for managing orders."],
  ["Do you work with existing projects?", "Yes. I can extend, refactor, or fix an existing codebase after reviewing it."],
  ["Can you integrate payment gateways and third-party APIs?", "Yes, including Stripe-style payments, authentication providers, and other REST services."],
  ["How do you communicate during development?", "With regular written updates and milestone check-ins, using the channel that suits you."],
  ["Are you available for remote opportunities?", "Yes, I'm open to freelance and remote work."],
  ["How can I get a quote for my project?", "Use the contact form with a short description and budget range, and I'll reply with next steps."],
];
