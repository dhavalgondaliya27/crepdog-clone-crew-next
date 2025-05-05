import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Sneakers",
    description: "Authentic footwear from top brands",
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/sneakers",
    featured: true
  },
  {
    id: 2,
    name: "Streetwear",
    description: "Premium apparel for the culture",
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/streetwear",
    featured: true
  },
  {
    id: 3,
    name: "Accessories",
    description: "Complete your look with our accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/accessories",
    featured: true
  },
  {
    id: 4,
    name: "Limited Edition",
    description: "Rare finds and exclusive drops",
    image: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/limited-edition",
    featured: false
  },
  {
    id: 5,
    name: "Vintage",
    description: "Classic pieces with history",
    image: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/vintage",
    featured: false
  }
];

const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const featuredCategories = categories.filter(cat => cat.featured);
  const otherCategories = categories.filter(cat => !cat.featured);
  
  const activeItem = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for with our category collections.
            All products authenticated and ready to ship.
          </p>
        </div>
        
        {/* Featured Categories with hover effect */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCategories.map(category => (
            <Link to={category.link} key={category.id} className="group block relative overflow-hidden rounded-lg h-80">
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/50 transition-colors" />
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wider mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 mb-4 max-w-xs">
                  {category.description}
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white/20 border-white text-white hover:bg-white hover:text-black transition-all"
                >
                  Shop Now
                </Button>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Other Categories - Tab Style */}
        <div className="mt-16 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left Side - Category List */}
            <div className="bg-gray-50 p-4">
              <h3 className="font-medium text-lg mb-4 pl-2">Collections</h3>
              <div className="space-y-1">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-md flex justify-between items-center transition-colors ${
                      activeCategory === category.id ? 'bg-black text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    {activeCategory === category.id && <ChevronRight className="h-4 w-4" />}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right Side - Category Preview */}
            <div className="md:col-span-2 relative overflow-hidden h-80">
              <img 
                src={activeItem.image} 
                alt={activeItem.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8">
                <h3 className="text-white text-3xl font-bold mb-2">{activeItem.name}</h3>
                <p className="text-white/80 mb-6 max-w-md">{activeItem.description}</p>
                <Link to={activeItem.link}>
                  <Button className="bg-white text-black hover:bg-white/90">
                    Explore {activeItem.name}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
