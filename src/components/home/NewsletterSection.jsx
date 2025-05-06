
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast.success("Thank you for subscribing to our newsletter!");
    }, 1000);
  };
  
  return (
    <section className="py-16 bg-black text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-lg mb-4">Join Our Community</h2>
          <p className="mb-8">
            Subscribe to our newsletter and be the first to know about new drops, 
            restocks, exclusive offers, and community events.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 flex-grow"
            />
            <Button 
              type="submit" 
              disabled={loading} 
              className="bg-white text-black hover:bg-cream"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-gray-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
