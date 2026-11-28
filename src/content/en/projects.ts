import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'repossession-platform',
    title: 'Repossession Platform',
    kind: 'work',
    context: 'DCAP Digital · Fintech',
    featured: true,
    summary:
      'An internal platform that runs the full vehicle repossession process, from pre-repossession to auction or trade-in.',
    overview:
      "An internal platform that runs the full vehicle repossession process for a hire-purchase business, covering every stage from pre-repossession to auction or trade-in. It's made up of two Laravel applications sharing one MySQL database: a management platform (Laravel 8) and a newer monitoring platform (Laravel 12).",
    role: 'Sole developer. I designed and built it from scratch.',
    highlights: {
      heading: 'What I built',
      items: [
        'The database architecture for the whole repossession lifecycle',
        'Business logic and workflows for each stage: pre-repossession, RO issuance, repossession, redemption, auction and trade-in',
        'About 70% of the REST APIs for the companion mobile app, which repossessors use to view information and take operational actions',
      ],
    },
    tech: [
      'Laravel 8 (management)',
      'Laravel 12 (monitoring)',
      'MySQL (shared database)',
      'Pusher',
      'REST APIs',
    ],
    learned:
      'Modelling a multi-stage business process as clear states and transitions, designing APIs for a mobile app used in the field, owning a system end to end, and keeping two separate codebases working safely against one shared database.',
  },
  {
    slug: 'e-invoice-module',
    title: 'e-Invoice Module',
    kind: 'work',
    context: 'DCAP Digital · Fintech',
    summary: 'A module that categorises interest and other revenue and generates reports.',
    overview: 'A module that categorises interest and other revenue and generates reports.',
    role: 'Sole developer, from scratch, including the complete database design.',
    tech: ['Laravel 8', 'MySQL', 'AWS SQS'],
    learned: 'Designing financial data so reports stay accurate and easy to trace.',
  },
  {
    slug: 'this-website',
    title: 'This website',
    kind: 'personal',
    featured: true,
    summary: 'My personal site, built to learn modern .NET by shipping something real.',
    overview: 'My personal site, built to learn modern .NET by shipping something real.',
    highlights: {
      heading: "How it's built",
      items: [
        'A React + TypeScript (Vite) frontend on Cloudflare Workers',
        'An ASP.NET Core (.NET 10) API in Docker on Render',
        'Every push to GitHub deploys automatically',
      ],
    },
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'ASP.NET Core (.NET 10)',
      'Docker',
      'Cloudflare Workers',
      'Render',
    ],
    learned:
      'Docker multi-stage builds, deploying automatically from GitHub, CORS, build-time vs runtime configuration, and free-tier trade-offs like cold starts.',
    links: [
      { label: 'Live site', url: 'https://cy-personal-website.tancheeyang12.workers.dev' },
      { label: 'Frontend repo', url: 'https://github.com/cyTan-714/cy-personal-website' },
      { label: 'API repo', url: 'https://github.com/cyTan-714/cy-personal-website-api' },
    ],
    showApiPing: true,
  },
  {
    slug: 'exercise-tracker',
    title: 'Exercise tracker',
    kind: 'personal',
    inProgress: true,
    summary: 'A tracker for my running, hiking, gym and bouldering.',
    overview:
      "A tracker for my running, hiking, gym and bouldering, built because I'll actually use it every day.",
    highlights: {
      heading: 'Planned features',
      items: [
        'Gym logging with sets, reps, weights and personal records',
        'Bouldering logging with grades and attempts',
        'Private / Summary / Public visibility for each activity',
        'User accounts from day one',
        'Route maps with privacy zones, later',
      ],
    },
    tech: ['ASP.NET Core', 'EF Core', 'PostgreSQL (Neon)', 'React'],
  },
]
