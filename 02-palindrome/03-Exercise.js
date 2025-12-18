/**
 * ============================================================
 * 03 – Case-Insensitive Palindrome
 * ============================================================
 *
 * Write a function that checks if a word is a palindrome,
 * ignoring letter casing.
 *
 * Examples:
 *  "Ana"     → true
 *  "Oso"     → true
 *  "Casa"    → false
 *
 * Requirements:
 *  - Ignore uppercase and lowercase differences
 *  - Use manual logic
 *  - Do NOT use split(), reverse(), or join()
 *
 * Return:
 *  - true if the word is a palindrome
 *  - false otherwise
 *
 * ============================================================
 */
 function caseInsensitivePalindrome(text){
  let reversedText = "";
  let textMinus = text.toLowerCase();
  for(let i =  text.length - 1; i>=0; i--){
    reversedText+=text[i].toLowerCase();
  }
  if(reversedText === textMinus){
    return true
  }else{
    return false;
  }
}
console.log(caseInsensitivePalindrome("Ana"))