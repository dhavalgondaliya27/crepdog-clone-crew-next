
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Jordan",
    location: "Chicago, IL",
    rating: 5,
    text: "Amazing service! I got my Jordan 1s authenticated in less than 24 hours. The team was professional and the communication was excellent. Will definitely use their services again.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "New York, NY",
    rating: 5,
    text: "Crepdog Crew is my go-to place for all sneaker purchases. The authentication process gives me peace of mind that I'm getting authentic products. Fast shipping too!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "David Thompson",
    location: "Los Angeles, CA",
    rating: 5,
    text: "I was skeptical about buying high-end streetwear online, but Crepdog Crew has made me a believer. Their authentication service is top-notch and the selection is amazing.",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about 
            their experience with Crepdog Crew.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-secondary rounded-xl p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white"
                      />
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          fill={i < testimonial.rating ? "currentColor" : "none"} 
                          className="text-yellow-500 w-5 h-5"
                        />
                      ))}
                    </div>
                    
                    <p className="mb-6 italic">"{testimonial.text}"</p>
                    
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
