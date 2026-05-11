import { Quote } from 'lucide-react'

const visitors = [
  { name:'R K Gaikwad', title:'IAS Officer (Retd)', org:'Former Secretary, Govt. of Maharashtra', event:'AEG Annual Guidance Seminar 2023', date:'March 2023', quote:"AEG is doing outstanding work in empowering Maharashtra's youth for public service careers." },
  { name:'Suresh Patil', title:'IPS Officer', org:'Superintendent of Police, Nagpur', event:'Police Bharti Motivation Day 2024', date:'Jan 2024', quote:"The discipline and preparation I witnessed at AEG centres sets these students apart from the rest." },
  { name:'Anita Deshmukh', title:'District Collector', org:'Nagpur District, Maharashtra', event:'Student Felicitation 2024', date:'Aug 2024', quote:"Coaching centres like AEG are the backbone of rural youth development in Maharashtra." },
  { name:'Rajendra More', title:'IFS Officer', org:'Dy. Commissioner of Forests, Pune', event:'Career Awareness Workshop 2023', date:'Sep 2023', quote:"Every student I met here had a clarity of purpose that is rare and truly inspiring." },
  { name:'Priya Kulkarni', title:'Dy. Commissioner of Police', org:'Mumbai Police, Zone 3', event:'Women in Uniform Seminar 2024', date:'Mar 2024', quote:"I am proud to see so many young women preparing seriously for police service through AEG." },
  { name:'Vinod Shinde', title:'Additional Collector', org:'Aurangabad Division', event:'Competitive Exam Drive 2024', date:'Jun 2024', quote:"AEG's structured coaching approach is exactly what students from smaller towns need." },
]

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

export default function Visitors() {
  return (
    <section id="visitors" className="section-pad bg-white">
      <div className="text-center mb-12">
        <span className="tag">Distinguished Visitors</span>
        <h2 className="section-title mt-4">Leaders Who Trust AEG</h2>
        <span className="accent-bar mx-auto" />
        <p className="text-aeg-muted max-w-xl mx-auto text-base">
          IAS, IPS and senior government officers who have visited our centres and witnessed our work firsthand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visitors.map(v => (
          <div key={v.name} className="card p-6 flex flex-col gap-4 group hover:border-aeg-orange/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-aeg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-aeg-orange transition-colors">
                <span className="text-white font-heading font-bold">{initials(v.name)}</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-aeg-navy text-lg leading-tight">{v.name}</h3>
                <p className="text-aeg-orange text-sm font-semibold">{v.title}</p>
                <p className="text-aeg-muted text-xs mt-0.5 leading-snug">{v.org}</p>
              </div>
            </div>
            <div className="flex-1">
              <Quote size={16} className="text-aeg-orange mb-2 opacity-60" />
              <p className="text-aeg-dark text-sm leading-relaxed italic">"{v.quote}"</p>
            </div>
            <div className="border-t border-aeg-border pt-3 flex justify-between">
              <span className="text-xs text-aeg-muted truncate mr-2">{v.event}</span>
              <span className="text-xs font-semibold text-aeg-orange whitespace-nowrap">{v.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
