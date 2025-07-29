
import React from 'react';
import { toast } from '@/components/ui/use-toast';

const NewsletterSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter with updates and promotions.",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-krio-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="scroll-animation">
            <h2 className="text-3xl md:text-5xl leading-tight tracking-tighter uppercase font-bold mb-6">Join Our Newsletter</h2>
            <p className="text-2xl font-normal max-w-5xl mx-auto text-white text-center mb-8">
              Stay updated with new products, offers, and health tips from the Krio team
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded bg-white/10 border-2 border-white/30 text-white placeholder:text-white focus:ring-white focus:border-white"
                required
              />
              <button 
                type="submit"
                className="bg-white text-krio-blue px-6 py-3 rounded font-medium hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-white mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
