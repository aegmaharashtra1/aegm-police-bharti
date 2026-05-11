import { useState } from 'react'
import { MapPin, Clock, Users, Phone, ChevronRight, CheckCircle } from 'lucide-react'

const centres = [
  { id:1, name:'AEG Nagpur Centre', address:'Plot 45, Near Railway Station, Sitabuldi, Nagpur – 440001', phone:'9082102879', timings:'6–9 AM · 5–8 PM', capacity:120, seats:14, exams:['Police Bharti','IBPS'], photo:'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=70', mapUrl:'https://maps.google.com/?q=Nagpur+Railway+Station' },
  { id:2, name:'AEG Pune Centre', address:'3rd Floor, FC Road, Shivaji Nagar, Pune – 411005', phone:'9082102880', timings:'5:30–8:30 AM · 6–9 PM', capacity:150, seats:6, exams:['Police Bharti','IBPS'], photo:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=70', mapUrl:'https://maps.google.com/?q=FC+Road+Pune' },
  { id:3, name:'AEG Navi Mumbai Centre', address:'501/502, Grand Central Mall, Seawoods Darave, Navi Mumbai – 400706', phone:'9082102879', timings:'6–9 AM · 7–10 PM', capacity:100, seats:22, exams:['IBPS','Police Bharti'], photo:'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=70', mapUrl:'https://maps.google.com/?q=Seawoods+Darave+Navi+Mumbai' },
  { id:4, name:'AEG Aurangabad Centre', address:'Near MSRTC Bus Stand, Kranti Chowk, Aurangabad – 431001', phone:'9082102881', timings:'6–9 AM · 5–8 PM', capacity:90, seats:31, exams:['Police Bharti','IBPS'], photo:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=70', mapUrl:'https://maps.google.com/?q=Kranti+Chowk+Aurangabad' },
]

const EXAM_FILTER = ['All', 'Police Bharti', 'IBPS']

export default function CentreSelector() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name:'', roll:'', phone:'', email:'', exam:'Police Bharti', district:'', centre:'' })

  const filtered = filter === 'All' ? centres : centres.filter(c => c.exams.includes(filter))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = { ...form, centre: selected?.name || form.centre, timestamp: new Date().toISOString() }
    // POST to Google Apps Script / CF7 endpoint when ready
    console.log('Centre selection submitted:', payload)
    setSubmitted(true)
  }

  if (submitted) return (
    <section id="centres" className="section-pad bg-white">
      <div className="max-w-lg mx-auto text-center py-16">
        <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
        <h2 className="font-heading text-3xl font-bold text-aeg-navy mb-2">Centre Selected!</h2>
        <p className="text-aeg-muted">We have received your selection for <strong>{selected?.name || form.centre}</strong>. Our team will call you within 24 hours.</p>
        <a href="tel:+919082102879" className="btn-primary mt-6 mx-auto">Call Us Now</a>
      </div>
    </section>
  )

  return (
    <section id="centres" className="section-pad bg-white">
      <div className="text-center mb-10">
        <span className="tag">Select Your Centre</span>
        <h2 className="section-title mt-4">Choose Your AEG Centre</h2>
        <span className="accent-bar mx-auto" />
        <p className="text-aeg-muted max-w-xl mx-auto">
          Pick the centre closest to you. Check available seats and batch timings before submitting.
        </p>
      </div>

      {/* Exam filter */}
      <div className="flex justify-center gap-2 mb-8">
        {EXAM_FILTER.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-5 py-2 text-sm font-semibold border transition-all ${filter === f ? 'bg-aeg-navy text-white border-aeg-navy' : 'bg-white text-aeg-muted border-aeg-border hover:border-aeg-navy'}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Centre cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
        {filtered.map(c => (
          <div key={c.id} onClick={() => setSelected(c)}
            className={`card cursor-pointer overflow-hidden transition-all ${selected?.id === c.id ? 'border-aeg-orange border-2 shadow-lg' : 'hover:border-aeg-orange/40'}`}>
            <div className="relative">
              <img src={c.photo} alt={c.name} className="w-full h-36 object-cover" />
              {selected?.id === c.id && (
                <div className="absolute top-2 right-2 bg-aeg-orange text-white text-xs px-2 py-1 font-semibold">✓ Selected</div>
              )}
              <div className={`absolute bottom-2 left-2 text-xs font-bold px-2 py-1 ${c.seats < 10 ? 'bg-red-500 text-white' : 'bg-green-600 text-white'}`}>
                {c.seats < 10 ? `Only ${c.seats} seats left!` : `${c.seats} seats available`}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold text-aeg-navy text-base leading-tight mb-1">{c.name}</h3>
              <div className="flex items-start gap-1.5 text-xs text-aeg-muted mb-1">
                <MapPin size={11} className="mt-0.5 flex-shrink-0" /> <span>{c.address}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-aeg-muted mb-1">
                <Clock size={11} /> {c.timings}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-aeg-muted mb-3">
                <Users size={11} /> Capacity: {c.capacity}
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {c.exams.map(ex => <span key={ex} className="bg-aeg-grey text-aeg-navy text-xs px-2 py-0.5 font-semibold">{ex}</span>)}
              </div>
              <div className="flex gap-2">
                <a href={c.mapUrl} target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center text-xs py-2 border border-aeg-border hover:border-aeg-orange text-aeg-muted hover:text-aeg-orange transition-colors"
                  onClick={e => e.stopPropagation()}>
                  View Map
                </a>
                <a href={`tel:+91${c.phone}`} className="flex-1 text-center text-xs py-2 border border-aeg-border hover:border-aeg-orange text-aeg-muted hover:text-aeg-orange transition-colors"
                  onClick={e => e.stopPropagation()}>
                  <Phone size={11} className="inline mr-1" />{c.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enquiry form */}
      <div className="max-w-2xl mx-auto bg-aeg-grey p-8">
        <h3 className="font-heading text-2xl font-bold text-aeg-navy mb-1">
          {selected ? `Confirm: ${selected.name}` : 'Submit Your Centre Selection'}
        </h3>
        <p className="text-aeg-muted text-sm mb-6">
          {selected ? 'Fill in your details to confirm this centre.' : 'Select a centre above, then fill this form.'}
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required className="input" placeholder="Full Name *" value={form.name} onChange={e => setForm({...form, name:e.target.value})} />
          <input required className="input" placeholder="Roll Number *" value={form.roll} onChange={e => setForm({...form, roll:e.target.value})} />
          <input required className="input" placeholder="Mobile Number *" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} />
          <input className="input" placeholder="Email (optional)" value={form.email} onChange={e => setForm({...form, email:e.target.value})} />
          <select required className="input" value={form.exam} onChange={e => setForm({...form, exam:e.target.value})}>
            <option value="">Select Exam *</option>
            <option>Police Bharti</option>
            <option>IBPS PO</option>
            <option>IBPS Clerk</option>
          </select>
          <select required className="input" value={form.district} onChange={e => setForm({...form, district:e.target.value})}>
            <option value="">Select District *</option>
            {['Raigad','Thane','Bhandara','Palghar','Wardha','Yeotmal','Gondiya'].map(d => <option key={d}>{d}</option>)}
          </select>
          <div className="sm:col-span-2">
            <select required className="input" value={selected?.name || form.centre} onChange={e => { setForm({...form, centre:e.target.value}); setSelected(centres.find(c=>c.name===e.target.value)||null) }}>
              <option value="">Select Preferred Centre *</option>
              {centres.map(c => <option key={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
              Confirm Centre Selection <ChevronRight size={16} />
            </button>
            <p className="text-xs text-aeg-muted mt-2 text-center">Our counsellor will call you within 24 hours to confirm.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
