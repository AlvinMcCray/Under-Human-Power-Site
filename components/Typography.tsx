import React from 'react';

export const Heading: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h2 className={`font-serif text-3xl md:text-4xl leading-tight mb-8 font-normal text-ink ${className}`}>
    {children}
  </h2>
);

export const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <p className={`font-sans text-lg md:text-xl leading-relaxed text-stone-800 font-light mb-6 ${className}`}>
    {children}
  </p>
);

export const Subtext: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`font-sans text-sm tracking-widest uppercase text-accent mb-4 block ${className}`}>
    {children}
  </span>
);