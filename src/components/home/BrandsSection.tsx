
import { useEffect, useRef } from "react";

const brands = [
  { id: 1, name: "Nike", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 2, name: "Adidas", logo: "https://images.unsplash.com/photo-1587158403421-2c85cb969e47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 3, name: "Jordan", logo: "https://images.unsplash.com/photo-1594750852642-aa07ab93fec9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 4, name: "Supreme", logo: "https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 5, name: "Off-White", logo: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  { id: 6, name: "Fear of God", logo: "https://images.unsplash.com/photo-1565693413579-8a218c607f9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
];

const BrandsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const brands = entry.target.querySelectorAll('.brand-item');
            brands.forEach((brand, index) => {
              setTimeout(() => {
                brand.classList.add('animate-scale-in');
                brand.classList.add('animate-float');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Top Brands We Carry</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with the most sought-after brands in streetwear and sneakers 
            to bring you authentic products from around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div 
              key={brand.id}
              className="brand-item opacity-0 flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-24 h-24 mb-3 overflow-hidden rounded-full">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
