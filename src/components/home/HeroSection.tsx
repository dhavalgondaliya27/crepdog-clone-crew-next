
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "NEW JORDAN 4 RELEASES",
    description: "Be the first to get your hands on the latest Jordan 4 colorways",
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "STREETWEAR ESSENTIALS",
    description: "Curated collections from top streetwear brands around the world",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cta: "Discover"
  },
  {
    id: 3,
    title: "LEGIT CHECK SERVICE",
    description: "Trust our experts to verify the authenticity of your products",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cta: "Learn More"
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  // Auto rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  const changeSlide = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimating(false);
    }, 500);
  };
  
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className={`text-center text-white max-w-2xl px-4 transition-transform duration-1000 ${
              index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-8 max-w-md mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>{slide.description}</p>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-cream font-medium animate-fade-in hover:scale-105 transition-transform"
                style={{animationDelay: '0.4s'}}
              >
                {slide.cta} <ArrowRight size={16} className="ml-2 animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => changeSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            } hover:bg-white hover:scale-110`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
