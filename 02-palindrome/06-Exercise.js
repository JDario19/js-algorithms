/**
 * ============================================================
 * 06 – Palindrome for Numbers (as String)
 * ============================================================
 *
 * Write a function that checks if a number is a palindrome.
 *
 * The number must be converted to a string and validated
 * using character comparison.
 *
 * Examples:
 *  121     → true
 *  12321   → true
 *  123     → false
 *
 * Requirements:
 *  - Convert number to string
 *  - Use a for loop
 *  - Compare characters directly
 *  - Use early exit on mismatch
 *  - Do NOT use math operations
 *
 * ============================================================
 */
function isNumberPalindrome(Nums){
  let numString = Nums.toString();

  for(let i = 0; i<numString.length /2; i++){
    if(numString[i] !== numString[numString.length -1 -i]){
      return false;
    }
  }
  return true;
}
console.log(isNumberPalindrome(12321))
 