import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/travelData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-widest uppercase">Testimonials</p>
          <h2 className="section-title">What Travelers Say</h2>
          <p className="section-subtitle">
            Real stories from real travelers. See why thousands choose us for their adventures.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* Card */}
          <div className="bg-card rounded-3xl p-8 pt-12 md:p-12 md:pt-16 shadow-xl">
            <div
              key={currentIndex}
              className={`text-center ${isAnimating ? 'animate-fade-up' : ''}`}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-foreground font-display italic mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/20 mb-3"
                />
                <p className="font-semibold text-foreground text-lg">{currentTestimonial.name}</p>
                <p className="text-muted-foreground text-sm">{currentTestimonial.location}</p>
                <div className="mt-2 px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                  Trip to {currentTestimonial.trip}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10">
              <button
                onClick={goToPrev}
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
