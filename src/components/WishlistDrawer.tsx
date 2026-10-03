import { X, Trash2, Calendar, MapPin, ArrowRight, Heart } from 'lucide-react';
import { useTravel } from '../context/TravelContext';
import { destinations } from '../data/travelData';

const WishlistDrawer = () => {
  const { favorites, toggleFavorite, isWishlistOpen, setIsWishlistOpen, selectForBooking, openDestinationModal } = useTravel();

  const savedDestinations = destinations.filter((d) => favorites.includes(d.id));

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-md bg-card h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-slide-in">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between bg-muted/30">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Heart className="w-5 h-5 fill-primary text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground">Saved Destinations</h3>
              <p className="text-xs text-muted-foreground">{savedDestinations.length} item(s) in wishlist</p>
            </div>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedDestinations.length > 0 ? (
            savedDestinations.map((dest) => (
              <div
                key={dest.id}
                className="flex gap-4 p-3 rounded-2xl bg-muted/40 border border-border/60 hover:border-primary/40 transition-all group"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    setIsWishlistOpen(false);
                    openDestinationModal(dest);
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h4
                      className="font-display font-semibold text-foreground text-base truncate cursor-pointer hover:text-primary transition-colors"
                      onClick={() => {
                        setIsWishlistOpen(false);
                        openDestinationModal(dest);
                      }}
                    >
                      {dest.name}
                    </h4>
                    <button
                      onClick={() => toggleFavorite(dest.id)}
                      className="text-muted-foreground hover:text-destructive p-1 transition-colors"
                      title="Remove from Wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {dest.country}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-bold text-primary text-sm">${dest.price}</span>
                    <button
                      onClick={() => {
                        setIsWishlistOpen(false);
                        selectForBooking(dest.name);
                      }}
                      className="btn-primary py-1 px-3 text-xs flex items-center gap-1"
                    >
                      Book <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-muted-foreground">
                <Heart className="w-8 h-8 stroke-1" />
              </div>
              <h4 className="text-lg font-display font-semibold text-foreground mb-1">Your wishlist is empty</h4>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                Click the heart icon on any destination to save it for quick access later!
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {savedDestinations.length > 0 && (
          <div className="p-6 border-t border-border bg-muted/20">
            <button
              onClick={() => {
                setIsWishlistOpen(false);
                const destSection = document.getElementById('destinations');
                if (destSection) destSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full btn-outline text-sm"
            >
              Explore More Destinations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistDrawer;
