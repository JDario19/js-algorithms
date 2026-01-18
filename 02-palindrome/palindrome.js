/*
========================================================
TOPIC: Palindrome
FILE: palindrome.js
========================================================

PURPOSE:
Practice string comparison logic to determine whether
a string reads the same forward and backward.

This topic focuses on:
- Index comparison
- Loop control
- Edge cases
- Ignoring characters / casing progressively
- Interview-ready reasoning

--------------------------------------------------------
GENERAL RULES FOR ALL EXERCISES
--------------------------------------------------------
- Do NOT use:
  split(), reverse(), join(), regex
- Use only:
  for loops
  if / else
  index-based comparison
- Prefer clarity over shortcuts
- Always return true or false
- Code must be explainable line by line

--------------------------------------------------------
EXERCISE 1
--------------------------------------------------------
Basic palindrome check (simple word).

Input:
"aba"   → true
"abba" → true
"abc"  → false

Focus:
- Compare characters by index
- First vs last, second vs second-last
- Stop early if mismatch

--- CODE BELOW ---
*/
function isPalindromeBasic(text1) {
    let reversed = "";
    for (let i = 0; i < text1.length; i++) {
        //for(let i = text1.length -1;; i>=0; i--){
        //reversed+=text1[i]
        if (text1[i] !== text1[text1.length - 1 - i])
            return false;
    }
    //return reversed===text1
    return true
}

console.log(isPalindromeBasic("abba"));
console.log(isPalindromeBasic("abc"));


/*
--------------------------------------------------------
EXERCISE 2
--------------------------------------------------------
Palindrome with empty string and single character.

Inputs:
"", "a"

Outputs:
true, true

Focus:
- Edge cases
- Defensive thinking
- Loop behavior with small inputs

--- CODE BELOW ---
*/
function isPalindromeBasic(text2) {
    if (text2 === "") return true;
    if (text2.length <= 1) return true;

    for (let i = 0; i < text2.length; i++) {
        if (text2[i] !== text2[text2.length - 1 - i]) return false
    }
    return true
}

console.log(isPalindromeBasic("abba"));
console.log(isPalindromeBasic("abc"));


/*
--------------------------------------------------------
EXERCISE 3
--------------------------------------------------------
Case-insensitive palindrome.

Input:
"AbBa" → true

Focus:
- Character normalization
- Comparing without caring about case

--- CODE BELOW ---
*/
function isPalindromeCaseInsensitive(text3) {
    if (text3 === "") return true;
    if (text3.length <= 1) return true;

    for (let i = 0; i < text3.length; i++) {
        if (
            text3[i].toLowerCase() !==
            text3[text3.length - 1 - i].toLowerCase()) {
            return false
        }
    }
    return true
}

console.log(isPalindromeCaseInsensitive("AbBa"));
console.log(isPalindromeCaseInsensitive("RaceCar"));
console.log(isPalindromeCaseInsensitive("Abca"));


/*
--------------------------------------------------------
EXERCISE 4
--------------------------------------------------------
Palindrome ignoring spaces.

Input:
"n u r s e s r u n" → true

Focus:
- Skip spaces during comparison
- Index movement logic

--- CODE BELOW ---
*/
function isPalindromeIgnoreSpaces(text4) {
    let noSpacesText = "";
    if (text4 === "") return true;
    if (text4.length <= 1) return true;

    for (let i = 0; i < text4.length; i++) {
        if (text4[i] !== " ") {
            noSpacesText += text4[i]
        }
    }
    for (let i = 0; i < noSpacesText.length; i++) {
        if (noSpacesText[i].toLowerCase() !== noSpacesText[noSpacesText.length - 1 - i].toLowerCase()) {
            return false
        }
    }
    return true;
}

console.log(isPalindromeIgnoreSpaces("n u r s e s r u n"));
console.log(isPalindromeIgnoreSpaces("race car"));
console.log(isPalindromeIgnoreSpaces("hello world"));


/*
--------------------------------------------------------
EXERCISE 5
--------------------------------------------------------
Palindrome ignoring punctuation.

Input:
"a,b,a" → true

Focus:
- Detect letters only
- Ignore punctuation characters

--- CODE BELOW ---
*/
function isPalindromeIgnorePunctuation(text5) {
    let newString = "";

    if (text5 === "") return true;
    if (text5.length <= 1) return true;

    for (let i = 0; i < text5.length; i++) {
        let ch = text5[i]
        if (
            (ch >= "a" && ch <= "z") ||
            (ch >= "A" && ch <= "Z")
        ) {
            newString += ch
        }
    }

    for (let i = 0; i < newString.length; i++) {
        if (newString[i].toLowerCase() !== newString[newString.length - 1 - i].toLowerCase()) {
            return false
        }
    }
    return true
}

console.log(isPalindromeIgnorePunctuation("a,b,a"));
console.log(isPalindromeIgnorePunctuation("ab!ba"));
console.log(isPalindromeIgnorePunctuation("hello, olleh"));
console.log(isPalindromeIgnorePunctuation("ab,c"));


