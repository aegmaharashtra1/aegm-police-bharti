import { Download, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const syllabus = {
  'Police Bharti': ['General Knowledge & Current Affairs','Marathi Grammar & Language','Mathematics & Arithmetic','Intelligence & Reasoning','Physical & Mental Fitness','Maharashtra History & Geography','Science & Technology Basics'],
  'IBPS PO / Clerk': ['Quantitative Aptitude','English Language','Reasoning Ability','General Awareness & Banking Awareness','Computer Knowledge & Applications','Current Affairs (Monthly)','Descriptive English (PO only)'],
}

function SyllabusAccordion({ title, items }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-aeg-navy text-white hover:bg-aeg-navy-light transition-colors">
        <span className="font-heading font-bold text-lg">{title}</span>
        <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {items.map(item => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-aeg-orange flex-shrink-0" />
              <span className="text-sm text-aeg-dark">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Curriculum() {
  return (
    <section id="curriculum" className="section-pad bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <span className="tag">Curriculum</span>
          <h2 className="section-title mt-4">Syllabus Coverage</h2>
          <span className="accent-bar" />
          <p className="text-aeg-muted mb-6">Every topic, every subject — covered completely. Click to expand each exam syllabus.</p>
          <div className="flex flex-col gap-3">
            {Object.entries(syllabus).map(([k, v]) => <SyllabusAccordion key={k} title={k} items={v} />)}
          </div>
        </div>
        <div>
          <span className="tag">Study Material</span>
          <h2 className="section-title mt-4">What You Get</h2>
          <span className="accent-bar" />
          <div className="flex flex-col gap-4">
            {[
              { title:'Printed Study Notes', desc:'Topic-wise notes in Marathi & Hindi for every subject. Updated every batch.' },
              { title:'Monthly Current Affairs', desc:'Curated 50-page current affairs booklet every month.' },
              { title:'Previous Year Papers', desc:'Last 10 years\' papers for Police Bharti and IBPS with solutions.' },
              { title:'Practice Assignments', desc:'Weekly chapter-wise assignments with answer key.' },
              { title:'Online Mock Test Access', desc:'Full test series accessible anytime via our student portal.' },
            ].map(m => (
              <div key={m.title} className="card p-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-aeg-orange mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-aeg-navy text-sm">{m.title}</p>
                  <p className="text-aeg-muted text-xs mt-0.5 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
