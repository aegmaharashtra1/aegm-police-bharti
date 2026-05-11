import { CheckCircle } from 'lucide-react'

const features = ['400m running track','Pull-up & parallel bars','Daily 6 AM fitness sessions','NIS-certified physical trainers','Separate male & female batches','Hurdle & agility drills','Swimming guidance (select centres)','Medical fitness advisory']
const schedule = [
  { day:'Monday – Saturday', time:'6:00 – 7:30 AM', activity:'Running & Endurance' },
  { day:'Monday – Saturday', time:'7:30 – 9:00 AM', activity:'Strength & Agility Drills' },
  { day:'Sunday',            time:'6:00 – 8:00 AM', activity:'Full Fitness Assessment' },
]

export default function PhysicalTraining() {
  return (
    <section id="physical" className="section-pad bg-aeg-grey">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="tag">Physical Preparation</span>
          <h2 className="section-title mt-4">Physical Training Facilities</h2>
          <span className="accent-bar" />
          <p className="text-aeg-muted mb-6">Police Bharti has strict physical fitness rounds. Our dedicated ground sessions prepare you for every test — running, pull-ups, agility and more.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map(f => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-aeg-orange flex-shrink-0" />
                <span className="text-sm text-aeg-dark">{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-aeg-navy mb-4">Daily Fitness Schedule</h3>
          <div className="flex flex-col gap-3">
            {schedule.map((s, i) => (
              <div key={i} className="card p-4 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-aeg-orange flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-aeg-navy text-sm">{s.activity}</p>
                  <p className="text-xs text-aeg-muted">{s.day}</p>
                </div>
                <span className="text-xs font-bold text-aeg-orange bg-aeg-orange/10 px-3 py-1">{s.time}</span>
              </div>
            ))}
          </div>
          <div className="bg-aeg-navy text-white p-5 mt-4">
            <p className="font-heading font-bold text-lg">Physical training is included</p>
            <p className="text-white/70 text-sm mt-1">No extra fee for Police Bharti students. Fitness sessions are part of the core package.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
