/**
 * Exercise 10 – Reverse Each Word Separately
 *
 * Description:
 * Write a function reverseEachWord(text) that reverses each word
 * in the string individually, while keeping the word order the same.
 *
 * Important:
 * • A "word" is a sequence of characters separated by spaces.
 * • Keep the spaces exactly as they are (you will rebuild them manually).
 * • Do NOT reverse the order of the words, only their internal letters.
 *
 * Technique:
 * 1. Recorrer el string y extraer cada palabra manualmente.
 * 2. Para cada palabra, invertir sus caracteres con un loop manual.
 * 3. Agregar cada palabra invertida al resultado final.
 * 4. Agregar un espacio entre palabras (menos al final).
 *
 * Rules:
 * • Do NOT use split(), reverse(), or join().
 * • Must reverse each word manually using loops.
 *
 * Example:
 * Input:   "hello world"
 * Words:   ["hello", "world"]
 * Reversed words: ["olleh", "dlrow"]
 * Output:  "olleh dlrow"
 *
 * More Examples:
 * reverseEachWord("QA test") → "AQ tset"
 * reverseEachWord("abc def ghi") → "cba fed ihg"
 */
function reverseEachWord(text){
  let newArray = [];
  let current = "";
  for(let i = 0; i<text.length; i++){
    let ch = text[i];
    if(ch !== " "){
      current+=ch;
    }else{
      if(current !=""){
        newArray.push(current);
        current="";
      }
    }
  }
  if(current !=""){
    newArray.push(current);
  }
  
  let reversedWords = [];
  for(let i = 0; i<newArray.length; i++){
    let word = newArray[i];
    let tempo = "";
    for(let k = word.length -1; k>=0; k--){
      tempo+=word[k]
    }
     reversedWords.push(tempo)
  }
  
  let result = "";
  for(let i = 0; i<reversedWords.length; i++){
    result+=reversedWords[i]
    
    if(i< reversedWords.length -1){
      result+=" "
    }
  }
  return result;
}
console.log(reverseEachWord("Hello world"))