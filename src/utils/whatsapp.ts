import { WHATSAPP_NUMBER } from '../data/siteContent'

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const defaultWhatsAppUrl = buildWhatsAppUrl(
  'Olá, Dra. Camilly! Gostaria de conversar sobre um atendimento jurídico.',
)
