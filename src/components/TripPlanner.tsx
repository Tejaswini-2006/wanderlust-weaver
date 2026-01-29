import { useState } from 'react';
import { Sparkles, MapPin, DollarSign, Calendar, ArrowRight } from 'lucide-react';
import { destinations, tripTypes, budgetRanges, durationOptions, Destination } from '../data/travelData';

const TripPlanner = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<Destination[]>([]);
  const [showResults, setShowResults] = useState(false);

  const generateSuggestions = () => {
    if (!selectedType || !selectedBudget || !selectedDuration) return;

    const budgetRange = budgetRanges.find(b => b.id === selectedBudget);
    const durationRange = durationOptions.find(d => d.id === selectedDuration);

    const filtered = destinations.filter((dest) => {
      const matchesType = dest.type.includes(selectedType as any);
      const matchesBudget = budgetRange && dest.price <= budgetRange.max;
      return matchesType && matchesBudget;
    });

    // Sort by rating
    const sorted = filtered.sort((a, b) => b.rating - a.rating);
    
    setSuggestions(sorted.slice(0, 3));
    setShowResults(true);
  };

  const resetPlanner = () => {
    setSelectedType(null);
    setSelectedBudget(null);
    setSelectedDuration(null);
    setSuggestions([]);
    setShowResults(false);
  };

  return (
    <section id="trip-planner" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-widest uppercase">Smart Planning</p>
          <h2 className="section-title flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10 text-primary" />
            Trip Suggestion System
          </h2>
          <p className="section-subtitle">
            Tell us your preferences and we'll find the perfect destinations for your next adventure.
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Trip Type */}
            <div className="mb-10">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                What type of trip are you planning?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {tripTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-2xl border-2 transition-all text-center group ${
                      selectedType === type.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    <span className="text-3xl block mb-2">{type.icon}</span>
                    <span className="font-medium text-foreground text-sm">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Budget */}
            <div className="mb-10">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                <DollarSign className="w-5 h-5" />
                What's your budget per person?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {budgetRanges.map((budget) => (
                  <button
                    key={budget.id}
                    onClick={() => setSelectedBudget(budget.id)}
                    className={`p-5 rounded-2xl border-2 transition-all text-left ${
                      selectedBudget === budget.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    <span className="font-semibold text-foreground text-lg">{budget.label}</span>
                    <span className="block text-muted-foreground text-sm mt-1">{budget.range}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Duration */}
            <div className="mb-10">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                <Calendar className="w-5 h-5" />
                How long is your trip?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {durationOptions.map((duration) => (
                  <button
                    key={duration.id}
                    onClick={() => setSelectedDuration(duration.id)}
                    className={`p-5 rounded-2xl border-2 transition-all text-left ${
                      selectedDuration === duration.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    <span className="font-semibold text-foreground text-lg">{duration.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <div className="text-center">
              <button
                onClick={generateSuggestions}
                disabled={!selectedType || !selectedBudget || !selectedDuration}
                className="btn-primary text-lg px-10 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
              >
                <Sparkles className="w-5 h-5" />
                Get Suggestions
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                Perfect Matches for You! 🎉
              </h3>
              <p className="text-muted-foreground">
                Based on your preferences, here are our top recommendations
              </p>
            </div>

            {suggestions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {suggestions.map((dest, index) => (
                  <div
                    key={dest.id}
                    className={`card-travel overflow-hidden ${index === 0 ? 'md:scale-105 ring-2 ring-primary' : ''}`}
                  >
                    {index === 0 && (
                      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                        ⭐ Top Pick
                      </div>
                    )}
                    <div className="relative h-48">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        ${dest.price}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mb-1">
                        <MapPin className="w-4 h-4" />
                        {dest.country}
                      </div>
                      <h4 className="text-xl font-display font-semibold text-foreground mb-2">{dest.name}</h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{dest.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-accent font-medium">{dest.bestTime}</span>
                        <button className="btn-primary text-sm py-2 px-4">View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-card rounded-2xl">
                <p className="text-muted-foreground text-lg">
                  No destinations match your criteria. Try adjusting your preferences!
                </p>
              </div>
            )}

            <div className="text-center">
              <button onClick={resetPlanner} className="btn-outline">
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TripPlanner;
