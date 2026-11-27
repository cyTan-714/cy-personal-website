// The shape of the page content. Every language folder (en/, later zh/)
// must follow these types, so TypeScript tells you if something is missing.

export type ExternalLink = {
  label: string
  url: string
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type Profile = {
  name: string
  initials: string // shown in the photo circle until a photo is added
  photo?: string // a file in /public, e.g. '/photo.jpg'
  headline: string
  intro: string
  location: string
  availability: string
  currentlyBuilding: string
  email: string
  github: string
  linkedin: string
  about: string[] // one string per paragraph
  lookingFor: string
  skills: {
    production: SkillGroup[]
    building: string[]
  }
  outsideWork: string
  contactIntro: string
  education: {
    degree: string
    school: string
    years: string
  }
  languages: {
    name: string
    level: string
  }[]
  meta: {
    title: string
    description: string
  }
}

export type Project = {
  slug: string // used in the URL: /projects/<slug>
  title: string
  kind: 'work' | 'personal'
  context?: string // e.g. company and industry
  inProgress?: boolean
  featured?: boolean // shown on the homepage
  summary: string // one line for project cards
  overview: string
  role?: string
  highlights?: {
    heading: string
    items: string[]
  }
  tech: string[]
  learned?: string
  links?: ExternalLink[]
}

export type Job = {
  title: string
  company: string
  industry?: string
  period: string
  progression?: string
  highlights: string[]
}

export type Content = {
  profile: Profile
  projects: Project[]
  experience: Job[]
}
