import { ArrowRight, Shield, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-aeg-navy overflow-hidden pt-16">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Glow blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-aeg-orange/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-pad relative z-10 max-w-6xl">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 border border-aeg-orange/40 bg-aeg-orange/10 px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-aeg-orange animate-pulse" />
          <span className="text-aeg-orange text-xs font-semibold uppercase tracking-[0.15em]">
            Police Bharti · IBPS · Competitive Exams · Maharashtra
          </span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6">
          Maharashtra's<br />
          Most <span className="text-aeg-orange">Trusted</span><br />
          Coaching Centre.
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-10 font-body font-light leading-relaxed">
          6,180+ students in the merit list. 5,489 selected across 7 districts.
          Your preparation — structured, proven, and result-driven.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          <a href="#meritlist" className="btn-primary text-sm px-8 py-4">
            Find Your Name in Merit List <ArrowRight size={16} />
          </a>
          <a href="#centres" className="btn-outline text-sm px-8 py-4">
            Select Your Centre
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap gap-4">
          {[
            { icon: Users,     val: '6,180+',  label: 'In Merit List' },
            { icon: TrendingUp, val: '5,489',  label: 'Students Selected' },
            { icon: Shield,    val: '78%',      label: 'Pass Rate' },
          ].map(({ icon: Icon, val, label }) => (
            <div key={label} className="flex items-center gap-3 bg-white/8 border border-white/10 px-5 py-3">
              <Icon size={18} className="text-aeg-orange" />
              <div>
                <div className="text-white font-heading font-bold text-lg leading-none">{val}</div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom clip */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
    </section>
  )
}
