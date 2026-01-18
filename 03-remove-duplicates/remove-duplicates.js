/*
========================================================
TOPIC: Remove Duplicates (Strings + Arrays)
FILE: remove-duplicates.js
========================================================

PURPOSE:
Practice removing duplicates from strings and arrays using
loop-based logic (no shortcuts) to build interview-ready
problem-solving skills.

This topic focuses on:
- Nested loops vs optimized approaches
- Preserving order vs sorting-free methods
- Handling case sensitivity
- Edge cases (empty, single element)
- Deduping with different constraints

--------------------------------------------------------
GENERAL RULES FOR ALL EXERCISES
--------------------------------------------------------
- Do NOT use:
  Set, Map, filter(), reduce(), includes(), indexOf()
  split(), join(), sort()
- Use only:
  for loops
  if / else
  variables + basic comparisons
- Prefer clarity over clever tricks
- Always return the requested output (string or array)
- Code must be explainable line by line

NOTE:
Some exercises may have an "optimized version" later.
We will start with loop-only solutions first.
*/

////////////////////////////////////////////////////////
// EXERCISE 1
// Remove duplicate characters from a string (preserve order)
//
// Input:  "banana"  -> "ban"
// Input:  "aaaa"    -> "a"
// Focus:
// - Build result string
// - Check if char already exists in result using loop
// --- CODE BELOW ---
////////////////////////////////////////////////////////

function removeDupCharsBasic(text1) {
  let result = "";
  
  for(let i = 0; i<text1.length; i++){
    let exist = false;
    
    for(let j = 0; j<result.length; j++){
      if(text1[i] === result[j]){
        exist = true;
        break;
      }
    }
    if(!exist){
      result+=text1[i]
    }
  }
  return result

}

console.log(removeDupCharsBasic("banana")); // "ban"
console.log(removeDupCharsBasic("aaaa"));   // "a"
console.log(removeDupCharsBasic("abc"));    // "abc"

////////////////////////////////////////////////////////
// EXERCISE 2
// Remove duplicates from an array of numbers (preserve order)
//
// Input:  [1,2,2,3,1] -> [1,2,3]
// Focus:
// - Build new array
// - Check if number already exists in result using loop
// --- CODE BELOW ---
////////////////////////////////////////////////////////

function removeDupNumbersBasic(arr2) {
  let result = []
  
  for(let i = 0; i<arr2.length; i++){
    let exist = false;
    
    for(let j = 0; j<result.length; j++){
      if(arr2[i] === result[j]){
        exist = true;
        break;
      }
    }
    if(!exist){
      result.push(arr2[i])
    }
  }
  return result;
}

console.log(removeDupNumbersBasic([1, 2, 2, 3, 1])); // [1,2,3]
console.log(removeDupNumbersBasic([4, 4, 4]));       // [4]
console.log(removeDupNumbersBasic([]));              // []


////////////////////////////////////////////////////////
// EXERCISE 3
// Remove duplicates from a string, case-insensitive (preserve first occurrence casing)
//
// Input:  "aAbBaa" -> "aB"
// Explanation:
// - Treat 'a' and 'A' as duplicates
// - Keep the casing of the first seen character
// Focus:
// - Normalization for comparison only
// --- CODE BELOW ---
////////////////////////////////////////////////////////

function removeDupCharsCaseInsensitive(text3) {
  let result = "";
  
  for(let i = 0; i<text3.length; i++){
    let exist = false;
    
    for(let j = 0; j<result.length; j++){
      if(text3[i].toLowerCase() === result[j].toLowerCase()){
        exist = true;
        break;
      }
    }
    if(!exist){
      result+=text3[i]
    }
  }
  return result;
}

console.log(removeDupCharsCaseInsensitive("aAbBaa")); // "aB"
console.log(removeDupCharsCaseInsensitive("BanAna")); // "Ban"
console.log(removeDupCharsCaseInsensitive("ABCabc")); // "ABC"


////////////////////////////////////////////////////////
// EXERCISE 4
// Remove duplicates but keep ONLY duplicates (characters that appear 2+ times), preserve order of first appearance
//
// Input:  "banana" -> "an"   (b appears once, a/n appear multiple times)
// Input:  "abc"    -> ""
// Focus:
// - Count-like logic using nested loops (no maps)
// --- CODE BELOW ---
////////////////////////////////////////////////////////

/*
function keepOnlyDuplicateChars(text4) {
  // ...
}
*/

////////////////////////////////////////////////////////
// EXERCISE 5
// Remove duplicates from array of strings (preserve order)
// Case-sensitive
//
// Input:  ["a","b","a","A"] -> ["a","b","A"]
// Focus:
// - Compare strings
// - Preserve order
// --- CODE BELOW ---
////////////////////////////////////////////////////////

/*
function removeDupStringsBasic(arr5) {
  // ...
}
*/

////////////////////////////////////////////////////////
// EXERCISE 6
// Remove duplicates from array, but keep the LAST occurrence (preserve the last-seen order)
//
// Input:  [1,2,2,3,1] -> [2,3,1]
// Explanation:
// - The final unique items based on last appearance
// Focus:
// - Reverse-scan technique with loops (no reverse())
// --- CODE BELOW ---
////////////////////////////////////////////////////////

/*
function removeDupsKeepLast(arr6) {
  // ...
}
*/

////////////////////////////////////////////////////////
// EXERCISE 7
// Remove duplicates from a string but IGNORE non-letters (keep punctuation in place)
//
// Input:  "b.ana,na" -> "b.an,a"  (example goal: dedupe letters only; punctuation stays)
// Focus:
// - Valid character check (A–Z / a–z)
// - Maintain punctuation positions
// --- CODE BELOW ---
////////////////////////////////////////////////////////

/*
function removeDupLettersKeepPunctuation(text7) {
  // ...
}
*/

////////////////////////////////////////////////////////
// EXERCISE 8
// Remove duplicates from array of objects by a key (e.g., id), preserve first occurrence
//
// Input:
// [{id:1,name:"a"},{id:2,name:"b"},{id:1,name:"x"}]
// Output:
// [{id:1,name:"a"},{id:2,name:"b"}]
//
// Focus:
// - Compare by obj.id
// - No maps/sets
// --- CODE BELOW ---
////////////////////////////////////////////////////////

/*
function removeDupObjectsById(arr8) {
  // ...
}
*/

////////////////////////////////////////////////////////
// EXERCISE 9
// Find the first duplicate element in an array (return the element, or null)
//
// Input:  [3,1,4,1,5] -> 1
// Input:  [1,2,3]     -> null
//
// Focus:
// - Early exit
// - Nested loops or seen-array technique with loops
// --- CODE BELOW ---
////////////////////////////////////////////////////////

/*
function firstDuplicate(arr9) {
  // ...
}
*/

////////////////////////////////////////////////////////
// EXERCISE 10
// Interview-level final: Remove duplicates from string (letters+numbers only), preserve order,
// case-insensitive comparison, preserve original first occurrence casing.
//
// Input:  "A1a1Bb!!b" -> "A1B!"
// Explanation:
// - Consider only letters and numbers for uniqueness
// - Ignore case when checking letters
// - Keep original character of first appearance
// - Keep non-alphanumeric characters ONLY if they are the first time that exact symbol appears
//
// Focus:
// - Clear rules definition
// - Maintain multiple "seen" categories with loops
// - Explainable, clean approach
// --- CODE BELOW ---
////////////////////////////////////////////////////////

/*
function removeDupsInterviewReady(text10) {
  // ...
}
*/
