import { useTranslation } from 'react-i18next'
import { useContent } from '../content'

export default function Home() {
  const { t } = useTranslation()
  const { profile } = useContent()

  return (
    <section>
      {/* Text from src/content/en/profile.ts */}
      <h1 className="text-3xl font-bold text-slate-900">{profile.name}</h1>
      <p className="mt-2 text-lg">{profile.headline}</p>
      {/* Text from src/locales/en.json, with {{part}} filled in */}
      <p className="mt-4 text-slate-500">{t('comingSoon', { part: 3 })}</p>
    </section>
  )
}
