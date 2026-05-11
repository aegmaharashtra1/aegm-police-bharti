const faculty = [
  { name:'Prof. Anil Deshmukh',  subject:'GK & Current Affairs',   exp:'12 yrs', qual:'MA Political Science, NET', centre:'Nagpur',     results:'800+ selected', photo:'https://randomuser.me/api/portraits/men/41.jpg' },
  { name:'Prof. Sunita Jadhav',  subject:'Mathematics & Reasoning', exp:'9 yrs',  qual:'MSc Mathematics, B.Ed',    centre:'Pune',       results:'600+ placed',   photo:'https://randomuser.me/api/portraits/women/41.jpg' },
  { name:'Trainer Vijay More',   subject:'Physical Training',       exp:'10 yrs', qual:'NIS Certified PT Coach',   centre:'Nagpur',     results:'500+ cleared PT', photo:'https://randomuser.me/api/portraits/men/52.jpg' },
  { name:'Prof. Rekha Patil',    subject:'Marathi & English',       exp:'8 yrs',  qual:'MA Linguistics, CELTA',    centre:'Nagpur',     results:'700+ improved', photo:'https://randomuser.me/api/portraits/women/52.jpg' },
  { name:'Prof. Ravi Thorat',    subject:'Reasoning & Intelligence', exp:'11 yrs', qual:'MSc Statistics, MBA',     centre:'Pune',       results:'900+ cleared',  photo:'https://randomuser.me/api/portraits/men/63.jpg' },
  { name:'Prof. Priya Nair',     subject:'Banking & IBPS GK',       exp:'7 yrs',  qual:'MBA Finance, Ex-banker',   centre:'Navi Mumbai', results:'400+ in banks', photo:'https://randomuser.me/api/portraits/women/63.jpg' },
  { name:'Prof. Namdev Jagtap',  subject:'General Studies',         exp:'9 yrs',  qual:'MA History, SET Qualified', centre:'Aurangabad', results:'350+ selected', photo:'https://randomuser.me/api/portraits/men/74.jpg' },
  { name:'Trainer Suresh Babar', subject:'Physical Fitness',        exp:'8 yrs',  qual:'Sports Science Diploma',   centre:'Aurangabad', results:'280+ cleared PT', photo:'https://randomuser.me/api/portraits/men/85.jpg' },
]

export default function Faculty() {
  return (
    <section id="faculty" className="section-pad bg-white">
      <div className="text-center mb-12">
        <span className="tag">Our Team</span>
        <h2 className="section-title mt-4">Expert Faculty</h2>
        <span className="accent-bar mx-auto" />
        <p className="text-aeg-muted max-w-xl mx-auto">
          Specialists who know exactly what each exam demands — and how to get you there.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {faculty.map(f => (
          <div key={f.name} className="card p-5 text-center group hover:border-aeg-orange/40">
            <img src={f.photo} alt={f.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-aeg-border group-hover:border-aeg-orange transition-colors" />
            <h3 className="font-heading font-bold text-aeg-navy text-base leading-tight">{f.name}</h3>
            <p className="text-aeg-orange text-sm font-semibold mt-0.5">{f.subject}</p>
            <div className="flex justify-center gap-3 my-2">
              <span className="text-xs text-aeg-muted bg-aeg-grey px-2 py-0.5">{f.exp}</span>
              <span className="text-xs text-aeg-muted bg-aeg-grey px-2 py-0.5">{f.centre}</span>
            </div>
            <p className="text-xs text-aeg-muted leading-snug">{f.qual}</p>
            <div className="mt-3 pt-3 border-t border-aeg-border">
              <p className="text-xs font-semibold text-aeg-navy">{f.results}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
