import { useTranslation } from 'react-i18next'
import type { Project } from '../content/types'

type Props = {
  project: Project
}

// The small labels above a project's title: Work or Personal, plus In progress.
// Used on the project cards and on each project's own page.
export default function ProjectBadges({ project }: Props) {
  const { t } = useTranslation()

  return (
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
  )
}
