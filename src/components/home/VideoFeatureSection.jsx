
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoFeatureSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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
    <section className="py-12 md:py-24 bg-black text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Hype</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Go behind the scenes with our authenticity experts to see how we 
            verify your products.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl">
          <video 
            ref={videoRef}
            className="w-full aspect-video object-cover"
            poster="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          >
            <source src="https://samplelib.com/lib/preview/mp4/sample-30s.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Button
              onClick={togglePlay}
              variant="outline"
              size="icon"
              className="w-16 h-16 rounded-full bg-white/20 border-white text-white hover:bg-white/30 hover:scale-110 transition-transform duration-200"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-8 w-8" />
              ) : (
                <Play className="h-8 w-8 ml-1" />
              )}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Expert Authentication</h3>
            <p className="text-gray-300">
              Our team of experts uses specialized equipment and years of experience 
              to authenticate every item that passes through our doors.
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Detailed Inspection</h3>
            <p className="text-gray-300">
              From stitching patterns to box construction, we check every detail 
              to ensure your products are 100% authentic.
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Verified Guarantee</h3>
            <p className="text-gray-300">
              Each item receives our authentication tag and digital certificate that 
              can be verified through our online database.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoFeatureSection;
