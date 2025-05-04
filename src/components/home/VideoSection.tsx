
import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Auto-play failed:", error);
        // Most browsers require user interaction before auto-playing videos with sound
      });
      
      // Add loop and autoplay attributes
      videoRef.current.loop = true;
      videoRef.current.autoplay = true;
    }
  }, []);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          loop
          muted
          autoPlay
        >
          <source src="https://samplelib.com/lib/preview/mp4/sample-30s.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-white mb-4">Experience Crepdog Crew</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take a look behind the scenes at our authentication process and see how we ensure 
            every product is 100% authentic.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
          <Button
            onClick={togglePlay}
            variant="outline"
            size="icon"
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/20 border-white text-white hover:bg-white/30 hover:scale-110 transition-transform duration-200"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 ml-1" />
            )}
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl text-white font-semibold mb-4">Our Authentication Process</h3>
            <ScrollArea className="h-48">
              <p className="text-gray-300 mb-4">
                At Crepdog Crew, we take authentication seriously. Every item goes through our rigorous 
                multi-point inspection process to ensure it meets manufacturer specifications. Our team 
                of experts has years of experience identifying authentic products from counterfeits.
              </p>
              <p className="text-gray-300 mb-4">
                We examine everything from stitching patterns, material quality, label positioning, 
                to box construction and packaging details. We use specialized equipment including 
                UV lights, magnifiers, and material analyzers to detect even the most sophisticated fakes.
              </p>
              <p className="text-gray-300">
                Once authenticated, each item receives our authentication tag and digital certificate 
                that can be verified through our online database, providing you with complete peace of mind.
              </p>
            </ScrollArea>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl text-white font-semibold mb-4">Why Trust Our Experts</h3>
            <ScrollArea className="h-48">
              <p className="text-gray-300 mb-4">
                Our authentication team consists of industry veterans with decades of combined experience 
                in the sneaker and streetwear industry. Many have worked directly with major brands and 
                have intimate knowledge of manufacturing processes.
              </p>
              <p className="text-gray-300 mb-4">
                We regularly update our knowledge base and authentication methods to stay ahead of 
                counterfeiters. Our team undergoes continuous training on the latest release details 
                and manufacturing changes.
              </p>
              <p className="text-gray-300">
                With a 99.8% accuracy rate and over 100,000 items authenticated, we've established 
                ourselves as one of the most trusted authentication services in the industry. That's 
                why top collectors and resellers trust Crepdog Crew for their authentication needs.
              </p>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
