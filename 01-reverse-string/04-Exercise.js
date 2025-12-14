/**
 * Exercise 04 – Reverse with Array (Manual Stack Simulation)
 *
 * Description:
 * Create a function that reverses a string by simulating a stack manually.
 * 
 * Technique:
 * 1. Create an empty array.
 * 2. Loop through the string and push each character into the array.
 *    This simulates pushing items onto a stack (LIFO behavior).
 *
 * 3. Create another empty array.
 * 4. Loop through the first array from the last index to the first,
 *    pushing each character into the second array.
 *    This simulates popping items off the stack.
 *
 * 5. Build the final reversed string by looping through the reversed array
 *    and concatenating each character manually.
 *
 * Rules:
 * • Do NOT use split(), reverse(), or join().
 * • Must use two loops: one to build the array, one to invert it.
 * • Must build the final string manually with a loop and +=
 *
 * Example:
 * Input:  "banana"
 * Stack build: ['b', 'a', 'n', 'a', 'n', 'a']
 * Reverse:     ['a', 'n', 'a', 'n', 'a', 'b']
 * Final String: "ananab"
 *
 * Expected Output:
 * reverseWithArray("banana") → "ananab"
 */
function returnReversedArray(text){
  let newArray = [];
  for(let i = 0; i<text.length;i++){
    newArray.push(text[i])
  }
  let reversedArray = [];
  for(let j = newArray.length -1; j>=0; j--){
    reversedArray.push(newArray[j])
  }
  let lastString = "";
  for(let i = 0; i< reversedArray.length; i++){
    lastString+=reversedArray[i]
  }
  return lastString;
}
console.log(returnReversedArray("banana"))