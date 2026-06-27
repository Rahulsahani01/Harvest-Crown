import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

interface Milestone {
  year: string;
  title: string;
  desc: string;
}

export const About: React.FC = () => {
  const navigate = useNavigate();
  const mainRef = useReveal<HTMLDivElement>('.reveal-target');
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones: Milestone[] = [
    { 
      year: '2025', 
      title: 'The Foundation', 
      desc: 'Crown Harvest is founded with our primary Ontario warehouse, establishing a transparent supply chain for Canadian produce.' 
    },
    { 
      year: '2026', 
      title: 'Coast-to-Coast Logistics', 
      desc: 'Expanding our refrigerated fleet and logistics partnerships to deliver fresh fruits and vegetables nationwide to Canadian retailers.' 
    },
    { 
      year: '2027', 
      title: 'Sustainability Leadership', 
      desc: 'Partnering with local farmers across all provinces to implement climate-neutral packaging and sustainable growing practices.' 
    }
  ];

  return (
    <div ref={mainRef} className="py-8 md:py-16">
      {/* Hero Section */}
      <section className="reveal-target px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-16 relative">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-4">Canada's Produce Partner</span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">Our Story</h1>
        <p className="font-headline-sm text-headline-sm text-on-surface-variant max-w-2xl mx-auto italic font-medium">
          "From Canadian Farms to Your Stores"
        </p>
      </section>

      {/* Brand Story Section */}
      <section className="reveal-target px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16 items-center">
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-4 bg-secondary/10 rounded-lg -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              loading="lazy"
              alt="Heritage Landscape golden wheat field" 
              className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
              src="/assets/about-heritage-landscape.jpg" 
            />
          </div>
          <div className="lg:col-span-6 editorial-border pl-8 md:pl-12">
            <h2 className="font-headline-md text-headline-md text-primary mb-8 font-bold">Our Story</h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Founded in 2025, our mission is to simplify how grocery chains and foodservice buyers get fresh produce. We believe in supporting local agriculture and ensuring every order meets strict quality standards.
              </p>
              <p>
                From our Ontario warehouse we deliver to retailers coast-to-coast, offering single-source transparency.
              </p>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => navigate('/products')}
                className="bg-secondary text-white px-8 py-4 rounded-full font-button text-button transition-transform duration-[200ms] [transition-timing-function:var(--ease-micro)] hover:bg-on-secondary-fixed hover:-translate-y-[2px] active:scale-[0.97] cursor-pointer inline-flex items-center gap-2"
              >
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values Section */}
      <section className="reveal-target bg-surface-container py-16 md:py-24 mb-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Mission */}
            <div className="bg-surface p-8 md:p-10 rounded-lg border border-outline-variant/30 hover:border-secondary transition-colors group">
              <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">eco</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4 font-bold">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed font-body-md">
                To simplify fresh produce sourcing for Canadian grocery chains and foodservice buyers through a transparent, quality-first supply chain.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-surface p-8 md:p-10 rounded-lg border border-outline-variant/30 hover:border-secondary transition-colors group">
              <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">visibility</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4 font-bold">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed font-body-md">
                To be Canada's leading fresh produce partner, recognized for our commitment to single-source transparency and sustainable growth.
              </p>
            </div>
            {/* Values */}
            <div className="bg-surface p-8 md:p-10 rounded-lg border border-outline-variant/30 hover:border-secondary transition-colors group">
              <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">verified_user</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4 font-bold">Our Values</h3>
              <p className="text-on-surface-variant leading-relaxed font-body-md">
                Integrity in every delivery, supporting local Canadian agriculture, and strict dedication to food safety compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="reveal-target px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
        <h2 className="font-headline-md text-headline-md text-center text-primary mb-12 font-bold">The Evolution of Excellence</h2>
        
        {/* Years selector tab navigation */}
        <div className="max-w-2xl mx-auto flex justify-between border-b border-outline-variant/30 pb-4 mb-10 overflow-x-auto gap-4 hide-scrollbar">
          {milestones.map((m, index) => (
            <button
              key={m.year}
              onClick={() => setActiveMilestone(index)}
              className={`font-headline-sm text-headline-sm px-4 py-2 border-b-2 transition-all cursor-pointer ${
                activeMilestone === index
                  ? 'border-secondary text-secondary font-bold font-headline-sm'
                  : 'border-transparent text-on-surface-variant hover:text-secondary'
              }`}
            >
              {m.year}
            </button>
          ))}
        </div>

        {/* Selected Milestone content view */}
        <div className="max-w-2xl mx-auto bg-surface-container-low border border-outline-variant/30 p-8 md:p-12 rounded-xl transition-all duration-300 transform scale-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
          <span className="font-display-lg text-secondary/15 text-[5rem] font-bold absolute -bottom-4 right-4 select-none leading-none">
            {milestones[activeMilestone].year}
          </span>
          <div className="relative z-10 space-y-4">
            <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
              {milestones[activeMilestone].title}
            </h4>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-lg">
              {milestones[activeMilestone].desc}
            </p>
          </div>
        </div>
      </section>


      {/* Standards & Accreditations */}
      <section className="reveal-target px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-12">
        <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-12 text-xs font-bold">
          Our Standards &amp; Accreditations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl text-on-surface">verified</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Certified Organic</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl text-on-surface">public</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Global Gap</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl text-on-surface">handshake</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Fair Trade</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl text-on-surface">energy_savings_leaf</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Sustainable Ag</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl text-on-surface">workspace_premium</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">ISO 22000</span>
          </div>
        </div>
      </section>
    </div>
  );
};
