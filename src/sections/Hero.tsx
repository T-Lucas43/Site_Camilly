import { ArrowDown, ArrowRight, Instagram, MessageCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import portrait from '../assets/camilly-recorte.png'
import monogram from '../assets/monograma-transparente.png'
import { INSTAGRAM_URL } from '../data/siteContent'
import { defaultWhatsAppUrl } from '../utils/whatsapp'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!section || !image || reducedMotion) return

    let frame = 0
    const update = () => {
      const rect = section.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)))
      const compactLayout = window.innerWidth <= 900
      const scale = 1 + progress * (compactLayout ? 0.045 : 0.1)
      const lift = progress * (compactLayout ? -6 : -14)
      image.style.transform = `translate3d(0, ${lift.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section ref={sectionRef} className="hero" id="inicio" aria-labelledby="hero-title">
      <img className="hero-monogram" src={monogram} alt="" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span /> Direito Civil &amp; Direito de Família</div>
          <h1 id="hero-title">Advocacia com <em>responsabilidade</em>, estratégia e acolhimento</h1>
          <p className="hero-description">Atuação em Direito Civil e Direito de Família, com atendimento pautado na ética, na transparência e no cuidado com cada caso.</p>
          <div className="hero-actions">
            <a className="button button-gold" href={defaultWhatsAppUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={19} aria-hidden="true" />
              Conversar pelo WhatsApp
            </a>
            <a className="button button-outline-light" href="#atuacao">
              Conheça a atuação
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram size={18} aria-hidden="true" />
              Instagram
            </a>
          </div>
          <p className="hero-signature">Camilly Oliveira <span>—</span> OAB/PA 41.050</p>
        </div>

        <div className="hero-portrait-wrap" aria-label="Fotografia profissional de Camilly Oliveira">
          <div className="hero-portrait-glow" aria-hidden="true" />
          <img ref={imageRef} className="hero-portrait" src={portrait} alt="Camilly Oliveira, advogada" />
          <div className="hero-portrait-label" aria-hidden="true">
            <span>CO</span>
            <small>Advocacia</small>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#sobre" aria-label="Ir para a seção sobre">
        <span>Conheça meu trabalho</span>
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  )
}
