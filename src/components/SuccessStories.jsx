import { useState } from 'react'
import { MapPin, Star } from 'lucide-react'

const students = [
  { type:'police', name:'Rahul Waghmare',   photo:'https://randomuser.me/api/portraits/men/32.jpg',  exam:'Police Constable', year:2024, percentile:'98.7', centre:'Nagpur',     quote:'The mock tests here were exactly like the real exam. I cleared in my first attempt.' },
  { type:'police', name:'Priya Shinde',     photo:'https://randomuser.me/api/portraits/women/44.jpg', exam:'Police Constable (Women)', year:2024, percentile:'96.2', centre:'Pune', quote:'Physical training sessions gave me the confidence I needed for the fitness rounds.' },
  { type:'police', name:'Sanjay Jadhav',    photo:'https://randomuser.me/api/portraits/men/55.jpg',  exam:'Sub-Inspector (PSI)', year:2023, percentile:'99.1', centre:'Aurangabad', quote:"AEG's faculty understood exactly what the exam demanded. No wasted time." },
  { type:'police', name:'Kavita Bhosle',    photo:'https://randomuser.me/api/portraits/women/68.jpg', exam:'Police Constable', year:2024, percentile:'94.5', centre:'Nagpur',     quote:'I am the first in my family to join the police force. AEG made this possible.' },
  { type:'ibps',   name:'Amol Patil',       photo:'https://randomuser.me/api/portraits/men/71.jpg',  exam:'IBPS PO',   year:2024, percentile:'97.3', centre:'Pune',        quote:'Current affairs material was always updated. That made a huge difference in GK.' },
  { type:'ibps',   name:'Sneha Kulkarni',   photo:'https://randomuser.me/api/portraits/women/22.jpg', exam:'IBPS Clerk', year:2023, percentile:'95.8', centre:'Navi Mumbai', quote:"Selected in Bank of Maharashtra. AEG's online portal helped me study on the go." },
  { type:'ibps',   name:'Rohit Meshram',    photo:'https://randomuser.me/api/portraits/men/83.jpg',  exam:'IBPS PO',   year:2024, percentile:'98.1', centre:'Nagpur',       quote:'Doubt-solving sessions after class were the real game changer for me.' },
  { type:'ibps',   name:'Manisha Gaikwad',  photo:'https://randomuser.me/api/portraits/women/57.jpg', exam:'IBPS Clerk', year:2023, percentile:'93.4', centre:'Aurangabad',  quote:"Studied in Marathi medium. AEG's bilingual classes made English easy." },
]

const TABS = [
  { key: 'all',    label: 'All Students' },
  { key: 'police', label: 'Police Bharti' },
  { key: 'ibps',   label: 'IBPS' },
]

export default function SuccessStories() {
  const [tab, setTab] = useState('all')
  const filtered = tab === 'all' ? students : students.filter(s => s.type === tab)

  return (
    <section id="stories" className="section-pad bg-aeg-grey">
      <div className="text-center mb-10">
        <span className="tag">Success Stories</span>
        <h2 className="section-title mt-4">Students Who Made It</h2>
        <span className="accent-bar mx-auto" />
        <p className="text-aeg-muted max-w-xl mx-auto text-base">
          Real students. Real results. From AEG centres across Maharashtra.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {TABS.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`px-5 py-2 text-sm font-semibold transition-all border ${tab === t.key ? 'bg-aeg-orange text-white border-aeg-orange' : 'bg-white text-aeg-muted border-aeg-border hover:border-aeg-orange hover:text-aeg-orange'}`}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map(s => (
          <div key={s.name} className="card p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={s.photo} alt={s.name} className="w-14 h-14 rounded-full object-cover border-2 border-aeg-orange/30" />
              <div>
                <h3 className="font-heading font-bold text-aeg-navy text-base leading-tight">{s.name}</h3>
                <p className="text-aeg-orange text-xs font-semibold">{s.exam}</p>
                <p className="text-aeg-muted text-xs">{s.year}</p>
              </div>
            </div>
            <p className="text-sm text-aeg-dark italic leading-relaxed flex-1">"{s.quote}"</p>
            <div className="flex items-center justify-between border-t border-aeg-border pt-3">
              <div className="flex items-center gap-1 text-xs text-aeg-muted">
                <MapPin size={11} /> {s.centre}
              </div>
              <div className="flex items-center gap-1">
                <Star size={11} className="text-aeg-orange fill-aeg-orange" />
                <span className="text-xs font-bold text-aeg-navy">{s.percentile}%ile</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
