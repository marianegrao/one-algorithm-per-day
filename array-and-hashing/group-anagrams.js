/**
 * PROBLEM: Group Anagrams
 *
 * Link: https://neetcode.io/problems/anagram-groups?list=neetcode150
 * Difficulty: Medium
 * Category: Arrays & Hashing
 *
 * Description:
 * Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 *
 * Examples:
 * Input: strs = ["act","pots","tops","cat","stop","hat"]
 * Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]\
 *
 * Input: strs = ["x"]
 * Output: [["x"]]
 *
 * Constraints:
 * 1 <= strs.length <= 1000.
 * 0 <= strs[i].length <= 100
 * strs[i] is made up of lowercase English letters.
 */

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];
    }
  }
}

const solution = new Solution();

console.log(
  "Test 1:",
  solution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])
); // Expected: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
console.log("Test 2:", solution.groupAnagrams(["x"])); // Expected:[["x"]]
console.log("Test 3:", solution.groupAnagrams([""])); // Expected:[[""]]
