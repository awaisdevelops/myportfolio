# Awais Shafique — Portfolio

A production-grade portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Firebase (Firestore for the contact form).

## Stack

- **Next.js 15** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS** — design system driven by CSS-variable theme tokens
- **next-themes** — powers the 4-palette theme switcher (top-right, palette icon)
- **Framer Motion** — scroll-in animations
- **Firebase Firestore** — stores contact form submissions
- **lucide-react** — icons

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in your Firebase config
npm run dev
```

Open http://localhost:3000.

## Firebase setup (contact form)

1. Create a project at https://console.firebase.google.com.
2. Add a **Web App** and copy the config values into `.env.local`.
3. Enable **Firestore Database** (production mode).
4. Add a security rule that allows only inserts to `messages` (no public read):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{id} {
      allow create: if request.resource.data.keys().hasOnly(['name','email','message','createdAt'])
                    && request.resource.data.name is string
                    && request.resource.data.email is string
                    && request.resource.data.message is string;
      allow read, update, delete: if false;
    }
  }
}
```

If `.env.local` is not configured, the contact form automatically falls back to opening the visitor's email client (`mailto:`), so the site still works without Firebase.

This project is already linked to a live Firebase project (`awais-portfolio-ff8b1`, see `.firebaserc`) with Firestore enabled and security rules deployed (`firestore.rules` — only allows `create` on `messages`, no public read). To redeploy rules after editing them: `firebase deploy --only firestore:rules`.

## Theming

The header's palette icon lets visitors switch between four color themes (Dark Elegance, Minimalist Neutral, Soft Pastel Pop, Earthy Organic), persisted in `localStorage`. Every component uses semantic Tailwind tokens (`bg`, `surface`, `ink`, `muted`, `edge`, `accent`, `accent-2`) instead of hardcoded colors — never add `slate-*`/`white`/`black` classes to a component. To add a new theme: add its CSS variables in [src/app/globals.css](src/app/globals.css) and list it in [src/data/themes.ts](src/data/themes.ts).

## Content

All resume content, including the software house services and both GitHub accounts, lives in one place: [src/data/resume.ts](src/data/resume.ts). Edit that file to update copy — no need to touch components.

## Resume download

`public/Awais-Shafique-Resume.pdf` is generated from the same content in `src/data/resume.ts`. If you update your experience/projects, regenerate it (or replace the file directly) so the "Resume" button in the header stays in sync.

## SEO & social preview

- `src/app/opengraph-image.tsx` / `twitter-image.tsx` generate a branded share-card image on the fly (no static asset needed).
- `src/app/layout.tsx` includes JSON-LD (`Person` schema) for richer search results.
- `src/app/sitemap.ts` / `robots.ts` read from `NEXT_PUBLIC_SITE_URL` (see below).

## Deployment

Deploy on [Vercel](https://vercel.com/new): import the repo, add the same environment variables from `.env.local`, plus **`NEXT_PUBLIC_SITE_URL`** set to your final domain (e.g. `https://awaisshafique.dev`) — this feeds the sitemap, robots.txt, Open Graph tags, and structured data. Without it, the site falls back to Vercel's own deployment URL, then `localhost`.
