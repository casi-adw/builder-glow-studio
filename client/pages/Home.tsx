import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// Carousel component with drag support
const DragCarousel = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={`flex gap-4 overflow-x-scroll scrollbar-hide pb-2 cursor-grab ${isDragging ? "cursor-grabbing" : ""} ${className}`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

export default function HomePage() {
  const gamesCarouselRef = useRef<HTMLDivElement>(null);
  const popularCarouselRef = useRef<HTMLDivElement>(null);
  const crashCarouselRef = useRef<HTMLDivElement>(null);
  const fantasyCarouselRef = useRef<HTMLDivElement>(null);

  const gamesData = [
    {
      name: "Roxz",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/21cb7445f9469fee276208583612f75d26db352c?placeholderIfAbsent=true",
    },
    {
      name: "Lynx",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fe1e0004cc859dde75bf385ba11fe99ecb50c37a?placeholderIfAbsent=true",
    },
    {
      name: "Zyra",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/abb77a4d8783ef5f04174aec94e09da538e71b26?placeholderIfAbsent=true",
    },
    {
      name: "Fynn",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a964e2a4efe827b9b437995640366d190783af69?placeholderIfAbsent=true",
    },
    {
      name: "Juno",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a8788b977ae95a4370ef42b36f52d007bd432ae2?placeholderIfAbsent=true",
    },
    {
      name: "Kira",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/50070c4b8ca8b4fdf696649e19628dbd1db64569?placeholderIfAbsent=true",
    },
    {
      name: "Milo",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c77453a0cf0f5a62f6442dec9033e1afb864e96?placeholderIfAbsent=true",
    },
  ];

  const crashGames = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/38d554a47656c3c20d2165e76c0cfb0f1707b2f7?placeholderIfAbsent=true",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/38d554a47656c3c20d2165e76c0cfb0f1707b2f7?placeholderIfAbsent=true",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/38d554a47656c3c20d2165e76c0cfb0f1707b2f7?placeholderIfAbsent=true",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/38d554a47656c3c20d2165e76c0cfb0f1707b2f7?placeholderIfAbsent=true",
    },
  ];

  const popularGames = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b22a230e4726ea6ecfb21adfa57fdb45a6a93647?placeholderIfAbsent=true",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b22a230e4726ea6ecfb21adfa57fdb45a6a93647?placeholderIfAbsent=true",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b22a230e4726ea6ecfb21adfa57fdb45a6a93647?placeholderIfAbsent=true",
    },
  ];

  const fantasyGames = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a80bf6481a5f12caf70bc1bab8c9622f1adcfa0b?placeholderIfAbsent=true",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a80bf6481a5f12caf70bc1bab8c9622f1adcfa0b?placeholderIfAbsent=true",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a80bf6481a5f12caf70bc1bab8c9622f1adcfa0b?placeholderIfAbsent=true",
    },
  ];

  // Manual scroll - no auto-scroll

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-y-auto">
      <div className="relative z-10">
        {/* Header with User Info and Logo */}
        <div className="relative flex items-center justify-between p-5 pt-8 overflow-hidden">
          {/* Stars only in header */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              >
                <div className="w-1 h-1 bg-white rounded-full opacity-40" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">
                  Oliver Bennet
                </span>
                <span className="text-white text-xs">$37,657.00</span>
              </div>
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xs">+</span>
              </div>
            </div>

            {/* Centralized Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="text-white font-bold text-xl tracking-wide">
                starz
              </div>
            </div>
          </div>

          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9abfbeea575d8eb1f04c7feb67db1b93c5562a3?placeholderIfAbsent=true"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
        </div>

        {/* Games Made For You Section */}
        <div className="px-5 mt-6">
          <h2 className="text-white text-lg font-medium mb-4">
            <span className="text-white">Games</span>{" "}
            <span className="text-gray-400">made for you</span>
          </h2>

          <DragCarousel className="gap-2">
            {[...gamesData, ...gamesData].map((game, index) => (
              <div
                key={index}
                className="relative min-w-[86px] h-[98px] rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105 flex-shrink-0"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-black text-xs px-2 py-1 rounded-full font-medium">
                    {game.name}
                  </div>
                </div>
              </div>
            ))}
          </DragCarousel>
        </div>

        {/* Most Popular Games Section */}
        <div className="px-5 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-lg font-medium">
              <span className="text-white">Most</span>{" "}
              <span className="text-gray-400">popular games</span>
            </h2>
            <span className="text-gray-400 text-sm">See all</span>
          </div>

          <DragCarousel>
            {[...popularGames, ...popularGames].map((game, index) => (
              <div key={index} className="min-w-[300px] flex-shrink-0">
                <img
                  src={game.image}
                  alt={`Popular game ${index + 1}`}
                  className="w-full h-auto rounded-2xl cursor-pointer transform transition-transform hover:scale-105"
                />
              </div>
            ))}
          </DragCarousel>
        </div>

        {/* Crash Games Section */}
        <div className="px-5 mt-8">
          <h2 className="text-white text-lg font-medium mb-4">
            <span className="text-white">Crash</span>{" "}
            <span className="text-gray-400">Games</span>
          </h2>

          <DragCarousel>
            {[...crashGames, ...crashGames].map((game, index) => (
              <div key={index} className="min-w-[300px] flex-shrink-0">
                <img
                  src={game.image}
                  alt={`Crash game ${index + 1}`}
                  className="w-full h-auto rounded-2xl cursor-pointer transform transition-transform hover:scale-105"
                />
              </div>
            ))}
          </DragCarousel>
        </div>

        {/* Fantasy Sport Section */}
        <div className="px-5 mt-8 pb-20">
          <h2 className="text-white text-lg font-medium mb-4">
            <span className="text-white">Fantasy</span>{" "}
            <span className="text-gray-400">Sport</span>
          </h2>

          <DragCarousel>
            {[...fantasyGames, ...fantasyGames].map((game, index) => (
              <div key={index} className="min-w-[300px] flex-shrink-0">
                <img
                  src={game.image}
                  alt={`Fantasy sport ${index + 1}`}
                  className="w-full h-auto rounded-2xl cursor-pointer transform transition-transform hover:scale-105"
                />
              </div>
            ))}
          </DragCarousel>
        </div>

        {/* Android Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-3">
          <div className="flex items-center justify-between max-w-sm mx-auto">
            <button className="p-3 rounded-full hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>

            <button className="p-3 rounded-full hover:bg-white/10 transition-colors">
              <Home className="w-6 h-6 text-white" />
            </button>

            <button className="p-3 rounded-full hover:bg-white/10 transition-colors">
              <Search className="w-6 h-6 text-white" />
            </button>

            <button className="p-3 rounded-full hover:bg-white/10 transition-colors">
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Home Indicator */}
          <div className="w-[134px] h-1 bg-white rounded-full mx-auto mt-2 opacity-60" />
        </div>
      </div>
    </div>
  );
}
