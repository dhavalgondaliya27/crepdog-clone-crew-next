
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Search, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/auth/AuthModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: "Sneakers", subcategories: ["Nike", "Adidas", "New Balance", "Jordan"] },
    { name: "Streetwear", subcategories: ["T-Shirts", "Hoodies", "Pants", "Jackets"] },
    { name: "Accessories", subcategories: ["Bags", "Hats", "Socks", "Others"] },
    { name: "Brands", subcategories: ["Off-White", "Supreme", "Essentials", "BAPE"] },
    { name: "Services", subcategories: ["Legit Check", "Consignment", "Personal Shopping"] },
  ];
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90'}`}>
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="block lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                    className="hover:bg-secondary">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link to="/" className="inline-block">
              <h1 className="text-xl md:text-2xl font-bold uppercase">Crepdog Crew</h1>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {categories.map((category) => (
              <div key={category.name} className="group relative">
                <button className="nav-link flex items-center">
                  {category.name} <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="invisible absolute left-0 top-full w-48 bg-white shadow-lg rounded-md overflow-hidden group-hover:visible transform origin-top transition-all opacity-0 group-hover:opacity-100">
                  <div className="py-2">
                    {category.subcategories.map((sub) => (
                      <Link 
                        key={sub} 
                        to="#" 
                        className="block px-4 py-2 text-sm hover:bg-muted"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Search size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-secondary relative"
              onClick={() => setAuthModalOpen(true)}
            >
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[80vh]" : "max-h-0"}`}>
        <div className="container pb-6 space-y-4">
          {categories.map((category) => (
            <div key={category.name} className="border-b border-border py-2">
              <h3 className="font-medium mb-2">{category.name}</h3>
              <div className="grid grid-cols-2 gap-2">
                {category.subcategories.map((sub) => (
                  <Link 
                    key={sub} 
                    to="#" 
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </header>
  );
};

export default Header;
