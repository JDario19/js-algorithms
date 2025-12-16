/**
 * ============================================================
 *  CHAPTER 13 — Reverse Array Variations (Two Pointers + Logic)
 * ============================================================
 *
 * This chapter contains multiple exercises focused on reversing
 * arrays *manually*, without using built-in helpers such as 
 * reverse(), split(), join(), etc.
 *
 * The goals of all exercises:
 *  - Master two-pointer techniques
 *  - Learn in-place array manipulation
 *  - Work with index ranges
 *  - Reverse only specific sections of an array
 *  - Reverse based on conditions (index parity, character type)
 *  - Strengthen logic expected in QA Automation / SDET interviews
 *
 * ------------------------------------------------------------
 * EXERCISES INCLUDED
 * ------------------------------------------------------------
 *
 * ❖ 13.0 — Reverse Entire Array In-Place (Two Pointers)
 *     Reverse the full array using:
 *         for (left = 0, right = length-1; left < right; left++, right--)
 *     Swap elements manually.
 *     No extra arrays allowed.
 *
 * ❖ 13.1 — Reverse Only the LEFT Half of the Array
 *     - Compute midpoint with Math.floor(length / 2)
 *     - Reverse in-place only between indices [0 … mid-1]
 *     - Right half remains unchanged.
 *
 * ❖ 13.2 — Reverse Only the RIGHT Half of the Array
 *     - Compute midpoint
 *     - Reverse in-place only the range [mid … length-1]
 *     - Left half remains unchanged.
 *
 * ❖ 13.3 — Reverse ONLY Characters at Even Indices
 *     Steps:
 *       1) Extract characters where index % 2 === 0
 *       2) Reverse that subset manually
 *       3) Insert reversed values back into even indices
 *     Odd indices stay untouched.
 *
 * ❖ 13.4 — Reverse ONLY Letters, Leave Digits in Place
 *     Steps:
 *       1) Extract only alphabetical characters (A–Z, a–z)
 *       2) Reverse them manually
 *       3) Reinsert them back into positions where letters originally appeared
 *     Digits or symbols remain in their original location.
 *
 * ------------------------------------------------------------
 * SKILLS PRACTICED
 * ------------------------------------------------------------
 *
 * ✔ Two-pointer method  
 * ✔ Balanced loop control  
 * ✔ Manual swapping  
 * ✔ In-place data mutation  
 * ✔ Range-based reversing  
 * ✔ Conditional extraction and reinsertion  
 * ✔ Data transformation without built-in helpers  
 *
 * These problems mirror the type of logical reasoning and
 * manipulation expected in mid-senior QA Automation, SDET, 
 * or general software engineering interviews.
 *
 * ============================================================
 */

function reverseInPlace(array) {
    for (let left = 0, right = array.length - 1; left < right; left++, right--) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array
}
console.log(reverseInPlace(['h', 'e', 'l', 'l', 'o']))

function reverseLeftHalf(array) {
    let mid = Math.floor(array.length / 2)

    let left = 0;
    let right = mid - 1

    for (left; left < right; left++, right--) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp
    }
    return array
}

console.log(reverseLeftHalf(['h', 'e', 'l', 'l', 'o']))


function reverseRightHalf(array) {
    let mid = Math.floor(array.length / 2);

    let left = mid;
    let right = array.length - 1;
    for (left; left < right; left++, right--) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp
    }
    return array
}
console.log(reverseRightHalf(['h', 'e', 'l', 'l', 'o', '!']))


function reverseInPlace(array) {
    for (let left = 0, right = array.length - 1; left < right; left++, right--) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array
}
console.log(reverseInPlace(['h', 'e', 'l', 'l', 'o']))

function reverseLeftHalf(array) {
    let mid = Math.floor(array.length / 2)

    let left = 0;
    let right = mid - 1

    for (left; left < right; left++, right--) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp
    }
    return array
}

console.log(reverseLeftHalf(['h', 'e', 'l', 'l', 'o']))


function reverseRightHalf(array) {
    let mid = Math.floor(array.length / 2);

    let left = mid;
    let right = array.length - 1;
    for (left; left < right; left++, right--) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp
    }
    return array
}
console.log(reverseRightHalf(['h', 'e', 'l', 'l', 'o', '!']))

function reverseEvenIndices(array) {
    let evenArray = []; for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(array[i])
        }
    }
    let reverseEvenArray = [];
    for (let i = evenArray.length - 1; i >= 0; i--) {
        reverseEvenArray.push(evenArray[i])
    }
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            array[i] = reverseEvenArray[index];
            index++;
        }
    }
    return array;
}
console.log(reverseEvenIndices(['h', 'e', 'l', 'l', 'o', '!']))

function reverseLettersOnly(array) {
    let arrayLetter = [];
    for (let i = 0; i < array.length; i++) {
        let ch = array[i]
        if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
            arrayLetter.push(ch)
        }
    }

    let reverseLetters = [];
    for (let i = arrayLetter.length - 1; i >= 0; i--) {
        reverseLetters.push(arrayLetter[i])
    }

    let index = 0;
    for (let i = 0; i < array.length; i++) {
        let ch = array[i]
        if ((array[i] >= "a" && array[i] <= "z") || (array[i] >= "A" && array[i] <= "Z")) {
            array[i] = reverseLetters[index];
            index++;
        }
    }
    return array;
}
console.log(reverseLettersOnly(['a', '1', 'b', '2', 'c']));