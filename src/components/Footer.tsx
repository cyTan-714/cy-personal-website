export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Tan Chee Yang
      </div>
    </footer>
  )
}
