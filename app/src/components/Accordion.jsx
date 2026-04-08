import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function Accordion({ title, children, defaultOpen = false, variant = 'default' }) {
  const [open, setOpen] = useState(defaultOpen)

  const variants = {
    default: {
      wrapper: 'bg-white rounded-lg border border-green-pale overflow-hidden',
      header: 'px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-green-pale/30 transition-colors',
      title: 'font-semibold text-text-dark text-sm',
      content: 'px-4 pb-4 text-sm text-text-medium leading-relaxed',
    },
    herb: {
      wrapper: 'bg-white rounded-lg border border-green-pale overflow-hidden',
      header: 'px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-green-pale/30 transition-colors',
      title: 'font-semibold text-green-dark',
      content: 'px-4 pb-4 text-sm text-text-medium leading-relaxed',
    },
    tradition: {
      wrapper: 'bg-white rounded-lg border border-green-pale overflow-hidden',
      header: 'px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-green-pale/30 transition-colors',
      title: 'font-semibold text-text-dark text-sm',
      content: 'px-4 pb-4 text-sm text-text-medium leading-relaxed',
    },
    nutrition: {
      wrapper: 'bg-green-pale/20 rounded-lg border border-green-pale overflow-hidden',
      header: 'px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-green-pale/50 transition-colors',
      title: 'font-semibold text-green-dark text-sm',
      content: 'px-4 pb-4 text-sm text-text-medium leading-relaxed',
    },
    gold: {
      wrapper: 'bg-gold-light/20 rounded-lg border border-gold/30 overflow-hidden',
      header: 'px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gold-light/40 transition-colors',
      title: 'font-semibold text-text-dark text-sm',
      content: 'px-4 pb-4 text-sm text-text-medium leading-relaxed',
    },
  }

  const v = variants[variant] || variants.default

  return (
    <div className={v.wrapper}>
      <div className={v.header} onClick={() => setOpen(!open)}>
        <span className={v.title}>{title}</span>
        <ChevronDown
          size={16}
          className={`text-text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </div>
      {open && (
        <div className={v.content}>
          {children}
        </div>
      )}
    </div>
  )
}
