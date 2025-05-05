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

// Updated to include product data that matches the screenshot
const products = [
  {
    id: "adidas-samba-og-black",
    name: "ADIDAS SAMBA OG BLACK WONDER WHITE (W)",
    price: "₹11,499",
    originalPrice: "₹14,500",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/products/adidas-samba-og-black"
  },
  {
    id: "adidas-yeezy-350-v2",
    name: "ADIDAS YEEZY 350 V2 CARBON BELUGA",
    price: "₹18,499",
    originalPrice: "₹20,000",
    image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/products/adidas-yeezy-350-v2"
  },
  {
    id: "jordan-1-mid-se",
    name: "JORDAN 1 MID SE RED BLACK TOE",
    price: "₹10,499",
    originalPrice: "₹12,500",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/products/jordan-1-mid-se"
  },
  {
    id: "jordan-1-low-se",
    name: "JORDAN 1 LOW SE HEMP LIGHT BRITISH TAN",
    price: "₹11,499",
    originalPrice: "₹13,000",
    image: "https://images.unsplash.com/photo-1602033693387-3531914e7185?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/products/jordan-1-low-se"
  },
  {
    id: "nike-dunk-low-retro",
    name: "NIKE DUNK LOW RETRO",
    price: "₹8,999",
    originalPrice: "₹9,500",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/products/nike-dunk-low-retro"
  },
  {
    id: "new-balance-990-v5",
    name: "NEW BALANCE 990 V5 GREY",
    price: "₹17,499",
    originalPrice: "₹18,500",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/products/new-balance-990-v5"
  }
];

// Traditional category data
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
            <h2 className="heading-lg mb-2">Popular Products</h2>
            <p className="text-muted-foreground">
              Our most sought-after sneakers and apparel
            </p>
          </div>
        </div>
        
        {/* Product Carousel - Styled like the reference */}
        <div className="relative mt-8 mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                  <Link to={product.link} className="group block relative">
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm font-medium uppercase tracking-wider mb-2 line-clamp-2 h-10">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center gap-3">
                        <span className="font-bold">{product.price}</span>
                        <span className="text-red-500 text-sm line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12 rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white" />
            <CarouselNext className="right-0 lg:-right-12 rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white" />
          </Carousel>
        </div>
        
        {/* Featured Categories Grid - Keeping this from the original */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="heading-lg mb-2">Shop by Category</h2>
              <p className="text-muted-foreground">
                Find exactly what you're looking for with our category collections
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default CategoriesSection;
