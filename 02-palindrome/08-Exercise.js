/**
 * ============================================================
 * 08 – Palindrome for Single Character
 * ============================================================
 *
 * Write a function that checks if a string is a palindrome.
 *
 * A string with a single character should be considered
 * a palindrome.
 *
 * Examples:
 *  "a"     → true
 *  "z"     → true
 *  "ana"   → true
 *  "casa"  → false
 *
 * Requirements:
 *  - Handle strings with length 0 or 1 explicitly
 *  - Use manual logic
 *  - Use a for loop for comparison
 *
 * ============================================================
 */
function isPolindrome(text){
  if(text.length <= 1) return true;
  
  for(let i = 0; i<text.length /2;i++){
    if(text[i] !== text[text.length -1 -i]){
      return false;
    }
  }
  return true
}
console.log(isPolindrome("a3wa"));