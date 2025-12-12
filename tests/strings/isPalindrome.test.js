import { describe, expect, it } from 'vitest';

import { isPalindrome } from '@/src/strings/isPalindrome';

describe('isPalindrome', () => {
  describe('Basic palindrome checks', () => {
    it('should return true for simple palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    it('should return true for single word palindrome', () => {
      expect(isPalindrome('noon')).toBe(true);
      expect(isPalindrome('level')).toBe(true);
      expect(isPalindrome('kayak')).toBe(true);
    });

    it('should return false for non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
      expect(isPalindrome('javascript')).toBe(false);
    });
  });

  describe('Case sensitivity', () => {
    it('should be case-insensitive', () => {
      expect(isPalindrome('RaceCar')).toBe(true);
      expect(isPalindrome('Level')).toBe(true);
      expect(isPalindrome('NOON')).toBe(true);
    });

    it('should handle mixed case', () => {
      expect(isPalindrome('AbCbA')).toBe(true);
      expect(isPalindrome('TaCoCaT')).toBe(true);
    });
  });

  describe('Spaces and punctuation', () => {
    it('should ignore spaces', () => {
      expect(isPalindrome('race car')).toBe(true);
      expect(isPalindrome('taco cat')).toBe(true);
    });

    it('should ignore punctuation', () => {
      expect(isPalindrome('race-car')).toBe(true);
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    it('should handle complex punctuation and spaces', () => {
      expect(isPalindrome("Madam, I'm Adam")).toBe(true);
      expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
      expect(isPalindrome("No 'x' in Nixon")).toBe(true);
    });
  });

  describe('Edge cases', () => {
    it('should return true for empty string', () => {
      expect(isPalindrome('')).toBe(true);
    });

    it('should return true for single character', () => {
      expect(isPalindrome('a')).toBe(true);
      expect(isPalindrome('Z')).toBe(true);
      expect(isPalindrome('5')).toBe(true);
    });

    it('should return true for strings with only spaces', () => {
      expect(isPalindrome('   ')).toBe(true);
    });

    it('should return true for strings with only special characters', () => {
      expect(isPalindrome('!!!')).toBe(true);
      expect(isPalindrome('...')).toBe(true);
    });
  });

  describe('Numbers in strings', () => {
    it('should handle numeric palindromes', () => {
      expect(isPalindrome('12321')).toBe(true);
      expect(isPalindrome('1001')).toBe(true);
    });

    it('should handle alphanumeric palindromes', () => {
      expect(isPalindrome('a1b1a')).toBe(true);
      expect(isPalindrome('1a2a1')).toBe(true);
    });

    it('should return false for non-palindromic numbers', () => {
      expect(isPalindrome('12345')).toBe(false);
    });
  });

  describe('Type validation', () => {
    it('should throw TypeError for non-string input', () => {
      // @ts-ignore
      expect(() => isPalindrome(123)).toThrow(TypeError);
      // @ts-ignore
      expect(() => isPalindrome(null)).toThrow(TypeError);
      // @ts-ignore
      expect(() => isPalindrome(undefined)).toThrow(TypeError);
      // @ts-ignore
      expect(() => isPalindrome([])).toThrow(TypeError);
      // @ts-ignore
      expect(() => isPalindrome({})).toThrow(TypeError);
    });

    it('should have correct error message', () => {
      // @ts-ignore
      expect(() => isPalindrome(123)).toThrow('Input must be a string');
    });
  });

  describe('Long palindromes', () => {
    it('should handle longer palindromes', () => {
      expect(isPalindrome('abccba')).toBe(true);
      expect(isPalindrome('abcdcba')).toBe(true);
    });

    it('should handle very long palindromes', () => {
      // This IS a palindrome: aaa...aaa bbb...bbb aaa...aaa
      const symmetricString =
        'a'.repeat(1000) + 'b'.repeat(1000) + 'a'.repeat(1000);
      expect(isPalindrome(symmetricString)).toBe(true);

      // This is NOT a palindrome: aaa...aaa bbb...bbb ccc...ccc
      const nonPalindrome =
        'a'.repeat(1000) + 'b'.repeat(1000) + 'c'.repeat(1000);
      expect(isPalindrome(nonPalindrome)).toBe(false);

      // Single character in middle
      const singleMiddle = `${'a'.repeat(1000)}b${'a'.repeat(1000)}`;
      expect(isPalindrome(singleMiddle)).toBe(true);
    });
  });

  describe('Real-world examples', () => {
    it('should validate common palindrome phrases', () => {
      expect(isPalindrome('Never odd or even')).toBe(true);
      expect(isPalindrome('Do geese see God?')).toBe(true);
      expect(isPalindrome('Mr. Owl ate my metal worm')).toBe(true);
    });

    it('should reject non-palindrome phrases', () => {
      expect(isPalindrome('This is not a palindrome')).toBe(false);
      expect(isPalindrome('Hello, World!')).toBe(false);
    });
  });

  describe('Unicode and special characters', () => {
    it('should handle accented characters by ignoring them', () => {
      // Accented characters will be removed by the regex
      expect(isPalindrome('café')).toBe(false); // 'cf' is not a palindrome
    });

    it('should handle emojis by ignoring them', () => {
      expect(isPalindrome('a😊a')).toBe(true); // Only 'aa' is checked
      expect(isPalindrome('😊')).toBe(true); // Empty after cleaning
    });
  });
});
