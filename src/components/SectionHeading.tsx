type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>
    </div>
  )
}
