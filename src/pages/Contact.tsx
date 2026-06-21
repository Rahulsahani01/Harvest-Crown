import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    businessType: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [activeField, setActiveField] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        businessType: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="py-8 md:py-16">
      {/* Hero Header */}
      <section className="bg-surface-container-low py-12 md:py-20 mb-16 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center md:text-left">
          <div className="inline-block px-4 py-1 mb-6 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full font-label-md text-label-md uppercase tracking-widest text-xs font-bold">
            Reach Out
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 leading-tight">Get in Touch</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Our team of agricultural specialists and wholesale advisors is ready to help you optimize your supply chain with premium artisanal harvests.
          </p>
        </div>
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-secondary-container/10 blur-[120px] rounded-full"></div>
      </section>

      {/* Grid Content */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            {/* General details */}
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary p-3 bg-surface-container-high rounded-xl text-2xl">location_on</span>
                <div>
                  <h3 className="font-label-md text-label-md text-secondary uppercase tracking-widest text-xs font-bold mb-1">Our Estate</h3>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    482 Harvest Ridge Road, Sonoma Valley,<br />California, CA 95476
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary p-3 bg-surface-container-high rounded-xl text-2xl">call</span>
                <div>
                  <h3 className="font-label-md text-label-md text-secondary uppercase tracking-widest text-xs font-bold mb-1">Phone</h3>
                  <p className="font-body-md text-body-md text-on-surface font-semibold">+1 (707) 555-0128</p>
                  <p className="text-on-surface-variant text-xs mt-1">Mon - Fri, 8:00am - 6:00pm PST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary p-3 bg-surface-container-high rounded-xl text-2xl">mail</span>
                <div>
                  <h3 className="font-label-md text-label-md text-secondary uppercase tracking-widest text-xs font-bold mb-1">General Inquiries</h3>
                  <p className="font-body-md text-body-md text-on-surface">hello@crownharvest.com</p>
                </div>
              </div>
            </div>

            <hr className="border-outline-variant/30" />

            {/* Departmental Access */}
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Departmental Access</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-surface-container-low border border-outline-variant/40 rounded-xl space-y-1">
                  <p className="font-label-md text-secondary text-xs uppercase tracking-wider">Wholesale Sales</p>
                  <p className="font-body-md font-bold text-on-surface text-sm break-all">sales@crownharvest.com</p>
                </div>
                <div className="p-6 bg-surface-container-low border border-outline-variant/40 rounded-xl space-y-1">
                  <p className="font-label-md text-secondary text-xs uppercase tracking-wider">Partner Support</p>
                  <p className="font-body-md font-bold text-on-surface text-sm break-all">support@crownharvest.com</p>
                </div>
                <div className="p-6 bg-surface-container-low border border-outline-variant/40 rounded-xl space-y-1">
                  <p className="font-label-md text-secondary text-xs uppercase tracking-wider">Careers</p>
                  <p className="font-body-md font-bold text-on-surface text-sm break-all">growth@crownharvest.com</p>
                </div>
              </div>
            </div>

            {/* Sonoma Map View */}
            <div className="group relative w-full h-80 rounded-2xl overflow-hidden border border-outline-variant/40 bg-surface-container-highest shadow-sm">
              <img 
                alt="Sonoma Valley Location Map" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOzprTfI3jSr15N4aMKkm03FiGnKRhoHn5Fxk-ltXGQnCInKGcxwBU_uI3eqd1yKMMgnguqSOvPSQwz-1PAwhlYgrftdTIKzmNGWQgJ5tLXiSTMt61IRHG_BRkjdHvFx3MnAY0rU2ZC99ax7CrpYkbALewG56hOor4nFVVexXr_Gw2sNeP8Qs_KAKuZNkIPmi-CwPCMlDbgB0rwklvXG18p67Zvp8YEvAegHlJAB0x_5Uiu9yhC12WuidDW092hmsQNGjloXfbksw" 
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
              <div className="absolute bottom-6 left-6 bg-surface p-4 rounded-xl shadow-lg border border-outline-variant/30">
                <p className="font-label-md text-primary font-bold text-sm">Crown Harvest Estate</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold mt-0.5">Sonoma Valley, California</p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-low border border-outline-variant/40 p-6 md:p-12 rounded-3xl shadow-sm">
              <h2 className="font-headline-md text-headline-md text-primary mb-8">Send an Inquiry</h2>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className={`font-label-md text-xs transition-colors ${activeField === 'name' ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                    Full Name
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Johnathan Miller"
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline/40 text-sm"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label className={`font-label-md text-xs transition-colors ${activeField === 'company' ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                    Company Name
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.company}
                    onFocus={() => setActiveField('company')}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Artisan Foods Inc."
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline/40 text-sm"
                  />
                </div>

                {/* Business Type */}
                <div className="flex flex-col gap-2">
                  <label className={`font-label-md text-xs transition-colors ${activeField === 'businessType' ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                    Business Type
                  </label>
                  <select 
                    required
                    value={formData.businessType}
                    onFocus={() => setActiveField('businessType')}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm appearance-none"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Retail Boutique">Retail Boutique</option>
                    <option value="Wholesale Distributor">Wholesale Distributor</option>
                    <option value="Hospitality / Restaurant">Hospitality / Restaurant</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className={`font-label-md text-xs transition-colors ${activeField === 'phone' ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    required
                    value={formData.phone}
                    onFocus={() => setActiveField('phone')}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (707) 555-0128"
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline/40 text-sm"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className={`font-label-md text-xs transition-colors ${activeField === 'email' ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                    Work Email Address
                  </label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="j.miller@company.com"
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline/40 text-sm"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className={`font-label-md text-xs transition-colors ${activeField === 'subject' ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                    Inquiry Subject
                  </label>
                  <select 
                    required
                    value={formData.subject}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm appearance-none"
                  >
                    <option value="" disabled>How can we help you?</option>
                    <option value="Wholesale Pricing & Catalog">Wholesale Pricing & Catalog</option>
                    <option value="Custom Sourcing Requests">Custom Sourcing Requests</option>
                    <option value="Logistics & Shipping Inquiry">Logistics & Shipping Inquiry</option>
                    <option value="Media & PR">Media & PR</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className={`font-label-md text-xs transition-colors ${activeField === 'message' ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                    Your Message
                  </label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your needs..."
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline/40 text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="md:col-span-2 mt-4">
                  {status === 'success' ? (
                    <div className="w-full md:w-auto bg-green-600 text-white px-12 py-4 rounded-full font-button text-button shadow-md flex items-center justify-center gap-3 animate-fadeIn">
                      <span className="material-symbols-outlined text-lg">check_circle</span>
                      Message Sent Successfully
                    </div>
                  ) : (
                    <button 
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full md:w-auto bg-secondary-container text-on-secondary-container px-12 py-4 rounded-full font-button text-button shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-3"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="material-symbols-outlined text-lg animate-spin">sync</span> Sending...
                        </>
                      ) : (
                        <>
                          Submit Inquiry <span className="material-symbols-outlined text-lg">send</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp CTA */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <a 
          href="https://wa.me/917303643351"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:scale-105 transition-transform group"
        >
          <div className="bg-white/20 p-1 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
          <span className="font-button text-sm whitespace-nowrap">Message via WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
