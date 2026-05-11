import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { Trophy } from 'lucide-react'

const yearData = [
  { year: '2019', selected: 210 },
  { year: '2020', selected: 285 },
  { year: '2021', selected: 390 },
  { year: '2022', selected: 530 },
  { year: '2023', selected: 820 },
  { year: '2024', selected: 1260 },
]

// Real data from Excel
const districtData = [
  { district: 'Yeotmal',  merit: 1587, selected: 1684 },
  { district: 'Palghar',  merit: 1524, selected: 1551 },
  { district: 'Gondiya',  merit: 1324, selected: 1343 },
  { district: 'Thane',    merit: 557,  selected: 2    },
  { district: 'Raigad',   merit: 443,  selected: 150  },
  { district: 'Wardha',   merit: 406,  selected: 414  },
  { district: 'Bhandara', merit: 339,  selected: 345  },
]

const topRankers = [
  { rank:1, name:'Yogeshkumar L. Katenga', exam:'Police Constable', percentile:'100.00', centre:'Gondiya', photo:'https://randomuser.me/api/portraits/men/11.jpg' },
  { rank:2, name:'Vishakha G. Raut',       exam:'Police Constable', percentile:'99.94',  centre:'Gondiya', photo:'https://randomuser.me/api/portraits/women/12.jpg' },
  { rank:3, name:'Dhnyandeo J. Amale',     exam:'Police Constable', percentile:'99.92',  centre:'Gondiya', photo:'https://randomuser.me/api/portraits/men/13.jpg' },
  { rank:4, name:'Mukul T. Tekam',         exam:'Police Constable', percentile:'99.90',  centre:'Gondiya', photo:'https://randomuser.me/api/portraits/men/14.jpg' },
  { rank:5, name:'Rupesh A. Kumare',       exam:'Police Constable', percentile:'99.86',  centre:'Wardha',  photo:'https://randomuser.me/api/portraits/men/15.jpg' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-aeg-navy text-white text-xs px-3 py-2 rounded shadow">
        <p className="font-bold">{label}</p>
        <p>{payload[0].value} selections</p>
      </div>
    )
  }
  return null
}

export default function Results() {
  return (
    <section id="results" className="section-pad bg-white">
      <div className="text-center mb-12">
        <span className="tag">Results & Achievements</span>
        <h2 className="section-title mt-4">Numbers That Speak</h2>
        <span className="accent-bar mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
        {/* Year-wise chart */}
        <div className="card p-6">
          <h3 className="font-heading text-xl font-bold text-aeg-navy mb-1">Year-wise Selections</h3>
          <p className="text-aeg-muted text-sm mb-6">Total students selected per year</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={yearData} barSize={32}>
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="selected" radius={[3,3,0,0]}>
                {yearData.map((_, i) => (
                  <Cell key={i} fill={i === yearData.length-1 ? '#E8490F' : '#0D1B3E'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* District breakdown */}
        <div className="card p-6">
          <h3 className="font-heading text-xl font-bold text-aeg-navy mb-1">District-wise Summary</h3>
          <p className="text-aeg-muted text-sm mb-4">Merit list vs selected students</p>
          <div className="flex flex-col gap-3">
            {districtData.map(d => (
              <div key={d.district} className="flex items-center gap-3">
                <span className="text-sm font-semibold text-aeg-navy w-20 flex-shrink-0">{d.district}</span>
                <div className="flex-1">
                  <div className="flex gap-1 mb-0.5">
                    <div className="h-2 bg-aeg-navy/20 rounded-sm" style={{ width: `${(d.merit / 1587) * 100}%` }} />
                  </div>
                  <div className="flex gap-1">
                    <div className="h-2 bg-aeg-orange rounded-sm" style={{ width: `${(d.selected / 1684) * 100}%` }} />
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs text-aeg-muted">{d.merit.toLocaleString('en-IN')}</div>
                  <div className="text-xs font-bold text-aeg-orange">{d.selected.toLocaleString('en-IN')}</div>
                </div>
              </div>
            ))}
            <div className="flex gap-4 mt-2 pt-2 border-t border-aeg-border">
              <span className="flex items-center gap-1.5 text-xs text-aeg-muted"><span className="w-3 h-2 bg-aeg-navy/20 inline-block rounded-sm" /> Merit List</span>
              <span className="flex items-center gap-1.5 text-xs text-aeg-muted"><span className="w-3 h-2 bg-aeg-orange inline-block rounded-sm" /> Selected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top rankers */}
      <div>
        <h3 className="font-heading text-2xl font-bold text-aeg-navy text-center mb-6">Top Rankers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {topRankers.map(r => (
            <div key={r.rank} className={`card p-4 text-center ${r.rank === 1 ? 'border-aeg-orange border-2' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 ${r.rank === 1 ? 'bg-aeg-orange' : 'bg-aeg-navy'}`}>
                {r.rank === 1 ? <Trophy size={18} className="text-white" /> : <span className="text-white font-bold text-sm">#{r.rank}</span>}
              </div>
              <img src={r.photo} alt={r.name} className="w-12 h-12 rounded-full object-cover mx-auto mb-2 border-2 border-aeg-border" />
              <h4 className="font-heading font-bold text-aeg-navy text-sm leading-tight">{r.name}</h4>
              <p className="text-aeg-muted text-xs mt-0.5">{r.exam}</p>
              <p className="text-aeg-orange font-bold text-base mt-1">{r.percentile}%</p>
              <p className="text-aeg-muted text-xs">{r.centre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
