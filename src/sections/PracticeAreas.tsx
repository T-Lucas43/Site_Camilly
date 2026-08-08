import { ArrowRight, ArrowUpRight, Check, Instagram } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { INSTAGRAM_URL, practiceAreas } from '../data/siteContent'

export function PracticeAreas() {
  return (
    <section className="section practice" id="atuacao" aria-labelledby="practice-title">
      <div className="container">
        <div className="practice-heading reveal">
          <SectionHeading id="practice-title" eyebrow="Áreas de atuação" title="Orientação jurídica com estratégia e sensibilidade" description="Cada demanda é analisada de forma individual, com comunicação clara e atenção às particularidades do caso." light />
        </div>

        <div className="practice-grid">
          {practiceAreas.map(({ id, icon: Icon, number, title, description }, index) => (
            <article className="practice-card reveal" style={{ transitionDelay: `${index * 140}ms` }} key={title}>
              <a className="practice-card-link" href={`#${id}`} aria-label={`Ver informações sobre ${title}`}>
                <div className="practice-card-top">
                  <Icon aria-hidden="true" />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="practice-card-action">
                  Ver informações desta área
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </a>
            </article>
          ))}
        </div>
        <p className="practice-note reveal">A indicação da medida jurídica adequada depende da análise individual das informações e documentos de cada situação.</p>

        <div className="practice-details" aria-label="Informações sobre as áreas de atuação">
          {practiceAreas.map(({ id, icon: Icon, number, title, detailTitle, detailDescription, guidance }) => (
            <article className="practice-detail reveal" id={id} key={id}>
              <div className="practice-detail-heading">
                <span><Icon aria-hidden="true" /></span>
                <div>
                  <small>{number} · {title}</small>
                  <h3>{detailTitle}</h3>
                </div>
              </div>
              <div className="practice-detail-content">
                <p>{detailDescription}</p>
                <ul>
                  {guidance.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}
                </ul>
                <a href="#contato">
                  Entrar em contato sobre esta área
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="practice-contact-cta reveal">
          <div>
            <span>Precisa de orientação?</span>
            <h3>Conte brevemente a sua situação para iniciarmos uma conversa.</h3>
          </div>
          <div className="practice-contact-actions">
            <a className="button button-practice-contact" href="#contato">
              Entrar em contato
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-practice-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram size={18} aria-hidden="true" />
              Ver Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
