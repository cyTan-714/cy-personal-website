type Props = {
  name: string
  initials: string
  photo?: string
}

export default function ProfilePhoto({ name, initials, photo }: Props) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="size-32 shrink-0 rounded-full object-cover sm:size-40"
      />
    )
  }

  // Shown until a photo is added (see `photo` in src/content/en/profile.ts)
  return (
    <div
      aria-hidden="true"
      className="flex size-32 shrink-0 items-center justify-center rounded-full bg-slate-100 text-3xl font-semibold text-slate-400 sm:size-40"
    >
      {initials}
    </div>
  )
}
