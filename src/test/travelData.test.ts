import { describe, it, expect } from 'vitest';
import { destinations, packages, testimonials, tripTypes, budgetRanges, durationOptions } from '../data/travelData';

describe('Travel Data', () => {
  it('should contain a list of destinations with required properties', () => {
    expect(destinations.length).toBeGreaterThan(0);
    destinations.forEach((dest) => {
      expect(dest.id).toBeDefined();
      expect(dest.name).toBeTruthy();
      expect(dest.country).toBeTruthy();
      expect(dest.image).toMatch(/^https?:\/\//);
      expect(dest.price).toBeGreaterThan(0);
      expect(dest.rating).toBeGreaterThanOrEqual(1);
      expect(dest.rating).toBeLessThanOrEqual(5);
      expect(Array.isArray(dest.type)).toBe(true);
      expect(dest.highlights.length).toBeGreaterThan(0);
    });
  });

  it('should contain special travel packages with valid discounts', () => {
    expect(packages.length).toBeGreaterThan(0);
    packages.forEach((pkg) => {
      expect(pkg.id).toBeDefined();
      expect(pkg.name).toBeTruthy();
      expect(pkg.price).toBeLessThan(pkg.originalPrice);
      expect(pkg.destinations.length).toBeGreaterThan(0);
      expect(pkg.includes.length).toBeGreaterThan(0);
    });
  });

  it('should contain customer testimonials', () => {
    expect(testimonials.length).toBeGreaterThan(0);
    testimonials.forEach((t) => {
      expect(t.name).toBeTruthy();
      expect(t.rating).toBe(5);
      expect(t.text).toBeTruthy();
    });
  });

  it('should contain trip types, budget ranges and duration options', () => {
    expect(tripTypes.length).toBe(5);
    expect(budgetRanges.length).toBe(3);
    expect(durationOptions.length).toBe(3);
  });
});
