import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface ProductCard {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  img: string;
}

export const Products: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<ProductCard | null>(null);
  const [quoteForm, setQuoteForm] = useState({ name: '', email: '', qty: 'Medium (pallet)', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const products: ProductCard[] = [
    {
      id: 'fruits',
      title: 'Fresh Fruits',
      desc: 'Hand-picked at peak ripeness from the finest orchards across the region.',
      tags: ['Farm Fresh', 'Seasonal', 'Wholesale'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO4vtxW5e4OKHnPS5dEPeGFEAbi3e9WfQ-lujuHebFqsSUmHWxVjNgj99uK-efSaDb3190-xLiYRH8EeOhYInd2x5acHPvLFYy4laJTDDcZ4u0j_Hp3HXrYj-w0OB7gE55TmilYUmBrJIImCp9411SlRMzLQzTusyVttQ4AQeLXPSBtOcL59tjQautX578gnNJoOfV1Ci-y_nYbkLwrnv0dRz9xUEkW8j_K9-De45Aop3SROtIqKuWaChKe9sXACs925gU9428umQ',
    },
    {
      id: 'vegetables',
      title: 'Fresh Vegetables',
      desc: 'Nutritious, crisp, and ethically grown vegetables delivered within hours of harvest.',
      tags: ['Farm Fresh', 'Non-GMO', 'Local'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACik6wfCKeT5AudpUtBMaqERvc_dtN8jPCjcYnlmztNTeUDK8qTWzYEB9MUitROLyVrccYipSmCo3DA2lM9PuLNnjLiv79oErEQshactNwhR416psB3ZClSwxytpj_IAgZRClaLzewD6FG0PPY9nFjxS-BQIBhtWM7Xtf0v8e1f0oFn14k-2Wbu0YueH8hVuYp-D9ll4khZ0Xz8Qwy-PqLRLy6cen-tVXwqTAsvWlb8BNOsrYBz24GqVTWAePAaiayF2u3sZEAW9k',
    },
    {
      id: 'organic',
      title: 'Organic Produce',
      desc: 'Certified pesticide-free produce for the health-conscious consumer and kitchen.',
      tags: ['Certified', 'Eco-Friendly', 'Purity'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbLLn2fKV1NGQ8dstgFnrCRKoS0o8UDZ2BmxlRQbTvLyFViXy1YRiD11zgxkRvWdWf67lIRT03SrAMyhJU2CyVQjXfLXI9LOkXCs2GqFE72fwvoyfzCaTfsRD_d8NKC5LwkfY3dWlKHIDjM-uh9l-mVqO--ucnGKtSdj0nf_c444o1irCEA-3KGWy5ljbWA88ISV5MPreFoq3W6ilXjVMHzkI0BqDsePu7LkqhCaPDbrVpA8LPyKGTXrY5AfSnovvH7ck9Skts0hc',
    },
    {
      id: 'local',
      title: 'Local Produce',
      desc: 'Supporting our community growers with direct farm-to-table logistics.',
      tags: ['Community', 'Direct', 'Fresh'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPgjwWbz0yNqVF4ldX8ISGbKmkVkRSP1VxREosU6UMb0uW6X_Vethho1PomKXb36TujyDJ12FvSh23Lr3nTsZP2gBTJUkZISyCDoqEEslYNsYAK44GEICP7BE9qXzUAohQh-dHnb1TT9Z22I1xuTIQTYV9Sv7gkBtpvjYXq6BYjDDorQRPRXIAQi0dW4zuPw_VJJwIkIfpyHQzRej6usMfPZ9rGA4AoO5XFPNaHZ2QR11xg_2Jhh5sveDUUMsW0lW2b4LzdUVzSeY',
    },
    {
      id: 'imported',
      title: 'Imported Produce',
      desc: 'Premium international selections chosen for exceptional flavor and rarity.',
      tags: ['Global', 'Exotic', 'Premium'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcVfu7MoiUMtel8nPEUMXAbl97yTxsP7ZW0e7lgYPBJs3BEpG2aOmusx-ZIR2Ly4Rr5g_mjcfeZgsNYbtNX1ZfhejmMlQGGCxf-i2wnzWwNHeTCMDaZGzdbFLJ8muc1ui1S6ZQhSiONr71BI3Er2skwTYdUmgL8K1TPYTXLsrC0OCnNusCV2ywEdU8xN4VwY2aHgeV2MGDNFFzHxpTzX4kt7dQZ6r8_mhU8uN2DQER8LnSV0YkzS-j59F13LHBMg0qSOCK7sVx1Sk',
    },
    {
      id: 'specialty',
      title: 'Specialty & Ethnic',
      desc: 'Unique varieties and specialty items tailored for diverse culinary traditions.',
      tags: ['Niche', 'Flavor', 'Bespoke'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1b73yT_BfpwlJaxKEfbx1mbO_o5kjAmCWv4Oz8ZAyYEIA7BtVJfafbmcAUTmtJQpGNxcaSy7pULgNgU_YEaBxPBcZhdK2UzmB604jTnM4nld7GrD8sR4o5P4UmC-eT9XZxv3YgRIqRC1YKk3uUYKC5bvLd1jdDNJeK29_G9RkHvbdZF7TIU7zm7wZZsUAdKpnNhSp_-ZRq94TbXn2YSfZAX1l5DLitsM2t2SjmtZwjXqL6RetZrw5yYkjDS2JXVA2RaVPF4mUAPc',
    },
  ];

  const handleOpenQuote = (product: ProductCard) => {
    setSelectedProduct(product);
    setQuoteForm({ ...quoteForm, message: `Hello, I'd like to request a wholesale quote for ${product.title}.` });
    setSubmitSuccess(false);
  };

  const handleCloseQuote = () => {
    setSelectedProduct(null);
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        handleCloseQuote();
      }, 1800);
    }, 1500);
  };

  return (
    <div className="py-8 md:py-16">
      {/* Header and Breadcrumbs */}
      <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-left mb-12">
        <nav className="flex items-center gap-2 mb-6 font-label-md text-label-md text-on-surface-variant">
          <Link className="hover:text-secondary transition-colors" to="/">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-secondary font-bold">Products</span>
        </nav>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-primary leading-tight">Our Produce</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Fresh from farm to your door — quality you can taste. Our curated selection of wholesale and retail agricultural products represent the pinnacle of seasonal harvest.
        </p>
      </header>

      {/* Product Categories Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {products.map((prod) => (
            <div 
              key={prod.id} 
              className="linen-card rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="h-72 overflow-hidden relative cinematic-grain">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={prod.img} 
                  alt={prod.title}
                />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{prod.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                    {prod.desc}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {prod.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-md text-label-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleOpenQuote(prod)}
                    className="w-full border-[1.5px] border-outline-variant hover:border-secondary hover:bg-secondary/5 py-4 rounded-full font-button text-button text-primary transition-all duration-200 cursor-pointer text-center"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Order Banner */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12">
        <div className="h-px w-full bg-secondary-container/40 mb-12"></div>
        <div className="relative bg-primary-container rounded-xl overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute inset-0 opacity-20 grain-overlay pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary-fixed mb-6">Need a custom order?</h2>
            <p className="font-body-lg text-body-lg text-surface-variant mb-10">
              From bespoke packaging to recurring bulk deliveries, our team is ready to curate a solution that fits your specific business needs.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-button text-button hover:bg-secondary-fixed transition-colors active:scale-95 cursor-pointer shadow-md"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Request a Quote Modal Dialog */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface-container-low max-w-lg w-full rounded-2xl border border-outline-variant/50 p-6 md:p-10 shadow-2xl relative">
            <button 
              onClick={handleCloseQuote}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {submitSuccess ? (
              <div className="py-12 text-center flex flex-col items-center justify-center gap-4">
                <span className="material-symbols-outlined text-green-600 text-6xl animate-bounce">check_circle</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">Quote Request Submitted</h3>
                <p className="text-on-surface-variant font-body-md">We will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Request Quote</h3>
                  <p className="text-sm text-on-surface-variant">For category: <span className="font-bold text-secondary">{selectedProduct.title}</span></p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-xs text-on-surface-variant">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-xs text-on-surface-variant">Business Email</label>
                    <input 
                      type="email" 
                      required
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-xs text-on-surface-variant">Estimated Volume Needed</label>
                    <select 
                      value={quoteForm.qty}
                      onChange={(e) => setQuoteForm({ ...quoteForm, qty: e.target.value })}
                      className="bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm appearance-none"
                    >
                      <option>Small (cases)</option>
                      <option>Medium (pallet)</option>
                      <option>Large (truckload)</option>
                      <option>Recurring weekly contract</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-xs text-on-surface-variant">Requirements Details</label>
                    <textarea 
                      rows={3}
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                      className="bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-1.5 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm resize-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <button 
                    type="button"
                    onClick={handleCloseQuote}
                    className="flex-1 border border-outline-variant py-3 rounded-full text-sm font-button text-on-surface-variant hover:bg-black/5 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-grow bg-secondary text-white py-3 rounded-full text-sm font-button hover:bg-on-secondary-fixed transition-colors active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined text-lg animate-spin">sync</span> Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request <span className="material-symbols-outlined text-sm">send</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
