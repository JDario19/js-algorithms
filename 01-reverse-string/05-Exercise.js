/**
 * Exercise 05 – Reverse Only Letters (Keep Spaces Positions)
 *
 * Description:
 * Write a function reverseOnlyLetters(text) that reverses ONLY the letters
 * in the string, while keeping all spaces in their original positions.
 *
 * Technique:
 * 1. Extract all letters from the string into an array.
 * 2. Reverse that array manually (without using reverse()).
 * 3. Rebuild the final string:
 *      - If a character in the original string is a space, keep the space.
 *      - If it is a letter, replace it with the next reversed letter.
 *
 * Rules:
 * • Do NOT use split(), join(), or reverse().
 * • Must detect letters using a-z or A-Z (case-insensitive).
 * • Spaces must NOT move from their original positions.
 *
 * Example:
 * Input:     "a b c"
 * Letters:   ['a', 'b', 'c']
 * Reversed:  ['c', 'b', 'a']
 * Output:    "c b a"
 *
 * More Examples:
 * reverseOnlyLetters("abc def") → "fed cba"
 * reverseOnlyLetters("hello world") → "dlrow olleh"
 */
function reverseLettersNoSpaces(text){
  let newReversedArray = [];
  for(let i = text.length -1; i>=0; i--){
    let ch = text[i].toLowerCase()
    if(ch >="a" && ch<="z"){
    newReversedArray.push(ch)
  }
  }
  let result = "";
  let index = 0;
  for(let i = 0; i<text.length; i++){
    let ch = text[i].toLowerCase()
    if(ch >= "a" && ch<="z" ){
      result+=newReversedArray[index];
      index++
    }else{
      result+=text[i]
    }
  }
  return result;
}
console.log(reverseLettersNoSpaces("a b c"))