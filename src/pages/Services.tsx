import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

interface ServiceBlock {
  num: string;
  title: string;
  desc: string;
  metricLabel: string;
  metricVal: string;
  img: string;
  alt: string;
}

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const mainRef = useReveal<HTMLDivElement>('.reveal-target');

  const services: ServiceBlock[] = [
    {
      num: '01',
      title: 'Procurement',
      desc: "Our specialist buyers negotiate directly with farm gates, ensuring price stability and first-pick quality for every seasonal cycle. We manage the complexity so you don't have to.",
      metricLabel: 'METRIC',
      metricVal: '98% Fulfilment Rate',
      img: '/assets/services-procurement.jpg',
      alt: 'Fresh harvest selection',
    },
    {
      num: '02',
      title: 'Global Sourcing',
      desc: 'Accessing exotic and staple produce from the world’s most fertile regions. We maintain strict ethical standards and provenance tracking across five continents.',
      metricLabel: 'REACH',
      metricVal: '30+ Countries Sourced',
      img: '/assets/services-global-sourcing.jpg',
      alt: 'Rolling citrus groves',
    },
    {
      num: '03',
      title: 'Distribution',
      desc: 'Last-mile excellence delivered via our dedicated fleet. We guarantee morning-fresh arrivals for retail shelves and culinary kitchens across the metropolitan region.',
      metricLabel: 'SPEED',
      metricVal: '24hr Delivery Turnaround',
      img: '/assets/services-distribution.jpg',
      alt: 'Logistics fleet loading dock',
    },
    {
      num: '04',
      title: 'Warehousing',
      desc: 'State-of-the-art climate-controlled facilities. Our storage solutions are designed to preserve the life and nutrient density of every delicate harvest.',
      metricLabel: 'CAPACITY',
      metricVal: '500k Sq Ft Storage',
      img: '/assets/services-warehousing.jpg',
      alt: 'Clean organized warehouse',
    },
    {
      num: '05',
      title: 'Cold Chain',
      desc: 'Uninterrupted thermal protection from farm to fork. Our real-time monitoring sensors ensure that the temperature never deviates by more than one degree.',
      metricLabel: 'ACCURACY',
      metricVal: '+/- 0.5°C Temp Control',
      img: '/assets/services-cold-chain.jpg',
      alt: 'Macro crop freeze control',
    },
    {
      num: '06',
      title: 'Packaging',
      desc: 'Eco-conscious, bespoke packaging solutions that enhance shelf-appeal while protecting the integrity of organic produce.',
      metricLabel: 'SUSTAINABILITY',
      metricVal: '100% Recyclable Range',
      img: '/assets/services-packaging.jpg',
      alt: 'Artisanal paper packaging',
    },
    {
      num: '07',
      title: 'Marketing',
      desc: 'We don’t just supply; we help you sell. Leverage our data-driven insights and premium branding assets to connect with your customers.',
      metricLabel: 'GROWTH',
      metricVal: '15% Avg Sales Uplift',
      img: '/assets/services-marketing.jpg',
      alt: 'High end retail display',
    },
    {
      num: '08',
      title: 'Customer Service',
      desc: 'A dedicated account manager for every partner. We pride ourselves on proactive communication and rapid problem resolution.',
      metricLabel: 'SUPPORT',
      metricVal: '24/7 Priority Support',
      img: '/assets/services-customer-service.jpg',
      alt: 'Account support manager',
    },
  ];

  return (
    <div ref={mainRef} className="py-8 md:py-16">
      {/* Hero Header */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-16">
        <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-4 block">Our Operations</span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 text-primary leading-tight font-bold">Delivery & Storage</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          We use refrigerated trucks and partners to distribute your order safely across Canada. Our team handles cold-chain logistics so your produce arrives fresh and in compliance with all provincial regulations.
        </p>
        <div className="mt-12 h-px bg-secondary opacity-20 w-32 mx-auto"></div>
      </section>

      {/* Services Alternating Rows */}
      <section className="space-y-16 md:space-y-32 pb-24 overflow-hidden">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={service.num}
              className={`px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center reveal-target ${
                isEven ? '' : 'bg-surface-container-low py-12 md:py-20 rounded-xl'
              }`}
            >
              {/* Image Column */}
              <div 
                className={`aspect-[4/3] rounded-lg overflow-hidden cinematic-grain shadow-md ${
                  isEven ? 'order-1' : 'order-1 md:order-2'
                }`}
              >
                <img 
                  loading="lazy"
                  className="w-full h-full object-cover" 
                  src={service.img} 
                  alt={service.alt} 
                />
              </div>

              {/* Text Column */}
              <div 
                className={`space-y-6 mt-8 md:mt-0 ${
                  isEven ? 'order-2 md:pl-16' : 'order-2 md:order-1 md:pr-16'
                }`}
              >
                <h2 className="font-headline-md text-headline-md text-primary">{service.title}</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-outline-variant/30">
                  <span className="text-4xl md:text-5xl font-display-lg text-secondary opacity-30 select-none">
                    {service.num}
                  </span>
                  <div>
                    <p className="font-label-md text-label-md text-secondary text-xs uppercase tracking-wider mb-1">
                      {service.metricLabel}
                    </p>
                    <p className="font-headline-sm text-headline-sm text-primary">
                      {service.metricVal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Partnership Banner */}
      <section className="bg-primary-container text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 grain-overlay pointer-events-none"></div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 text-secondary-fixed">
            Ready to partner with Crown Harvest?
          </h2>
          <p className="font-body-lg text-body-lg text-surface-variant max-w-xl mx-auto mb-12">
            Join an elite network of buyers and suppliers who prioritize quality, provenance, and operational excellence.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-button text-button hover:bg-secondary-fixed transition-all shadow-lg active:scale-95 cursor-pointer flex items-center gap-2"
            >
              Contact Sales <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
