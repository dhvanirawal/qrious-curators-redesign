'use client'

import { useEffect, ReactNode } from 'react'

export function ScrollRevealProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale')
    
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry?.isIntersecting) {
            entry?.target?.classList?.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    revealElements?.forEach((el: Element) => observer?.observe(el))

    return () => observer?.disconnect()
  }, [])

  return <>{children}</>
}
