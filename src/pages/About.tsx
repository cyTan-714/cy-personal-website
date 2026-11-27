import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-900">{t('about.title')}</h1>
      <p className="mt-4">{t('comingSoon', { part: 4 })}</p>
    </section>
  )
}
