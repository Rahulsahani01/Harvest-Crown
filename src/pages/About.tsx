import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Milestone {
  year: string;
  title: string;
  desc: string;
}

export const About: React.FC = () => {
  const navigate = useNavigate();
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
    <div className="py-8 md:py-16 animate-fadeIn">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-16 relative">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-4">Canada's Produce Partner</span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">Our Story</h1>
        <p className="font-headline-sm text-headline-sm text-on-surface-variant max-w-2xl mx-auto italic font-medium">
          "From Canadian Farms to Your Stores"
        </p>
      </section>

      {/* Brand Story Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16 items-center">
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-4 bg-secondary/10 rounded-lg -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              alt="Heritage Landscape golden wheat field" 
              className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9xUBMlOZLFgzAJF9BLw7GeCw9Mwuit4HUAh9vybng_Z4LQriKyiwyqiUgsMIzbsnMPC4GtBSVWXom909yDmKxdrt4AXZ4_5yaXTiw_H1wT-RjBju8GR3YoLjjoTYa0VzVeyOakW7DQyiGYfjNXNRt0cdGgGU5QnxhlSu8ScVV5d-hgGrDVcoVRDsbXO_7bpYRV8Y_zB8RtBtBNBYiX6JojoXDCljIkpbCrX6xScvKlE4iucNXnbFmxALuyxUCYNdkWLufTKKeyYY" 
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
                className="bg-secondary text-white px-8 py-4 rounded-full font-button text-button hover:bg-on-secondary-fixed transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values Section */}
      <section className="bg-surface-container py-16 md:py-24 mb-24">
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
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
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

      {/* Leadership Team Section */}
      <section className="bg-surface-container-low py-16 md:py-24 mb-24 border-y border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-xl mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4 font-bold">Guiding the Harvest</h2>
            <p className="text-on-surface-variant font-body-md">Meet the leadership behind Crown Harvest's commitment to quality and transparency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Leader 1 */}
            <div className="group">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-lg shadow-sm">
                <img 
                  alt="Julian Thorne CEO" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXYulEHhqIvlaq3H9nL-vdjj1pfgXBIVXySiAOGUzaaTm8IxCns_ltDUCuJgJ4okVjUYoyK8hjVACmeuKuBxhpfNod48-nQWH2QuVctk-YVB0KtBMgQaTjpyOlgsXaRS2IaYtwVJQUCiezp6GbQxNZpifZ26imvIxyV_oAmwLpj8OGIT-3waz-VP831VtrvD8MxmUFbm22py04w1_qv_RkYvdmtyQhhyOu61wP3MdVz10dGx0M1JCMw8fQ4wu5mRBfYdfQVpucSYg" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Julian Thorne</h4>
              <p className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-wider text-xs font-semibold">Chief Executive Officer</p>
              <p className="text-on-surface-variant font-body-md leading-relaxed italic">"Our goal is to build the most efficient and transparent bridge between Canadian farms and grocery stores."</p>
            </div>

            {/* Leader 2 */}
            <div className="group">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-lg shadow-sm">
                <img 
                  alt="Elena Rossi COO" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPlq-pfQK7yWYK1LnxN3EVdar8QVyXkhwwxkJNgJUZPmfK9pE0T-GwQ3L4cO3ZaIfiTeB9_rJHwVEowb69jXDd9AtKa3ryx8moijlnrQAisUcZrnLEg0RxRzj_OtCTcoXnDODWB97fVNokrHY3Rkls7CsscdcS1pTxtKWHuvEwxc9exMii8YIaRMg1mZVN85cYL-gohq0hYyadAe7ODhrsRd2D_rY2akoR2yuOGCOAE2Jeimh-fdkfuyluPdsFtS3UCkodUVPubec" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Elena Rossi</h4>
              <p className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-wider text-xs font-semibold">Chief Operations Officer</p>
              <p className="text-on-surface-variant font-body-md leading-relaxed italic">"Operational excellence is how we honour the hard work of our growers at every step of the logistics chain."</p>
            </div>

            {/* Leader 3 */}
            <div className="group">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-lg shadow-sm">
                <img 
                  alt="Marcus Vance Head of Agronomy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYJ05eArpw7oIgeatXKxIxYgppgwOgcVTtn8SMNB6kkCxoyXYa4uf7Sn1XXC4EaPEAWRXwdCFM3h1Qkh13_blvOpqzG6JIEiKeALjq2lDzC5gSIlKIeNTPD5KXkXs0wj2PrPkzBFOMGeWraWMdxUQVCx7dwCO4-DlYFilcGhYL43M4OBqRkjBf_BpfcXOHGwTE5Vx8cVTHA6m0kmY5_4mpcaPmSxZb45sTZ7nYpF94agln7HThEFtH7C7MdNv5-8DZ117-_xbwkgQ" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Marcus Vance</h4>
              <p className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-wider text-xs font-semibold">Head of Agronomy</p>
              <p className="text-on-surface-variant font-body-md leading-relaxed italic">"Ensuring every crop meets strict Canadian food safety and quality standards is our promise to you."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Accreditations */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-12">
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
