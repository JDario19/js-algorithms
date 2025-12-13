/**
 Description:
Write a function reverseString(text) that receives a string and returns it completely reversed.

Rules:
	•	Use a for loop that goes from the end to the beginning.
	•	Do not use split, reverse, or join.

Example:
Input: "hello" → Output: "olleh"
 */
function reverseString(text) {
    let reversedText = "";
    for(let i = text.length -1;i>=0;i--){
      reversedText+=text[i];
    }
    return reversedText
}
console.log(reverseString("hello"))