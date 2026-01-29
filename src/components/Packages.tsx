import { Check, ArrowRight } from 'lucide-react';
import { packages } from '../data/travelData';

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-widest uppercase">Special Offers</p>
          <h2 className="section-title">Exclusive Packages</h2>
          <p className="section-subtitle">
            Save big with our bundled travel packages. Everything you need for an unforgettable journey.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`card-travel overflow-hidden ${
                index === 1 ? 'lg:scale-105 ring-2 ring-primary' : ''
              }`}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  🔥 Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-56">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  Save ${pkg.originalPrice - pkg.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.destinations.map((dest) => (
                    <span
                      key={dest}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                    >
                      {dest}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {pkg.duration} • All inclusive
                </p>

                {/* Includes */}
                <div className="space-y-2 mb-6">
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-3xl font-bold text-foreground">${pkg.price}</span>
                  <span className="text-muted-foreground line-through">${pkg.originalPrice}</span>
                  <span className="text-sm text-muted-foreground">/ person</span>
                </div>

                {/* CTA */}
                <button className={`w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                  index === 1
                    ? 'btn-primary'
                    : 'btn-outline'
                }`}>
                  Book Package
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
