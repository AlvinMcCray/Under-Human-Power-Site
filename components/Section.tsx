import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-32 md:py-56 px-6 md:px-12 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const Divider: React.FC = () => (
  <div className="w-24 h-px bg-accent mx-auto my-24" />
);