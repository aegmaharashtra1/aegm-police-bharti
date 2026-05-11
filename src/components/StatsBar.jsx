import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'Students in Merit List', value: 6180,  suffix: '+' },
  { label: 'Students Selected',      value: 5489,  suffix: '+' },
  { label: 'Districts Covered',      value: 7,     suffix: ''  },
  { label: 'Pass Rate',              value: 78,    suffix: '%' },
  { label: 'Years Active',           value: 8,     suffix: '+'  },
]

function AnimCounter({ value, suffix }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(); const done = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        let start = 0
        const step = value / 60
        const t = setInterval(() => {
          start = Math.min(start + step, value)
          setDisplay(Math.floor(start))
          if (start >= value) clearInterval(t)
        }, 30)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])
  return <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-aeg-orange">{display.toLocaleString('en-IN')}{suffix}</span>
}

export default function StatsBar() {
  return (
    <section className="bg-aeg-navy py-12">
      <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
          {stats.map(s => (
            <div key={s.label} className="text-center border-r border-white/10 last:border-0">
              <AnimCounter value={s.value} suffix={s.suffix} />
              <p className="text-white/50 text-xs mt-2 font-body uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
