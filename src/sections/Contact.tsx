import { zodResolver } from '@hookform/resolvers/zod'
import { Instagram, LockKeyhole, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { SectionHeading } from '../components/SectionHeading'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY } from '../data/siteContent'
import { buildWhatsAppUrl, defaultWhatsAppUrl } from '../utils/whatsapp'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome.'),
  phone: z.string().trim().min(8, 'Informe um telefone válido.'),
  email: z.string().trim().email('Informe um e-mail válido.').or(z.literal('')),
  subject: z.string().trim().min(3, 'Informe o assunto.'),
  message: z.string().trim().min(10, 'Escreva uma mensagem com pelo menos 10 caracteres.'),
  consent: z.literal(true, { error: 'Você precisa autorizar o uso dos dados para continuar.' }),
})

type ContactForm = z.infer<typeof contactSchema>

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', phone: '', email: '', subject: '', message: '', consent: undefined },
  })

  const onSubmit = (data: ContactForm) => {
    const message = [
      'Olá, Dra. Camilly! Gostaria de solicitar um atendimento.',
      '',
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      data.email ? `E-mail: ${data.email}` : '',
      `Assunto: ${data.subject}`,
      `Mensagem: ${data.message}`,
    ].filter(Boolean).join('\n')

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    reset()
  }

  return (
    <section className="section contact" id="contato" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <SectionHeading id="contact-title" eyebrow="Entre em contato" title="O primeiro passo é uma conversa cuidadosa" description="Compartilhe apenas as informações iniciais. Os detalhes do atendimento serão confirmados diretamente com você." light />

          <div className="contact-channels">
            <a href={defaultWhatsAppUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              <span><small>WhatsApp profissional</small>{WHATSAPP_DISPLAY}</span>
            </a>
            <a className="contact-instagram-highlight" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" />
              <span><small>Acompanhe no Instagram</small>{INSTAGRAM_HANDLE}</span>
            </a>
          </div>

          <div className="privacy-note">
            <LockKeyhole aria-hidden="true" />
            <p>O envio desta mensagem não cria automaticamente uma relação profissional. Não envie informações sigilosas ou documentos sensíveis antes da confirmação do atendimento.</p>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-heading">
            <span>Solicitação de contato</span>
            <p>Preencha os campos e a mensagem será preparada no WhatsApp.</p>
          </div>

          <div className="form-row">
            <label>
              Nome <span aria-hidden="true">*</span>
              <input {...register('name')} type="text" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <small className="field-error" id="name-error">{errors.name.message}</small>}
            </label>
            <label>
              Telefone <span aria-hidden="true">*</span>
              <input {...register('phone')} type="tel" inputMode="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} />
              {errors.phone && <small className="field-error" id="phone-error">{errors.phone.message}</small>}
            </label>
          </div>

          <div className="form-row">
            <label>
              E-mail <span className="optional">opcional</span>
              <input {...register('email')} type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <small className="field-error" id="email-error">{errors.email.message}</small>}
            </label>
            <label>
              Assunto <span aria-hidden="true">*</span>
              <input {...register('subject')} type="text" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />
              {errors.subject && <small className="field-error" id="subject-error">{errors.subject.message}</small>}
            </label>
          </div>

          <label>
            Mensagem <span aria-hidden="true">*</span>
            <textarea {...register('message')} rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
            {errors.message && <small className="field-error" id="message-error">{errors.message.message}</small>}
          </label>

          <label className="consent-field">
            <input {...register('consent')} type="checkbox" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} />
            <span>Concordo com o uso dos dados informados exclusivamente para retorno sobre esta solicitação.</span>
          </label>
          {errors.consent && <small className="field-error consent-error" id="consent-error">{errors.consent.message}</small>}

          <button className="button button-gold form-submit" type="submit" disabled={isSubmitting}>
            Enviar pelo WhatsApp
            <Send size={18} aria-hidden="true" />
          </button>
          <p className="form-status" aria-live="polite">{submitted ? 'Mensagem preparada. Continue o envio na janela do WhatsApp.' : ''}</p>
        </form>
      </div>
    </section>
  )
}
