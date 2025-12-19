/**
 * ============================================================
 * 09.1 – Return Only Palindrome Words
 * ============================================================
 *
 * Write a function that receives an array of strings and
 * returns a new array containing ONLY the words that are
 * palindromes.
 *
 * A palindrome is a word that reads the same forward and
 * backward.
 *
 * Example:
 *  Input:  ["ana", "oso", "casa", "reconocer"]
 *  Output: ["ana", "oso", "reconocer"]
 *
 * Notes:
 *  - Each word must be evaluated independently
 *  - A new array must be created for the result
 *
 * Requirements:
 *  - Use for loops only
 *  - Use manual string reversal logic
 *  - Do NOT use filter(), map()
 *  - Do NOT use split(), reverse(), or join()
 *
 * ============================================================
 */

function ArrayTexts(texts){
  let results = [];
  
  for(let i = 0; i<texts.length; i++){
    let word = texts[i];
    let reversedWord = ""
    
    for(let k = word.length -1; k>=0; k--){
      reversedWord+=word[k]
    }
    results.push(reversedWord===word)
  }
  return results;
}

console.log(ArrayTexts(["ana", "oso", "casa"]));

function ArrayTexts(texts){
  let arePalindrome = [];
  
  for(let i = 0; i<texts.length; i++){
    let word = texts[i];
    let reversedWord = "";
    
    for(let k = word.length -1; k>=0; k--){
      reversedWord+=word[k];
    }
    if(reversedWord === word)
    arePalindrome.push(reversedWord)
  }
  return arePalindrome
}

console.log(ArrayTexts(["ana", "oso", "casa"]));