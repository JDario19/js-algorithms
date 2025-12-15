/**
 * Exercise 08 – Reverse Only Letters & Preserve Non-Letter Characters
 *
 * Description:
 * Write a function reverseOnlyLetters(text) that reverses ONLY the letters
 * in the string, while keeping all non-letter characters (numbers, symbols,
 * punctuation) in their original positions.
 *
 * Technique:
 * 1. Extract ONLY the letters (a-z or A-Z) into an array.
 * 2. Reverse those letters manually (no reverse()).
 * 3. Rebuild the final string:
 *      - If the original character is NOT a letter, keep it in place.
 *      - If it IS a letter, replace it with the next reversed letter.
 *
 * Rules:
 * • Do NOT use split(), join(), or reverse().
 * • Must detect letters using character comparisons.
 * • Non-letter characters must NOT move.
 *
 * Example:
 * Input:     "a1b2c!"
 * Letters:   ['a','b','c']
 * Reversed:  ['c','b','a']
 * Output:    "c1b2a!"
 *
 * More Examples:
 * reverseOnlyLetters("Q1w2E!") → "E1w2Q!"
 * reverseOnlyLetters("ab-cd")  → "dc-ba"
 * reverseOnlyLetters("Te3s!t") → "tE3s!T"
 */
function reverseOnlyLetters(text){
  let reverseLetter = "";
  for(let i = text.length - 1; i >= 0; i--){
    let ch = text[i];
    if((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")){
      reverseLetter+=ch
    }
  }
  let result = "";
  let index = 0;
  for(let i = 0; i <text.length; i++){
      let ch = text[i]  
      if((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")){
      result+=reverseLetter[index];
      index++
    }else{
      result+=text[i]
    }
  }
  return result
  
}
console.log(reverseOnlyLetters("a1b2c"))