import React, { useState } from 'react';

interface Milestone {
  year: string;
  title: string;
  desc: string;
}

export const About: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones: Milestone[] = [
    { year: '2005', title: 'The First Harvest', desc: 'Crown Harvest begins with a small 40-acre agricultural collective in Sonoma Valley, shipping organic wheat and artisanal grains to local bakers.' },
    { year: '2009', title: 'Wholesale Expansion', desc: 'Opened our first temperature-controlled distribution center, extending partnerships to premium natural food grocers and regional restaurants.' },
    { year: '2014', title: 'Sustainability Milestone', desc: 'Achieved 100% organic certification across all partner estates, establishing zero-residual-pesticide standards.' },
    { year: '2018', title: 'Going Global', desc: 'Initiated export logistics to European and Asian organic markets, bridging the gap between local growers and international tables.' },
    { year: '2022', title: 'Digital Provenance', desc: 'Launched a custom tracing platform for wholesale partners to audit soil health metrics, harvest dates, and logistics chain coordinates.' },
    { year: '2024', title: 'Innovation Future', desc: 'Completed commissioning of our state-of-the-art climate-neutral packaging facility, running entirely on self-generated solar arrays.' },
  ];

  return (
    <div className="py-8 md:py-16">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-16 relative">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-4">Our Legacy</span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">Our Story</h1>
        <p className="font-headline-sm text-headline-sm text-on-surface-variant max-w-2xl mx-auto italic font-medium">
          "Decades of harvest. A lifetime of trust."
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
            <h2 className="font-headline-md text-headline-md text-primary mb-8">Nurturing Excellence Since 2005</h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Crown Harvest was founded on the simple belief that quality should never be compromised for scale. What started as a small family collective in the heart of the valley has grown into a premier wholesale partner, yet our hands-on approach remains unchanged.
              </p>
              <p>
                Every grain, every fruit, and every shipment carries with it the weight of our reputation. We treat each harvest as if it were destined for our own table, ensuring that our partners receive only the finest artisanal products the land has to offer.
              </p>
              <p>
                Our journey is defined by the seasons and driven by a relentless pursuit of perfection. As we look toward the future, we remain rooted in the traditions that earned us your trust.
              </p>
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
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed font-body-md">
                To bridge the gap between high-end producers and discerning buyers through a transparent, quality-first supply chain.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-surface p-8 md:p-10 rounded-lg border border-outline-variant/30 hover:border-secondary transition-colors group">
              <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">visibility</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed font-body-md">
                To be the global benchmark for artisanal wholesale, recognized for our commitment to provenance and sustainable growth.
              </p>
            </div>
            {/* Values */}
            <div className="bg-surface p-8 md:p-10 rounded-lg border border-outline-variant/30 hover:border-secondary transition-colors group">
              <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">verified_user</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Our Values</h3>
              <p className="text-on-surface-variant leading-relaxed font-body-md">
                Integrity in every transaction, reverence for the land, and a dedication to the artisans who make our work possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
        <h2 className="font-headline-md text-headline-md text-center text-primary mb-12">The Evolution of Excellence</h2>
        
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
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Guiding the Harvest</h2>
            <p className="text-on-surface-variant font-body-md">Meet the visionaries behind Crown Harvest's commitment to quality and heritage.</p>
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
              <h4 className="font-headline-sm text-headline-sm text-primary">Julian Thorne</h4>
              <p className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-wider text-xs font-semibold">Chief Executive Officer</p>
              <p className="text-on-surface-variant font-body-md leading-relaxed italic">"Our goal isn't to be the biggest, but to be the bridge to the best the earth can offer."</p>
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
              <h4 className="font-headline-sm text-headline-sm text-primary">Elena Rossi</h4>
              <p className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-wider text-xs font-semibold">Chief Operations Officer</p>
              <p className="text-on-surface-variant font-body-md leading-relaxed italic">"Operational excellence is how we honor the hard work of our farmers at every step."</p>
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
              <h4 className="font-headline-sm text-headline-sm text-primary">Marcus Vance</h4>
              <p className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-wider text-xs font-semibold">Head of Agronomy</p>
              <p className="text-on-surface-variant font-body-md leading-relaxed italic">"We listen to the soil before we listen to the markets. That is the secret to our quality."</p>
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
