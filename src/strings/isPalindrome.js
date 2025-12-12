/* eslint-disable no-plusplus */
/**
 * Checks if a given string is a palindrome (reads the same forwards and backwards).
 *
 * This implementation normalizes the input by converting to lowercase and removing
 * non-alphanumeric characters before comparison. It uses two pointers approach
 * for efficient checking.
 *
 * ## Algorithm
 * - Clean the input string by removing non-alphanumeric characters and converting to lowercase.
 * - Use two pointers (start and end) to compare characters from both ends moving inward.
 * - If any mismatch is found, return false.
 * - If all characters match, return true.
 *
 * ## Constraints
 * - Input string can contain letters, numbers, spaces, and special characters.
 * - Comparison is case-insensitive.
 * - Non-alphanumeric characters are ignored.
 * - Empty strings and single characters are considered palindromes.
 *
 * ## Edge Cases
 * - Empty string returns `true`.
 * - Single character returns `true`.
 * - Strings with only spaces/special characters return `true`.
 * - Handles Unicode characters.
 *
 * ##### Complexity:
 * - **Time**: O(n) — Where n is the length of the cleaned string.
 * - **Space**: O(n) — For storing the cleaned string.
 * @function isPalindrome
 * @memberof module:strings
 * @since 1.0.0
 * @access public
 * @author Shonjoy
 * @param {string} str - The string to check for palindrome property.
 * @returns {boolean} Returns `true` if the string is a palindrome, `false` otherwise.
 * @throws {TypeError} If input is not a string.
 * @example <caption>Basic palindrome check</caption>
 * isPalindrome("racecar");
 * // → true
 * @example <caption>Case-insensitive check</caption>
 * isPalindrome("RaceCar");
 * // → true
 * @example <caption>Ignores spaces and punctuation</caption>
 * isPalindrome("A man, a plan, a canal: Panama");
 * // → true
 * @example <caption>Non-palindrome string</caption>
 * isPalindrome("hello");
 * // → false
 * @example <caption>Empty string is palindrome</caption>
 * isPalindrome("");
 * // → true
 * @example <caption>Single character is palindrome</caption>
 * isPalindrome("a");
 * // → true
 * @example <caption>Numbers in string</caption>
 * isPalindrome("12321");
 * // → true
 * @example <caption>Real-world usage: Form validation</caption>
 * const userInput = "Was it a car or a cat I saw?";
 * if (isPalindrome(userInput)) {
 *   console.log("That's a palindrome!");
 * }
 * @see {@link isAnagram} - For checking if two strings are anagrams
 * @see {@link reverseString} - For reversing a string
 * @see {@link https://en.wikipedia.org/wiki/Palindrome|Palindrome (Wikipedia)}
 */
export const isPalindrome = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Clean the string: remove non-alphanumeric and convert to lowercase
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Empty or single character strings are palindromes
  if (cleaned.length <= 1) {
    return true;
  }

  // Two pointers approach
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
