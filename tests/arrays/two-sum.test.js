import { describe, expect, it } from 'vitest';

import { twoSum } from '@/src/arrays/two-sum';

describe('twoSum', () => {
  it('should return indices of two numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should work with negative numbers', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('should work with duplicates', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should return empty array when no solution', () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });
});
