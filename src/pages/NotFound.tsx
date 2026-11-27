import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4">
        This page doesn't exist.{' '}
        <Link to="/" className="font-medium text-slate-900 underline">
          Go back home
        </Link>
      </p>
    </section>
  )
}
