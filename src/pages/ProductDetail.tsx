
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock product database - in a real app, this would come from an API
const productsDatabase = [
  {
    id: "fear-of-god-essentials-hoodie-plum",
    name: "Fear Of God Essentials Hoodie",
    price: "$95.00",
    color: "Plum",
    description: "The Fear of God Essentials Hoodie in Plum features a premium cotton blend with a relaxed fit. This hoodie includes the iconic Essentials logo, ribbed cuffs and hem, and an adjustable drawstring hood.",
    images: [
      "https://images.unsplash.com/photo-1556172968-c6b5809b1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    brand: "Fear of God",
    category: "streetwear"
  },
  {
    id: "nike-dunk-low-retro",
    name: "Nike Dunk Low Retro",
    price: "$120.00",
    color: "White/Black",
    description: "The Nike Dunk Low Retro features a classic leather upper with a cushioned collar and rubber outsole for traction. This iconic design has been a staple in sneaker culture since its debut.",
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1584735174914-6b1a755a6e1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    brand: "Nike",
    category: "sneakers"
  },
  {
    id: "supreme-box-logo-tee",
    name: "Supreme Box Logo Tee",
    price: "$110.00",
    color: "Red",
    description: "The Supreme Box Logo Tee features the iconic box logo on premium cotton fabric. A streetwear essential known for its cultural impact and collectability.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    brand: "Supreme",
    category: "streetwear"
  }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Simulate API call to fetch product data
    const fetchProduct = () => {
      setLoading(true);
      // Find product in our mock database
      const foundProduct = productsDatabase.find(p => p.id === productId);
      
      // Simulate network delay
      setTimeout(() => {
        setProduct(foundProduct || null);
        setLoading(false);
      }, 500);
    };

    if (productId) {
      fetchProduct();
    }
    
    // Add animation class to content when component mounts
    const content = document.querySelector('.product-detail-content');
    if (content) {
      content.classList.add('animate-fade-in');
    }
  }, [productId]);

  if (loading) {
    return (
      <Layout>
        <div className="container py-12 flex justify-center items-center min-h-[50vh]">
          <div className="animate-pulse flex flex-col gap-8 w-full">
            <div className="h-96 bg-slate-200 rounded-md"></div>
            <div className="h-8 bg-slate-200 w-1/2 rounded-md"></div>
            <div className="h-4 bg-slate-200 w-1/3 rounded-md"></div>
            <div className="h-24 bg-slate-200 rounded-md"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8 md:py-12 product-detail-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="product-images">
            <div className="mb-4">
              <img 
                src={product.images[activeImageIndex]} 
                alt={`${product.name} - Image ${activeImageIndex + 1}`} 
                className="w-full rounded-lg aspect-square object-cover"
              />
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`rounded-md overflow-hidden border-2 transition-all ${
                    activeImageIndex === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - Thumbnail ${index + 1}`} 
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Mobile Carousel (visible only on mobile) */}
            <div className="md:hidden mt-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((image: string, index: number) => (
                    <CarouselItem key={index}>
                      <Card className="border-none">
                        <CardContent className="p-1">
                          <img 
                            src={image} 
                            alt={`${product.name} - Image ${index + 1}`} 
                            className="rounded-md aspect-square object-cover w-full"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-2">
                  <CarouselPrevious className="relative static mx-1 translate-y-0" />
                  <CarouselNext className="relative static mx-1 translate-y-0" />
                </div>
              </Carousel>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="text-lg font-medium mb-1">{product.price}</div>
              <div className="text-sm text-muted-foreground mb-4">
                {product.color} | {product.brand}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-auto">
              <h3 className="font-medium mb-3">Select Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size: string) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="h-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <Button className="w-full py-6 text-lg" disabled={!selectedSize}>
                  Add to Cart
                </Button>
                <Button variant="outline" className="w-full py-6 text-lg border-black hover:bg-black hover:text-white">
                  Add to Wishlist
                </Button>
              </div>
            </div>

            {/* Product Tags */}
            <div className="mt-8 border-t border-gray-200 pt-4">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {product.brand}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {product.color}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
