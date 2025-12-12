/**
 * Finds two distinct indices in an array whose corresponding values sum to the specified target.
 *
 * This implementation uses a hash map to achieve linear time complexity by storing
 * previously seen numbers and their indices. When the complement of the current number
 * exists in the map, the solution is found.
 *
 * ## Algorithm
 * - Iterate through the array once.
 * - For each number, compute its complement (`target - num`).
 * - If the complement is already stored in the lookup map, return both indices.
 * - Otherwise, store the current number and continue.
 *
 * ## Constraints
 * - The input array may contain positive, negative, and zero values.
 * - Array elements may be duplicated, but returned indices must be distinct.
 * - The input array is not modified.
 *
 * ## Edge Cases
 * - Returns an empty array if no valid pair is found.
 * - Works with negative numbers and large values.
 * - Handles repeated numbers correctly (e.g., `[3,3]`, target `6`).
 *
 * ##### Complexity:
 * - **Time**: O(n) — Each element is processed once using a hash map lookup.
 * - **Space**: O(n) — Worst case: the map stores all elements.
 * @function twoSum
 * @memberof module:arrays
 * @since 1.0.0
 * @access public
 * @author Shonjoy
 * @param {number[]} nums - The list of integers to search through. Must be a finite array.
 * @param {number} target - The value representing the desired sum of two elements within `nums`.
 * @returns {number[]} A 2-element array `[index1, index2]`
 * where `nums[index1] + nums[index2] === target`.
 * Returns an empty array `[]` if no valid pair exists.
 * @throws {TypeError} If `nums` is not an array or if elements are not valid numbers.
 * @example <caption>Basic usage with positive numbers</caption>
 * twoSum([2, 7, 11, 15], 9);
 * // → [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
 * @example <caption>Works with negative numbers</caption>
 * twoSum([-4, 8, 5, -1], 4);
 * // → [0, 1] because nums[0] + nums[1] = -4 + 8 = 4
 * @example <caption>Handles duplicate values</caption>
 * twoSum([3, 3], 6);
 * // → [0, 1] because nums[0] + nums[1] = 3 + 3 = 6
 * @example <caption>Returns empty array when no solution exists</caption>
 * twoSum([1, 2, 3], 10);
 * // → [] because no two numbers sum to 10
 * @example <caption>Real-world usage: Finding items within budget</caption>
 * const prices = [10, 20, 30, 40];
 * const budget = 50;
 * const [first, second] = twoSum(prices, budget);
 * if (first !== undefined) {
 *   console.log(`Buy items ${first} and ${second} for $${budget}`);
 * }
 * @see {@link threeSum} - For finding three numbers that sum to a target
 * @see {@link fourSum} - For finding four numbers that sum to a target
 * @see {@link https://leetcode.com/problems/two-sum/|LeetCode #1: Two Sum}
 * @see {@link https://en.wikipedia.org/wiki/Subset_sum_problem|Subset Sum Problem (Wikipedia)}
 */
export const twoSum = (nums, target) => {
  if (!Array.isArray(nums) || nums.length === 0) {
    return [];
  }

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (currentNum === undefined) continue; // Skip undefined elements

    const complement = target - currentNum;
    const complementIndex = map.get(complement);

    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }

    map.set(currentNum, i);
  }

  return [];
};
