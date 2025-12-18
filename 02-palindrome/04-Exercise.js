/**
 * ============================================================
 * 04 – Palindrome Using For Loop Only
 * ============================================================
 *
 * Write a function that checks if a word is a palindrome
 * WITHOUT creating a reversed string.
 *
 * The function must compare characters directly using
 * a for loop and indexes.
 *
 * Examples:
 *  "ana"   → true
 *  "oso"   → true
 *  "casa"  → false
 *
 * Requirements:
 *  - Use a for loop
 *  - Compare characters manually
 *  - Do NOT build a reversed string
 *  - Do NOT use split(), reverse(), or join()
 *
 * Return:
 *  - true if the word is a palindrome
 *  - false otherwise
 *
 * ============================================================
 */
function isPolindrome(text){
  
  for(let i = 0; i < text.length / 2; i++){
    if(text[i] !== text[text.length -1 -i]){
      return false;
    }
  }
  return true;
}
console.log(isPolindrome("ana"))