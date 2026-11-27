import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router'
import { useContent } from '../content'

// `label` is a translation key from src/locales/en.json
const links = [
  { to: '/about', label: 'nav.about' },
  { to: '/projects', label: 'nav.projects' },
  { to: '/resume', label: 'nav.resume' },
  { to: '/contact', label: 'nav.contact' },
] as const

export default function Navbar() {
  const { t } = useTranslation()
  const { profile } = useContent()

  return (
    <header className="border-b border-slate-200">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-y-2 px-6 py-4">
        <Link to="/" className="text-lg font-semibold text-slate-900">
          {profile.name}
        </Link>
        <ul className="flex gap-4 text-sm sm:gap-6">
          {links.map((link) => (
            <li key={link.to}>
              {/* NavLink knows whether its page is the one being shown,
                  so the current page's link can look different */}
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium text-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                }
              >
                {t(link.label)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
