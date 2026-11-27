import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Tan Chee Yang',
  headline: 'Software Engineer · PHP/Laravel & .NET',
  intro:
    "I build backend systems, REST APIs and production web applications. For three years I've delivered Laravel systems in fintech and enterprise, from database design to production support. Now I'm building with .NET too.",
  location: 'Kuala Lumpur, Malaysia',
  availability: 'Available immediately',
  currentlyBuilding: 'An exercise tracker with ASP.NET Core, React and PostgreSQL.',
  email: 'tancheeyang12@gmail.com',
  github: 'https://github.com/cyTan-714',
  linkedin: 'https://www.linkedin.com/in/cy-tan-39380236a',
  about: [
    "I'm Chee Yang, a software engineer based in Kuala Lumpur. For the past three years I've built and run production web systems with PHP and Laravel. Most recently I worked in fintech at DCAP Digital, where I grew from Junior to Senior Software Engineer in just over two years.",
    'My work is mostly backend: designing database structures, turning business processes into workflows, building REST APIs and troubleshooting live systems. I built a repossession platform and an e-invoice module from scratch as the sole developer. I work closely with product teams and users to understand what they actually need.',
    "I first used C# and ASP.NET MVC during my internship, and I'm now building with modern .NET. This website runs on a .NET 10 API that I containerised with Docker, and it deploys automatically from GitHub.",
  ],
  lookingFor:
    "Software engineer roles working with PHP/Laravel or .NET, in Kuala Lumpur or Petaling Jaya, onsite or hybrid. I'm available immediately.",
  skills: {
    production: [
      { label: 'Languages', items: ['PHP', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
      { label: 'Frameworks', items: ['Laravel', 'Tailwind CSS', 'Bootstrap', 'jQuery'] },
      { label: 'Databases', items: ['MySQL', 'PostgreSQL'] },
      {
        label: 'Backend & cloud',
        items: ['REST APIs', 'Queues', 'AWS (SQS, EC2, RDS, S3)', 'Real-time broadcasting with Pusher'],
      },
      {
        label: 'Tools',
        items: ['Bitbucket', 'Sourcetree', 'Postman', 'Jira', 'ClickUp', 'Basic Linux'],
      },
    ],
    building: [
      'C#',
      'ASP.NET Core (.NET 10)',
      'React',
      'TypeScript',
      'Vite',
      'Docker',
      'Cloudflare Workers',
      'Render',
      'GitHub',
    ],
  },
  outsideWork:
    "When I'm not coding, I'm usually running, hiking, at the gym or bouldering. That's why I'm building my own exercise tracker.",
  contactIntro:
    "I'm available immediately for software engineer roles working with PHP/Laravel or .NET, onsite or hybrid in Kuala Lumpur or Petaling Jaya.",
  education: {
    degree: 'BSc in Management Mathematics with Computing',
    school: 'Tunku Abdul Rahman University of Management and Technology (TAR UMT)',
    years: '2020 – 2023',
  },
  languages: [
    { name: 'Mandarin', level: 'Fluent' },
    { name: 'English', level: 'Professional working proficiency' },
    { name: 'Bahasa Malaysia', level: 'Intermediate' },
  ],
  meta: {
    title: 'Tan Chee Yang · Software Engineer (PHP/Laravel & .NET)',
    description:
      'Software engineer in Kuala Lumpur with 3 years of PHP/Laravel experience, now building with .NET. Available immediately.',
  },
}
