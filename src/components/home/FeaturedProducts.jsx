import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Expanded product data - 12 products for each category
const products = [
  // SNEAKERS - 12 products
  {
    id: "nike-dunk-low-retro",
    name: "Nike Dunk Low Retro",
    price: "$120",
    originalPrice: "$140",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "air-jordan-4-retro",
    name: "Air Jordan 4 Retro",
    price: "$210",
    originalPrice: "$245",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be3dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1584735174914-6b1a755a6e1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "adidas-yeezy-350",
    name: "Adidas Yeezy 350 V2 Carbon Beluga",
    price: "$230",
    originalPrice: "$299",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "air-jordan-1-mid-se",
    name: "Air Jordan 1 Mid SE Red Black Toe",
    price: "$180",
    originalPrice: "$215",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "yeezy-700-v3",
    name: "Adidas Yeezy 700 V3 'Copper Fade'",
    price: "$310",
    originalPrice: "$380",
    image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "new-balance-990",
    name: "New Balance 990v5 Grey",
    price: "$185",
    originalPrice: "$199",
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "jordan-1-low-se-hemp",
    name: "Jordan 1 Low SE Hemp Tan",
    price: "$155",
    originalPrice: "$180",
    image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "man-jack-tr-travis",
    name: "Man Jack TR Travis Bright Cactus",
    price: "$299",
    originalPrice: "$360",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "adidas-samba-og",
    name: "Adidas Samba OG Black Wonder White",
    price: "$149",
    originalPrice: "$165",
    image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "puma-suede-classic",
    name: "Puma Suede Classic XXI",
    price: "$75",
    originalPrice: "$95",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "converse-chuck-70",
    name: "Converse Chuck 70 High Top",
    price: "$85",
    originalPrice: "$100",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  {
    id: "air-force-1-low",
    name: "Nike Air Force 1 Low '07",
    price: "$110",
    originalPrice: "$125",
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "sneakers"
  },
  
  // STREETWEAR - 12 products
  {
    id: "fear-of-god-essentials-hoodie-plum",
    name: "Fear Of God Essentials Hoodie",
    price: "$95",
    originalPrice: "$120",
    image: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "supreme-box-logo-tee",
    name: "Supreme Box Logo Tee",
    price: "$110",
    originalPrice: "$140",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "off-white-hoodie",
    name: "Off-White Hoodie",
    price: "$320",
    originalPrice: "$380",
    image: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "essential-fear-of-god-pants",
    name: "Essential Fear of God Pants",
    price: "$95",
    originalPrice: "$120",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "stussy-basic-tee",
    name: "Stüssy Basic Logo Tee",
    price: "$45",
    originalPrice: "$60",
    image: "https://images.unsplash.com/photo-1563115298-e9439ccc7f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1563115298-e9439ccc7f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "palace-tri-ferg-hoodie",
    name: "Palace Tri-Ferg Hoodie",
    price: "$150",
    originalPrice: "$185",
    image: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "carhartt-wip-jacket",
    name: "Carhartt WIP Michigan Coat",
    price: "$195",
    originalPrice: "$220",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "bape-camo-tee",
    name: "BAPE College Camo Tee",
    price: "$120",
    originalPrice: "$145",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "warren-lotas-tee",
    name: "Warren Lotas Graphic Tee",
    price: "$135",
    originalPrice: "$160",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "yeezy-gap-hoodie",
    name: "YEEZY GAP Hoodie",
    price: "$160",
    originalPrice: "$200",
    image: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "comme-des-garcons-tee",
    name: "Comme des Garçons PLAY Tee",
    price: "$105",
    originalPrice: "$125",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  {
    id: "kith-floral-hoodie",
    name: "Kith Floral Hoodie",
    price: "$165",
    originalPrice: "$210",
    image: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "streetwear"
  },
  
  // ACCESSORIES - 12 products
  {
    id: "supreme-shoulder-bag",
    name: "Supreme Shoulder Bag",
    price: "$78",
    originalPrice: "$98",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "chrome-hearts-beanie",
    name: "Chrome Hearts Beanie",
    price: "$220",
    originalPrice: "$250",
    image: "https://images.unsplash.com/photo-1576566588022-66e0d46b5a64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1576566588022-66e0d46b5a64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "goyard-card-holder",
    name: "Goyard Card Holder",
    price: "$490",
    originalPrice: "$550",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "off-white-belt",
    name: "Off-White Industrial Belt",
    price: "$160",
    originalPrice: "$210",
    image: "https://images.unsplash.com/photo-1576566588022-66e0d46b5a64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1576566588022-66e0d46b5a64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "bape-face-mask",
    name: "BAPE Camo Face Mask",
    price: "$45",
    originalPrice: "$60",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "fear-of-god-cap",
    name: "Fear of God Essentials Cap",
    price: "$65",
    originalPrice: "$80",
    image: "https://images.unsplash.com/photo-1576566588022-66e0d46b5a64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1576566588022-66e0d46b5a64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "yeezy-socks-3pack",
    name: "YEEZY Socks 3-Pack",
    price: "$55",
    originalPrice: "$75",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "palace-keychain",
    name: "Palace Tri-Ferg Keychain",
    price: "$35",
    originalPrice: "$45",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "stussy-bucket-hat",
    name: "Stüssy Bucket Hat",
    price: "$60",
    originalPrice: "$75",
    image: "https://images.unsplash.com/photo-1576566588022-66e0d46b5a64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1576566588022-66e0d46b5a64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "carhartt-wip-wallet",
    name: "Carhartt WIP Coated Wallet",
    price: "$55",
    originalPrice: "$70",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "supreme-waist-bag",
    name: "Supreme Waist Bag",
    price: "$95",
    originalPrice: "$120",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  },
  {
    id: "bape-phone-case",
    name: "BAPE Camo Phone Case",
    price: "$60",
    originalPrice: "$80",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "accessories"
  }
];

// Helper function for product sliders with improved scrolling and progress tracking
const ProductSlider = ({ products, title, category }) => {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const isMobile = useIsMobile();
  
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
      // Scroll by exactly 4 items width
      const itemWidth = isMobile ? 250 : 280;
      const scrollAmount = -(itemWidth * 4 + 16); // 4 items plus gap
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current) {
      // Scroll by exactly 4 items width
      const itemWidth = isMobile ? 250 : 280;
      const scrollAmount = itemWidth * 4 + 16; // 4 items plus gap
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div id={category} className="mb-16 scroll-mt-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl md:text-4xl font-bold uppercase">{title}</h3>
        <Link to={`/${category}`}>
          <Button variant="outline" className="border-black hover:bg-black hover:text-white">
            VIEW ALL
          </Button>
        </Link>
      </div>
      
      <div className="relative">
        <div 
          ref={sliderRef} 
          className="flex gap-4 overflow-x-auto pb-8 hide-scrollbar scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products.map(product => (
            <Link 
              to={`/products/${product.id}`}
              key={product.id} 
              className="flex-none w-[250px] md:w-[280px] product-card group animate-fade-in transition-all duration-300 hover:-translate-y-1"
              style={{ scrollSnapAlign: 'start' }}
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={hoveredProductId === product.id && product.hoverImage ? product.hoverImage : product.image}
                  alt={product.name}
                  className="product-image h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback image if the product image fails to load
                    e.target.src = "https://placehold.co/600x400?text=Product+Image";
                  }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-bold">{product.price}</span>
                  <span className="text-gray-500 text-sm line-through">{product.originalPrice}</span>
                </div>
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
  
  // Using a ref instead of state for the section element
  const sneakersRef = useRef(null);
  const streetwearRef = useRef(null);
  const accessoriesRef = useRef(null);
  
  // Scroll to the respective section when clicking on category buttons
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      const yOffset = -100; // Offset to account for header
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our curated collection of the most sought-after sneakers, streetwear, and accessories.
            All products are 100% authentic or your money back.
          </p>
          
          {/* Category navigation */}
          <div className="flex justify-center mb-12 space-x-4">
            <Button 
              variant="outline" 
              onClick={() => scrollToSection(sneakersRef)} 
              className="border-black hover:bg-black hover:text-white transition-colors"
            >
              Sneakers
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection(streetwearRef)} 
              className="border-black hover:bg-black hover:text-white transition-colors"
            >
              Streetwear
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection(accessoriesRef)} 
              className="border-black hover:bg-black hover:text-white transition-colors"
            >
              Accessories
            </Button>
          </div>
        </div>
        
        <div ref={sneakersRef}>
          {sneakers.length > 0 && (
            <ProductSlider products={sneakers} title="Sneakers" category="sneakers" />
          )}
        </div>
        
        <div ref={streetwearRef}>
          {streetwear.length > 0 && (
            <ProductSlider products={streetwear} title="Streetwear" category="streetwear" />
          )}
        </div>
        
        <div ref={accessoriesRef}>
          {accessories.length > 0 && (
            <ProductSlider products={accessories} title="Accessories" category="accessories" />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
