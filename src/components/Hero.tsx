import { ChevronDown, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920"
          alt="Beautiful mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl animate-float delay-200" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium mb-4 animate-fade-up tracking-widest uppercase">
            Discover the World
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-up delay-100">
            Your Next Adventure
            <span className="block gradient-text">Awaits</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-up delay-200">
            Explore breathtaking destinations, create unforgettable memories, and experience the journey of a lifetime with our curated travel experiences.
          </p>

          {/* Search Box */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 max-w-4xl mx-auto animate-fade-up delay-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 text-left">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-white/60">Destination</p>
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="bg-transparent border-none outline-none text-white placeholder-white/60 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 text-left">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-white/60">Date</p>
                  <input
                    type="text"
                    placeholder="Select dates"
                    className="bg-transparent border-none outline-none text-white placeholder-white/60 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 text-left">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-white/60">Travelers</p>
                  <input
                    type="text"
                    placeholder="Guests"
                    className="bg-transparent border-none outline-none text-white placeholder-white/60 w-full"
                  />
                </div>
              </div>
              <button className="btn-primary flex items-center justify-center gap-2 text-base">
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 animate-fade-up delay-400">
            <div className="text-center">
              <p className="text-4xl font-bold font-display">500+</p>
              <p className="text-white/60 text-sm">Destinations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold font-display">50K+</p>
              <p className="text-white/60 text-sm">Happy Travelers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold font-display">10+</p>
              <p className="text-white/60 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#destinations"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
