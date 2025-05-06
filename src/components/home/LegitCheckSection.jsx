
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegitCheckSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="heading-lg mb-6">Authentication Services</h2>
            <p className="text-lg mb-6">
              Don't risk purchasing fake products. Our expert authenticators verify every item 
              before it's shipped to ensure 100% authenticity. We've authenticated over 100,000 items 
              with a 99.8% accuracy rate.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Shield className="mr-3 text-primary" />
                <div>
                  <h4 className="font-medium mb-1">Guaranteed Authentic</h4>
                  <p className="text-sm text-muted-foreground">
                    All products come with our authenticity guarantee
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="mr-3 text-primary" />
                <div>
                  <h4 className="font-medium mb-1">Expert Inspection</h4>
                  <p className="text-sm text-muted-foreground">
                    Each product undergoes a rigorous verification process
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="mr-3 text-primary" />
                <div>
                  <h4 className="font-medium mb-1">Quick Turnaround</h4>
                  <p className="text-sm text-muted-foreground">
                    Legit checks completed within 24-48 hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ArrowRight className="mr-3 text-primary" />
                <div>
                  <h4 className="font-medium mb-1">Digital Certificate</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive a digital certification of authenticity
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="bg-black text-white hover:bg-black/80">
              Learn More About Our Services <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Authentication Process" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegitCheckSection;
