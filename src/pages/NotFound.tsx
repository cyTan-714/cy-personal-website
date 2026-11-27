import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-900">{t('notFound.title')}</h1>
      <p className="mt-4">
        {t('notFound.message')}{' '}
        <Link to="/" className="font-medium text-slate-900 underline">
          {t('notFound.backHome')}
        </Link>
      </p>
    </section>
  )
}
