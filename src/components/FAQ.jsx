import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q:'Can I change my centre after enrolling?', a:'Yes, centre changes are allowed within the first 15 days of enrollment, subject to seat availability at the requested centre. Contact your centre coordinator or call +91 9082102879.' },
  { q:'What if I miss a class?', a:'All classes are recorded and uploaded to the student portal within 24 hours. You can also attend makeup sessions held every Saturday morning. No student is left behind.' },
  { q:'Is there a scholarship for SC/ST and reserved category students?', a:'Yes. AEG offers up to 50% fee concession for SC/ST students. Government schemes like Mahaswayam and VJNT are also facilitated through our centres.' },
  { q:'Do you provide hostel or accommodation?', a:"AEG doesn't run hostels directly, but we have tie-ups with nearby safe, affordable PG accommodations for outstation students. Our coordinators will help you find and verify accommodation." },
  { q:'What languages are classes taught in?', a:'All classes are taught in Marathi and Hindi, with English explanations for IBPS-specific topics. Study material is available in all three languages.' },
  { q:'How are mock tests evaluated?', a:'Mock tests are OMR-based, exactly like the real exam. They are evaluated within 24 hours and individual performance reports are shared. Faculty analyse weak areas and provide targeted practice.' },
  { q:'Is physical training included in the fees?', a:'Yes, physical training is included in the Police Bharti package at no extra cost. This covers daily ground sessions, fitness assessment and preparation for all physical rounds.' },
  { q:'Are demo classes available before enrolling?', a:"Absolutely. We offer one free demo class at any of our centres. Fill the enquiry form or call us — we'll arrange a demo within 3 working days at your preferred centre." },
  { q:'Are online classes available?', a:'Yes. All enrolled students get access to our online portal with recorded classes, notes and mock tests. A hybrid batch option is available at select centres for students who cannot attend in-person regularly.' },
  { q:'Is installment payment available?', a:'Yes. All packages can be paid in 2 or 3 installments with no additional charge. SC/ST students get extended installment periods. Contact our counsellors to discuss a payment plan.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-aeg-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-aeg-grey transition-colors">
        <span className="font-semibold text-aeg-navy text-sm pr-4">{q}</span>
        <ChevronDown size={16} className={`text-aeg-orange flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-5 pb-4 text-sm text-aeg-muted leading-relaxed border-t border-aeg-border">{a}</div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="text-center mb-10">
        <span className="tag">FAQ</span>
        <h2 className="section-title mt-4">Common Questions</h2>
        <span className="accent-bar mx-auto" />
      </div>
      <div className="max-w-3xl mx-auto flex flex-col gap-2">
        {faqs.map(f => <Item key={f.q} {...f} />)}
      </div>
    </section>
  )
}
