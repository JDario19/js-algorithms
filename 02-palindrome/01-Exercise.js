/**
 * ============================================================
 * 01 – Basic Palindrome
 * ============================================================
 *
 * Write a function that checks if a word is a palindrome.
 *
 * A palindrome reads the same forward and backward.
 *
 * Examples:
 *  "ana"   → true
 *  "oso"   → true
 *  "casa"  → false
 *
 * Requirements:
 *  - Use manual logic only
 *  - Use a for loop
 *  - Do NOT use split(), reverse(), or join()
 *
 * Return:
 *  - true if the word is a palindrome
 *  - false otherwise
 *
 * ============================================================
 */
function PolindromeCheck(text){
  let reversedText = "";
  for(let i = text.length -1; i>=0; i--){
    reversedText+=text[i]
  }
  return reversedText===text;
}
console.log(PolindromeCheck("ana"));