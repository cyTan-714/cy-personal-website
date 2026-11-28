import { useTranslation } from 'react-i18next'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { useContent } from '../content'

export default function Projects() {
  const { t } = useTranslation()
  const { projects } = useContent()

  // One section per kind of project. filter() keeps the order from projects.ts.
  const groups = [
    {
      kind: 'work',
      heading: t('projects.work'),
      items: projects.filter((project) => project.kind === 'work'),
    },
    {
      kind: 'personal',
      heading: t('projects.personal'),
      items: projects.filter((project) => project.kind === 'personal'),
    },
  ]

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{t('projects.title')}</h1>
        <p className="mt-4 max-w-2xl leading-relaxed">{t('projects.intro')}</p>
      </section>

      {groups.map((group) => (
        <section key={group.kind}>
          <SectionHeading>{group.heading}</SectionHeading>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {group.items.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
