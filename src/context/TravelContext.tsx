import React, { createContext, useContext, useState, useEffect } from 'react';
import { Destination, destinations } from '../data/travelData';
import { toast } from 'sonner';

interface TravelContextType {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  bookingDestination: string;
  selectForBooking: (destinationName: string) => void;
  activeModalDestination: Destination | null;
  openDestinationModal: (dest: Destination) => void;
  closeDestinationModal: () => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
}

const TravelContext = createContext<TravelContextType | undefined>(undefined);

export const TravelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('wanderlust_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [bookingDestination, setBookingDestination] = useState('');
  const [activeModalDestination, setActiveModalDestination] = useState<Destination | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('wanderlust_wishlist', JSON.stringify(favorites));
    } catch {
      // ignore storage errors
    }
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      const dest = destinations.find((d) => d.id === id);
      if (exists) {
        toast.info(`Removed ${dest ? dest.name : 'item'} from your Wishlist`);
        return prev.filter((favId) => favId !== id);
      } else {
        toast.success(`Saved ${dest ? dest.name : 'item'} to your Wishlist ❤️`);
        return [...prev, id];
      }
    });
  };

  const isFavorite = (id: number) => favorites.includes(id);

  const selectForBooking = (destinationName: string) => {
    setBookingDestination(destinationName);
    toast.success(`Selected "${destinationName}"! Complete your booking details below.`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openDestinationModal = (dest: Destination) => {
    setActiveModalDestination(dest);
  };

  const closeDestinationModal = () => {
    setActiveModalDestination(null);
  };

  return (
    <TravelContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        searchQuery,
        setSearchQuery,
        selectedFilter,
        setSelectedFilter,
        bookingDestination,
        selectForBooking,
        activeModalDestination,
        openDestinationModal,
        closeDestinationModal,
        isWishlistOpen,
        setIsWishlistOpen,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravel = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error('useTravel must be used within a TravelProvider');
  }
  return context;
};
