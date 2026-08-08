import { ChevronDown, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { faqs } from '../data/siteContent'
import { defaultWhatsAppUrl } from '../utils/whatsapp'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section faq" id="duvidas" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <div className="faq-intro reveal">
          <SectionHeading id="faq-title" eyebrow="Perguntas frequentes" title="Informações para o seu primeiro contato" description="Reunimos respostas iniciais para tornar o atendimento mais simples e transparente." />
          <a className="faq-contact" href={defaultWhatsAppUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            <span><small>Permaneceu com dúvidas?</small>Fale diretamente pelo WhatsApp</span>
          </a>
        </div>

        <div className="accordion reveal">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div className={`accordion-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {item.question}
                    <ChevronDown aria-hidden="true" />
                  </button>
                </h3>
                <div className="accordion-panel" id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
