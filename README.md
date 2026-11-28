# cy-personal-website

The frontend of my personal website: **[tancheeyang.com](https://tancheeyang.com)**

I built this site to learn modern .NET by shipping something real. The backend lives in a separate repo: [cy-personal-website-api](https://github.com/cyTan-714/cy-personal-website-api).

## Tech stack

- React + TypeScript, built with Vite
- Tailwind CSS for styling
- React Router for the pages
- i18next for interface text (English for now, ready for more languages without a rewrite)
- Hosted on Cloudflare Workers, deployed automatically on every push to `main`
- Cloudflare Web Analytics for visitor stats (no cookies)

## Project layout

| Folder | What's in it |
|---|---|
| `src/pages/` | One component per page |
| `src/components/` | Shared pieces: navbar, footer, cards, buttons |
| `src/content/` | The page content (profile, projects, experience), kept separate from the layout |
| `src/locales/` | Short interface labels, one file per language |

## Run it locally

```bash
npm install
npm run dev
```

The "Ping the API" button calls the URL in `.env.development` (`VITE_API_URL`). To see it work locally, run the API as well (`dotnet run` in the API repo).

## Copyright

© 2026 Tan Chee Yang. All rights reserved.
This code is public so you can see how the site is built. It isn't licensed for reuse.
