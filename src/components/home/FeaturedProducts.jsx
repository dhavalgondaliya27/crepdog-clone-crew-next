
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: "fear-of-god-essentials-hoodie-plum",
    name: "Fear Of God Essentials Hoodie",
    price: "$95",
    image: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "nike-dunk-low-retro",
    name: "Nike Dunk Low Retro",
    price: "$120",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "air-jordan-4-retro",
    name: "Air Jordan 4 Retro",
    price: "$210",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be3dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1584735174914-6b1a755a6e1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "adidas-yeezy-350",
    name: "Adidas Yeezy 350",
    price: "$230",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "supreme-box-logo-tee",
    name: "Supreme Box Logo Tee",
    price: "$110",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "off-white-hoodie",
    name: "Off-White Hoodie",
    price: "$320",
    image: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "essential-fear-of-god-pants",
    name: "Essential Fear of God Pants",
    price: "$95",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "supreme-shoulder-bag",
    name: "Supreme Shoulder Bag",
    price: "$78",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  }
];

// Helper function for product sliders
const ProductSlider = ({ products, title, category }) => {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  
  useEffect(() => {
    const slider = sliderRef.current;
    
    if (slider) {
      const calculateMaxScroll = () => {
        const maxScrollDistance = slider.scrollWidth - slider.clientWidth;
        setMaxScroll(maxScrollDistance);
      };
      
      calculateMaxScroll();
      window.addEventListener('resize', calculateMaxScroll);
      
      const handleScroll = () => {
        setScrollPosition(slider.scrollLeft);
      };
      
      slider.addEventListener('scroll', handleScroll);
      
      return () => {
        slider.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', calculateMaxScroll);
      };
    }
  }, []);
  
  useEffect(() => {
    if (maxScroll > 0) {
      const progress = (scrollPosition / maxScroll) * 100;
      setProgressWidth(progress);
    }
  }, [scrollPosition, maxScroll]);
  
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  
  return (
    <div id={category} className="mb-16 scroll-mt-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="heading-md">{title}</h3>
        <Link to={`/${category}`}>
          <Button variant="outline" className="border-black hover:bg-black hover:text-white">
            View All
          </Button>
        </Link>
      </div>
      
      <div className="relative">
        <div 
          ref={sliderRef} 
          className="flex gap-4 overflow-x-auto pb-8 hide-scrollbar scroll-smooth"
        >
          {products.map(product => (
            <Link 
              to={`/products/${product.id}`}
              key={product.id} 
              className="flex-none w-[250px] md:w-[280px] product-card group animate-fade-in transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={hoveredProductId === product.id ? product.hoverImage : product.image}
                  alt={product.name}
                  className="product-image transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm font-bold mt-1">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <button 
          onClick={scrollLeft} 
          className="absolute left-2 top-1/3 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-20"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={scrollRight} 
          className="absolute right-2 top-1/3 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-20"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        <div className="h-1 bg-gray-200 relative mt-2 w-full">
          <div 
            className="absolute left-0 top-0 h-full bg-black transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const sneakers = products.filter(product => product.category === "sneakers");
  const streetwear = products.filter(product => product.category === "streetwear");
  const accessories = products.filter(product => product.category === "accessories");
  const categoryNavRef = useRef(null);
  
  const scrollToSection = (categoryId) => {
    const section = document.getElementById(categoryId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our curated collection of the most sought-after sneakers, streetwear, and accessories.
            All products are 100% authentic or your money back.
          </p>
          
          {/* Category navigation */}
          <div ref={categoryNavRef} className="flex justify-center mb-12 space-x-4">
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('sneakers')} 
              className="border-black hover:bg-black hover:text-white transition-colors"
            >
              Sneakers
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('streetwear')} 
              className="border-black hover:bg-black hover:text-white transition-colors"
            >
              Streetwear
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('accessories')} 
              className="border-black hover:bg-black hover:text-white transition-colors"
            >
              Accessories
            </Button>
          </div>
        </div>
        
        {sneakers.length > 0 && (
          <ProductSlider products={sneakers} title="Sneakers" category="sneakers" />
        )}
        
        {streetwear.length > 0 && (
          <ProductSlider products={streetwear} title="Streetwear" category="streetwear" />
        )}
        
        {accessories.length > 0 && (
          <ProductSlider products={accessories} title="Accessories" category="accessories" />
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
