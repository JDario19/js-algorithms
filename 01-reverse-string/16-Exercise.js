/**
 * Exercise 16 — Reverse String and Count Changes
 *
 * Description:
 * 1) Reverse the string manually (without reverse(), split(), join()).
 * 2) Compare original positions vs reversed positions.
 * 3) Count how many characters changed index.
 *
 * Example:
 * Input: "ab"
 * Reversed: "ba"
 * Both characters changed → return 2
 */
function reverseAndCount(text){
  let reversed = "";
  let count = 0;
  for(let i = text.length -1; i>=0; i--){
    reversed+=text[i];
  }
  for(let i = 0; i<text.length; i++){
    if(reversed[i] != text[i]){
      count++;
    }
  }
  return count;
}
console.log(reverseAndCount("Ana"))