/*
--------------------------------------------------------
EXERCISE 6
--------------------------------------------------------
Palindrome ignoring non-relevant characters (LETTERS + NUMBERS ONLY)

Description:
Determine if a string is a palindrome considering
ONLY alphabetic characters (A–Z, a–z) and numeric
characters (0–9).

All other characters must be ignored:
- spaces
- punctuation
- symbols

Comparison must be CASE-INSENSITIVE.
Focus:
- Generalize previous palindrome logic
- Clearly define which characters are valid
- Reuse the same pattern:
  1) Clean the string (letters + numbers only)
  2) Compare mirrored characters
- Avoid rewriting logic unnecessarily

--- CODE BELOW ---
*/
function isPalindromeIgnoreNonAlphabetic(text5) {
    let newString = "";

    if (text5 === "") return true;
    if (text5.length <= 1) return true;

    for (let i = 0; i < text5.length; i++) {
        let ch = text5[i]
        if (
            (ch >= "a" && ch <= "z") ||
            (ch >= "A" && ch <= "Z") ||
            (ch >= "0" && ch <= "9")
        ) {
            newString += ch
        }
    }

    for (let i = 0; i < newString.length; i++) {
        if (newString[i].toLowerCase() !== newString[newString.length - 1 - i].toLowerCase()) {
            return false
        }
    }
    return true
}

console.log(isPalindromeIgnoreNonAlphabetic("a1!b@1a")); // true
console.log(isPalindromeIgnoreNonAlphabetic("ab12 ba")); // true
console.log(isPalindromeIgnoreNonAlphabetic("a1b2c"));   // false
/*
--------------------------------------------------------
EXERCISE 7
--------------------------------------------------------
Numeric palindrome.

Input:
"12321" → true
"12345" → false

Focus:
- Handling numeric characters
- Same logic, different input type

--- CODE BELOW ---
*/
function isNumericPalindrome(text7) {
    if (text7 === "") return true;
    if (text7.length <= 1) return true;

    for (let i = 0; i < text7.length; i++) {
        if (text7[i] !== text7[text7.length - 1 - i]) {
            return false
        }
    }
    return true;
}

console.log(isNumericPalindrome("12321"));
console.log(isNumericPalindrome("1001"));
console.log(isNumericPalindrome("12345"));


/*
--------------------------------------------------------
EXERCISE 8
--------------------------------------------------------
Palindrome using two pointers.

Input:
"racecar" → true

Focus:
- Left / right index technique
- Efficient comparison

--- CODE BELOW ---
*/
function isPalindromeTwoPointers(text8) {
    for (let left = 0, right = text8.length - 1; left < right;) {
        let leftChar = text8[left];
        let rightChar = text8[right]

        if (
            !(
                (leftChar >= "a" && leftChar <= "z") ||
                (leftChar >= "A" && leftChar <= "Z")
            )
        ) {
            left++;
            continue;
        }

        if (
            !(
                (rightChar >= "a" && rightChar <= "z") ||
                (rightChar >= "A" && rightChar <= "Z")
            )
        ) {
            right--;
            continue;
        }
        if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true
}
console.log(isPalindromeTwoPointers("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeTwoPointers("race a car"));                     // false
console.log(isPalindromeTwoPointers("abba"));                           // true

/*
////////////////////////////////////////////////////////
// EXERCISE 9.1
// Palindrome substring (length 2)
////////////////////////////////////////////////////////
*/
function hasPalindromeLen2(text9) {
  for (let i = 0; i < text9.length - 1; i++) {
    if (text9[i] === text9[i + 1]) {
      return true;
    }
  }
  return false;
}

////////////////////////////////////////////////////////
// EXERCISE 9.2
// Palindrome substring (length 3)
////////////////////////////////////////////////////////

function hasPalindromeLen3(text9) {
  for (let i = 1; i < text9.length - 1; i++) {
    if (text9[i - 1] === text9[i + 1]) {
      return true;
    }
  }
  return false;
}


/*
--------------------------------------------------------
EXERCISE 10
--------------------------------------------------------
Interview-level final palindrome solution.

Requirements:
- Case-insensitive
- Ignore spaces and punctuation
- Clean
- Efficient
- Easy to explain

Focus:
- Confidence
- Readability
- Interview readiness

--- CODE BELOW ---
*/
function isPalindromeInterviewReady(text10) {
  for(let left = 0, right = text10.length -1; left<right;){
    let leftChar = text10[left];
    let rightChar = text10[right]
    
    let leftIsValid = 
      (leftChar >= "a" && leftChar <="z")||
      (leftChar >= "A" && leftChar <="Z")||
      (leftChar >= "0" && leftChar <="9")
    
    let rightIsValid = 
      (rightChar >= "a" && rightChar <= "z") ||
      (rightChar >= "A" && rightChar <= "Z") ||
      (rightChar >= "0" && rightChar <= "9");
      
      if(!leftIsValid){
        left++;
        continue;
      }
      if(!rightIsValid){
        right--;
        continue;
      }
      if(leftChar.toLowerCase() !== rightChar.toLowerCase()){
        return false;
      }
      left++;
      right--;
  }
  return true
}

// Tests
console.log(isPalindromeInterviewReady("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeInterviewReady("a1!b@1a"));                        // true
console.log(isPalindromeInterviewReady("race a car"));                     // false
console.log(isPalindromeInterviewReady("0P"));                             // false
console.log(isPalindromeInterviewReady(""));                               // true
console.log(isPalindromeInterviewReady("a"));                              // true

