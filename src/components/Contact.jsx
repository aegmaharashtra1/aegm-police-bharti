import { Phone, Mail, MapPin, MessageCircle, Clock, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-aeg-navy">
      <div className="text-center mb-12">
        <span className="tag">Get in Touch</span>
        <h2 className="section-title mt-4 text-white">Contact & Helpline</h2>
        <span className="accent-bar mx-auto" />
        <p className="text-white/60 max-w-xl mx-auto">Our counsellors are available 6 days a week. Reach out with any question.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Phone */}
        <a href="tel:+919082102879" className="bg-white/5 border border-white/10 p-6 hover:bg-white/8 hover:border-aeg-orange/40 transition-all text-center group">
          <Phone size={28} className="text-aeg-orange mx-auto mb-3" />
          <h3 className="font-heading font-bold text-white text-lg">Call Us</h3>
          <p className="text-aeg-orange font-bold text-xl mt-1">+91 90821 02879</p>
          <p className="text-white/40 text-xs mt-1">Mon–Sat · 9 AM – 7 PM</p>
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/919082102879?text=Hello%20AEG%20Maharashtra%2C%20I%20want%20to%20enquire%20about%20Police%20Bharti%20%2F%20IBPS%20coaching."
          target="_blank" rel="noopener noreferrer"
          className="bg-green-600/20 border border-green-500/30 p-6 hover:bg-green-600/30 transition-all text-center">
          <MessageCircle size={28} className="text-green-400 mx-auto mb-3" />
          <h3 className="font-heading font-bold text-white text-lg">WhatsApp</h3>
          <p className="text-green-400 font-bold text-xl mt-1">Chat Now</p>
          <p className="text-white/40 text-xs mt-1">Quick replies during office hours</p>
        </a>

        {/* Email */}
        <a href="mailto:hr_asst_manager@aegmaharashtra.com"
          className="bg-white/5 border border-white/10 p-6 hover:bg-white/8 hover:border-aeg-orange/40 transition-all text-center">
          <Mail size={28} className="text-aeg-orange mx-auto mb-3" />
          <h3 className="font-heading font-bold text-white text-lg">Email Us</h3>
          <p className="text-white/70 text-sm mt-1 break-all">hr_asst_manager@<br />aegmaharashtra.com</p>
          <p className="text-white/40 text-xs mt-1">Reply within 24 hours</p>
        </a>
      </div>

      {/* Office address */}
      <div className="bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
        <MapPin size={20} className="text-aeg-orange flex-shrink-0" />
        <div>
          <p className="font-semibold text-white">Head Office</p>
          <p className="text-white/60 text-sm">501/502, Grand Central Mall, Seawoods Darave, Navi Mumbai – 400706</p>
        </div>
        <a href="https://maps.google.com/?q=Grand+Central+Mall+Seawoods+Darave+Navi+Mumbai"
          target="_blank" rel="noopener noreferrer"
          className="btn-primary text-xs py-2 px-4 ml-auto flex-shrink-0">
          Open in Maps
        </a>
      </div>

      {/* Social + footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
        <div className="flex items-center gap-3">
          {[
            { icon: Instagram, href:'https://www.instagram.com/', label:'Instagram' },
            { icon: Facebook,  href:'https://www.facebook.com/', label:'Facebook' },
            { icon: Youtube,   href:'https://www.youtube.com/', label:'YouTube' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 hover:bg-aeg-orange flex items-center justify-center transition-colors">
              <s.icon size={16} className="text-white" />
            </a>
          ))}
        </div>
        <div className="text-center">
          <p className="text-white/40 text-xs">© 2025 AEG Maharashtra · Police Bharti & IBPS Coaching</p>
          <p className="text-white/25 text-xs mt-0.5">Powered by AEG Maharashtra · <a href="https://aegmaharashtra.org" className="hover:text-white/50">aegmaharashtra.org</a></p>
        </div>
        <a href="#hero" className="text-white/40 hover:text-white text-xs transition-colors">↑ Back to top</a>
      </div>
    </section>
  )
}
