
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { CheckIcon, ChevronDown, FilterX, GridIcon, ListIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Define the product type with a size property
interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  images: string[];
  condition: string;
  size: string; // Added size property
}

// Mock data for products
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Nike Air Force 1 '07",
    price: 110,
    brand: "Nike",
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600269451012-7bac13f6306f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    condition: "New",
    size: "US 10",
  },
  {
    id: "2",
    name: "Adidas Ultraboost 21",
    price: 180,
    brand: "Adidas",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    condition: "New",
    size: "US 9.5",
  },
  {
    id: "3",
    name: "Jordan 1 Retro High",
    price: 170,
    brand: "Jordan",
    images: [
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    condition: "New",
    size: "US 11",
  },
  {
    id: "4",
    name: "Puma RS-X³",
    price: 110,
    brand: "Puma",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    condition: "Used",
    size: "US 10.5",
  },
  {
    id: "5",
    name: "Converse Chuck Taylor All Star",
    price: 55,
    brand: "Converse",
    images: [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    condition: "New",
    size: "US 8",
  },
  {
    id: "6",
    name: "New Balance 990v5",
    price: 185,
    brand: "New Balance",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    condition: "New",
    size: "US 9",
  },
];

// Category data
const categories = [
  { id: "sneakers", name: "Sneakers" },
  { id: "clothing", name: "Clothing" },
  { id: "accessories", name: "Accessories" },
];

const CategoryProducts = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const category = categories.find(cat => cat.id === categoryId);
  const categoryName = category ? category.name : "Products";
  
  const brands = Array.from(new Set(mockProducts.map(product => product.brand)));
  const conditions = Array.from(new Set(mockProducts.map(product => product.condition)));
  
  useEffect(() => {
    // Simulate API fetch based on categoryId
    setProducts(mockProducts);
  }, [categoryId]);
  
  useEffect(() => {
    // Apply filters and sorting
    let filtered = [...products];
    
    // Filter by brand
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Filter by condition
    if (selectedConditions.length > 0) {
      filtered = filtered.filter(product => selectedConditions.includes(product.condition));
    }
    
    // Filter by price
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // Here we would sort by date, but since we don't have dates, we'll just reverse
        filtered.reverse();
        break;
      default:
        // Featured - no specific sort
        break;
    }
    
    setFilteredProducts(filtered);
  }, [products, selectedBrands, selectedConditions, priceRange, sortBy]);
  
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev => 
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };
  
  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedConditions([]);
    setPriceRange([0, 500]);
    setSortBy("featured");
    
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared.",
    });
  };
  
  return (
    <Layout>
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="heading-lg mb-2">{categoryName}</h1>
          <p className="text-gray-500">
            Explore our collection of authentic {categoryName.toLowerCase()}.
          </p>
        </div>
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6 flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2"
          >
            <FilterX className="h-4 w-4" />
            Filters
          </Button>
          
          <div className="flex items-center gap-2">
            <Button 
              variant={viewMode === "grid" ? "default" : "outline"} 
              size="icon" 
              onClick={() => setViewMode("grid")}
              className="h-8 w-8"
            >
              <GridIcon className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === "list" ? "default" : "outline"} 
              size="icon" 
              onClick={() => setViewMode("list")}
              className="h-8 w-8"
            >
              <ListIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters sidebar */}
          <div className={`col-span-1 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Filters</h3>
                <Button variant="ghost" onClick={resetFilters} className="text-sm hover:underline">
                  Clear All
                </Button>
              </div>
              
              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="mb-2">
                  <Slider
                    defaultValue={[0, 500]}
                    max={500}
                    step={10}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value)}
                    className="my-7"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              
              {/* Brands */}
              <div>
                <h4 className="font-medium mb-3">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <label
                        htmlFor={`brand-${brand}`}
                        className="ml-2 text-sm cursor-pointer"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Condition */}
              <div>
                <h4 className="font-medium mb-3">Condition</h4>
                <div className="space-y-2">
                  {conditions.map((condition) => (
                    <div key={condition} className="flex items-center">
                      <Checkbox
                        id={`condition-${condition}`}
                        checked={selectedConditions.includes(condition)}
                        onCheckedChange={() => toggleCondition(condition)}
                      />
                      <label
                        htmlFor={`condition-${condition}`}
                        className="ml-2 text-sm cursor-pointer"
                      >
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="col-span-1 lg:col-span-3">
            <div className="mb-6 hidden lg:flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-4">
                  {filteredProducts.length} products
                </span>
                
                <Select 
                  value={sortBy} 
                  onValueChange={(value) => setSortBy(value)}
                >
                  <SelectTrigger className="w-[180px] h-9">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant={viewMode === "grid" ? "default" : "outline"} 
                  size="icon" 
                  onClick={() => setViewMode("grid")}
                  className="h-8 w-8"
                >
                  <GridIcon className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === "list" ? "default" : "outline"} 
                  size="icon" 
                  onClick={() => setViewMode("list")}
                  className="h-8 w-8"
                >
                  <ListIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-6"
              }>
                {filteredProducts.map((product) => (
                  <Link to={`/products/${product.id}`} key={product.id}>
                    <Card className={`overflow-hidden transition-all hover:shadow-lg ${
                      viewMode === "list" ? "flex" : ""
                    }`}>
                      <div className={`${viewMode === "list" ? "w-1/3" : "w-full"}`}>
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full w-full object-cover aspect-square"
                        />
                      </div>
                      <div className={`${viewMode === "list" ? "w-2/3" : "w-full"}`}>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">{product.brand}</span>
                            <span className="text-sm bg-gray-100 px-2 py-0.5 rounded">{product.size}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between items-center">
                          <span className="font-semibold">${product.price}</span>
                          <span className="text-sm text-gray-500">{product.condition}</span>
                        </CardFooter>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters</p>
                <Button onClick={resetFilters} className="mt-4">Reset Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProducts;
