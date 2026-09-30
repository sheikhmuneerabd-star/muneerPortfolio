# Muneer — Portfolio (Next.js, App Router)
```bash
npm install
cp .env.example .env.local   # add Resend keys so the contact form can send email
npm run dev                  # http://localhost:3000
```
- Edit everything (site info, projects, services, FAQ, testimonials) in `lib/data.ts`; search for `TODO`.
- CV: put it at `public/cv.pdf`. Project images: `public/projects/*.png`, then set `image` on the project.
- Testimonials stay hidden (Working Principles shown) until you add real ones.
- Deploy: push to GitHub, import in Vercel, add the 3 env vars.
