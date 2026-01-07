/*
========================================================
TOPIC: Reverse String
FILE PURPOSE:
This file is a practice log. Each exercise builds on
previous logic and increases in difficulty.

As exercises are solved, code will be added BELOW
each section, preserving the full learning path.

========================================================
GENERAL RULES
========================================================
- No built-in helpers:
  split(), reverse(), join(), sort()
- Use for / while loops
- Clear variable naming
- Always return a value
- Code must be explainable line by line

========================================================
EXERCISE 1
========================================================
Reverse a simple word.

Input:
"hello"

Output:
"olleh"

Focus:
- Basic for loop
- Loop direction
- Accumulator variable

--- CODE BELOW ---
*/
function reverseWord(text){
  let reversedText = "";
  for(let i = text.length -1; i>=0; i--){
    reversedText+=text[i]
  }
  return reversedText;
}
console.log(reverseWord("banana"));


/*
========================================================
EXERCISE 2
========================================================
Reverse an empty string and single character strings.

Inputs:
"", "a"

Outputs:
"", "a"

Focus:
- Edge cases
- Loop behavior with small inputs

--- CODE BELOW ---
*/
function reversedEmptySingle(text2){
  if(text2 === "")return text2;
  if(text2.length === 1) return text2;
  let reversedText2 = "";
  for(let i = text2.length -1; i>=0; i--){
    reversedText2+=text2[i]
  }
  return reversedText2
}
console.log(reversedEmptySingle("f"))


/*
========================================================
EXERCISE 3
========================================================
Reverse a string with spaces.

Input:
"hello world"

Output:
"dlrow olleh"

Focus:
- Treat spaces as normal characters

--- CODE BELOW ---
*/
function reverseWordWithSpaces(text3){
  let reversedText = "";
  for(let i = text3.length -1; i>=0; i--){
    reversedText+=text3[i]
  }
  return reversedText;
}
console.log(reverseWordWithSpaces("ban ana"));


/*
========================================================
EXERCISE 4
========================================================
Reverse a string but IGNORE spaces.

Input:
"h e l l o"

Output:
"o l l e h"

Focus:
- Conditional logic
- Skipping characters

--- CODE BELOW ---
*/
function reverseWordWithSpaces(text4){
  let result = "";
  let letters = "";
  
  for(let i = 0; i<text4.length; i++){
    if(text4[i] !== " "){
      letters+=text4[i]
    }
  }
  
  let index = letters.length -1;
  for(let i = 0; i<text4.length; i++){
    if(text4[i] === " "){
      result+=" ";
    }else{
      result+=letters[index];
      index--
    }
  }
  return result
}
console.log(reverseWordWithSpaces("bana na"));


/*
========================================================
EXERCISE 5
========================================================
Reverse a string while keeping punctuation in place.

Input:
"a,b$c"

Output:
"c,b$a"

Focus:
- Letter detection
- Index control

--- CODE BELOW ---
*/
function reverseWordIgnorenNoCharacters(text5){
  let result = "";
  let letters = "";
  for(let i =0; i<text5.length; i++){
    let ch = text5[i];
    let isLetter =       
      (ch >= "a" && ch <= "z") ||
      (ch >= "A" && ch <= "Z");
      if(isLetter){
        letters+=ch;
      }
  }
  
  let index = letters.length -1;
  for(let i = 0; i<text5.length; i++){
    let ch = text5[i];
    let isLetter = 
      (ch >= "a" && ch <= "z") ||
      (ch >= "A" && ch <= "Z");
    if(!isLetter){
      result+=ch;
    }else{
      result+=letters[index];
      index--;
    }
  }
  return result
}
console.log(reverseWordIgnorenNoCharacters("b.ana,na"));
/*
--------------------------------------------------------
EXERCISE 6
--------------------------------------------------------
Reverse ONLY letters, IGNORE numbers.

Input:
"a1b2c3"

Output:
"c1b2a3"

Focus:
- Numbers stay in original positions
- Letters are reversed
- SAME pattern as Exercises 4 and 5
- No new concepts

--- CODE BELOW ---
*/
function reverseOnlyLettersIgnoreNumbers(text6){
  let result = "";
  let letters = "";
  for(let i = 0; i<text6.length; i++){
    let ch = text6[i];
    let isLetter =
    (ch >= "a" && ch<="z")||
    (ch >="A" && ch <="Z")
    if(isLetter){
      letters+=ch
    }
  }
  
  let index = letters.length -1;
  for(let i = 0; i<text6.length; i++){
    let ch = text6[i];
    let isLetter =
    (ch >= "a" && ch<="z")||
    (ch >="A" && ch <="Z")
    if(!isLetter){
      result+=ch;
    }else{
      result+=letters[index];
      index--;
    }
  }
  return result
}
console.log(reverseOnlyLettersIgnoreNumbers("a1b2c3"));

