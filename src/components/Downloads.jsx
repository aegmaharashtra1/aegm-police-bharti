import { Download, FileText, Calendar, Dumbbell } from 'lucide-react'

const resources = [
  { icon: FileText,  title:'Police Bharti Brochure',    desc:'Complete overview of our Police Bharti coaching programme', file:'#' },
  { icon: FileText,  title:'IBPS Coaching Brochure',    desc:'Everything about our IBPS PO & Clerk coaching programme',   file:'#' },
  { icon: Calendar,  title:'Batch Timetable 2025',      desc:'Upcoming batch start dates across all centres',             file:'#' },
  { icon: FileText,  title:'Police Bharti Syllabus',    desc:'Official syllabus breakdown for Maharashtra Police exam',   file:'#' },
  { icon: FileText,  title:'IBPS Official Syllabus',    desc:'Complete IBPS PO & Clerk syllabus with marking scheme',     file:'#' },
  { icon: Dumbbell,  title:'Physical Fitness Guide',    desc:'Complete fitness preparation guide for Police Bharti rounds', file:'#' },
]

export default function Downloads() {
  return (
    <section id="downloads" className="section-pad bg-white">
      <div className="text-center mb-10">
        <span className="tag">Resources</span>
        <h2 className="section-title mt-4">Downloads</h2>
        <span className="accent-bar mx-auto" />
        <p className="text-aeg-muted max-w-xl mx-auto">Free resources to help you start preparing right away.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {resources.map(r => (
          <a key={r.title} href={r.file}
            className="card p-5 flex items-start gap-4 hover:border-aeg-orange/40 group transition-all">
            <div className="w-10 h-10 bg-aeg-grey group-hover:bg-aeg-orange flex items-center justify-center flex-shrink-0 transition-colors">
              <r.icon size={18} className="text-aeg-navy group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-aeg-navy text-sm">{r.title}</h3>
              <p className="text-aeg-muted text-xs mt-0.5 leading-relaxed">{r.desc}</p>
            </div>
            <Download size={14} className="text-aeg-muted group-hover:text-aeg-orange transition-colors flex-shrink-0 mt-1" />
          </a>
        ))}
      </div>
      <p className="text-center text-xs text-aeg-muted mt-6">* PDF downloads will be active once official files are uploaded by the organisation.</p>
    </section>
  )
}
