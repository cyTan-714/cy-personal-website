import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'
import ApiPing from '../components/ApiPing'
import ProjectBadges from '../components/ProjectBadges'
import SectionHeading from '../components/SectionHeading'
import TagList from '../components/TagList'
import { secondaryButton } from '../components/buttonStyles'
import { useContent } from '../content'
import NotFound from './NotFound'

type DetailSectionProps = {
  title: string
  children: ReactNode
}

// One titled block on the project page. Only this page uses it,
// so it lives in this file instead of in components/.
function DetailSection({ title, children }: DetailSectionProps) {
  return (
    <section>
      <SectionHeading>{title}</SectionHeading>
      <div className="mt-3">{children}</div>
    </section>
  )
}

export default function ProjectDetail() {
  const { t } = useTranslation()
  const { projects } = useContent()

  // Read :slug from the URL, like $slug in a Laravel controller.
  // /projects/this-website gives slug = 'this-website'
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  // No project with that slug (a typo or an old link): show the 404 page instead
  if (!project) {
    return <NotFound />
  }

  return (
    <article className="space-y-10">
      <div>
        <Link to="/projects" className="text-sm text-slate-500 hover:text-slate-900">
          <span aria-hidden="true">←</span> {t('projects.back')}
        </Link>
        <header className="mt-8">
          <ProjectBadges project={project} />
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{project.title}</h1>
          {project.context && <p className="mt-1 text-slate-500">{project.context}</p>}
        </header>
      </div>

      <DetailSection title={t('projects.overview')}>
        <p className="max-w-2xl leading-relaxed">{project.overview}</p>
      </DetailSection>

      {project.role && (
        <DetailSection title={t('projects.role')}>
          <p className="max-w-2xl leading-relaxed">{project.role}</p>
        </DetailSection>
      )}

      {project.highlights && (
        <DetailSection title={project.highlights.heading}>
          <ul className="max-w-2xl list-disc space-y-2 pl-5 leading-relaxed marker:text-slate-400">
            {project.highlights.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailSection>
      )}

      <DetailSection title={t('projects.tech')}>
        <TagList items={project.tech} />
      </DetailSection>

      {project.learned && (
        <DetailSection title={t('projects.learned')}>
          <p className="max-w-2xl leading-relaxed">{project.learned}</p>
        </DetailSection>
      )}

      {project.links && (
        <DetailSection title={t('projects.links')}>
          <ul className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <li key={link.url}>
                {/* Other sites open in a new tab. rel="noopener" without "noreferrer",
                    so GitHub's traffic stats can see that visitors came from this site. */}
                <a href={link.url} target="_blank" rel="noopener" className={secondaryButton}>
                  {link.label}
                  <span aria-hidden="true" className="ml-1.5">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </DetailSection>
      )}

      {project.showApiPing && (
        <DetailSection title={t('projects.tryApi')}>
          <ApiPing />
        </DetailSection>
      )}
    </article>
  )
}
