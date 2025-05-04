
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/sneakers"
  },
  {
    id: 2,
    name: "Streetwear",
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/streetwear"
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/accessories"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for with our category collections.
            All products authenticated and ready to ship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link to={category.link} key={category.id} className="group block relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/50 transition-colors" />
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wider">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
