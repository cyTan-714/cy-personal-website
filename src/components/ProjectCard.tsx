import { Link } from 'react-router'
import type { Project } from '../content/types'
import ProjectBadges from './ProjectBadges'
import TagList from './TagList'

type Props = {
  project: Project
}

// Cards stay tidy by showing only the first few technologies
const MAX_TAGS = 4

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-xl border border-slate-200 p-5 transition hover:border-slate-400 hover:shadow-sm"
    >
      <ProjectBadges project={project} />

      <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:underline">
        {project.title}
      </h3>
      {project.context && <p className="text-sm text-slate-500">{project.context}</p>}
      <p className="mt-2 text-sm leading-relaxed">{project.summary}</p>

      <div className="mt-4">
        <TagList items={project.tech} max={MAX_TAGS} />
      </div>
    </Link>
  )
}
