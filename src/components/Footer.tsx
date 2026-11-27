import { useTranslation } from 'react-i18next'
import { useContent } from '../content'

export default function Footer() {
  const { t } = useTranslation()
  const { profile } = useContent()

  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name} · {t('footer.builtWith')}
      </div>
    </footer>
  )
}
