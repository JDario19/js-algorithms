/**
 * Exercise 11 – Reverse String if Length > N
 *
 * Description:
 * Write a function reverseIfLonger(text, n) that:
 *   - Returns the reversed string ONLY if its length is greater than n.
 *   - Otherwise, returns the original string.
 *
 * Technique:
 * 1. Check the length of the string.
 * 2. If text.length <= n → return text as-is.
 * 3. If text.length > n → reverse manually with a loop.
 *
 * Rules:
 * • Do NOT use split(), reverse(), or join().
 * • Must manually reverse when needed.
 *
 * Examples:
 * reverseIfLonger("hello", 3)  → "olleh"  (5 > 3)
 * reverseIfLonger("hi", 3)     → "hi"     (2 ≤ 3)
 * reverseIfLonger("world", 10) → "world"  (5 ≤ 10)
 */
function reverseIfLonger(text, n){
  let newString = "";
  if(text.length <= n) return text;
  
  for(let i = text.length -1; i>=0; i--){
    newString+=text[i]
  }
    return newString  
}
console.log(reverseIfLonger("hello", 5))