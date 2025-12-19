/**
 * ============================================================
 * 11 – Palindrome Ignoring Spaces
 * ============================================================
 *
 * Write a function that checks if a sentence is a palindrome
 * ignoring spaces.
 *
 * Example:
 *  "anita lava la tina" → true
 *  "hola mundo"        → false
 *
 * Requirements:
 *  - Ignore spaces
 *  - Use manual logic
 *  - Do NOT use split(), reverse(), join(), or replace()
 *
 * ============================================================
 */
function isPalindromeIgnoringSpaces(text){
  let noSpacesString = "";
  let reversednoSpacesString = "";
  
  for(let i = 0; i<text.length; i++){
    let words = text[i]
    if( words !== " "){
      noSpacesString+=words;
    }
  }
  
  for(let k = noSpacesString.length - 1; k>=0; k--){
    reversednoSpacesString+=noSpacesString[k];
  }
  
  return reversednoSpacesString=== noSpacesString;

}
console.log(isPalindromeIgnoringSpaces("anita lava la tina"))
