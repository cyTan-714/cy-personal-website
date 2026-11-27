import { useTranslation } from 'react-i18next'
import { experience as enExperience } from './en/experience'
import { profile as enProfile } from './en/profile'
import { projects as enProjects } from './en/projects'
import type { Content } from './types'

// Longer page text lives in src/content/<language>/.
// To add Chinese later: create content/zh/ with the same three files
// and add a `zh` entry here.
const content = {
  en: { profile: enProfile, projects: enProjects, experience: enExperience },
} satisfies Record<string, Content>

type Language = keyof typeof content

// Gives a page the content for the current language (English if missing)
export function useContent(): Content {
  const { i18n } = useTranslation()
  const language = (i18n.language in content ? i18n.language : 'en') as Language
  return content[language]
}
