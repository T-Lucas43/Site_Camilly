import { Instagram, MessageCircle } from 'lucide-react'
import { Logo } from '../components/Logo'
import { INSTAGRAM_URL, navigation, WHATSAPP_DISPLAY } from '../data/siteContent'
import { defaultWhatsAppUrl } from '../utils/whatsapp'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Atuação jurídica responsável, transparente e individualizada em Direito Civil e Direito de Família.</p>
          <strong>OAB/PA 41.050</strong>
        </div>

        <div className="footer-column">
          <h2>Navegação</h2>
          <nav aria-label="Navegação do rodapé">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>

        <div className="footer-column">
          <h2>Contato</h2>
          <a href={defaultWhatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" />{WHATSAPP_DISPLAY}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={17} aria-hidden="true" />@advcamillyoliveira</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Camilly Oliveira Advocacia. Todos os direitos reservados.</p>
        <a href="#privacidade">Política de Privacidade</a>
      </div>
      <div className="container footer-privacy" id="privacidade">
        <strong>Política de Privacidade</strong>
        <p>Os dados informados no formulário são utilizados somente para preparar o contato solicitado pelo WhatsApp. Nenhuma informação é armazenada por este site. Evite compartilhar dados sensíveis antes da confirmação do atendimento.</p>
      </div>
    </footer>
  )
}