/*
--------------------------------------------------------
EXERCISE 7
--------------------------------------------------------
Reverse the ORDER of words (not characters).

Input:
"hello world today"

Output:
"today world hello"

Focus:
- Word boundaries
- Space detection
- Building words manually

--- CODE BELOW ---
*/
function reverseWordsOrder(text7){
  let currentWord = "";
  let words = [];
  for(let i = 0; i<text7.length; i++){
    let ch = text7[i];
    
    if(ch === " "){
      words.push(currentWord);
      currentWord=""
    }else{
      currentWord += ch;
    }
  }
    words.push(currentWord);
    
    let result = "";
    for(let i = words.length -1; i>=0; i--){
      result+=words[i];
      if(i !== 0){
        result+=" "
      }
      
    }
  
  return result
}
console.log(reverseWordsOrder("hello Juan from Canada"));

/*
--------------------------------------------------------
EXERCISE 8
--------------------------------------------------------
Reverse string preserving original letter casing.

Input:
"AbCd"

Output:
"dCbA"

Focus:
- Separate value from formatting
- Case handling

--- CODE BELOW ---
*/
function reversePreserveCasing(text8){
  let letters = text8;
  let result = "";
  for(let i = letters.length -1; i>=0; i--){
    result+=letters[i]
  }
  return result;
}
console.log(reversePreserveCasing("AbCd"));

/*
--------------------------------------------------------
EXERCISE 9
--------------------------------------------------------
Reverse string ignoring non-alphabetic characters.

Input:
"a1!b@c"

Output:
"c1!b@a"

Focus:
- Generalizing previous logic
- Cleaner conditions

--- CODE BELOW ---
*/
function reverseIgnoreNonAlphabetic(text9) {
  let letter = "";
  
  for(let i = 0; i<text9.length; i++){
    let ch = text9[i];
    if(
      (ch>="a" && ch<="z")||
      (ch>="A" && ch<="Z")
      ){
        letter+=ch;
      }
  }
  let index = letter.length -1;
  let result = "";
  for(let i = 0; i<text9.length; i++){
    let ch = text9[i]
    let isLetter =
      (ch>="a" && ch<="z")||
      (ch>="A" && ch<="Z")
      
    if(isLetter){
      result+=letter[index];
      index--;
    }else{
      result+=ch;
    }
    
  }
  return result;
}
console.log(reverseIgnoreNonAlphabetic("a1!b@c"));

/*
--------------------------------------------------------
EXERCISE 10
--------------------------------------------------------
Interview-level solution.

Requirements:
- Clean
- Optimized
- Covers all edge cases
- Easy to explain on a whiteboard

Focus:
- Confidence
- Readability
- Interview readiness

--- CODE BELOW ---
*/
function reverseInterviewReady(text10) {
  let letters = "";
  
  for(let i = 0; i<text10.length; i++){
    let ch = text10[i];
    let isLetters =
      (ch>="a" && ch<="z")||
      (ch>="A" && ch<="Z")
    if(isLetters){
      letters+=ch;
    }
  }
  
  let index = letters.length -1;
  let result = "";
  for(let i = 0; i<text10.length; i++){
    let ch = text10[i]
    let isLetters =
      (ch>="a" && ch<="z")||
      (ch>="A" && ch<="Z")
    if(isLetters){
      result+=letters[index];
      index--;
    }else{
      result+=ch
    }
  }
  return result;
}

console.log(reverseInterviewReady("a1!b@c"));
