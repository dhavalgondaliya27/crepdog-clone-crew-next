
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredProductId, setHoveredProductId] = useState(null);
  
  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(product => product.category === activeTab);
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of the most sought-after sneakers, streetwear, and accessories.
            All products are 100% authentic or your money back.
          </p>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList className="bg-secondary">
              <TabsTrigger value="all" className="text-sm">All Products</TabsTrigger>
              <TabsTrigger value="sneakers" className="text-sm">Sneakers</TabsTrigger>
              <TabsTrigger value="streetwear" className="text-sm">Streetwear</TabsTrigger>
              <TabsTrigger value="accessories" className="text-sm">Accessories</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <Link 
                  to={`/products/${product.id}`}
                  key={product.id} 
                  className="product-card group animate-fade-in transition-all duration-300 hover:-translate-y-1"
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={hoveredProductId === product.id ? product.hoverImage : product.image}
                      alt={product.name}
                      className="product-image transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform">
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
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-10">
          <Link to="/products">
            <Button variant="outline" size="lg" className="border-black hover:bg-black hover:text-white">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
