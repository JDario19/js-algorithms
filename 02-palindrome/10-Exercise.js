/**
 * ============================================================
 * 10 – Count Palindromes in Array
 * ============================================================
 *
 * Write a function that receives an array of words and
 * returns the number of words that are palindromes.
 *
 * Example:
 *  ["ana", "oso", "casa", "reconocer"]
 *  → 3
 *
 * Requirements:
 *  - Use for loops only
 *  - Use manual palindrome validation
 *  - Use a numeric counter
 *  - Do NOT use filter(), map(), reduce()
 *  - Do NOT use split(), reverse(), or join()
 *
 * ============================================================
 */
function countPalindromes(texts) {
    let count = 0

    for (let i = 0; i < texts.length; i++) {
        let word = texts[i]
        let reversedWord = "";

        for (let k = word.length - 1; k >= 0; k--) {
            reversedWord += word[k]
        }
        if (reversedWord === word) {
            count++;
        }
    }
    return count;
}

console.log(countPalindromes(["ana", "oso", "casa", "reconocer"]))
