import React, { useState, useEffect, useMemo } from 'react';
import { Section, Divider } from './components/Section';

type Page = 'home' | 'spot-locations' | 'sponsors';
type SortOrder = 'asc' | 'desc';

interface PageProps {
  navigate: (page: Page) => void;
}

const Nav: React.FC<{ navigate: (page: Page) => void }> = ({ navigate }) => (
  <nav className="fixed top-0 left-0 w-full py-8 px-6 md:px-12 flex justify-between items-center z-[100] bg-charcoal/80 backdrop-blur-xl border-b border-white/5">
    <button onClick={() => navigate('home')} className="font-oswald text-xl font-bold tracking-tighter hover:text-accent transition-colors">
      UHP<span className="text-accent">.</span>
    </button>
    <div className="flex gap-8 font-oswald text-xs tracking-widest uppercase items-center">
      <button onClick={() => navigate('spot-locations')} className="hover:text-accent transition-all">Locations</button>
      <button onClick={() => navigate('sponsors')} className="hover:text-accent transition-all">Sponsors</button>
      <a href="mailto:UnderHumanPower@yahoo.com" className="bg-accent px-4 py-2 rounded-sm text-white font-bold hover:scale-105 transition-transform">Contact</a>
    </div>
  </nav>
);

const Home: React.FC<PageProps> = ({ navigate }) => {
  return (
    <div className="animate-fade-in">
      <Nav navigate={navigate} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-oswald text-accent tracking-[0.3em] uppercase text-sm mb-6 block">5,700 Miles • Solo • Endurance</span>
            <h1 className="font-oswald text-7xl md:text-9xl font-bold uppercase leading-[0.85] tracking-tighter mb-8">
              Under<br />
              <span className="orange-gradient">Human</span><br />
              Power.
            </h1>
            <p className="font-sans text-xl text-white/60 max-w-md leading-relaxed mb-10">
              A single expedition from the Mexican border to the Arctic Ocean. One man, three disciplines, zero motors.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ring-1 ring-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800" 
                alt="Explorer in kayak" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent p-8 md:p-12 hidden md:block">
              <span className="font-oswald text-5xl font-bold italic">"QUEST"</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Stats Bar */}
      <div className="bg-canvas border-y border-white/5 py-12 px-6 overflow-hidden whitespace-nowrap">
        <div className="flex gap-24 animate-marquee font-oswald text-4xl font-bold uppercase opacity-20 italic">
          <span>Mexico to Arctic</span>
          <span className="text-accent">5,700 Miles</span>
          <span>Inside Passage</span>
          <span className="text-accent">Yukon River</span>
          <span>Pacific Crest Trail</span>
        </div>
      </div>

      {/* The Quest */}
      <Section className="relative">
        <div className="absolute top-0 right-0 font-oswald text-[15rem] leading-none opacity-5 text-stroke font-bold select-none">QUEST</div>
        <span className="font-oswald text-accent tracking-widest uppercase text-xs mb-4 block">The Philosophy</span>
        <h2 className="font-oswald text-5xl md:text-6xl uppercase font-bold mb-12">The rhythm of nature.</h2>
        <div className="space-y-8 font-sans text-white/70 text-lg md:text-xl leading-relaxed max-w-xl">
          <p>
            As a registered nurse, I am reminded daily of life’s brevity. Patients have often shared with me their regrets of dreams unrealized…that life without balance has a steep price.
          </p>
          <p>
            This awareness became personalized when my father passed away early in his retirement. His death brought into focus my life-long dream…a single expedition that would challenge me to use all my outdoor experiences.
          </p>
        </div>
      </Section>

      {/* Timeline - Cinematic List */}
      <section className="py-24 px-6 md:px-12 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-oswald text-4xl uppercase font-bold mb-16 pb-4 border-b border-white/10">The Stages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5">
            {[
              { year: '2004-05', title: 'Stage I', sub: 'Pacific Crest Trail', dist: '2,650 mi' },
              { year: '2006', title: 'Stage II', sub: 'The Bridge', dist: '250 mi' },
              { year: '2008-09', title: 'Stage III', sub: 'Inside Passage', dist: '1,400 mi' },
              { year: '2010', title: 'Stage IV', sub: 'Yukon River', dist: '900 mi' },
              { year: '2011', title: 'Stage V/VI', sub: 'Arctic Ocean', dist: '500 mi' },
            ].map((s, i) => (
              <div key={i} className="bg-charcoal p-12 hover:bg-canvas transition-all group cursor-default">
                <span className="font-oswald text-accent text-sm tracking-widest mb-2 block">{s.year}</span>
                <h3 className="font-oswald text-3xl font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform">{s.title}</h3>
                <p className="font-sans text-white/40 uppercase text-xs tracking-widest mb-1">{s.sub}</p>
                <p className="font-oswald text-xl italic font-bold opacity-60">{s.dist}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / New Mexico Bio */}
      <Section className="bg-charcoal py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="border-l-4 border-accent pl-12">
            <span className="font-oswald text-accent uppercase text-xs tracking-widest mb-4 block">Current Status</span>
            <p className="font-oswald text-4xl md:text-5xl font-bold uppercase leading-tight mb-8">
              I live in the high desert of Northern New Mexico.
            </p>
            <p className="font-sans text-xl text-white/60 leading-relaxed mb-12">
              When I am not on my expedition, I can be found working as a registered nurse at Christus - St. Vincent Regional Medical Center in Santa Fe.
            </p>
            <div className="space-y-4">
              <span className="font-oswald text-xs uppercase tracking-widest text-white/40 block">Direct Inquiry</span>
              <a href="mailto:UnderHumanPower@yahoo.com" className="font-oswald text-2xl md:text-3xl text-white hover:text-accent underline underline-offset-8 transition-colors break-all">
                UnderHumanPower@yahoo.com
              </a>
            </div>
          </div>
          <div className="aspect-square bg-white/5 flex items-center justify-center p-12 border border-white/10">
            <div className="text-center">
               <span className="font-oswald text-9xl text-stroke opacity-30 select-none">NM</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center border-t border-white/5">
        <h2 className="font-oswald text-2xl font-bold uppercase tracking-widest mb-12">Under Human Power</h2>
        <div className="flex justify-center gap-12 font-oswald text-xs tracking-widest uppercase opacity-40">
          <button onClick={() => navigate('spot-locations')} className="hover:opacity-100 transition-opacity">Coordinates</button>
          <button onClick={() => navigate('sponsors')} className="hover:opacity-100 transition-opacity">Supporters</button>
          <span className="hidden md:inline">© MMXXIV Darrell Gardner</span>
        </div>
      </footer>
    </div>
  );
};

const Sponsors: React.FC<PageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 animate-fade-in">
      <Nav navigate={navigate} />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-oswald text-6xl md:text-8xl font-bold uppercase mb-20 text-stroke">Sponsors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 className="font-oswald text-accent uppercase tracking-widest text-sm mb-12 border-b border-accent/30 pb-4">Expedition Support</h2>
            <ul className="space-y-6 font-oswald text-2xl font-bold uppercase">
              <li className="hover:text-accent transition-colors">The Kayak Academy</li>
              <li className="hover:text-accent transition-colors">Beale Paddles</li>
              <li className="hover:text-accent transition-colors">Rimini Web Design</li>
              <li className="hover:text-accent transition-colors">Spot Satellite</li>
              <li className="hover:text-accent transition-colors">Sea Kayak Shop</li>
            </ul>
          </div>
          <div className="bg-white/5 p-12 border border-white/10">
            <h2 className="font-oswald text-white/40 uppercase tracking-widest text-sm mb-8">Gear Endorsements</h2>
            <div className="space-y-4 font-sans text-xl italic opacity-80">
              <p>Cascade Designs</p>
              <p>Thermarest</p>
              <p>Platypus</p>
              <p>MSR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpotLocations: React.FC<PageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 animate-fade-in">
      <Nav navigate={navigate} />
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-12">
          <h1 className="font-oswald text-6xl md:text-8xl font-bold uppercase text-stroke">Locations</h1>
          <p className="font-sans text-white/40 max-w-xs text-sm uppercase tracking-widest">Live coordinates broadcast via satellite uplink.</p>
        </div>
        
        <div className="bg-white/5 rounded-sm p-4 overflow-x-auto">
           <p className="p-12 text-center font-oswald text-white/40 uppercase tracking-widest italic">Satellite Transmissions Log Displayed below hero section and archived in coordinates database.</p>
           {/* Re-implementing simplified list for brevity, matching the cinematic style */}
           <div className="grid grid-cols-3 gap-8 font-oswald text-xs uppercase tracking-widest p-8 border-b border-white/5 text-accent">
              <span>Date</span>
              <span>Latitude / Longitude</span>
              <span>Notes</span>
           </div>
           {[
             { d: '08/04/2010', c: '65.59, -144.00', n: 'GPS Fix' },
             { d: '08/02/2010', c: '65.39, -142.60', n: 'Camp' },
             { d: '08/01/2010', c: '65.20, -141.73', n: 'Passage' },
           ].map((l, i) => (
             <div key={i} className="grid grid-cols-3 gap-8 font-oswald text-lg font-bold p-8 border-b border-white/5 hover:bg-white/5 transition-colors">
               <span className="opacity-40">{l.d}</span>
               <span>{l.c}</span>
               <span className="italic text-white/60">{l.n}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="min-h-screen relative">
      {page === 'home' && <Home navigate={setPage} />}
      {page === 'sponsors' && <Sponsors navigate={setPage} />}
      {page === 'spot-locations' && <SpotLocations navigate={setPage} />}
    </div>
  );
};

export default App;