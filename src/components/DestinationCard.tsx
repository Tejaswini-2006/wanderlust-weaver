import { Star, MapPin, Clock, Calendar, Heart } from 'lucide-react';
import { Destination } from '../data/travelData';
import { useTravel } from '../context/TravelContext';

interface DestinationCardProps {
  destination: Destination;
  onClick: () => void;
}

const DestinationCard = ({ destination, onClick }: DestinationCardProps) => {
  const { isFavorite, toggleFavorite } = useTravel();
  const favorite = isFavorite(destination.id);

  return (
    <div
      onClick={onClick}
      className="card-travel cursor-pointer group flex flex-col justify-between h-full"
    >
      <div>
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Heart / Wishlist Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(destination.id);
            }}
            className={`absolute top-4 left-4 p-2 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
              favorite ? 'bg-primary text-primary-foreground' : 'bg-black/30 text-white hover:bg-black/50'
            }`}
            aria-label="Save destination"
            title={favorite ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
          </button>

          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            From ${destination.price}
          </div>

          {/* Location */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{destination.country}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {destination.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {destination.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{destination.duration}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="font-semibold text-foreground">{destination.rating}</span>
              <span className="text-muted-foreground">({destination.reviews})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Best Time Badge */}
      <div className="px-5 pb-5 pt-0 flex items-center gap-2">
        <Calendar className="w-4 h-4 text-accent" />
        <span className="text-xs text-muted-foreground">Best: {destination.bestTime}</span>
      </div>
    </div>
  );
};

export default DestinationCard;
