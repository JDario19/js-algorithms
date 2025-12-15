/**
 * Exercise 07 – Reverse Case-Sensitive (No Transform)
 *
 * Description:
 * Write a function reverseCaseSensitive(text) that reverses a string
 * while keeping all characters exactly as they are (uppercase/lowercase).
 * 
 * Important:
 * • DO NOT change the case of any character.
 * • DO NOT modify spaces or special characters.
 * • Only reverse the order of characters.
 *
 * Rules:
 * • Do NOT use split(), reverse(), or join().
 * • Must use a manual loop from the last index to the first.
 *
 * Example:
 * Input:  "AbCde"
 * Reverse: "edCbA"
 *
 * More Examples:
 * reverseCaseSensitive("Hello") → "olleH"
 * reverseCaseSensitive("QA Test") → "tseT AQ"
 * reverseCaseSensitive("123abc!") → "!cba321"
 */
function reverseCaseSensitive(text){
  let newString = "";
  for(let i = text.length -1; i>=0; i--){
    let ch = text[i];
    newString+=ch;
  }
  return newString
}
console.log(reverseCaseSensitive("QA Test"))