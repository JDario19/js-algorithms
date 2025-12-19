/**
 * ============================================================
 * 05 – Palindrome With Early Exit
 * ============================================================
 *
 * Write a function that checks if a word is a palindrome
 * using an early-exit strategy.
 *
 * The function must stop checking as soon as a mismatch
 * is detected.
 *
 * Examples:
 *  "ana"   → true
 *  "oso"   → true
 *  "casa"  → false
 *
 * Requirements:
 *  - Use a for loop
 *  - Compare characters directly
 *  - Return false immediately on mismatch
 *  - Return true only if all comparisons pass
 *
 * ============================================================
 */
function isPolindrome(text){
  
  for(let i = 0; i <text.length /2; i++){
    if(text[i] !== text[text.length-1 -i]){
      return false;
    }
  }
  return true
}
console.log(isPolindrome("ana3"))