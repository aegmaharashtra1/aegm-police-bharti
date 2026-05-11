import { BookOpen, Dumbbell, FileText, Users, Smartphone, Headphones, Award, Globe } from 'lucide-react'

const features = [
  { icon: BookOpen,    title: 'Complete Syllabus', desc: 'All subjects for Police Bharti & IBPS covered in Marathi, Hindi and English. No topic left out.' },
  { icon: Dumbbell,   title: 'Physical Training', desc: 'Dedicated ground sessions daily at 6 AM. NIS-certified PT coaches. Track, parallel bars, fitness drills.' },
  { icon: FileText,   title: 'Weekly Mock Tests', desc: 'OMR-based tests every Sunday — exactly like the real exam. Results within 24 hours.' },
  { icon: Users,      title: 'Expert Faculty', desc: 'Subject specialists with 7–15 years of coaching experience. Former government officers as mentors.' },
  { icon: Smartphone, title: 'Online Study Portal', desc: 'Access recorded classes, notes, and mock tests anytime on your phone. Never miss a session.' },
  { icon: Headphones, title: 'Doubt Solving', desc: 'Daily evening doubt sessions + WhatsApp helpdesk. Your question gets answered same day.' },
  { icon: Award,      title: 'SC/ST Scholarship', desc: 'Up to 50% fee concession for reserved category students. Mahaswayam & VJNT schemes facilitated.' },
  { icon: Globe,      title: 'Bilingual Classes', desc: 'All classes in Marathi & Hindi. English explained separately for IBPS. No student left behind due to language.' },
]

export default function WhyAEG() {
  return (
    <section id="whyaeg" className="section-pad bg-aeg-grey">
      <div className="text-center mb-12">
        <span className="tag">Why Choose AEG</span>
        <h2 className="section-title mt-4">Everything You Need to Clear</h2>
        <span className="accent-bar mx-auto" />
        <p className="text-aeg-muted max-w-xl mx-auto">
          Not just coaching — a complete ecosystem designed for Police Bharti and IBPS success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <div key={f.title} className="card p-6 group hover:border-aeg-orange/40">
            <div className="w-12 h-12 bg-aeg-navy group-hover:bg-aeg-orange flex items-center justify-center mb-4 transition-colors duration-300">
              <f.icon size={22} className="text-white" />
            </div>
            <h3 className="font-heading font-bold text-aeg-navy text-lg mb-2">{f.title}</h3>
            <p className="text-aeg-muted text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
