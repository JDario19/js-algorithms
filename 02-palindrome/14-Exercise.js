/**
 * ============================================================
 * 14 – Two Pointers Palindrome (Optimized with for)
 * ============================================================
 *
 * Write a function that checks if a sentence is a palindrome
 * ignoring spaces, special characters, and letter casing.
 *
 * This solution must use the two-pointer technique
 * implemented with a single for loop.
 *
 * Do NOT build a cleaned string.
 * Do NOT build a reversed string.
 *
 * Example:
 *  "A man, a plan, a canal: Panama" → true
 *  "Hello, World!"                  → false
 *
 * Requirements:
 *  - Use a for loop with two pointers (left / right)
 *  - Skip non-letter characters manually
 *  - Compare letters case-insensitively
 *  - Do NOT use while
 *  - Do NOT use regex or replace()
 *
 * ============================================================
 */
function isPalindromeTwoPointers(text) {

    for (let left = 0, right = text.length - 1; left < right; left++, right--) {
        let leftChar = text[left].toLowerCase();
        let rightChar = text[right].toLowerCase();
        if (leftChar < "a" || leftChar > "z") {
            right++;     // cancela right--
            continue;
        }
        if (rightChar < "a" || rightChar > "z") {
            left--;      // cancela left++
            continue;
        }
        if (leftChar !== rightChar) {
            return false;
        }
    }
    return true;
}
console.log(isPalindromeTwoPointers("A man, a plan, a canal: Panama"));
