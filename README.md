# Ayush Verma Portfolio

A polished personal portfolio for Ayush Verma, built with Next.js, TypeScript, and responsive custom CSS. The site highlights software engineering experience, selected projects, certificates, skills, resume details, and contact links in one clean interactive surface.

## Highlights

- Responsive portfolio layout with light and dark theme support
- Hero profile section with portrait, metrics, and contact actions
- Experience, projects, certificates, skills, resume, and achievements sections
- Optimized local assets through `next/image`
- SEO metadata, Google site verification, keywords, and custom SVG favicon
- Static-friendly Next.js app ready for Vercel deployment

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Lucide React icons
- CSS modules through global app styling

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/
  globals.css      Global styling and responsive design
  layout.tsx       App metadata, favicon, and root layout
  page.tsx         Main portfolio experience
public/
  favicon.svg      Browser tab avatar
  ayush-cutout.png Hero portrait cutout
  ayush-verma.jpg  Profile image asset
  certificate-*.png Certificate previews
  resume-preview.png Resume preview image
```

## Customization

Most portfolio content lives in [app/page.tsx](app/page.tsx): projects, certificates, skills, achievements, contact details, and resume links. Site metadata lives in [app/layout.tsx](app/layout.tsx).

## Deployment

The project is ready to deploy on Vercel:

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js build settings.

Build locally before deploying:

```bash
npm run build
```
