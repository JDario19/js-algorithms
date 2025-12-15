/**
 * Exercise 12 – Reverse Substring in Range [start, end]
 *
 * Description:
 * Write a function reverseRange(text, start, end) that reverses ONLY the
 * characters between indices start and end (inclusive). The rest of the
 * string remains the same.
 *
 * Technique:
 * 1. Recorrer el string.
 * 2. Para índices fuera del rango → copiar los caracteres tal cual.
 * 3. Para índices dentro del rango → construir un substring invertido.
 * 4. Reconstruir el string final pegando:
 *      - parte antes del rango
 *      - substring invertido
 *      - parte después del rango
 *
 * Rules:
 * • Do NOT use split(), substring(), slice(), reverse().
 * • Todo debe hacerse manualmente con loops.
 *
 * Example:
 * Input:      "abcdef", start = 1, end = 4
 * Range:      "bcde"
 * Reversed:   "edcb"
 * Output:     "aedcbf"
 *
 * More Examples:
 * reverseRange("hello world", 0, 4)  → "olleh world"
 * reverseRange("automation", 4, 7)   → "autoitamnon"
 * reverseRange("123456789", 2, 6)    → "126543789"
 */
function reverseRange(text, start, end){
  let newString = "";
  let reversedText = "";
  let result = "";
  for(let i = start; i<=end; i++){
    newString+=text[i]
  }
  
  for(let i = newString.length - 1; i>=0; i--){
    reversedText+=newString[i]
  }
  
  for(let i = 0; i<start; i++){
    result+=text[i]
  }
  result+=reversedText;
  
  for(let i = end +1; i<text.length; i++){
    result+=text[i]
  }
  return result;
}
console.log(reverseRange("abcdef", 1,4 ))