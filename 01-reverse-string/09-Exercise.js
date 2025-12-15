/**
 * Exercise 09 – Reverse Words (Not Letters)
 *
 * Description:
 * Write a function reverseWords(text) that reverses the ORDER of the words
 * in a sentence, while keeping each word unchanged.
 *
 * Important:
 * • A "word" is any sequence of characters separated by one or more spaces.
 * • Do NOT reverse the letters inside each word.
 * • Do NOT use split(), reverse(), or join().
 *
 * Technique:
 * 1. Recorrer el string y extraer cada palabra manualmente.
 * 2. Guardar cada palabra en un array.
 * 3. Invertir el array manualmente con un loop.
 * 4. Reconstruir la frase uniendo las palabras con un espacio.
 *
 * Example:
 * Input:  "hello world QA"
 * Words:  ["hello", "world", "QA"]
 * Reversed: ["QA", "world", "hello"]
 * Output: "QA world hello"
 *
 * More Examples:
 * reverseWords("one two three") → "three two one"
 * reverseWords("QA Automation Rocks") → "Rocks Automation QA"
 */
function reverseWords(text){
  let newArray = [];
  let current = "";
  for(let i = 0; i<text.length; i++){
    let ch = text[i];
    if(ch != " "){
      current += ch;
    }else{
      if(current != ""){
        newArray.push(current);
        current="";
      }
    }
  }
        if(current != ""){
        newArray.push(current);
      }
     
    let result = "";
    for(let i = newArray.length - 1; i>=0; i--){
      result += newArray[i];
      
      if(i > 0){
        result += " ";
      }
    }
     return result
}
console.log(reverseWords("QA is the best"))