import { X, Star, MapPin, Clock, Calendar, Check, Heart } from 'lucide-react';
import { Destination } from '../data/travelData';
import { useTravel } from '../context/TravelContext';

interface DestinationModalProps {
  destination: Destination;
  onClose: () => void;
}

const DestinationModal = ({ destination, onClose }: DestinationModalProps) => {
  const { isFavorite, toggleFavorite, selectForBooking } = useTravel();
  const favorite = isFavorite(destination.id);

  const handleBookNow = () => {
    onClose();
    selectForBooking(destination.name);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-card rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl">
        {/* Top Action Buttons */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <button
            onClick={() => toggleFavorite(destination.id)}
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
              favorite ? 'bg-primary text-primary-foreground' : 'bg-black/30 text-white hover:bg-black/50'
            }`}
            title={favorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="relative h-72 md:h-96">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 text-white/80 mb-2">
              <MapPin className="w-4 h-4" />
              <span>{destination.country}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              {destination.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Meta Row */}
          <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-semibold text-foreground">{destination.rating}</span>
              <span className="text-muted-foreground">({destination.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>{destination.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>Best: {destination.bestTime}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground leading-relaxed mb-6">
            {destination.description}
          </p>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {destination.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trip Types */}
          <div className="mb-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Perfect For
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.type.map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm capitalize"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-muted rounded-2xl">
            <div>
              <p className="text-muted-foreground text-sm">Starting from</p>
              <p className="text-3xl font-bold text-foreground">
                ${destination.price}
                <span className="text-base font-normal text-muted-foreground"> / person</span>
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button onClick={onClose} className="btn-outline flex-1 md:flex-none">
                Close
              </button>
              <button onClick={handleBookNow} className="btn-primary flex-1 md:flex-none">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;
