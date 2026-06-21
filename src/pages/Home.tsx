import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag-to-scroll functionality for the horizontal capabilities strip
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[921px] min-h-[600px] flex items-center overflow-hidden cinematic-grain">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzyK62igKaxoS7HJlOqkiUXBMMFU63_szlNqa542cI1R_DIGxyAwNZ55Roqqs-dykst7s8kqzX3sGvNPYR9iXvAI8l2193hKJbMxg0vQjrDuxMXegt9LR9TzgabTnkAAW835ytJCR1kScTLDPM3bircRyccUeoRQX6jVZiuIxLhN5pXQJH835GcvwOaviBXkqLnCKQ91eBxz5gHsbBigznxDRfj9IFxvVfXKIQR-y8nLZW1PgzCVrnr6yfNrlD8pi3x0neJw5DFtw" 
            alt="Crown Harvest Premium golden wheat field at sunset"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-white">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 leading-tight">
              From the Earth,<br />To Your Table.
            </h1>
            <p className="font-body-lg text-body-lg mb-10 text-surface-variant/90">
              Premium wholesale and retail fresh produce, sourced from the world's finest farms with uncompromising standards for quality and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/products')}
                className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-button text-button hover:bg-secondary-fixed transition-colors cursor-pointer"
              >
                Explore Products
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border-1.5 border-white text-white px-8 py-4 rounded-full font-button text-button hover:bg-white/10 transition-colors border-[1.5px] cursor-pointer"
              >
                Become a Customer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Crown Harvest (Bento Style) */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="p-8 bg-surface-container-low border border-outline-variant/30 rounded-lg group hover:border-secondary/50 transition-colors">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">public</span>
            <h3 className="font-headline-sm text-headline-sm mb-3">Global Sourcing</h3>
            <p className="text-on-surface-variant font-body-md">Partnerships with elite growers across six continents ensure year-round availability.</p>
          </div>
          <div className="p-8 bg-surface-container-low border border-outline-variant/30 rounded-lg group hover:border-secondary/50 transition-colors">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">ac_unit</span>
            <h3 className="font-headline-sm text-headline-sm mb-3">Cold Chain</h3>
            <p className="text-on-surface-variant font-body-md">Advanced temperature-controlled logistics preserving peak freshness from field to dock.</p>
          </div>
          <div className="p-8 bg-surface-container-low border border-outline-variant/30 rounded-lg group hover:border-secondary/50 transition-colors">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">verified</span>
            <h3 className="font-headline-sm text-headline-sm mb-3">Premium Quality</h3>
            <p className="text-on-surface-variant font-body-md">Triple-stage inspection protocols that exceed international food safety standards.</p>
          </div>
          <div className="p-8 bg-surface-container-low border border-outline-variant/30 rounded-lg group hover:border-secondary/50 transition-colors">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">handshake</span>
            <h3 className="font-headline-sm text-headline-sm mb-3">Trusted</h3>
            <p className="text-on-surface-variant font-body-md">A legacy of reliability serving the world's most demanding culinary professionals.</p>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="h-px bg-secondary/30 w-full"></div>
      </div>

      {/* Products Snapshot */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-headline-md text-headline-md">Our Seasonal Harvest</h2>
          <Link to="/products" className="text-secondary font-button text-button border-b border-secondary hover:text-on-secondary-container transition-colors">
            View All Collections
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Fruits */}
          <div className="group cursor-pointer" onClick={() => navigate('/products')}>
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 cinematic-grain">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABdrHjq2u1YH68Ntt4_9OdSgfpgo_qoqIBac_99XdguKmzm1TwoFzEsNfzobQUV1OeRWBrTGLOefv8yZcuPB81PFMatu4PIUI80aT6zY_dsBwpQYb2JkTrdEnuAekAKz6kXsyFsJU2Q8AWoixMeCBbGigGwWq5U5tWbgZs9NSbU6lWQ9PsYghhZpCIIARWdPkAQNfehH3-b_m-I2eikUwTlX3iL6TUMJUGUBkxQsO-g700HJRhuKmRBHoXzYnAMeUR94HyAiAt2qs" 
                alt="Pristine Fruits assortment"
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-2">Pristine Fruits</h3>
            <p className="text-on-surface-variant mb-4">Hand-selected orchards' finest yields.</p>
            <span className="text-secondary font-label-md flex items-center gap-2">
              View Category <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>

          {/* Vegetables */}
          <div className="group cursor-pointer" onClick={() => navigate('/products')}>
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 cinematic-grain">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXVoR0RDHK1rOesH00M6dhfppuWgAGBpLayZ8FOWeVMMAqy5ROM_8DeAvbkwTJ9b_rcf06Wpb57zTqg95JUgA2Hp0378dTYmlXopAvvrX-FXmAsAlNADSyfQKtmHD_i5Mcx4teBisrEdaM_47i4heJQ2nIJQ8EiGWNBSsrbayb7fEpYEIz2VA0kgOS9luFZDTk2wn2T3wBzTMZjK_gRKd0Tdl0sMFmF87FyjFa8CG3M6qLuPJxNym3_EltViQu72sDKOJGJvKDpcs" 
                alt="Heritage Vegetables assortments"
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-2">Heritage Vegetables</h3>
            <p className="text-on-surface-variant mb-4">Rare varieties grown for exceptional flavor.</p>
            <span className="text-secondary font-label-md flex items-center gap-2">
              View Category <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>

          {/* Organic */}
          <div className="group cursor-pointer" onClick={() => navigate('/products')}>
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 cinematic-grain">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMowOyvA2lqQB7zF1wq_Q0GvCq4VTuiXjAjuUdbLQEmKYFKaocAyoGulj0weMPz-NujQfBEc3ambUx7ApsBYtSVETjXqZdvdHKfdU802ia-aXMJVfVKtlCcXsX1kT1tRpSAT2wgnenliJBkz1blHB5vgVZvAD5NPiuIuugsf04egcvN0Df-JnR4YQG9S_XIm9fwcXVQH_ryT9cyvno0zvyaSrf5v8AXdmoGoK9GX7syshW-QANmnFbCotVKRl67LVwagJm3gM5D0I" 
                alt="Organic Essentials in sunlit greenhouse"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-headline-sm text-headline-sm">Organic Essentials</h3>
              <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-bold">
                Certified
              </span>
            </div>
            <p className="text-on-surface-variant mb-4">Chemical-free produce for discerning buyers.</p>
            <span className="text-secondary font-label-md flex items-center gap-2">
              View Category <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>
        </div>
      </section>

      {/* Capabilities Horizontal Scroll Slider */}
      <section className="bg-surface-container py-16 overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-10">
          <h3 className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">Our Capabilities</h3>
          <p className="text-xs text-on-surface-variant/60 mt-1 hidden md:block">Click and drag to scroll capability cards</p>
        </div>
        
        <div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-gutter overflow-x-auto hide-scrollbar px-margin-mobile md:px-margin-desktop pb-8 select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {[
            { icon: 'shopping_cart', title: 'Procurement', desc: 'Global sourcing networks and supply chain management.' },
            { icon: 'local_shipping', title: 'Distribution', desc: 'Efficient regional and international shipping routes.' },
            { icon: 'warehouse', title: 'Warehousing', desc: 'State-of-the-art climate controlled storage.' },
            { icon: 'inventory_2', title: 'Packaging', desc: 'Eco-friendly and protective retail packaging.' },
            { icon: 'restart_alt', title: 'Repacking', desc: 'Custom sorting and repacking for specific retailers.' },
            { icon: 'campaign', title: 'Marketing Support', desc: 'Brand activation and POS materials for partners.' },
          ].map((cap, i) => (
            <div 
              key={i} 
              className="flex-none w-72 p-8 bg-surface border border-outline-variant/20 rounded-lg shadow-sm hover:border-secondary/40 transition-colors"
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-4">{cap.icon}</span>
              <h4 className="font-headline-sm text-headline-sm mb-2">{cap.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-headline-md text-headline-md mb-8">Nurturing a Legacy of Quality Since 1984</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              Crown Harvest began as a family-run orchard with a single mission: to redefine what it means to provide "fresh" produce. Today, we stand as a global leader in the agricultural sector, bridging the gap between small-scale excellence and large-scale demand.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed">
              Our commitment to heritage techniques coupled with modern logistics ensures that every piece of fruit and every vegetable that bears the Crown Harvest seal is a testament to our dedication to the earth.
            </p>
            <button 
              onClick={() => navigate('/about')}
              className="border-b-2 border-secondary text-secondary pb-1 font-button text-button hover:text-on-secondary-container transition-colors cursor-pointer"
            >
              Discover Our Story
            </button>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square rounded-lg overflow-hidden cinematic-grain shadow-xl">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQT1ANqKjigfu7AESSflYB4I4s_dymMMccfR3ACoqnTy7sLEhUfAynsw5s4-dIfuE-WUOctG_LLAe6cP0y9UCCsbcoXayP4WrY_uQiQ3SeILRIRQYhQ2lTcfMMcscJJ3uSQpTnungGcETXkY3HX4Fmw_diO5ZkomsyFdxI0i5KpGFw5sPRsPl2udKQuH5EJ2LgvZWMMWytXWM1iBusEPunhI2Q5Xozd8WWk-_4fhLRJcTnIAz3AxyIlsW5Pn7sQy3BtTfvyuAFenk" 
                alt="Artisan farmer inspecting crop yield"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 -z-10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Sustainability Band */}
      <section className="bg-primary-container text-white py-section-gap-mobile md:py-section-gap-desktop overflow-hidden relative">
        <div className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-on-primary-container/20 border border-on-primary-container/30 rounded-full font-label-md text-label-md text-primary-fixed mb-6">
            Sustainable Growth
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-8">Growing Responsibly</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-12">
            <div>
              <div className="text-secondary-fixed text-4xl font-bold mb-2">90%</div>
              <p className="font-label-md opacity-80 uppercase tracking-widest text-xs">Water Reclaimed</p>
            </div>
            <div>
              <div className="text-secondary-fixed text-4xl font-bold mb-2">100%</div>
              <p className="font-label-md opacity-80 uppercase tracking-widest text-xs">Renewable Power</p>
            </div>
            <div>
              <div className="text-secondary-fixed text-4xl font-bold mb-2">0%</div>
              <p className="font-label-md opacity-80 uppercase tracking-widest text-xs">Pesticide Residue</p>
            </div>
            <div>
              <div className="text-secondary-fixed text-4xl font-bold mb-2">15k</div>
              <p className="font-label-md opacity-80 uppercase tracking-widest text-xs">Acres Protected</p>
            </div>
          </div>
          
          <p className="max-w-3xl mx-auto font-body-lg text-on-primary-container leading-relaxed">
            We believe that premium produce shouldn't cost the earth. Through innovative regenerative farming and precision logistics, we reduce our carbon footprint while enriching the soil for future generations. Our goal is to leave the land better than we found it.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="font-headline-md text-headline-md text-center mb-16">The Verdict of the Culinary Elite</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              quote: "The consistency of the produce from Crown Harvest is unmatched. For a Michelin-starred kitchen, there is no alternative for quality.",
              author: "Julian Vasseur",
              title: "Executive Chef, L'Étoile",
            },
            {
              quote: "Their cold chain reliability has fundamentally improved our waste reduction metrics. Their service is as premium as their produce.",
              author: "Sarah Jenkins",
              title: "Supply Director, FreshMarket Retail",
            },
            {
              quote: "As a boutique distributor, we need partners who understand artisanal quality. Crown Harvest delivers exactly that, every single time.",
              author: "Marcus Thorne",
              title: "Founder, Thorne & Co. Wholesalers",
            },
          ].map((t, idx) => (
            <div key={idx} className="p-10 bg-surface-container-low rounded-lg border border-outline-variant/20 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex text-secondary mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-md text-on-surface mb-8 italic leading-relaxed">"{t.quote}"</p>
              </div>
              <div>
                <p className="font-bold text-on-surface">{t.author}</p>
                <p className="text-sm text-on-surface-variant">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-surface-variant py-8 border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-12">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">phone_in_talk</span>
              <span className="font-label-md text-on-surface font-medium">+1 (800) CROWN-H</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <span className="font-label-md text-on-surface font-medium">partnerships@crownharvest.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              <span className="font-label-md text-on-surface font-medium">London • Singapore • New York</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-primary text-white px-10 py-3 rounded-full font-button text-button hover:bg-on-surface transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};
