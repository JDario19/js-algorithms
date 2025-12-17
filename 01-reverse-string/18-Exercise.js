/**
 * Exercise 18 — Reverse Only Last N Characters
 *
 * Description:
 * Reverse ONLY the last N characters of a string.
 * The rest of the string remains unchanged.
 *
 * Rules:
 * • Only characters from the last N positions are reversed.
 * • Characters before that range remain in their original order.
 * • No built-in reverse helpers (split, reverse, join).
 *
 * Steps:
 *  1. Protect against N being greater than the string length.
 *  2. Extract the last N characters starting from (length - N).
 *  3. Reverse the extracted substring manually.
 *  4. Rebuild the final string by:
 *     - Appending the unchanged prefix.
 *     - Appending the reversed last N characters.
 *
 * Example:
 * reverseLastN("abcdef", 3) → "abcfed"
 * reverseLastN("monteon", 3) → "montnoe"
 */
function reverseLastN(text, n) {
    let getNLetters = "";
    n = Math.min(n, text.length);

    for (let i = text.length - n; i < text.length; i++) {
        getNLetters += text[i];
    }

    let reversedNLetters = "";
    for (let i = getNLetters.length - 1; i >= 0; i--) {
        reversedNLetters += getNLetters[i]
    }
    let result = ""
    for (let i = 0; i < text.length - n; i++) {
        result += text[i]
    }

    let index = 0;
    for (let i = text.length - n; i < text.length; i++) {
        result += reversedNLetters[index];
        index++;
    }


    return result;
}
console.log(reverseLastN("monteon", 3))