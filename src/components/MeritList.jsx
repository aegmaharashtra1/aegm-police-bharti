import { useState, useEffect, useRef } from 'react'
import { Search, ChevronDown, Users, X } from 'lucide-react'

const DISTRICTS = ['Raigad','Thane','Bhandara','Palghar','Wardha','Yeotmal','Gondiya']
const DIST_TOTALS = { Raigad:443, Thane:557, Bhandara:339, Palghar:1524, Wardha:406, Yeotmal:1587, Gondiya:1324 }

export default function MeritList() {
  const [district, setDistrict]   = useState('')
  const [query, setQuery]         = useState('')
  const [data, setData]           = useState([])
  const [loading, setLoading]     = useState(false)
  const [results, setResults]     = useState([])
  const [searched, setSearched]   = useState(false)
  const cache = useRef({})

  const loadDistrict = async (d) => {
    if (!d) return
    if (cache.current[d]) { setData(cache.current[d]); return }
    setLoading(true)
    try {
      const res = await fetch(`/data/${d.toLowerCase()}.json`)
      const json = await res.json()
      cache.current[d] = json
      setData(json)
    } catch { setData([]) }
    setLoading(false)
  }

  const handleSearch = () => {
    setSearched(true)
    if (!query.trim()) { setResults(data.slice(0, 50)); return }
    const q = query.toLowerCase()
    const found = data.filter(r =>
      r.name?.toLowerCase().includes(q) || r.roll?.includes(q)
    ).slice(0, 100)
    setResults(found)
  }

  const handleDistrictChange = (d) => {
    setDistrict(d); setResults([]); setSearched(false); setQuery('')
    loadDistrict(d)
  }

  const clear = () => { setQuery(''); setResults([]); setSearched(false) }

  return (
    <section id="meritlist" className="section-pad bg-aeg-navy">
      <div className="text-center mb-10">
        <span className="tag">Official Data</span>
        <h2 className="section-title mt-4 text-white">Check Your Name</h2>
        <span className="accent-bar mx-auto" />
        <p className="text-white/60 max-w-xl mx-auto text-base">
          Search the official merit list by your name or roll number. Select your district first.
        </p>
      </div>

      {/* District cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
        {DISTRICTS.map(d => (
          <button key={d} onClick={() => handleDistrictChange(d)}
            className={`p-3 text-center border transition-all ${district === d
              ? 'bg-aeg-orange border-aeg-orange text-white'
              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/30'}`}>
            <p className="font-heading font-bold text-sm">{d}</p>
            <p className="text-xs mt-0.5 opacity-70">{DIST_TOTALS[d].toLocaleString('en-IN')} students</p>
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-aeg-muted" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder={district ? `Search in ${district} by name or roll number…` : 'Select a district first…'}
              disabled={!district || loading}
              className="w-full bg-white pl-9 pr-4 py-3 text-sm border border-white/20 focus:outline-none focus:border-aeg-orange text-aeg-dark disabled:opacity-50"
            />
            {query && <button onClick={clear} className="absolute right-3 top-1/2 -translate-y-1/2 text-aeg-muted hover:text-aeg-dark"><X size={14} /></button>}
          </div>
          <button onClick={handleSearch} disabled={!district || loading}
            className="btn-primary px-6 disabled:opacity-40">
            {loading ? 'Loading…' : 'Search'}
          </button>
        </div>
        {!district && <p className="text-white/40 text-xs mt-2 text-center">← Select a district above to enable search</p>}
      </div>

      {/* Results table */}
      {searched && (
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Users size={14} className="text-aeg-orange" />
              <span>{results.length === 0 ? 'No results found' : `${results.length} student${results.length > 1 ? 's' : ''} found in ${district}`}</span>
            </div>
            {results.length === 100 && <span className="text-white/40 text-xs">Showing first 100 — refine your search</span>}
          </div>

          {results.length > 0 && (
            <div className="bg-white overflow-hidden">
              <div className="overflow-x-auto max-h-96 overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="bg-aeg-navy text-white sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">Sr.</th>
                      <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">Roll Number</th>
                      <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">Candidate Name</th>
                      <th className="px-4 py-3 text-right font-semibold text-xs uppercase tracking-wider">Percentile</th>
                      <th className="px-4 py-3 text-center font-semibold text-xs uppercase tracking-wider">District</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r, i) => (
                      <tr key={r.roll + i} className={`border-b border-aeg-border ${i % 2 === 0 ? 'bg-white' : 'bg-aeg-grey'} hover:bg-aeg-orange/5 transition-colors`}>
                        <td className="px-4 py-2.5 text-aeg-muted text-xs">{r.sr}</td>
                        <td className="px-4 py-2.5 font-mono text-xs text-aeg-navy font-semibold">{r.roll}</td>
                        <td className="px-4 py-2.5 font-semibold text-aeg-dark">{r.name}</td>
                        <td className="px-4 py-2.5 text-right font-bold text-aeg-orange">{parseFloat(r.percentile).toFixed(2)}</td>
                        <td className="px-4 py-2.5 text-center"><span className="tag text-xs py-0.5 px-2">{r.district}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {results.length === 0 && (
            <div className="bg-white/5 border border-white/10 p-10 text-center">
              <Search size={32} className="text-white/20 mx-auto mb-3" />
              <p className="text-white/50 text-sm">No students found matching "{query}" in {district}</p>
              <p className="text-white/30 text-xs mt-1">Try searching with a different name or roll number</p>
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-white/60 text-sm mb-4">Found your name? Now select your AEG coaching centre.</p>
        <a href="#centres" className="btn-primary px-8 py-3">Select Your Centre →</a>
      </div>
    </section>
  )
}
