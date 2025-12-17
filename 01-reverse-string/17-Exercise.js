/**
 * ============================================
 * Reverse String — First N Characters Variants
 * ============================================
 *
 * This file contains multiple variations of reversing
 * the first N characters of a string.
 *
 * The goal of these exercises is to practice:
 * • Loop control (forward and backward iteration)
 * • Index-based string manipulation
 * • Partial string reconstruction
 * • Handling constraints without built-in helpers
 *
 * Variants included:
 *
 * 17.1 — Reverse Only First N Characters (Basic)
 *        - Simply reverses the first N characters.
 *
 * 17.2 — Reverse Only First N Letters (Keep Digits)
 *        - Reverses only letters within the first N characters.
 *        - Digits and non-letter characters remain in place.
 *
 * 17.3 — Reverse Only First N Characters (Compact)
 *        - A shorter and more direct implementation of 17.1.
 *
 * Restrictions:
 * • No use of split(), reverse(), join().
 * • Manual loops only.
 *
 * These exercises help build a strong foundation for
 * algorithmic thinking commonly evaluated in
 * QA Automation and Software Engineering interviews.
 */

function reverseFirstN(text, n){
  let reversedIndex = "";
  for(let i = n -1; i>=0; i--){
    reversedIndex+=text[i]
  }
  
  
  for(let i = n; i<text.length; i++){
    reversedIndex+=text[i]
  }
  return reversedIndex
}
console.log(reverseFirstN("Salvador", 3))

function reverseFirstNKeepDigits(text, n){
  let reversedN = "";
  for(let i = n - 1; i>=0; i--){
    reversedN+=text[i]
  }
  
  let reversedNletter = "";
  for(let i =  0; i<reversedN.length; i++){
    let ch = reversedN[i];
    if((ch >= "a" && ch<="z") || (ch >= "A" && ch<="Z")){
      reversedNletter+=ch
    }
  }
  
  let result = "";
  let index = 0;
  for(let i = 0; i < n; i++){
    let ch = text[i]
        if((ch >= "a" && ch<="z") || (ch >= "A" && ch<="Z")){
          result+=reversedNletter[index]
          index++;
    }else{
      result+=ch
    }
  }
  for(let i = n; i<text.length; i++){
    result+=text[i]
  }
  return result;
}
console.log(reverseFirstNKeepDigits("S2a3lvador", 5))

function reverseFirstN(text, n){
  let getNText = "";
  for(let i = n -1; i>=0; i--){
    getNText+=text[i]
  }
  
  let result = getNText;
  
  for(let i = n; i<text.length; i++){
    result+=text[i]
  }
  
  return result;
}
console.log(reverseFirstN("S2a3lvador", 5))