import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({ images, autoPlay = true, interval = 4000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full bg-[#F5F0E8] rounded-lg overflow-hidden group">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons - Hidden on mobile, visible on hover on desktop */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#2A5C3E]/80 hover:bg-[#2A5C3E] text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#2A5C3E]/80 hover:bg-[#2A5C3E] text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators - Always visible */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#C9A96E] w-6" : "bg-[#C9A96E]/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
