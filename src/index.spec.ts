import { describe, it, expect } from 'vitest';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, -1)).toBe(-2);
  });
  it('should return the sum of two floating point numbers', () => {
    expect(add(1.5, 2.5)).toBe(4);
    expect(add(-1.5, 1.5)).toBe(0);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
  });
  it('should return the sum of two large numbers', () => {
    expect(add(1e6, 2e6)).toBe(3e6);
    expect(add(-1e6, 1e6)).toBe(0);
    expect(add(1e12, 2e12)).toBe(3e12);
  });
  it('should handle non-numeric inputs gracefully', () => {
    expect(() => add('a', 'b')).toThrow();
    expect(() => add(null, undefined)).toThrow();
  });
});
export function add(a: unknown, b: unknown): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}
