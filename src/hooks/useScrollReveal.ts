import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observedElements = new WeakSet<Element>()

    if (reducedMotion) {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    const observeNewElements = () => {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
        if (observedElements.has(element) || element.classList.contains('is-visible')) return
        observedElements.add(element)
        observer.observe(element)
      })
    }

    const revealNearViewport = () => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.94 && rect.bottom > -window.innerHeight * 0.08) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      })
    }

    const mutationObserver = new MutationObserver(() => {
      observeNewElements()
      revealNearViewport()
    })

    observeNewElements()
    revealNearViewport()
    mutationObserver.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('scroll', revealNearViewport, { passive: true })
    window.addEventListener('resize', revealNearViewport)

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener('scroll', revealNearViewport)
      window.removeEventListener('resize', revealNearViewport)
    }
  }, [])
}
