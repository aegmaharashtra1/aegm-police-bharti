import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import StatsBar         from './components/StatsBar'
import Visitors         from './components/Visitors'
import SuccessStories   from './components/SuccessStories'
import Results          from './components/Results'
import MeritList        from './components/MeritList'
import CentreSelector   from './components/CentreSelector'
import WhyAEG           from './components/WhyAEG'
import Faculty          from './components/Faculty'
import PhysicalTraining from './components/PhysicalTraining'
import Curriculum       from './components/Curriculum'
import JoinProcess      from './components/JoinProcess'
import FAQ              from './components/FAQ'
import MediaPress       from './components/MediaPress'
import Downloads        from './components/Downloads'
import Contact          from './components/Contact'
import StickyMobileBar  from './components/StickyMobileBar'

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Visitors />
        <SuccessStories />
        <Results />
        <MeritList />
        <CentreSelector />
        <WhyAEG />
        <Faculty />
        <PhysicalTraining />
        <Curriculum />
        <JoinProcess />
        <FAQ />
        <MediaPress />
        <Downloads />
        <Contact />
      </main>
      <StickyMobileBar />
    </div>
  )
}
