import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { primaryButton, secondaryButton } from '../components/buttonStyles'
import ProfilePhoto from '../components/ProfilePhoto'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { useContent } from '../content'

export default function Home() {
  const { t } = useTranslation()
  const { profile, projects } = useContent()
  const featured = projects.filter((project) => project.featured)

  return (
    <div className="space-y-16">
      {/* Intro: on phones the photo sits on top, on wider screens it moves right */}
      <section className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">{profile.name}</h1>
          <p className="mt-2 text-lg font-medium text-slate-600">{profile.headline}</p>
          <p className="mt-6 leading-relaxed">{profile.intro}</p>

          <p className="mt-4 flex flex-wrap items-center gap-x-2 text-sm text-slate-500">
            <span>{profile.location}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
              <span className="size-2 rounded-full bg-emerald-500" />
              {profile.availability}
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* <Link> for pages inside the site */}
            <Link to="/projects" className={primaryButton}>
              {t('home.viewWork')}
            </Link>
            {/* A plain <a> for a file in /public; it opens in a new tab */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={secondaryButton}>
              {t('home.downloadResume')}
            </a>
            <Link to="/contact" className={secondaryButton}>
              {t('home.contactMe')}
            </Link>
          </div>
        </div>

        <ProfilePhoto name={profile.name} initials={profile.initials} photo={profile.photo} />
      </section>

      <section>
        <SectionHeading>{t('home.featured')}</SectionHeading>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-slate-50 p-6">
        <SectionHeading>{t('home.currentlyBuilding')}</SectionHeading>
        <p className="mt-2 text-slate-700">{profile.currentlyBuilding}</p>
      </section>
    </div>
  )
}
