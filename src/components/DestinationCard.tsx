import { Star, MapPin, Clock, Calendar } from 'lucide-react';
import { Destination } from '../data/travelData';

interface DestinationCardProps {
  destination: Destination;
  onClick: () => void;
}

const DestinationCard = ({ destination, onClick }: DestinationCardProps) => {
  return (
    <div
      onClick={onClick}
      className="card-travel cursor-pointer group"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          From ${destination.price}
        </div>

        {/* Location */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{destination.country}</span>
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

        {/* Best Time Badge */}
        <div className="mt-4 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-accent" />
          <span className="text-xs text-muted-foreground">Best: {destination.bestTime}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
