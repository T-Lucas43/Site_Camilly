import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { serviceSteps } from '../data/siteContent'

export function Process() {
  return (
    <section className="section process" id="atendimento" aria-labelledby="process-title">
      <div className="container">
        <div className="process-intro reveal">
          <SectionHeading id="process-title" eyebrow="Como funciona o atendimento" title="Um caminho claro, do primeiro contato aos próximos passos" description="O atendimento é conduzido de forma organizada, respeitosa e sem promessas de resultado." />
        </div>

        <ol className="process-list">
          {serviceSteps.map((step, index) => (
            <li className="process-step reveal" style={{ transitionDelay: `${index * 70}ms` }} key={step.number}>
              <span className="step-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < serviceSteps.length - 1 && <ArrowRight className="step-arrow" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
