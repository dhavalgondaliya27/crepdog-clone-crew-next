
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newReleases = [
  {
    id: "travis-scott-jordan-1",
    name: "Travis Scott x Air Jordan 1 Low 'Olive'",
    price: "$1,250",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    releaseDate: "Just Dropped"
  },
  {
    id: "yeezy-700-v3",
    name: "Adidas Yeezy 700 V3 'Copper Fade'",
    price: "$380",
    image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    releaseDate: "New Release"
  },
  {
    id: "supreme-fw23",
    name: "Supreme Box Logo FW23 Collection",
    price: "$198",
    image: "https://images.unsplash.com/photo-1563115298-e9439ccc7f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    releaseDate: "Pre-Order"
  },
  {
    id: "stussy-nike",
    name: "Stüssy x Nike Air Force 1 'Fossil Stone'",
    price: "$150",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    releaseDate: "Exclusive"
  }
];

const WhatsHotSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">What's Hot 🔥</h2>
          <Link to="/new-releases" className="text-sm font-medium flex items-center hover:underline">
            View All <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newReleases.map((item) => (
            <Link 
              key={item.id}
              to={`/products/${item.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-52 overflow-hidden">
                <div className={`absolute top-3 left-3 z-10 bg-black text-white text-xs font-bold px-2 py-1 rounded-full ${
                  hoveredItem === item.id ? 'opacity-0' : 'opacity-100'
                } transition-opacity`}>
                  {item.releaseDate}
                </div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredItem === item.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      Quick View
                    </Button>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                <p className="font-bold mt-2">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 bg-black text-white p-8 md:p-12 rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold mb-2">New Drops Every Week</h3>
              <p className="text-gray-300">Be the first to know about new releases and restocks</p>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200">
              Subscribe to Drops
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsHotSection;
