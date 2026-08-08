import { Check, Instagram, Quote } from 'lucide-react'
import portrait from '../assets/camilly-original.jpg'
import { SectionHeading } from '../components/SectionHeading'
import { INSTAGRAM_URL } from '../data/siteContent'

export function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <div className="about-photo-frame">
            <img src={portrait} alt="Retrato profissional da advogada Camilly Oliveira" loading="lazy" />
          </div>
          <div className="about-oab-card">
            <span>Advogada</span>
            <strong>OAB/PA 41.050</strong>
          </div>
        </div>

        <div className="about-content reveal">
          <SectionHeading id="about-title" eyebrow="Sobre Camilly Oliveira" title="Escuta atenta para orientar decisões importantes" />
          <p className="about-lead">Camilly Oliveira atua com dedicação nas áreas de Direito Civil e Direito de Família, oferecendo atendimento jurídico responsável, transparente e individualizado.</p>
          <p>Seu trabalho busca compreender cada situação com atenção, apresentando orientações claras e estratégias adequadas às necessidades de cada cliente.</p>

          <div className="about-principles" aria-label="Princípios de atendimento">
            <div><Check size={17} aria-hidden="true" /><span>Clareza em cada orientação</span></div>
            <div><Check size={17} aria-hidden="true" /><span>Cuidado com cada história</span></div>
            <div><Check size={17} aria-hidden="true" /><span>Ética em todas as etapas</span></div>
          </div>

          <blockquote>
            <Quote size={28} aria-hidden="true" />
            <p>Uma atuação jurídica responsável começa pela compreensão cuidadosa de cada contexto.</p>
          </blockquote>
          <a className="button button-instagram about-instagram-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram size={18} aria-hidden="true" />
            Acompanhe no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
