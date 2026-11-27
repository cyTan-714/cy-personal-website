import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import type { Project } from '../content/types'

type Props = {
  project: Project
}

// Cards stay tidy by showing only the first few technologies
const MAX_TAGS = 4

export default function ProjectCard({ project }: Props) {
  const { t } = useTranslation()
  const visibleTech = project.tech.slice(0, MAX_TAGS)
  const hiddenCount = project.tech.length - visibleTech.length

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-xl border border-slate-200 p-5 transition hover:border-slate-400 hover:shadow-sm"
    >
      <div className="flex flex-wrap gap-2 text-xs font-medium">
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-600">
          {project.kind === 'work' ? t('projects.work') : t('projects.personal')}
        </span>
        {project.inProgress && (
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-800">
            {t('projects.inProgress')}
          </span>
        )}
      </div>

      <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:underline">
        {project.title}
      </h3>
      {project.context && <p className="text-sm text-slate-500">{project.context}</p>}
      <p className="mt-2 text-sm leading-relaxed">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {visibleTech.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-slate-50 px-2 py-0.5 text-xs text-slate-600 ring-1 ring-slate-200"
          >
            {tech}
          </li>
        ))}
        {hiddenCount > 0 && (
          <li className="px-1 py-0.5 text-xs text-slate-500">+{hiddenCount}</li>
        )}
      </ul>
    </Link>
  )
}
