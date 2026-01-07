import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-24 md:py-40 px-6 md:px-12 ${className}`}>
      <div className="max-w-2xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const Divider: React.FC = () => (
  <div className="w-12 h-px bg-accent mx-auto my-12 opacity-50" />
);