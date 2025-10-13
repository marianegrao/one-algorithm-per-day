/**
 * PROBLEM: Valid Anagram
 *
 * Link: https://neetcode.io/problems/is-anagram
 * Difficulty: Easy
 * Category: Arrays & Hashing
 *
 * Description:
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 *
 * Examples:
 * Input: s = "racecar", t = "carrace"
 * Output: true
 *
 * Input: s = "jar", t = "jam"
 * Output: false
 *
 * Constraints:
 * - s and t consist of lowercase English letters.
 */

/**
 * COMPLEXITY ANALYSIS:
 * Time Complexity: O(n) - We iterate through the string and hashmap once [O(n) + O(n) = O(n)]
 * Space Complexity: O(n) - In the worst case, we store all characters in the hashmap
 *  ps: If we consider a fixed alphabet - American lowercase letters - the complexity will be constant (26 characters) [O(1)]
 */

/**
 * APPROACH:
 * Why hash map?
 * - Set provides O(1) lookup time for checking if an element exists
 * - Set automatically handles uniqueness
 */

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
      const sItem = s[i];
      const tItem = t[i];

      sMap.set(sItem, (sMap.get(sItem) || 0) + 1);
      tMap.set(tItem, (tMap.get(tItem) || 0) + 1);
    }

    for (const [key, value] of sMap) {
      if (tMap.get(key) !== value) {
        return false;
      }
    }

    return true;
  }
}

const solution = new Solution();

// Test Case 1: Is an anagram
console.log("Test 1:", solution.isAnagram("racecar", "carrace")); // Expected: true

// Test Case 2: Is not an anagram
console.log("Test 2:", solution.isAnagram("jar", "jam")); // Expected: false

// Test Case 3: Is not an anagram
console.log("Test 3:", solution.isAnagram("xx", "x")); // Expected: false

// Test Case 4: Is not an anagram
console.log("Test 4:", solution.isAnagram("bbcc", "ccbc")); // Expected: false
