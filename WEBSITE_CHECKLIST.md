# MagmaLink Website — Create / Modify / Review Checklist

Use this list to track what’s done and what still needs work. Tick items as you go.

---

## 1. Brand & identity

- [ ] **Site name** — Confirm "MagmaLink" everywhere (nav, footer, meta, contact).
- [ ] **Email** — Confirm `hello@magmalink.com` (or update in `copy.ts` and footer).
- [ ] **Tagline** — Review footer tagline and meta description for consistency.
- [ ] **Favicon** — Check `public/favicon.svg` and `favicon.ico`; add/update if needed.
- [ ] **Logo** — Decide if "M" mark is final or if a full logo is needed.
- [ ] **OG/Twitter** — Confirm `Layout.astro` og:url and any social images.

---

## 2. Layout (header & footer)

- [ ] **Nav: Services** — Link target (e.g. `/#services`) and label.
- [ ] **Nav: Why Us** — Link target (e.g. `/#why-us` or `#how-we-work`) and label.
- [ ] **Nav: Get in touch** — Label and that it goes to `/contact`.
- [ ] **Mobile menu** — Test open/close and that links work.
- [ ] **Footer tagline** — Matches positioning and meta.
- [ ] **Footer location** — "Based in the UK, serving teams globally." (or update).
- [ ] **Footer Quick Links** — Services, Why Us, Contact links correct.
- [ ] **Footer Legal** — Privacy and Terms links correct.
- [ ] **Footer copyright** — Year and "All rights reserved" (or your wording).
- [ ] **Footer email** — Same as site-wide email.

---

## 3. Homepage — Hero

- [ ] **Badge** — e.g. "Now accepting new clients" (or remove/change).
- [ ] **Tools strip** — Clay, Smartlead, Instantly, Cursor (order and names).
- [ ] **Headline line 1** — e.g. "GTM Systems."
- [ ] **Headline line 2** — e.g. "Engineered for precision and scale."
- [ ] **Subheadline** — One clear value prop; matches meta description.
- [ ] **Bullet 1** — e.g. "Outreach that gets replies."
- [ ] **Bullet 2** — e.g. "Systems you own forever."
- [ ] **Bullet 3** — e.g. "AI-native from day one."
- [ ] **CTA primary** — "Book a strategy call" (or your CTA).
- [ ] **CTA secondary** — "See how we work" and link to `#how-we-work`.

---

## 4. Homepage — Logo bar

- [ ] **Label** — e.g. "Trusted by growth-stage teams."
- [ ] **Placeholder names** — Replace TechCorp, ScaleUp, etc. with real logos or remove section.

---

## 5. Homepage — Services (“What We Build”)

- [ ] **Section label** — e.g. "What We Build."
- [ ] **Section title** — e.g. "Three systems to accelerate your GTM."
- [ ] **Section subtitle** — Agency/consultancy line.
- [ ] **Outreach card** — Title, description, three bullets (Smartlead, Clay, deliverability).
- [ ] **AI IDE card** — Title, description, three bullets (Cursor/Claude, rules, training).
- [ ] **Automation card** — Title, description, three bullets (N8N, CRM, pipelines).

---

## 6. Homepage — How We Work

- [ ] **Section label** — e.g. "How We Work."
- [ ] **Section title** — e.g. "From kickoff to live system in 4–6 weeks."
- [ ] **Step 1** — Discovery: title + short description.
- [ ] **Step 2** — Design: title + short description.
- [ ] **Step 3** — Build: title + short description.
- [ ] **Step 4** — Launch & Optimise: title + short description.
- [ ] **Anchor** — Confirm `id="how-we-work"` for nav link.

---

## 7. Homepage — Why MagmaLink (comparison)

- [ ] **Section label** — e.g. "Why MagmaLink."
- [ ] **Section title** — e.g. "Not another agency. Not another tool."
- [ ] **Us: title** — e.g. "MagmaLink."
- [ ] **Us: 4 bullets** — Systems you own, research-first copy, AI-native, flexible engagement.
- [ ] **Them: title** — e.g. "Typical Agencies."
- [ ] **Them: 4 bullets** — Retainers, templates, spray-and-pray, lock-in.
- [ ] **Anchor** — Confirm `id="why-us"` if used in nav.

---

## 8. Homepage — Results / case studies

- [ ] **Section label** — e.g. "Results."
- [ ] **Section title** — e.g. "Case studies coming soon" (or replace with real headline).
- [ ] **Subtitle** — e.g. "We're working with our first clients now..."
- [ ] **Metric 1** — e.g. "meetings booked."
- [ ] **Metric 2** — e.g. "pipeline generated."
- [ ] **Metric 3** — e.g. "hours saved."
- [ ] **Future** — Add real case studies, logos, and numbers when ready.

---

## 9. Homepage — Tools (“Our Stack”)

- [ ] **Section label** — e.g. "Our Stack."
- [ ] **Section title** — e.g. "Tools we use to build your systems."
- [ ] **Clay** — Name + tag (e.g. "Enrichment").
- [ ] **Smartlead** — Name + tag (e.g. "Email").
- [ ] **Instantly** — Name + tag (e.g. "Email").
- [ ] **N8N** — Name + tag (e.g. "Automation").
- [ ] **Cursor** — Name + tag (e.g. "AI IDE").
- [ ] **Claude** — Name + tag (e.g. "AI Code").
- [ ] **Icons** — Confirm letter badges or add real tool logos if desired.

---

## 10. Homepage — FAQ

