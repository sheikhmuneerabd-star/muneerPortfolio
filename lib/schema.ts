import { z } from "zod";
export const types = ["Web application", "SaaS / Dashboard", "E-commerce", "Business website", "API / Integration", "Other"] as const;
export const budgets = ["Prefer to discuss", "Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+"] as const;
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  type: z.enum(types),
  budget: z.enum(budgets).optional(),
  message: z.string().trim().min(10, "Please add a few details (10+ characters).").max(3000),
  website: z.string().max(0).optional(), // honeypot
});
export type ContactInput = z.infer<typeof contactSchema>;
