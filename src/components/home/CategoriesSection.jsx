
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Updated with image data from the screenshot
const categories = [
  {
    id: 1,
    name: "APPAREL",
    image: "public/lovable-uploads/da845cc6-72b8-4dea-9058-91b3f1df4edb.png", 
    link: "/apparel"
  },
  {
    id: 2,
    name: "SNEAKERS",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/sneakers"
  },
  {
    id: 3,
    name: "HYPE",
    image: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/hype"
  },
  {
    id: 4,
    name: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/accessories"
  },
  {
    id: 5,
    name: "VINTAGE",
    image: "https://images.unsplash.com/photo-1543508282-5c1f427f023f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/vintage"
  },
  {
    id: 6,
    name: "NEW ARRIVALS",
    image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/new-arrivals"
  }
];

const CategoriesSection = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  
  // Set up the scroll listener and calculate the max scroll distance
  useEffect(() => {
    const carousel = carouselRef.current;
    
    if (carousel) {
      const calculateMaxScroll = () => {
        const maxScrollDistance = carousel.scrollWidth - carousel.clientWidth;
        setMaxScroll(maxScrollDistance);
      };
      
      calculateMaxScroll();
      window.addEventListener('resize', calculateMaxScroll);
      
      const handleScroll = () => {
        setScrollPosition(carousel.scrollLeft);
      };
      
      carousel.addEventListener('scroll', handleScroll);
      
      return () => {
        carousel.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', calculateMaxScroll);
      };
    }
  }, []);
  
  // Calculate progress indicator width based on scroll position
  useEffect(() => {
    if (maxScroll > 0) {
      const progress = (scrollPosition / maxScroll) * 100;
      setProgressWidth(progress);
    }
  }, [scrollPosition, maxScroll]);
  
  // Handle arrow button clicks
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 overflow-hidden">
      <div className="container relative">
        
        {/* Carousel container */}
        <div 
          ref={carouselRef} 
          className="flex gap-4 overflow-x-auto pb-8 hide-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link} 
              className="flex-none w-[33%] md:w-[400px] relative overflow-hidden h-[500px] group"
            >
              <div className="absolute inset-0 bg-black/30 z-10 transition-opacity group-hover:bg-black/40" />
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white text-3xl md:text-4xl font-bold tracking-wider">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={scrollLeft} 
          className="absolute left-4 top-1/2 -translate-y-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-20"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={scrollRight} 
          className="absolute right-4 top-1/2 -translate-y-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-20"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Progress indicator */}
        <div className="h-1 bg-gray-200 relative mt-4 w-full">
          <div 
            className="absolute left-0 top-0 h-full bg-black transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
