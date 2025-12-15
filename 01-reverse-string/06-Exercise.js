/**
 * Exercise 06 – Reverse Ignoring Spaces (Compact)
 *
 * Description:
 * Write a function reverseIgnoringSpaces(text) that reverses the string
 * but completely ignores spaces. The final result must contain no spaces.
 *
 * Technique:
 * 1. Traverse the string and collect ONLY non-space characters.
 * 2. Reverse those characters manually (without using reverse() or split()).
 * 3. Return the reversed compact string.
 *
 * Rules:
 * • Do NOT use split(), reverse(), or join().
 * • Spaces must be removed completely.
 * • Only characters that are NOT spaces should appear in the output.
 *
 * Example:
 * Input:  "hola mundo"
 * Letters collected: "holamundo"
 * Reversed:          "odnumaloh"
 * Output: "odnumaloh"
 *
 * More Examples:
 * reverseIgnoringSpaces("a b c")     → "cba"
 * reverseIgnoringSpaces("hello world") → "dlrowolleh"
 */
function reverseIgnoringSpaces(text){
  let reverseString = "";
  for(let i = text.length -1; i>=0; i--){
    let ch = text[i].toLowerCase();
    if(ch >="a" && ch<="z"){
      reverseString+=ch;
    }
  }
  return reverseString;
}
console.log(reverseIgnoringSpaces("hola mundo"))