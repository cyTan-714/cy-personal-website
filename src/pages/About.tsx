import { useTranslation } from 'react-i18next'
import SectionHeading from '../components/SectionHeading'
import TagList from '../components/TagList'
import { useContent } from '../content'

export default function About() {
  const { t } = useTranslation()
  const { profile } = useContent()

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{t('about.title')}</h1>
        {/* One <p> for each paragraph in profile.about */}
        <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>{t('about.lookingFor')}</SectionHeading>
        <p className="mt-3 max-w-2xl leading-relaxed">{profile.lookingFor}</p>
      </section>

      <section>
        <SectionHeading>{t('about.skillsProduction')}</SectionHeading>
        {/* A description list: each group name (dt) next to its skills (dd).
            On phones they stack; from 640px wide the name gets its own column. */}
        <dl className="mt-4 space-y-4">
          {profile.skills.production.map((group) => (
            <div key={group.label} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="text-sm font-medium text-slate-900">{group.label}</dt>
              <dd>
                <TagList items={group.items} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <SectionHeading>{t('about.skillsBuilding')}</SectionHeading>
        <div className="mt-4">
          <TagList items={profile.skills.building} variant="highlight" />
        </div>
      </section>

      <section>
        <SectionHeading>{t('about.outsideWork')}</SectionHeading>
        <p className="mt-3 max-w-2xl leading-relaxed">{profile.outsideWork}</p>
      </section>
    </div>
  )
}
