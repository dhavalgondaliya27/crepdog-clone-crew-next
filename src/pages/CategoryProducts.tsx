
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { useState } from "react";

// Mock data for different categories
const categoryProducts = {
  sneakers: [
    {
      id: "s1",
      name: "Air Jordan 1 Retro High OG",
      price: 180,
      brand: "Nike",
      images: [
        "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1621881538090-b2b5ffaa996a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
      size: "US 10",
    },
    {
      id: "s2",
      name: "Yeezy Boost 350 V2",
      price: 220,
      brand: "Adidas",
      images: [
        "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520096459084-096fcc53fa43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
      size: "US 9",
    },
    {
      id: "s3",
      name: "Nike Dunk Low",
      price: 100,
      brand: "Nike",
      images: [
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
      size: "US 8",
    },
    {
      id: "s4",
      name: "New Balance 990v5",
      price: 175,
      brand: "New Balance",
      images: [
        "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
      size: "US 11",
    },
    {
      id: "s5",
      name: "Converse Chuck Taylor All Star",
      price: 55,
      brand: "Converse",
      images: [
        "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
      size: "US 9.5",
    },
    {
      id: "s6",
      name: "Vans Old Skool",
      price: 60,
      brand: "Vans",
      images: [
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
      size: "US 10",
    },
  ],
  streetwear: [
    {
      id: "st1",
      name: "Supreme Box Logo Hoodie",
      price: 450,
      brand: "Supreme",
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
      size: "L",
    },
    {
      id: "st2",
      name: "Off-White Tee",
      price: 300,
      brand: "Off-White",
      images: [
        "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
      size: "M",
    },
    {
      id: "st3",
      name: "Essentials Sweatpants",
      price: 90,
      brand: "Fear of God",
      images: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1580991584164-a4e12c31ca6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
      size: "M",
    },
  ],
  accessories: [
    {
      id: "a1",
      name: "Supreme Backpack",
      price: 220,
      brand: "Supreme",
      images: [
        "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1589363460779-211450dfa908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
    },
    {
      id: "a2",
      name: "Carhartt WIP Beanie",
      price: 40,
      brand: "Carhartt",
      images: [
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
    },
    {
      id: "a3",
      name: "Off-White Industrial Belt",
      price: 200,
      brand: "Off-White",
      images: [
        "https://images.unsplash.com/photo-1624222247344-550fb60dae4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1631541911525-25452452d02f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      condition: "New",
    },
  ],
};

// Filter options
const brands = ["All", "Nike", "Adidas", "New Balance", "Vans", "Converse", "Supreme", "Off-White", "Fear of God", "Carhartt"];
const sizes = ["All", "US 7", "US 8", "US 9", "US 9.5", "US 10", "US 11", "S", "M", "L", "XL"];
const conditions = ["All", "New", "Used - Like New", "Used - Good", "Used - Fair"];

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  
  // Get products for the current category
  const products = categoryProducts[categoryId as keyof typeof categoryProducts] || [];
  
  // Apply filters
  const filteredProducts = products.filter(product => {
    const brandMatch = selectedBrand === "All" || product.brand === selectedBrand;
    const sizeMatch = selectedSize === "All" || product.size === selectedSize;
    const conditionMatch = selectedCondition === "All" || product.condition === selectedCondition;
    return brandMatch && sizeMatch && conditionMatch;
  });
  
  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    // Default to featured (no particular order)
    return 0;
  });

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold capitalize mb-8">{categoryId}</h1>
        
        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {/* Brand Filter */}
            <div>
              <select 
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 bg-white"
              >
                <option disabled>Brand</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            
            {/* Size Filter */}
            <div>
              <select 
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 bg-white"
              >
                <option disabled>Size</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
            {/* Condition Filter */}
            <div>
              <select 
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 bg-white"
              >
                <option disabled>Condition</option>
                {conditions.map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Sort */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-4 bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3 relative">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.images.length > 1 && (
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                    {product.images.slice(0, 3).map((_, idx) => (
                      <div 
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full bg-white opacity-75 ${idx === 0 ? 'opacity-100' : ''}`}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
              <h3 className="font-medium text-gray-900 group-hover:text-black transition-colors">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{product.brand}</p>
              <div className="flex justify-between items-center">
                <p className="font-bold">${product.price}</p>
                {product.size && <span className="text-gray-500 text-sm">{product.size}</span>}
              </div>
            </Link>
          ))}
        </div>
        
        {/* Show "No products found" message if filteredProducts is empty */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try changing your filters or check back later for new arrivals.</p>
            <Button variant="outline" onClick={() => {
              setSelectedBrand("All");
              setSelectedSize("All");
              setSelectedCondition("All");
            }}>Clear Filters</Button>
          </div>
        )}
        
        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </Layout>
  );
};

export default CategoryProducts;
