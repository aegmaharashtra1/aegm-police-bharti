import { Newspaper, Award, ExternalLink } from 'lucide-react'

const awards = [
  { title:'Best Coaching Centre Maharashtra', year:'2023', org:'State Education Board' },
  { title:'Government Recognized Centre', year:'2022', org:'Govt. of Maharashtra' },
  { title:'Excellence in Rural Education', year:'2024', org:'MSSC Foundation' },
]

const press = [
  'Lokmat — AEG students dominate Police Bharti merit list 2024',
  'Sakal — 6,180 students from 7 districts in merit list through AEG coaching',
  'Maharashtra Times — AEG\'s unique bilingual coaching approach changing lives',
  'Divya Marathi — From village to uniform: AEG students\' journey inspires Maharashtra',
]

export default function MediaPress() {
  return (
    <section id="media" className="section-pad bg-aeg-grey">
      <div className="text-center mb-10">
        <span className="tag">Media & Recognition</span>
        <h2 className="section-title mt-4">In the News</h2>
        <span className="accent-bar mx-auto" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-aeg-navy mb-4 flex items-center gap-2"><Newspaper size={18} className="text-aeg-orange" /> Press Coverage</h3>
          <div className="flex flex-col gap-3">
            {press.map((p, i) => (
              <div key={i} className="card p-4 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-aeg-orange mt-2 flex-shrink-0" />
                <p className="text-sm text-aeg-dark leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-aeg-muted mt-3 italic">* Actual newspaper clippings will be added when provided by the organisation.</p>
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-aeg-navy mb-4 flex items-center gap-2"><Award size={18} className="text-aeg-orange" /> Awards & Recognition</h3>
          <div className="flex flex-col gap-4">
            {awards.map(a => (
              <div key={a.title} className="card p-5 flex items-center gap-4 border-l-4 border-aeg-orange">
                <Award size={28} className="text-aeg-orange flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-aeg-navy text-base">{a.title}</h4>
                  <p className="text-aeg-muted text-sm">{a.org} · {a.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
