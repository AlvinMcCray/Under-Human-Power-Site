import React from 'react';
import { Section, Divider } from './components/Section';
import { Heading, Paragraph, Subtext } from './components/Typography';
import { ProjectItem } from './types';

const projects: ProjectItem[] = [
  { year: '2023', title: 'The Silent Walk', description: 'Crossing the highlands without recorded audio.' },
  { year: '2022', title: 'Shelter I', description: 'A cabin built using only hand tools.' },
  { year: '2021', title: 'Analog Correspondence', description: 'A year of letters, no digital messages.' },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper selection:bg-stone-200">
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Top Subtext */}
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-accent uppercase mb-12 md:mb-16 border-b border-accent/20 pb-4 inline-block">
            From the Mexican border to the Arctic Ocean
          </p>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-24">
            {/* Left Column: Title */}
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-ink tracking-tight shrink-0">
              Under<br />
              Human<br />
              Power.
            </h1>

            {/* Right Column: Image and Quote */}
            <div className="flex flex-col gap-10 max-w-lg lg:pt-4">
               {/* Image Container */}
              <div className="aspect-[4/3] bg-stone-200 relative overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-700 shadow-sm">
                <img 
                  src="darrell-kayak.jpg" 
                  alt="Darrell J. Gardner in his kayak" 
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="border-l-2 border-accent/30 pl-6 md:pl-8 py-2">
                <p className="font-serif italic text-xl md:text-2xl text-stone-600 leading-relaxed">
                  "Life has taught me the importance of balancing my innermost dreams with daily service to community and Mother Earth."
                  <span className="block mt-4 text-sm font-sans tracking-widest uppercase text-accent not-italic">~ Darrell J. Gardner</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section>
        <Subtext>The Quest</Subtext>
        <Paragraph>
          As a registered nurse, I am reminded daily of life’s brevity.  Patients have often shared with me their regrets of dreams unrealized…that life without balance has a steep price.  This awareness became personalized when my father passed away early in his retirement. His death brought into focus my life-long dream…a single expedition that would challenge me to use all my outdoor experiences. Being in nature allows me to reach that innermost point of balance by becoming part of its rhythm. Traveling Under Human Power rejuvenates my soul and gives me a perspective like no other.
        </Paragraph>
        <Paragraph>
          In 2008, I will sea kayak the entire Inside Passage, 1,400 miles.  This is just one stage of the expedition where hiking, kayaking, canoeing, cross-country skiing and snowshoeing will propel me over 5,700 contiguous miles, Under Human Power, from Mexico to the Arctic Ocean. That is the Quest!
        </Paragraph>
      </Section>

      <div className="flex justify-center">
        <span className="font-serif italic text-accent text-2xl">§</span>
      </div>

      {/* Timeline Section */}
      <Section>
        <Subtext>Timeline</Subtext>
        <div className="space-y-16 mt-12">
          
          {/* Stage I */}
          <div>
            <h3 className="font-serif text-2xl text-ink mb-2">Stage I — The Pacific Crest Trail</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">CA, OR & WA • 2,650 miles • 2004 & 2005</p>
            <p className="font-sans font-light text-stone-700 leading-relaxed max-w-prose">
              I hiked solo the entire length of the United States from Mexico to Canada. Taking over five million steps.
            </p>
          </div>

          {/* Stage II */}
          <div>
            <h3 className="font-serif text-2xl text-ink mb-2">Stage II — "The Bridge"</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">WA • 250 miles • 2006</p>
            <p className="font-sans font-light text-stone-700 leading-relaxed max-w-prose">
              I connected the land to the sea via the Pacific Northwest Trail & the Skagit River. Hiking over the snow covered passes of the Northern Cascade Mountains, I followed the summer run off down the Skagit River by canoe into the Puget Sound.
            </p>
          </div>

          {/* Stage III */}
          <div>
            <h3 className="font-serif text-2xl text-ink mb-2">Stage III — The Inside Passage</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">WA, BC & AK • 1,400 miles • 2008-2009</p>
            <p className="font-sans font-light text-stone-700 leading-relaxed max-w-prose">
              Facing one of my most serious challenges, I solo sea kayaked up the Inside Passage from Seattle, WA to Skagway, AK.
            </p>
          </div>

          {/* Stage IV */}
          <div>
            <h3 className="font-serif text-2xl text-ink mb-2">Stage IV — The Yukon River</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">AK, BC & YT • 900 miles • 2010</p>
            <p className="font-sans font-light text-stone-700 leading-relaxed max-w-prose">
              This summer I will access the interior of Alaska by hiking the Chilkoot Trail to the head waters of the Yukon River. Then I will travel by canoe as the Yukon flows NW through northern British Columbia, the Yukon Territory and back into Alaska to its most northern point at Fort Yukon, Alaska.
            </p>
          </div>

          {/* Stage V & VI */}
          <div>
            <h3 className="font-serif text-2xl text-ink mb-2">Stages V & VI — The Brooks Range & Arctic Ocean</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">Alaska • 500 miles • 2011</p>
            <p className="font-sans font-light text-stone-700 leading-relaxed max-w-prose">
              The final push! In the spring, I will snowshoe and cross country ski to the top the Brooks Range near Atigun Pass. In the summer, I will return to traverse the peaks of the Gates of the Arctic NP and connect with a tributary of the Colville River at the village of Anaktuvuk Pass. This tributary is part of the Colville River drainage and flows down the north slope of the Brooks Range to Alaska's Arctic coast. The Colville river meets the Arctic Ocean near Oliktok Point about 40 miles west of Prudhoe Bay.
            </p>
          </div>

        </div>
      </Section>

      {/* Image / Pause Section - Subdued, documentary style placeholder */}
      <div className="w-full px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto aspect-[16/9] bg-stone-100 relative overflow-hidden grayscale contrast-[0.9] brightness-[1.05]">
          <img 
            src="https://picsum.photos/1600/900" 
            alt="A landscape showing a solitary path" 
            className="object-cover w-full h-full opacity-80"
          />
          <div className="absolute inset-0 bg-paper/10 mix-blend-multiply"></div>
        </div>
        <p className="text-center font-sans text-xs text-accent mt-4 tracking-widest uppercase">Fig 1. The unpaved route</p>
      </div>

      {/* Projects Section */}
      <Section>
        <Subtext>Index of Works</Subtext>
        <div className="mt-8">
          {projects.map((project, index) => (
            <div key={index} className="group py-8 border-t border-stone-200 first:border-t-0 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8 hover:bg-stone-50 transition-colors duration-500 -mx-4 px-4">
              <span className="font-sans text-sm text-accent font-medium">{project.year}</span>
              <div className="flex-1">
                <h3 className="font-serif text-xl md:text-2xl text-ink mb-1">{project.title}</h3>
                <p className="font-sans font-light text-stone-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Reflective Section */}
      <Section>
        <Subtext>Reflection</Subtext>
        <Heading>Why this, why now?</Heading>
        <Paragraph>
           We are forgetting how to be tired. Real, physical tiredness is becoming a luxury commodity, simulated in gyms and manufactured in studios.
        </Paragraph>
        <Paragraph>
          This project exists to document the reclaiming of that fatigue. The good tiredness that comes from building, walking, carrying, and repairing. It is an argument for the dignity of manual competence in an automated age.
        </Paragraph>
      </Section>

      {/* About Section */}
      <Section className="bg-stone-100/50 mt-12">
        <div className="md:pl-8 border-l-2 border-stone-300">
          <Subtext>About</Subtext>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink mt-6">
            Maintained by an observer. No metrics are tracked here. No cookies are set. This is a static archive of a living philosophy.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 text-center">
        <p className="font-serif italic text-lg mb-8 text-ink">Under Human Power</p>
        <div className="flex justify-center gap-8 font-sans text-sm tracking-widest uppercase text-accent">
          <a href="#" className="hover:text-ink transition-colors">Contact</a>
          <a href="#" className="hover:text-ink transition-colors">Journal</a>
          <span className="cursor-default">MMXXIV</span>
        </div>
      </footer>
    </div>
  );
};

export default App;