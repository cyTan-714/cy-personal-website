type Props = {
  items: string[]
  max?: number // show only the first `max` items, then a "+N" count
  variant?: 'default' | 'highlight'
}

// Full class names written out, so Tailwind can find them in the code.
// (Building names from pieces, like `bg-${color}-50`, would not work.)
const variantClasses = {
  default: 'bg-slate-50 text-slate-600 ring-slate-200',
  highlight: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
}

export default function TagList({ items, max, variant = 'default' }: Props) {
  const visible = max === undefined ? items : items.slice(0, max)
  const hiddenCount = items.length - visible.length

  return (
    <ul className="flex flex-wrap gap-1.5">
      {visible.map((item) => (
        <li key={item} className={`rounded-md px-2 py-0.5 text-xs ring-1 ${variantClasses[variant]}`}>
          {item}
        </li>
      ))}
      {hiddenCount > 0 && <li className="px-1 py-0.5 text-xs text-slate-500">+{hiddenCount}</li>}
    </ul>
  )
}
