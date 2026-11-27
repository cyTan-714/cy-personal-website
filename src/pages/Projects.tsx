import { useTranslation } from 'react-i18next'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-900">{t('projects.title')}</h1>
      <p className="mt-4">{t('comingSoon', { part: 5 })}</p>
    </section>
  )
}
