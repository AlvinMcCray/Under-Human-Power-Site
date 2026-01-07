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
                  src="./darrell-kayak.jpg" 
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
        <Subtext>The Core Thesis</Subtext>
        <Heading>We have outsourced our friction.</Heading>
        <Paragraph>
          Modern life is an exercise in the removal of resistance. We scroll instead of walk. We tap instead of make. We have optimized the human element out of our own existence, trading agency for ease, and effort for speed.
        </Paragraph>
        <Paragraph>
          But the texture of life is found in the friction. It is found in the resistance of the material against the hand, the ache of the legs after a long ascent, and the slowness of thoughts allowed to fully form without interruption.
        </Paragraph>
        <Paragraph>
          Under Human Power is not a rejection of technology, but a recalibration of our relationship to it. It is a commitment to doing things the hard way when the hard way implies a deeper engagement with the world.
        </Paragraph>
      </Section>

      <div className="flex justify-center">
        <span className="font-serif italic text-accent text-2xl">§</span>
      </div>

      {/* Definition Section */}
      <Section>
        <Subtext>Definitions</Subtext>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-12">
          <div>
            <h3 className="font-serif text-2xl mb-4 italic">Is</h3>
            <ul className="space-y-4 font-sans font-light text-stone-800">
              <li className="border-b border-stone-200 pb-2">Deliberate action</li>
              <li className="border-b border-stone-200 pb-2">Physical engagement</li>
              <li className="border-b border-stone-200 pb-2">Slow by design</li>
              <li className="border-b border-stone-200 pb-2">Silent observation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4 italic text-stone-500">Is Not</h3>
            <ul className="space-y-4 font-sans font-light text-stone-500">
              <li className="border-b border-stone-100 pb-2">Productivity hacking</li>
              <li className="border-b border-stone-100 pb-2">Digital detoxing</li>
              <li className="border-b border-stone-100 pb-2">Performative asceticism</li>
              <li className="border-b border-stone-100 pb-2">Nostalgia</li>
            </ul>
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