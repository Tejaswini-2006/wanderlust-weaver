export interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  bestTime: string;
  type: ('adventure' | 'romantic' | 'family' | 'solo' | 'cultural')[];
  description: string;
  highlights: string[];
}

export interface Package {
  id: number;
  name: string;
  destinations: string[];
  price: number;
  originalPrice: number;
  duration: string;
  includes: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  trip: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
    price: 1299,
    rating: 4.9,
    reviews: 2847,
    duration: "5-7 days",
    bestTime: "April - October",
    type: ["romantic", "cultural"],
    description: "Iconic white-washed buildings with stunning sunset views over the Aegean Sea.",
    highlights: ["Oia Sunset", "Wine Tasting", "Volcanic Beaches", "Ancient Akrotiri"]
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    price: 899,
    rating: 4.8,
    reviews: 4521,
    duration: "7-10 days",
    bestTime: "April - October",
    type: ["adventure", "solo", "romantic"],
    description: "Tropical paradise with ancient temples, rice terraces, and vibrant culture.",
    highlights: ["Ubud Rice Terraces", "Temple Tours", "Surf Lessons", "Mount Batur Sunrise"]
  },
  {
    id: 3,
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
    price: 1899,
    rating: 4.9,
    reviews: 1923,
    duration: "5-8 days",
    bestTime: "December - March, June - September",
    type: ["adventure", "family"],
    description: "Majestic mountain peaks, pristine lakes, and world-class skiing.",
    highlights: ["Matterhorn Views", "Scenic Train Rides", "Skiing", "Lake Geneva"]
  },
  {
    id: 4,
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    price: 1599,
    rating: 4.8,
    reviews: 3156,
    duration: "5-7 days",
    bestTime: "March - May, October - November",
    type: ["cultural", "solo"],
    description: "Ancient temples, traditional gardens, and authentic Japanese culture.",
    highlights: ["Fushimi Inari Shrine", "Geisha District", "Bamboo Forest", "Tea Ceremony"]
  },
  {
    id: 5,
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800",
    price: 1449,
    rating: 4.9,
    reviews: 2089,
    duration: "4-6 days",
    bestTime: "May - September",
    type: ["adventure", "cultural"],
    description: "Mysterious ancient Incan citadel nestled high in the Andes mountains.",
    highlights: ["Inca Trail Trek", "Sacred Valley", "Cusco City", "Rainbow Mountain"]
  },
  {
    id: 6,
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    price: 2499,
    rating: 4.9,
    reviews: 1876,
    duration: "5-7 days",
    bestTime: "November - April",
    type: ["romantic", "family"],
    description: "Crystal clear waters, overwater villas, and pristine white sand beaches.",
    highlights: ["Overwater Bungalows", "Snorkeling", "Dolphin Watching", "Spa Retreats"]
  },
  {
    id: 7,
    name: "Iceland",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800",
    price: 1799,
    rating: 4.8,
    reviews: 2234,
    duration: "6-9 days",
    bestTime: "June - August, September - March (Northern Lights)",
    type: ["adventure", "solo"],
    description: "Land of fire and ice with geysers, waterfalls, and the Northern Lights.",
    highlights: ["Northern Lights", "Golden Circle", "Blue Lagoon", "Glacier Hiking"]
  },
  {
    id: 8,
    name: "Morocco",
    country: "Morocco",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800",
    price: 999,
    rating: 4.7,
    reviews: 1654,
    duration: "5-8 days",
    bestTime: "March - May, September - November",
    type: ["cultural", "adventure", "family"],
    description: "Vibrant souks, ancient medinas, and stunning Sahara Desert landscapes.",
    highlights: ["Marrakech Medina", "Sahara Camping", "Atlas Mountains", "Fes Tanneries"]
  }
];

export const packages: Package[] = [
  {
    id: 1,
    name: "European Dream",
    destinations: ["Paris", "Rome", "Barcelona"],
    price: 2999,
    originalPrice: 3999,
    duration: "12 days",
    includes: ["5-star Hotels", "Guided Tours", "Flights", "Daily Breakfast"],
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800"
  },
  {
    id: 2,
    name: "Asian Explorer",
    destinations: ["Tokyo", "Kyoto", "Bangkok", "Singapore"],
    price: 3499,
    originalPrice: 4499,
    duration: "14 days",
    includes: ["4-star Hotels", "Local Guides", "Train Passes", "Some Meals"],
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800"
  },
  {
    id: 3,
    name: "Island Paradise",
    destinations: ["Bali", "Maldives", "Phuket"],
    price: 3999,
    originalPrice: 5299,
    duration: "10 days",
    includes: ["Luxury Resorts", "Spa Treatments", "Water Activities", "All Meals"],
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    text: "Absolutely incredible experience! The trip to Santorini exceeded all my expectations. Every detail was perfectly planned.",
    trip: "Santorini, Greece"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    text: "The Smart Trip Planner helped us find the perfect destinations for our family. Kids loved Bali!",
    trip: "Bali, Indonesia"
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
    text: "From booking to the trip itself, everything was seamless. The Maldives were a dream come true for our honeymoon.",
    trip: "Maldives"
  },
  {
    id: 4,
    name: "David Kim",
    location: "Seoul, South Korea",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    rating: 5,
    text: "Best travel experience ever! The Swiss Alps tour was breathtaking. Will definitely book again.",
    trip: "Swiss Alps"
  }
];

export const tripTypes = [
  { id: 'solo', label: 'Solo Adventure', icon: '🎒', description: 'Freedom to explore at your own pace' },
  { id: 'family', label: 'Family Fun', icon: '👨‍👩‍👧‍👦', description: 'Kid-friendly destinations with activities for all' },
  { id: 'adventure', label: 'Adventure', icon: '🏔️', description: 'Thrilling experiences and outdoor activities' },
  { id: 'romantic', label: 'Honeymoon', icon: '💑', description: 'Romantic getaways for couples' },
  { id: 'cultural', label: 'Cultural', icon: '🏛️', description: 'Immerse in local traditions and history' }
];

export const budgetRanges = [
  { id: 'budget', label: 'Budget', range: '$500 - $1000', max: 1000 },
  { id: 'moderate', label: 'Moderate', range: '$1000 - $2000', max: 2000 },
  { id: 'luxury', label: 'Luxury', range: '$2000+', max: Infinity }
];

export const durationOptions = [
  { id: 'short', label: '3-5 days', min: 3, max: 5 },
  { id: 'medium', label: '6-9 days', min: 6, max: 9 },
  { id: 'long', label: '10+ days', min: 10, max: 30 }
];

export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", alt: "Mountain Lake", location: "Swiss Alps" },
  { id: 2, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800", alt: "Tropical Resort", location: "Maldives" },
  { id: 3, src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800", alt: "Venice Canals", location: "Italy" },
  { id: 4, src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800", alt: "Japanese Temple", location: "Kyoto" },
  { id: 5, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", alt: "Ocean View", location: "Caribbean" },
  { id: 6, src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", alt: "Eiffel Tower", location: "Paris" },
  { id: 7, src: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800", alt: "Safari", location: "Kenya" },
  { id: 8, src: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800", alt: "Beach Sunset", location: "Thailand" }
];
