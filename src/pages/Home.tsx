import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import heroImage from '../assets/canadian_harvest_hero.png';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const mainRef = useReveal<HTMLDivElement>('.reveal-target');
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
    requestAnimationFrame(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft = scrollLeft - walk;
      }
    });
  };

  return (
    <div ref={mainRef}>
      {/* Hero Section */}
      <section className="relative h-[921px] min-h-[600px] flex items-center overflow-hidden cinematic-grain">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src={heroImage} 
            alt="Canadian agricultural landscape with fresh fruits and vegetables"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-white">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 leading-tight">
              Canada's Fresh Produce Marketplace
            </h1>
            <p className="font-body-lg text-body-lg mb-10 text-surface-variant/90">
              High-quality fruits and vegetables, sourced directly from Canadian farms and delivered nationwide to grocery chains, retailers, and foodservice businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-button text-button transition-transform duration-[200ms] [transition-timing-function:var(--ease-micro)] hover:bg-secondary-fixed hover:-translate-y-[2px] active:scale-[0.97] cursor-pointer"
              >
                Request a Quote
              </button>
              <button 
                onClick={() => navigate('/products')}
                className="border-1.5 border-white text-white px-8 py-4 rounded-full font-button text-button hover:bg-white/10 transition-colors border-[1.5px] cursor-pointer"
              >
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="reveal-target py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low border-y border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-headline-md text-headline-md mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-left mb-6">
            {/* Step 1 */}
            <div className="relative p-8 bg-surface border border-outline-variant/30 rounded-lg shadow-sm hover:border-secondary/40 transition-colors">
              <span className="absolute top-4 right-6 text-6xl font-display-lg text-secondary/15 select-none font-bold">01</span>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">search</span>
              <h3 className="font-headline-sm text-headline-sm mb-3">Step 1 — Browse Products</h3>
              <p className="text-on-surface-variant font-body-md">
                Explore our selection of bulk produce—everything from apples to zucchini—all sourced in Canada. Check out seasonal specials and fresh picks.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative p-8 bg-surface border border-outline-variant/30 rounded-lg shadow-sm hover:border-secondary/40 transition-colors">
              <span className="absolute top-4 right-6 text-6xl font-display-lg text-secondary/15 select-none font-bold">02</span>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">description</span>
              <h3 className="font-headline-sm text-headline-sm mb-3">Step 2 — Request a Quote</h3>
              <p className="text-on-surface-variant font-body-md">
                Submit a quick request form with your needed quantity and delivery details. We'll respond with a custom quote within 24 hours.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative p-8 bg-surface border border-outline-variant/30 rounded-lg shadow-sm hover:border-secondary/40 transition-colors">
              <span className="absolute top-4 right-6 text-6xl font-display-lg text-secondary/15 select-none font-bold">03</span>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">check_circle</span>
              <h3 className="font-headline-sm text-headline-sm mb-3">Step 3 — Receive and Order</h3>
              <p className="text-on-surface-variant font-body-md">
                Review your quote, then confirm your order online. Our team will coordinate delivery to your location in Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="reveal-target py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h2 className="font-headline-md text-headline-md mb-12">Why Canadian Retailers Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-10 text-left">
          <div className="p-8 bg-surface-container-low border border-outline-variant/30 rounded-lg group hover:border-secondary/50 transition-colors">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">agriculture</span>
            <h3 className="font-headline-sm text-headline-sm mb-3">Canadian-Sourced Produce</h3>
            <p className="text-on-surface-variant font-body-md">Freshly harvested fruits and vegetables from local Canadian farms, ensuring the highest quality and supporting local growers.</p>
          </div>
          <div className="p-8 bg-surface-container-low border border-outline-variant/30 rounded-lg group hover:border-secondary/50 transition-colors">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">local_shipping</span>
            <h3 className="font-headline-sm text-headline-sm mb-3">Nationwide Delivery</h3>
            <p className="text-on-surface-variant font-body-md">Reliable cold-chain logistics distributing fresh orders safely across all provinces, from coast to coast.</p>
          </div>
          <div className="p-8 bg-surface-container-low border border-outline-variant/30 rounded-lg group hover:border-secondary/50 transition-colors">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">verified_user</span>
            <h3 className="font-headline-sm text-headline-sm mb-3">Food Safety Guaranteed</h3>
            <p className="text-on-surface-variant font-body-md">Uncompromising adherence to strict quality standards and safety regulations at every step of our supply chain.</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-secondary text-white px-8 py-4 rounded-full font-button text-button hover:bg-on-secondary-fixed transition-colors cursor-pointer inline-flex items-center gap-2"
        >
          Contact Sales <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </section>

      {/* Gold Divider */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="h-px bg-secondary/30 w-full"></div>
      </div>

      {/* Products Snapshot */}
      <section className="reveal-target py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
      <section className="reveal-target bg-surface-container py-16 overflow-hidden">
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
      <section className="reveal-target py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-headline-md text-headline-md mb-8">Nurturing a Legacy of Quality</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              Crown Harvest was founded with a single mission: to simplify how grocery chains and foodservice buyers get fresh produce. Sourced directly from local Canadian farms, we deliver nationwide with strict quality standards.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed">
              Our commitment to supporting local agriculture and ensuring single-source transparency is at the heart of everything we do. From our Ontario warehouse, we deliver from coast-to-coast.
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
                loading="lazy"
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
      <section className="reveal-target bg-primary-container text-white py-section-gap-mobile md:py-section-gap-desktop overflow-hidden relative">
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


      {/* Contact Strip */}
      <section className="bg-surface-variant py-8 border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-12">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">phone_in_talk</span>
              <span className="font-label-md text-on-surface font-medium">+1 (750) 813-9422</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <span className="font-label-md text-on-surface font-medium">support@crownharvestretail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              <span className="font-label-md text-on-surface font-medium">Mississauga, Ontario, Canada</span>
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
