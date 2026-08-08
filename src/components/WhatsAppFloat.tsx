import { MessageCircle } from 'lucide-react'
import { defaultWhatsAppUrl } from '../utils/whatsapp'

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={defaultWhatsAppUrl} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp">
      <MessageCircle aria-hidden="true" />
      <span>Conversar pelo WhatsApp</span>
    </a>
  )
}
