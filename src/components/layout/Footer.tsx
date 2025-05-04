
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">CREPDOG CREW</h3>
            <p className="text-sm text-gray-400 mb-6">
              The most trusted marketplace for sneakers and streetwear.
              Authenticity guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-cream">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-cream">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-cream">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@crepdogcrew.com" className="hover:text-cream">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">SHOP</h3>
            <ul className="space-y-2">
              {["All Products", "Sneakers", "Streetwear", "Accessories", "New Arrivals", "Sale Items"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white text-sm inline-block py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              {["About Us", "Contact Us", "FAQ", "Shipping & Returns", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white text-sm inline-block py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">NEWSLETTER</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-white text-black hover:bg-cream font-medium flex items-center justify-center">
                Subscribe <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Crepdog Crew. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" 
                   alt="Stripe" className="h-6 opacity-60" />
              <img src="https://cdn.worldvectorlogo.com/logos/paypal-logo.svg" 
                   alt="PayPal" className="h-6 opacity-60" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png" 
                   alt="Visa" className="h-6 opacity-60" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
                   alt="Mastercard" className="h-6 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
