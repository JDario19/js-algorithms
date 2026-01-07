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
========================================================
EXERCISE 6
========================================================
Reverse a string using TWO POINTER technique.

Rules:
- Use left and right indexes
- No extra arrays

Focus:
- Pointer movement
- While loop control

--- CODE BELOW ---
*/



/*
========================================================
EXERCISE 7
========================================================
Reverse only letters, ignore numbers.

Input:
"a1b2c3"

Output:
"c1b2a3"

Focus:
- Validation conditions
- Selective reversal

--- CODE BELOW ---
*/



/*
========================================================
EXERCISE 8
========================================================
Reverse the ORDER of words, not characters.

Input:
"hello world today"

Output:
"today world hello"

Focus:
- Word detection
- Rebuilding strings

--- CODE BELOW ---
*/



/*
========================================================
EXERCISE 9
========================================================
Reverse a string while PRESERVING casing.

Input:
"AbCd"

Output:
"dCbA"

Focus:
- Separating value logic from formatting

--- CODE BELOW ---
*/



/*
========================================================
EXERCISE 10
========================================================
Interview-level solution.

Requirements:
- Clean
- Optimized
- Handles edge cases
- Explainable on a whiteboard

Focus:
- Confidence
- Clarity
- Interview readiness

--- CODE BELOW ---
*/
