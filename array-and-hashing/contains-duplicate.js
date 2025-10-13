/**
 * PROBLEM: Contains Duplicate
 *
 * Link: https://neetcode.io/problems/duplicate-integer
 * Difficulty: Easy
 * Category: Arrays & Hashing
 *
 * Description:
 * Given an integer array nums, return true if any value appears more than
 * once in the array, otherwise return false.
 *
 * Examples:
 * Input: nums = [1, 2, 3, 3]
 * Output: true
 *
 * Input: nums = [1, 2, 3, 4]
 * Output: false
 */

/**
 * COMPLEXITY ANALYSIS:
 * Time Complexity: O(n) - We iterate through the array once
 * Space Complexity: O(n) - In worst case, we store all elements in the Set
 */

/**
 * APPROACH:
 * Why Set?
 * - Set provides O(1) lookup time for checking if an element exists
 * - Set automatically handles uniqueness
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const numsChecked = new Set();
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (numsChecked.has(num)) {
        return true;
      }
      numsChecked.add(num);
    }
    return false;
  }
}

const solution = new Solution();

// Test Case 1: Array with duplicates
console.log("Test 1:", solution.hasDuplicate([1, 2, 3, 3])); // Expected: true

// Test Case 2: Array without duplicates
console.log("Test 2:", solution.hasDuplicate([1, 2, 3, 4])); // Expected: false
