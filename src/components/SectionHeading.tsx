import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

// The small grey uppercase heading used above each section
export default function SectionHeading({ children }: Props) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">{children}</h2>
  )
}
