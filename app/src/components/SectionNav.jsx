import { useState, useEffect, useRef } from 'react'

export function SectionNav({ sections }) {
  const [active, setActive] = useState(sections[0]?.id || '')
  const navRef = useRef(null)

  useEffect(() => {
    const observers = []

    sections.forEach(section => {
      const el = document.getElementById(section.id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActive(section.id)
            }
          })
        },
        { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [sections])

  useEffect(() => {
    // Scroll active item into view in the nav
    if (navRef.current) {
      const activeEl = navRef.current.querySelector(`[data-section="${active}"]`)
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [active])

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) {
      const offset = 110
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav
      ref={navRef}
      className="sticky top-[53px] z-40 bg-white/95 backdrop-blur-sm border-b border-green-pale overflow-x-auto scrollbar-hide"
    >
      <div className="flex gap-1 px-4 py-2 max-w-6xl mx-auto">
        {sections.map(section => (
          <button
            key={section.id}
            data-section={section.id}
            onClick={() => scrollTo(section.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm transition-all shrink-0 ${
              active === section.id
                ? 'bg-green-main text-white font-medium'
                : 'text-text-light hover:bg-green-pale hover:text-text-dark'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  )
}
