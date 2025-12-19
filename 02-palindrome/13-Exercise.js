/**
 * ============================================================
 * 13 – Palindrome Ignoring Special Characters
 * ============================================================
 *
 * Write a function that checks if a sentence is a palindrome
 * ignoring spaces, special characters, and letter casing.
 *
 * Only letters (a–z) should be considered.
 *
 * Example:
 *  "A man, a plan, a canal: Panama" → true
 *  "Hello, World!"                  → false
 *
 * Requirements:
 *  - Ignore spaces
 *  - Ignore special characters
 *  - Ignore uppercase/lowercase differences
 *  - Use manual logic
 *  - Do NOT use regex or string helpers
 *
 * ============================================================
 */
 function isPalindromeIgnoringSpecialChars(text){
  let noSpacesString = "";
  let reversedNoSpacesString = "";
  for(let i = 0; i<text.length; i++){
    let words = text[i].toLowerCase();
    if(words >= "a" && words <= "z"){
        noSpacesString+=words;
      }

  }
    for(let k = noSpacesString.length -1; k>=0; k--){
    reversedNoSpacesString+=noSpacesString[k]
    }
  return reversedNoSpacesString === noSpacesString 
}
console.log(isPalindromeIgnoringSpecialChars("A man, a plan, a canal: Panama"))