- [ ] **Section label** — e.g. "FAQ."
- [ ] **Section title** — e.g. "Frequently asked questions."
- [ ] **Q1 & A1** — What makes MagmaLink different?
- [ ] **Q2 & A2** — How quickly can we launch?
- [ ] **Q3 & A3** — Agency vs consultancy?
- [ ] **Q4 & A4** — What happens after the engagement?
- [ ] **Q5 & A5** — Who is MagmaLink best suited for?
- [ ] **Add/remove** — More questions or trim to top 5.

---

## 11. Homepage — Final CTA

- [ ] **Title** — e.g. "Ready to engineer your GTM?"
- [ ] **Subtitle** — e.g. "Book a strategy call. We'll diagnose..."
- [ ] **Button** — Same as hero primary CTA; links to `/contact`.

---

## 12. Contact page

- [ ] **Page title (meta)** — e.g. "Contact - MagmaLink."
- [ ] **Page headline** — e.g. "Let's talk."
- [ ] **Subtitle** — e.g. "Fill out the form below and we'll get back..."
- [ ] **Form labels** — Name, Work email, Company, How can we help?
- [ ] **Placeholders** — Your name, you@company.com, company name, message placeholder.
- [ ] **Submit button** — "Send message."
- [ ] **Privacy note** — "By submitting this form, you agree to our" + Privacy Policy link.
- [ ] **Email intro** — "Prefer email? Reach out directly at" + email.
- [ ] **Form backend** — Replace `YOUR_FORM_ID` in Formspree (or other provider) and test submit.
- [ ] **Thank-you** — Confirm redirect or success message after submit.
- [ ] **Contact copy in edit mode** — Add `data-copy-key` to contact.astro if you want contact page text editable via ?edit=1.

---

## 13. Privacy policy

- [ ] **Page title** — "Privacy Policy - MagmaLink."
- [ ] **Last updated** — Set real date (e.g. February 2026).
- [ ] **Section 1** — Information we collect (form + device/usage).
- [ ] **Section 2** — How we use your information.
- [ ] **Section 3** — Cookies (if you use any).
- [ ] **Section 4** — Data retention.
- [ ] **Section 5** — Your rights (access, correct, delete, etc.).
- [ ] **Section 6** — Contact for privacy (email).
- [ ] **Legal review** — Have a lawyer review if you process EU/UK personal data.

---

## 14. Terms of use

- [ ] **Page title** — "Terms of Use - MagmaLink."
- [ ] **Last updated** — Set real date.
- [ ] **Section 1** — Acceptance of terms.
- [ ] **Section 2** — Use of the site (lawful use, no abuse).
- [ ] **Section 3** — Intellectual property.
- [ ] **Section 4** — Limitation of liability.
- [ ] **Section 5** — Changes to terms.
- [ ] **Section 6** — Contact (email).
- [ ] **Legal review** — Have a lawyer review for your jurisdiction.

---

## 15. SEO & meta

- [ ] **Default meta description** — In `copy.ts` and Layout; matches hero/subheadline.
- [ ] **Per-page titles** — Home, Contact, Privacy, Terms (all include MagmaLink where appropriate).
- [ ] **Per-page descriptions** — Contact, Privacy, Terms have unique descriptions.
- [ ] **og:url** — Correct production URL (e.g. https://magmalink.com).
- [ ] **Canonical** — Add canonical URLs if you have multiple domains or duplicate content.
- [ ] **Structured data** — Optional: Organisation or LocalBusiness schema.

---

## 16. Technical & UX

- [ ] **Edit mode** — Test `?edit=1` on home; edit text, press Enter, confirm "Save copy" and localStorage/JSON.
- [ ] **Apply edits** — If you use `copy-edits.json`, add/run script to write edits back into `copy.ts`.
- [ ] **Mobile** — Test nav, footer, forms, and CTAs on small screens.
- [ ] **Links** — All internal links (nav, footer, CTAs) work.
- [ ] **External links** — Form action, email mailto, any outbound links.
- [ ] **Accessibility** — Focus states, labels on form fields, contrast.
- [ ] **Performance** — Run Lighthouse; fix critical issues.

---

## 17. Content & copy

- [ ] **Tone** — Consistent “engineered / systems / GTM” voice across pages.
- [ ] **No em-dashes** — Per copy.ts comment; use hyphens or rephrase if needed.
- [ ] **Spelling & grammar** — Proofread all copy (or use a checker).
- [ ] **UK vs US** — Pick one (e.g. “optimise”, “colour”) and stick to it.

---

## 18. Before launch

- [ ] **Form** — Real Formspree (or other) ID; test from production URL.
- [ ] **Analytics** — Add if desired (e.g. GA4, Plausible).
- [ ] **Cookie banner** — If you use non-essential cookies or analytics that need consent.
- [ ] **HTTPS** — Site served over HTTPS in production.
- [ ] **Domain** — DNS and hosting pointed at magmalink.com (or your domain).
- [ ] **Backup** — Copy and repo backed up; know how to restore.

---

## Quick reference — Edit mode

- **URL:** Open any page with `?edit=1` (e.g. `http://localhost:4321/?edit=1`).
- **Edit:** Click any blue-outlined text and change it.
- **Save:** Press **Enter** after editing a field, or click **Save copy**.
- **Storage:** Edits are saved to localStorage and a `copy-edits.json` file is downloaded.
- **Persistence in code:** Use a script to merge `copy-edits.json` into `src/content/copy.ts` (or do it manually).

---

*Last updated: February 2026*
