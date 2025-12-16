/**
 * Exercise 15 — Check If Reverse Is Equal (Palindrome Style)
 *
 * Description:
 * Write a function isReversedEqual(text) that:
 *   1. Manually builds the reverse of the string (without reverse(), split(), join()).
 *   2. Compares the reversed string to the original.
 *   3. Returns true if both are equal, false otherwise.
 *
 * Example:
 * isReversedEqual("ana") → true
 * isReversedEqual("juan") → false
 */
function isReversedEqual(text){
  let reversedText = "";
  
  for(let i = text.length -1; i>=0; i--){
    reversedText+=text[i].toLowerCase();
    
  }
  if(reversedText===text.toLowerCase()){
    return true
  }
  return false
}
console.log(isReversedEqual("Ana"))