import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'Home',       href: '#hero' },
  { label: 'Results',    href: '#results' },
  { label: 'Merit List', href: '#meritlist' },
  { label: 'Centres',    href: '#centres' },
  { label: 'Faculty',    href: '#faculty' },
  { label: 'Fees',       href: '#joinprocess' },
  { label: 'FAQ',        href: '#faq' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-aeg-navy shadow-2xl' : 'bg-aeg-navy/95 backdrop-blur'}`}>
      <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-aeg-orange flex items-center justify-center flex-shrink-0">
              <span className="text-white font-heading font-bold text-sm">AEG</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-heading font-bold text-sm leading-none tracking-wide">AEG MAHARASHTRA</div>
              <div className="text-aeg-orange text-xs leading-none mt-0.5">Police Bharti · IBPS Coaching</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="text-white/75 hover:text-aeg-orange text-sm font-body transition-colors duration-150 hover:underline underline-offset-4">
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919082102879" className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors">
              <Phone size={13} /> 90821 02879
            </a>
            <a href="#centres" className="btn-primary text-xs py-2.5 px-5">
              Select Centre →
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-1.5">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-aeg-navy border-t border-white/10 px-4 py-4 flex flex-col gap-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/80 hover:text-aeg-orange text-sm py-2 border-b border-white/5 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="tel:+919082102879" className="flex-1 btn-navy justify-center text-xs py-2.5">
              <Phone size={13} /> Call Us
            </a>
            <a href="#centres" className="flex-1 btn-primary justify-center text-xs py-2.5" onClick={() => setOpen(false)}>
              Select Centre
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
