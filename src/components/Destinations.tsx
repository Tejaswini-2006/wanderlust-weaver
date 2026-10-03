import { Search, Filter, RotateCcw } from 'lucide-react';
import { destinations, Destination } from '../data/travelData';
import DestinationCard from './DestinationCard';
import DestinationModal from './DestinationModal';
import { useTravel } from '../context/TravelContext';

const filterTypes = [
  { id: 'all', label: 'All' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'romantic', label: 'Romantic' },
  { id: 'family', label: 'Family' },
  { id: 'solo', label: 'Solo' },
  { id: 'cultural', label: 'Cultural' },
];

const Destinations = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedFilter,
    setSelectedFilter,
    activeModalDestination,
    openDestinationModal,
    closeDestinationModal,
  } = useTravel();

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === 'all' || dest.type.includes(selectedFilter as Destination['type'][number]);
    return matchesSearch && matchesFilter;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedFilter('all');
  };

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-widest uppercase">Explore</p>
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">
            Discover amazing places at exclusive deals. Choose from our hand-picked destinations around the world.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {filterTypes.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search status info if filter or search active */}
        {(searchQuery || selectedFilter !== 'all') && (
          <div className="mb-6 flex items-center justify-between bg-muted/50 px-4 py-2 rounded-xl text-sm text-muted-foreground">
            <span>
              Showing {filteredDestinations.length} destination(s)
              {searchQuery && ` for "${searchQuery}"`}
              {selectedFilter !== 'all' && ` under ${selectedFilter}`}
            </span>
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear filters
            </button>
          </div>
        )}

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {filteredDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className="opacity-0 animate-fade-up h-full"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <DestinationCard
                destination={destination}
                onClick={() => openDestinationModal(destination)}
              />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16 bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground text-lg mb-4">No destinations match your search criteria.</p>
            <button onClick={clearFilters} className="btn-primary py-2 px-6 text-sm">
              Reset Filters
            </button>
          </div>
        )}

        {/* Modal */}
        {activeModalDestination && (
          <DestinationModal
            destination={activeModalDestination}
            onClose={closeDestinationModal}
          />
        )}
      </div>
    </section>
  );
};

export default Destinations;
