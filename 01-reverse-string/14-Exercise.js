/**
 * Exercise 14 – Reverse String Recursively
 *
 * Description:
 * Write a function reverseRecursive(text) that reverses a string
 * using recursion only (NO loops).
 *
 * Rules:
 * - Do NOT use for, while, or built-in reverse().
 * - You may use slice() to get substrings.
 * - Must use a clear base case and a recursive call.
 *
 * Technique (idea):
 * - Base case:
 *      If text length is 0 or 1, return text.
 * - Recursive case:
 *      lastChar = last character of text
 *      rest = all characters except the last
 *      return lastChar + reverseRecursive(rest)
 *
 * Example:
 * reverseRecursive("abc")  → "cba"
 * reverseRecursive("hello") → "olleh"
 */

function reverseRecursive(text){
  if(text.length <= 1) return text
  
  let last = text[text.length - 1]
  let rest = text.slice(0, text.length -1)
  
  return last + reverseRecursive(rest)
}
console.log(reverseRecursive("hello"))


