
import { useEffect, useRef } from "react";

const stats = [
  { id: 1, value: "100K+", label: "Products Authenticated" },
  { id: 2, value: "50K+", label: "Happy Customers" },
  { id: 3, value: "99.8%", label: "Authentication Accuracy" },
  { id: 4, value: "24h", label: "Average Shipping Time" }
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-item');
            stats.forEach((stat, index) => {
              setTimeout(() => {
                stat.classList.add('animate-scale-in');
              }, index * 200);
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
    <section ref={sectionRef} className="py-16 bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="stat-item opacity-0 text-center p-6 border border-white/10 rounded-xl hover:border-white/30 transition-colors"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
