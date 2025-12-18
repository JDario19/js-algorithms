/**
 * ============================================================
 * 02 – Palindrome Using Reverse + Compare
 * ============================================================
 *
 * Write two functions:
 *
 * 1. reverseString(text)
 *    - Reverses a string using manual logic
 *
 * 2. isPalindrome(text)
 *    - Uses reverseString to check if text is a palindrome
 *
 * Examples:
 *  "ana"    → true
 *  "oso"    → true
 *  "casa"   → false
 *
 * Requirements:
 *  - Manual loops only
 *  - No split(), reverse(), join()
 *
 * ============================================================
 */

function reverseString(text){
  let reverse = "";
  for(let i =  text.length -1; i>=0; i--){
    reverse+=text[i]
  }
  return reverse
}

function isPalindrome(text){
   let result = reverseString(text);
    return result ===text
}
console.log(isPalindrome("xasa"))
console.log(isPalindrome("ana"))