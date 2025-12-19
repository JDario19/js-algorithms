/**
 * ============================================================
 * 07 – Palindrome for Empty String
 * ============================================================
 *
 * Write a function that checks if a string is a palindrome.
 *
 * An empty string ("") should be considered a palindrome.
 *
 * Examples:
 *  ""       → true
 *  "a"      → true
 *  "ana"    → true
 *  "casa"   → false
 *
 * Requirements:
 *  - Handle empty string explicitly
 *  - Use manual logic
 *  - Do NOT use split(), reverse(), or join()
 *
 * ============================================================
 */
function isPolindrome(text){
  if(text === "")return true;
  for(let i = 0; i<text.length /2; i++){
    if(text[i] !== text[text.length -1 -i]){
      return false;
    }
  }
  return true;
}
console.log(isPolindrome(""));