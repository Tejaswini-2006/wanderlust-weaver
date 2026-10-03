import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Plane, Heart } from 'lucide-react';
import { useTravel } from '../context/TravelContext';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { favorites, setIsWishlistOpen } = useTravel();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#destinations', label: 'Destinations' },
    { href: '#trip-planner', label: 'Trip Planner' },
    { href: '#packages', label: 'Packages' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
            <Plane className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className={`font-display text-2xl font-bold ${scrolled ? 'text-foreground' : 'text-white'}`}>
            Wanderlust
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link font-medium ${scrolled ? 'text-foreground/80 hover:text-foreground' : 'text-white/90 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Wishlist button */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className={`relative p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              scrolled ? 'bg-muted hover:bg-muted/80' : 'bg-white/10 hover:bg-white/20'
            }`}
            aria-label="View Saved Wishlist"
            title="Saved Destinations"
          >
            <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'fill-primary text-primary' : (scrolled ? 'text-foreground' : 'text-white')}`} />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center animate-scale-in">
                {favorites.length}
              </span>
            )}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              scrolled ? 'bg-muted hover:bg-muted/80' : 'bg-white/10 hover:bg-white/20'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className={`w-5 h-5 ${scrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Moon className={`w-5 h-5 ${scrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>

          <a
            href="#contact"
            className="hidden md:block btn-primary text-sm"
          >
            Book Now
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-foreground' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              setIsWishlistOpen(true);
            }}
            className="flex items-center justify-between py-3 px-4 rounded-lg text-foreground bg-muted/60 font-medium"
          >
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary fill-primary" /> Wishlist
            </span>
            <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full font-bold">
              {favorites.length}
            </span>
          </button>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center mt-2"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
