import { SectionHeading } from '../components/SectionHeading'
import { differentials } from '../data/siteContent'

export function Differentials() {
  return (
    <section className="section differentials" aria-labelledby="differentials-title">
      <div className="container">
        <div className="reveal">
          <SectionHeading id="differentials-title" eyebrow="Princípios do trabalho" title="Seriedade jurídica sem abrir mão do acolhimento" align="center" />
        </div>
        <div className="differentials-grid">
          {differentials.map(({ icon: Icon, title, text }, index) => (
            <article className="differential-card reveal" style={{ transitionDelay: `${index * 75}ms` }} key={title}>
              <span className="differential-icon"><Icon aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
