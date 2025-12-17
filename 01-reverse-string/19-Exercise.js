/**
 * Exercise 19 — Reverse Consonants Only
 *
 * Description:
 * Reverse ONLY the consonants in a string.
 * Vowels, spaces, digits, and symbols must remain
 * in their original positions.
 *
 * Rules:
 * • Use manual loops only
 * • Do NOT use split(), reverse(), or join()
 *
 * Example:
 * Input:  "hello"
 * Output: "lehol"
 */

function reverseConsonants(text) {
  let vowels = "aeiouAEIOU";
  let consonants = "";
  let reversedConsonants = "";
  let result = "";

  // 1. Extract consonants
  for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    let isLetter =
      (ch >= "a" && ch <= "z") ||
      (ch >= "A" && ch <= "Z");

    if (isLetter && !vowels.includes(ch)) {
      consonants += ch;
    }
  }

  // 2. Reverse consonants
  for (let i = consonants.length - 1; i >= 0; i--) {
    reversedConsonants += consonants[i];
  }

  // 3. Rebuild string
  let index = 0;
  for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    let isLetter =
      (ch >= "a" && ch <= "z") ||
      (ch >= "A" && ch <= "Z");

    if (isLetter && !vowels.includes(ch)) {
      result += reversedConsonants[index];
      index++;
    } else {
      result += ch;
    }
  }

  return result;
}

console.log(reverseConsonants("hello"));        // lehol
console.log(reverseConsonants("a b c d"));      // a d c b
console.log(reverseConsonants("QA automation!"));// QA anomatuoit!
