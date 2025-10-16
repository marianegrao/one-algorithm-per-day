/**
 * PROBLEM: Two Sum
 *
 * Link: https://neetcode.io/problems/two-integer-sum?list=neetcode150
 * Difficulty: Easy
 * Category: Arrays & Hashing
 *
 * Description:
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
 * You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
 * Return the answer with the smaller index first.
 *
 * Examples:
 * Input: nums = [3,4,5,6], target = 7
 * Output: [0,1]
 *
 * Input: nums = [4,5,6], target = 10
 * Output: [0,2]
 *
 * Constraints:
 * 2 <= nums.length <= 1000
 * -10,000,000 <= nums[i] <= 10,000,000
 * -10,000,000 <= target <= 10,000,000
 */

/**
 * COMPLEXITY ANALYSIS:
 * Time Complexity: O(n) ->  We iterate through the array once
 * Space Complexity: O (n) ->  In worst case, we store all elements in the Map
 */

/**
 * APPROACH:
 * Why hashmap?
 * It provides an efficient way to store and retrieve data
 */

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const diffMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      const currentNumber = nums[i];
      const difference = target - currentNumber;
      if (diffMap.get(difference) != undefined) {
        return [diffMap.get(difference), i];
      } else {
        diffMap.set(currentNumber, i);
      }
    }
  }
}

const solution = new Solution();

console.log("Test 1:", solution.twoSum([3, 4, 5, 6], 7)); // Expected: [0,1]. Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
console.log("Test 2:", solution.twoSum([4, 5, 6], 10)); // Expected: [0,2]
console.log("Test 3:", solution.twoSum([5, 5], 10)); // Expected: [0,1]
console.log("Test 4:", solution.twoSum([6, 5, 4], 10)); // Expected: [0,2]
