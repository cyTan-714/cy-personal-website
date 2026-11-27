import { Link, NavLink } from 'react-router'

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="border-b border-slate-200">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-y-2 px-6 py-4">
        <Link to="/" className="text-lg font-semibold text-slate-900">
          Tan Chee Yang
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
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
