import React from "react";

interface SectionLinkProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLink = ({ children, className = "" }: SectionLinkProps) => {
  return (
    <div
      className={`w-full bg-brand-gold-light/20 py-10 px-4 md:px-8 text-center ${className}`}
    >
      <div className="max-w-4xl mx-auto font-bold text-lg md:text-xl leading-relaxed">
        {children}
      </div>
    </div>
  );
};
