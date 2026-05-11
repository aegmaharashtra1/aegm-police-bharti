import { ClipboardList, Phone, Building2, FileCheck, GraduationCap } from 'lucide-react'

const steps = [
  { icon: ClipboardList, step:'01', title:'Fill Enquiry Form', desc:'Submit your name, roll number, exam type and preferred centre using the form on this page.' },
  { icon: Phone,         step:'02', title:'Counsellor Calls You', desc:'Our team calls within 24 hours to confirm your details and answer any questions.' },
  { icon: Building2,     step:'03', title:'Visit Centre', desc:'Attend a free demo class at your chosen centre and see the facilities firsthand.' },
  { icon: FileCheck,     step:'04', title:'Submit Documents', desc:'Bring your admit card, Aadhar card, and passport-size photograph to complete enrollment.' },
  { icon: GraduationCap, step:'05', title:'Batch Starts', desc:'You are enrolled. Batch schedule, faculty details and study material provided on Day 1.' },
]

const fees = [
  { pkg:'Police Bharti Basic',   price:'₹8,000',  includes:['Theory Classes','Study Material','Mock Tests'] },
  { pkg:'Police Bharti Premium', price:'₹14,000', includes:['Theory Classes','Physical Training','Study Material','Mock Tests','Online Portal'], highlight:true },
  { pkg:'IBPS Standard',         price:'₹10,000', includes:['Theory Classes','Study Material','Mock Tests','Current Affairs'] },
  { pkg:'IBPS Premium',          price:'₹16,000', includes:['Theory Classes','Study Material','Mock Tests','Current Affairs','Online Portal','Doubt Sessions'], highlight:false },
]

export default function JoinProcess() {
  return (
    <section id="joinprocess" className="section-pad bg-aeg-navy">
      <div className="text-center mb-12">
        <span className="tag">Admission</span>
        <h2 className="section-title mt-4 text-white">How to Join AEG</h2>
        <span className="accent-bar mx-auto" />
        <p className="text-white/60 max-w-xl mx-auto">Simple 5-step process. Our counsellors guide you at every step.</p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {steps.map((s, i) => (
          <div key={s.step} className="relative">
            <div className="bg-white/5 border border-white/10 p-5 h-full hover:bg-white/8 transition-colors">
              <div className="w-10 h-10 bg-aeg-orange flex items-center justify-center mb-3">
                <s.icon size={18} className="text-white" />
              </div>
              <p className="font-heading font-bold text-aeg-orange text-3xl mb-1">{s.step}</p>
              <h3 className="font-heading font-bold text-white text-base mb-2">{s.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
            </div>
            {i < steps.length - 1 && <div className="hidden lg:block absolute top-8 -right-2 text-white/20 text-xl">→</div>}
          </div>
        ))}
      </div>

      {/* Documents required */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div className="bg-white/5 border border-white/10 p-6">
          <h3 className="font-heading font-bold text-white text-xl mb-4">Documents Required</h3>
          {['Admit Card / Merit List Printout','Aadhar Card (original + photocopy)','2 Passport-size Photographs','Caste Certificate (for SC/ST scholarship)','Bank passbook (for scholarship)'].map(d => (
            <div key={d} className="flex items-center gap-2 py-2 border-b border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-aeg-orange flex-shrink-0" />
              <span className="text-white/70 text-sm">{d}</span>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 p-6">
          <h3 className="font-heading font-bold text-white text-xl mb-4">Payment & Scholarship</h3>
          {[
            { label:'Installments', val:'Pay in 2 or 3 parts — no extra charge' },
            { label:'SC/ST Discount', val:'Up to 50% fee concession available' },
            { label:'Payment Modes', val:'UPI, Bank transfer, Cash at centre' },
            { label:'Mahaswayam', val:'Government scholarship facilitated' },
            { label:'Demo Class', val:'One free class before you decide' },
          ].map(r => (
            <div key={r.label} className="flex justify-between py-2 border-b border-white/10">
              <span className="text-white/50 text-sm">{r.label}</span>
              <span className="text-white text-sm font-semibold">{r.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fee cards */}
      <h3 className="font-heading text-2xl font-bold text-white text-center mb-6">Fee Structure</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {fees.map(f => (
          <div key={f.pkg} className={`p-5 border ${f.highlight ? 'bg-aeg-orange border-aeg-orange' : 'bg-white/5 border-white/10'}`}>
            <p className="font-heading font-bold text-white text-base mb-1">{f.pkg}</p>
            <p className="font-heading font-bold text-3xl text-white mb-4">{f.price}</p>
            {f.includes.map(i => (
              <div key={i} className="flex items-center gap-2 py-1">
                <div className={`w-1.5 h-1.5 rounded-full ${f.highlight ? 'bg-white' : 'bg-aeg-orange'} flex-shrink-0`} />
                <span className="text-white/80 text-xs">{i}</span>
              </div>
            ))}
            <a href="#centres" className={`mt-4 block text-center py-2 text-sm font-semibold transition-colors ${f.highlight ? 'bg-white text-aeg-orange hover:bg-aeg-grey' : 'bg-aeg-orange text-white hover:bg-aeg-orange-dark'}`}>
              Enroll Now
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
