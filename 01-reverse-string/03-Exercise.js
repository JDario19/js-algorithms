/**
 * Description:
 * Write a function reverseByPrepending(text) that reverses a string by
 * reading characters from left to right and PREPENDING each character
 * to the result string.
 *
 * Technique:
 *  • Normal iteration: from index 0 to text.length - 1
 *  • But instead of appending at the end, prepend: 
 *       result = char + result
 *
 * Rules:
 *  • Do NOT use split(), reverse(), or join().
 *  • Must use a for loop from left → right.
 *
 * Example:
 * Input:  "abc"
 * Steps:
 *   result = ""
 *   read 'a' → result = "a"
 *   read 'b' → result = "b" + "a" = "ba"
 *   read 'c' → result = "c" + "ba" = "cba"
 *
 * Output: "cba"
 */
function reverseString(text){
  let reversedText = "";
  for(let i = 0; i<text.length; i++){
    reversedText = text[i] + reversedText
  }
  return reversedText;
}
console.log(reverseString("banana"))
