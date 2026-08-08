import { Menu, MessageCircle, X } from 'lucide-react'
import { type MouseEvent, useEffect, useMemo, useRef, useState } from 'react'
import { navigation } from '../data/siteContent'
import { useActiveSection } from '../hooks/useActiveSection'
import { defaultWhatsAppUrl } from '../utils/whatsapp'
import { Logo } from './Logo'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const sectionIds = useMemo(() => navigation.map((item) => item.href.slice(1)), [])
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    if (isOpen) firstLinkRef.current?.focus()
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !isOpen) return
      setIsOpen(false)
      menuButtonRef.current?.focus()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setIsOpen(false)
    document.body.classList.remove('menu-open')

    window.requestAnimationFrame(() => {
      const target = document.getElementById(href.slice(1))
      if (!target) return

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    })
  }

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Logo className="header-brand" />

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav id="main-navigation" className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <div className="nav-links">
            {navigation.map((item, index) => {
              const id = item.href.slice(1)
              return (
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  key={item.href}
                  href={item.href}
                  className={activeSection === id ? 'is-active' : ''}
                  aria-current={activeSection === id ? 'page' : undefined}
                  onClick={(event) => navigateToSection(event, item.href)}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
          <a className="button button-small button-gold nav-cta" href={defaultWhatsAppUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            <MessageCircle size={17} aria-hidden="true" />
            Agendar atendimento
          </a>
        </nav>
      </div>
    </header>
  )
}
