/**
 * ============================================================
 * 12 – Palindrome Sentence (Ignore Spaces + Case)
 * ============================================================
 *
 * Write a function that checks if a sentence is a palindrome
 * ignoring spaces and letter casing.
 *
 * Example:
 *  "Ana lava la tina" → true
 *  "Hola Mundo"      → false
 *
 * Requirements:
 *  - Ignore spaces
 *  - Ignore uppercase/lowercase differences
 *  - Use manual logic
 *  - Do NOT use split(), reverse(), join(), or replace()
 *
 * ============================================================
 */
function isPalindromeIgnoringSpaces(text){
 let noSpacesString = "";
 let ReversedNoSpacesString = "";
 
 for(let i = 0; i<text.length; i++){
   let words = text[i].toLowerCase();
   if(words !== " "){
     noSpacesString+=words;
   }
 }
   for(let k = noSpacesString.length -1; k>=0; k--){
     ReversedNoSpacesString+=noSpacesString[k]
   }
 return ReversedNoSpacesString === noSpacesString

}
console.log(isPalindromeIgnoringSpaces("Anita lava la tina"))
