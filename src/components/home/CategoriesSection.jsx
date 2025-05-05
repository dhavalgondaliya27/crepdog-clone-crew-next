
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const categories = [
  {
    id: 1,
    name: "Sneakers",
    description: "Authentic footwear from top brands",
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/sneakers"
  },
  {
    id: 2,
    name: "Streetwear",
    description: "Premium apparel for the culture",
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/streetwear"
  },
  {
    id: 3,
    name: "Accessories",
    description: "Complete your look with our accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/accessories"
  },
  {
    id: 4,
    name: "Limited Edition",
    description: "Rare finds and exclusive drops",
    image: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/limited-edition"
  },
  {
    id: 5,
    name: "Vintage",
    description: "Classic pieces with history",
    image: "https://images.unsplash.com/photo-1543508282-5c1f427f023f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/vintage"
  },
  {
    id: 6,
    name: "New Arrivals",
    description: "Fresh drops and latest releases",
    image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/new-arrivals"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="heading-lg mb-2">Shop by Category</h2>
            <p className="text-muted-foreground">
              Find exactly what you're looking for with our category collections
            </p>
          </div>
        </div>
        
        {/* Categories Carousel */}
        <div className="relative mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {categories.map((category) => (
                <CarouselItem key={category.id} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                  <Link to={category.link} className="group block relative overflow-hidden rounded-lg h-[300px]">
                    <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/50 transition-colors" />
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-white text-xl md:text-2xl font-bold tracking-wider mb-2">
                        {category.name}
                      </h3>
                      <p className="text-white/80 mb-4 max-w-xs hidden md:block">
                        {category.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="bg-white/20 border-white text-white hover:bg-white hover:text-black transition-all"
                        size="sm"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12" />
            <CarouselNext className="right-0 lg:-right-12" />
          </Carousel>
        </div>
        
        {/* Featured Categories Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category) => (
            <Link 
              to={category.link} 
              key={`featured-${category.id}`}
              className="group block relative overflow-hidden rounded-lg h-60"
            >
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/50 transition-colors" />
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white text-2xl font-bold tracking-wider mb-2">
                  {category.name}
                </h3>
                <Button 
                  variant="outline" 
                  className="bg-white/20 border-white text-white hover:bg-white hover:text-black transition-all"
                  size="sm"
                >
                  View Collection
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
