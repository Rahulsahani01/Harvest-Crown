import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const observerRef = useRef<IntersectionObserver | null>(null);

  const services: ServiceBlock[] = [
    {
      num: '01',
      title: 'Procurement',
      desc: "Our specialist buyers negotiate directly with farm gates, ensuring price stability and first-pick quality for every seasonal cycle. We manage the complexity so you don't have to.",
      metricLabel: 'METRIC',
      metricVal: '98% Fulfillment Rate',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLSC5kfifz6Er8rUmwHMlFm46vaV2KsUSeNy5W381losNdWDsdW-jTie7xdWSF8MKYehB9osuV2rjxjc_O6ZiDJcOJNU6iQQpkXef2ieP-BBg_u0sGBYcf3Sta3oe4UrSEJKYa_v6uB6lnXIE077yGOrDSLdlJul_MXEYlEBketh2skGlWedMxnCpCOvqsDWesamaa11ilnPSSmiQ97BlSCLTv9NQXy1F9A8BKyFMBbCs2P08_hlO3udXIRCoos4SydMcxX7wUxK0',
      alt: 'Fresh harvest selection',
    },
    {
      num: '02',
      title: 'Global Sourcing',
      desc: 'Accessing exotic and staple produce from the world’s most fertile regions. We maintain strict ethical standards and provenance tracking across five continents.',
      metricLabel: 'REACH',
      metricVal: '30+ Countries Sourced',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO0TL95Kud-bKFJ1UbLfopqDxXuEyqVrgjLsXb7gMkimIZOdZX1MWqIp85FeF1VGvogyVkN7wmOkH-f7Wnd2Q6v9r5JfLjhEQwx_w1C3C1NLr_S-aj1ejm0qVcbHHEqMXHRLeCDgt3dlhlpiF6Kj5ERCAOepMpowjrAjWOiyFrYXfJ7Cf2xRTT7LnyHQuXUZRSTPhYby0tZZKY16y8m6tdLFt2iDW62fsuomIIy8p1KB25hicPK15CVaFHlvHKnUwL2HOwhJHU49Q',
      alt: 'Rolling citrus groves',
    },
    {
      num: '03',
      title: 'Distribution',
      desc: 'Last-mile excellence delivered via our dedicated fleet. We guarantee morning-fresh arrivals for retail shelves and culinary kitchens across the metropolitan region.',
      metricLabel: 'SPEED',
      metricVal: '24hr Delivery Turnaround',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8Gm4W-4ZvshG7iJ0UhNP2PF9e2j0Tzq4KzRcI23d7vQ8LijB0JmIkmrdvbYtZ55HBXTN5IOwGn1TpaWTYDXf7hbP_hElT4lslxi_8miAhYNH6BTxdcPztXVqw-SPKh84xy4GwLMAuY4hm4bGbu00XX5zs0_Q1UsIKXYJB3O5veu5UVsFMoGwhz-1QBGjZ3ryTGVw6U4nwJrfdNwRjVCvIs8lamRMOnMWspExnOIyMOk1bnbOwwYbYfoW2WeIYffa0WOF-iN_LJU8',
      alt: 'Logistics fleet loading dock',
    },
    {
      num: '04',
      title: 'Warehousing',
      desc: 'State-of-the-art climate-controlled facilities. Our storage solutions are designed to preserve the life and nutrient density of every delicate harvest.',
      metricLabel: 'CAPACITY',
      metricVal: '500k Sq Ft Storage',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi2xzI4ZxB48ZWyqhWujnnswB6OEjD00DBmtkd8Jmf1lwKrY1Fti5GUPStameXAdsPU6JsXDHvsLZxJl-qGehbZUfV_ApDIcbkVY3cdxJGRcxmhvZGZ8nDdfBQiujXg96PTopWGecd2blJ44j5MAyoPnKqK5ykdK52FUroJJcLFIody3OMdLZp_NC63HxPHkOwI5qoHmItD3xF6zYIZirc2DGwesltuZ-AIQkUmtHvaYy16mg3U6k0qV6_U7McfgHHqjJx0vUF29Y',
      alt: 'Clean organized warehouse',
    },
    {
      num: '05',
      title: 'Cold Chain',
      desc: 'Uninterrupted thermal protection from farm to fork. Our real-time monitoring sensors ensure that the temperature never deviates by more than one degree.',
      metricLabel: 'ACCURACY',
      metricVal: '+/- 0.5°C Temp Control',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0X-CUs8kDMwnUzHzrhoHhxEjN0ghXD5RGO08H4IqvZEV2nsWjX44_RRkkXOFCITp6wIE9xt-5t0vmOwu_Z4aWGR02xWwFtSzpzP_emT3mXwoxqMdwXsvsoHrzoodjcJIL7E1G2okYn8b4cbtw6lIOfts7D5xcnXf0taoshE4HnUKNPM09jnNeBwAYSWOl2kvUTDADw7XSUjXHssady98Ki4uXusewrau-VBe5uQfxm9OilP4ea7uj0pvDarj_Gz2f_72h3ajeUAo',
      alt: 'Macro crop freeze control',
    },
    {
      num: '06',
      title: 'Packaging',
      desc: 'Eco-conscious, bespoke packaging solutions that enhance shelf-appeal while protecting the integrity of organic produce.',
      metricLabel: 'SUSTAINABILITY',
      metricVal: '100% Recyclable Range',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBRoVTyfG-4HFmhQgVOaePKHX89iX7sjI1Gd2PTC4zoBAEOA8dTEBV4mDzNmbsV0_Nq0qSzYN1Jd1veD6hdm0z0SO_bSIPOPxiaC1Pe91vObWa4SSPrWIn_XO_9g_XBv7BQQ35Z8YpXf0LJ2-9EjYwI1a8yjflEWMy88tByg3AujzErYLm1fQJjwU3jmIOTkaHRjOYqsVc5xYGs1hyJItvOY4fbvCSjLuV4LoUBuhV_OcNvgEccV2HpdJZ_Y_tp9gpHILyVALDU6c',
      alt: 'Artisanal paper packaging',
    },
    {
      num: '07',
      title: 'Marketing',
      desc: 'We don’t just supply; we help you sell. Leverage our data-driven insights and premium branding assets to connect with your customers.',
      metricLabel: 'GROWTH',
      metricVal: '15% Avg Sales Uplift',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ5rmss7gGXYgo6Z2t5wiHdu8ZvVSbI9DAr3BFG9ExjH8VOwQHW6y-u78ST2tuupWZ1Z2u_zUFeVwo8N8nyK3QOBsaxHlZ1hPAujKVgYn2LWKpMtGW4vSgY5OkA7bpTcroLGKmZIuX06bovyELOACP7KsJNs0HkKzBWlDatVqV647Kdwg8cD1wGxAAhZsZ4839YtMRyqEzJrMJ0KwQ6ZD4W_InVAiSlmZktyoEeQ92ZrsamQ3mD5fHWkKj5xinl1kdrwjr-SncYCc',
      alt: 'High end retail display',
    },
    {
      num: '08',
      title: 'Customer Service',
      desc: 'A dedicated account manager for every partner. We pride ourselves on proactive communication and rapid problem resolution.',
      metricLabel: 'SUPPORT',
      metricVal: '24/7 Priority Support',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqT_kXG-Y4zgLML4xd6GWAUc2oVkJPElsWQ_kBC2atcG7e8fvWQpgdiYM4QIp2SgHoyW4ISNgIvwyK2PGJ1WgCIPMF_IH7TPA3_-pE1eUWly1-W_J0kdyVSd4ffU2Gh5Cppf_Ztlmy7ik2Sjwecn-_EHr2__SdYT5cTQDG0Wt1Fpodqiu4puWIojGEVrPjfCNPqf_YQUkrqPRDBtf7hQU7eAcUXo9eZKz-Lu8CnZnHCYDGtN9UtdR3SGVX0vvKKMUXdhiORaf5pgk',
      alt: 'Account support manager',
    },
  ];

  useEffect(() => {
    // Setup intersection observer for scroll reveals
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="py-8 md:py-16">
      {/* Hero Header */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-16">
        <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-4 block">Our Operations</span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 text-primary leading-tight">What We Do</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          End-to-end produce solutions for businesses of every size. We bridge the gap between global growers and local markets through artisanal precision.
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
              className={`px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center scroll-reveal transition-all duration-1000 opacity-0 translate-y-10 ${
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-button text-button hover:bg-secondary-fixed transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Become a Customer
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-[1.5px] border-outline text-white hover:bg-white/10 px-8 py-4 rounded-full font-button text-button transition-all active:scale-95 cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
