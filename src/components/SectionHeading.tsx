type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: string
  description?: string
  light?: boolean
  align?: 'left' | 'center'
}

export function SectionHeading({ id, eyebrow, title, description, light = false, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''} section-heading-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
