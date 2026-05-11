import { Phone, MessageCircle } from 'lucide-react'

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex lg:hidden shadow-2xl">
      <a href="tel:+919082102879"
        className="flex-1 bg-aeg-navy text-white flex items-center justify-center gap-2 py-4 text-sm font-semibold border-r border-white/10 hover:bg-aeg-navy-light transition-colors">
        <Phone size={16} /> Call Us
      </a>
      <a href="https://wa.me/919082102879?text=Hello%20AEG%2C%20I%20want%20to%20enquire%20about%20coaching."
        target="_blank" rel="noopener noreferrer"
        className="flex-1 bg-green-600 text-white flex items-center justify-center gap-2 py-4 text-sm font-semibold hover:bg-green-700 transition-colors">
        <MessageCircle size={16} /> WhatsApp
      </a>
      <a href="#centres"
        className="flex-1 bg-aeg-orange text-white flex items-center justify-center gap-2 py-4 text-sm font-semibold hover:bg-aeg-orange-dark transition-colors">
        Select Centre →
      </a>
    </div>
  )
}
