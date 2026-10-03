import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { TravelProvider, useTravel } from '../context/TravelContext';
import React from 'react';

describe('TravelContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <TravelProvider>{children}</TravelProvider>
  );

  it('should initialize with empty favorites if localStorage is clean', () => {
    const { result } = renderHook(() => useTravel(), { wrapper });
    expect(result.current.favorites).toEqual([]);
  });

  it('should toggle favorite status for a destination', () => {
    const { result } = renderHook(() => useTravel(), { wrapper });

    act(() => {
      result.current.toggleFavorite(1);
    });

    expect(result.current.isFavorite(1)).toBe(true);
    expect(result.current.favorites).toContain(1);

    act(() => {
      result.current.toggleFavorite(1);
    });

    expect(result.current.isFavorite(1)).toBe(false);
    expect(result.current.favorites).not.toContain(1);
  });

  it('should update search query and selected filter', () => {
    const { result } = renderHook(() => useTravel(), { wrapper });

    act(() => {
      result.current.setSearchQuery('Bali');
      result.current.setSelectedFilter('adventure');
    });

    expect(result.current.searchQuery).toBe('Bali');
    expect(result.current.selectedFilter).toBe('adventure');
  });

  it('should handle booking selection', () => {
    const { result } = renderHook(() => useTravel(), { wrapper });

    act(() => {
      result.current.selectForBooking('Santorini');
    });

    expect(result.current.bookingDestination).toBe('Santorini');
  });
});
