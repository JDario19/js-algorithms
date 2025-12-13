/**
 * Description:
 * Write a function reverseOnlyVowels(text) that returns the same string
 * but with the vowels reversed in order.
 *
 * Rules:
 *  • Use at least one for loop.
 *  • Only vowels (a, e, i, o, u) should be reversed.
 *  • Consonants and special characters must remain in their original position.
 *  • Do NOT use split(), reverse(), or join().
 *
 * Example:
 * Input:  "hello" 
 * Vowels: "e", "o" → reversed: "o", "e"
 * Output: "holle"
 *
 * Input:  "automation"
 * Vowels: a,u,o,a,i,o → o,i,a,o,u,a
 * Output: "oitamonaut"
 */

function reversedVowels(text){
  let arrayVowels = [];
  let vowels = "aeiou";
  for(let i =0; i<text.length; i++){
    let vowelsCh = text[i].toLowerCase();
    if(vowels.includes(vowelsCh)){
      arrayVowels.push(vowelsCh)
    }
  }
  
  let reversedArrayVowels = [];
  for(let k = arrayVowels.length -1; k>=0; k--){
    reversedArrayVowels.push(arrayVowels[k])
  }
  
  let result = "";
  let vowelsIndex = 0;
  for(let i = 0; i <text.length; i++){
    let ch = text[i].toLowerCase();
    if(vowels.includes(ch)){
      result+=reversedArrayVowels[vowelsIndex];
      vowelsIndex++;
    }else{
      result+=text[i]
    }
  }
  return result;
}
console.log(reversedVowels("Automation"))