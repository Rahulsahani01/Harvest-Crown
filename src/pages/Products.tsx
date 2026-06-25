import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import productData from '../assets/productData.json';
import { useEmail } from '../hooks/useEmail';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

const getTags = (imagePath: string, name: string) => {
  const isFruit = imagePath.includes('/fruits/');
  if (name.includes('Other')) {
    return isFruit ? ['Premium', 'Assorted', 'Seasonal'] : ['Premium', 'Assorted', 'Fresh'];
  }
  
  const fruitTagsPool = [
    ['Organic', 'Sweet', 'Fresh'],
    ['Vitamins', 'Juicy', 'Natural'],
    ['Farm Fresh', 'Seasonal', 'Premium'],
    ['Anti-oxidant', 'Non-GMO', 'Sweet']
  ];
  
  const vegTagsPool = [
    ['Healthy', 'Local', 'Non-GMO'],
    ['Fresh Harvest', 'Earthy', 'Organic'],
    ['Nutritious', 'Fiber Rich', 'Fresh'],
    ['Premium Quality', 'Pesticide Free', 'Local']
  ];
  
  const pool = isFruit ? fruitTagsPool : vegTagsPool;
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }
  return pool[hash % pool.length];
};

export const Products: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteForm, setQuoteForm] = useState({ name: '', email: '', qty: 'Medium (pallet)', message: '' });
  const { sendEmail, status, setStatus, errorMessage } = useEmail();
  const [visibleCount, setVisibleCount] = useState(6);

  const displayedProducts = productData.slice(0, visibleCount);
  const resolveImageUrl = (imagePath: string) => new URL(imagePath.replace(/^\/src\//, '../'), import.meta.url).href;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleOpenQuote = (product: Product) => {
    setSelectedProduct(product);
    setQuoteForm({ ...quoteForm, message: `Hello, I'd like to request a wholesale quote for ${product.name}.` });
    setStatus('idle');
  };

  const handleCloseQuote = () => {
    setSelectedProduct(null);
    setStatus('idle');
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    const success = await sendEmail({
      type: 'quote',
      senderEmail: quoteForm.email,
      subject: `Wholesale Quote Request: ${selectedProduct.name}`,
      metadata: {
        name: quoteForm.name,
        product: selectedProduct.name,
        volume: quoteForm.qty,
        message: quoteForm.message,
      },
    });

    if (success) {
      setQuoteForm({ name: '', email: '', qty: 'Medium (pallet)', message: '' });
      setTimeout(() => {
        handleCloseQuote();
      }, 2500);
    }
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
          {displayedProducts.map((prod) => {
            const tags = getTags(prod.image, prod.name);
            const imageUrl = resolveImageUrl(prod.image);
            return (
              <div 
                key={prod.id} 
                className="linen-card rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-72 overflow-hidden relative cinematic-grain">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={imageUrl} 
                    alt={prod.name}
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{prod.name}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {tags.map((tag, idx) => (
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
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < productData.length && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={handleLoadMore}
              className="bg-secondary text-white hover:bg-on-secondary-fixed px-10 py-5 font-button text-button transition-all duration-200 cursor-pointer shadow-md active:scale-95 flex items-center gap-2 rounded-full border border-transparent"
            >
              Load More <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
          </div>
        )}
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

            {status === 'success' ? (
              <div className="py-12 text-center flex flex-col items-center justify-center gap-4">
                <span className="material-symbols-outlined text-green-600 text-6xl animate-bounce">check_circle</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">Quote Request Submitted</h3>
                <p className="text-on-surface-variant font-body-md">We will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Request Quote</h3>
                  <p className="text-sm text-on-surface-variant">For product: <span className="font-bold text-secondary">{selectedProduct.name}</span></p>
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

                {status === 'error' && (
                  <div className="text-red-600 font-label-md text-xs flex items-center gap-2 animate-fadeIn">
                    <span className="material-symbols-outlined text-sm">error</span>
                    {errorMessage || 'Failed to submit quote request. Please try again.'}
                  </div>
                )}

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
                    disabled={status === 'sending'}
                    className="flex-grow bg-secondary text-white py-3 rounded-full text-sm font-button hover:bg-on-secondary-fixed transition-colors active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
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
