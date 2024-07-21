// // Create a function that reverses an array. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.
function num(array){

}
let arr1=[1,2,3,4,5];
console.log(arr1)
let reversedArr1 = arr1.reverse()
console.log("Original Array:", arr1);
console.log("Reversed Array:", reverseArr1);
num();

// // Create a function that filters out negative numbers. In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”
let x=[]
function abc(num){
}
let  userInput = prompt("enter any negative number")



 // Write a JavaScript program to find the index of an array item in a for loop.
function findIndex(arr,target){
    for(let i=0; i< arr.length; i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
let array=[1,2,3,4,5];
let targetItem=3;
let index=findIndex(array,targetItem);

if (index!== -1){
    console.log("the index of ${targetItem} in the array is:${index}");
}
else{
    console.log("${targetItem} is not found in the array.");
}

 // Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of.
function countVowels(str) {
    str = str.toLowerCase();
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let char of str) {
        
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}
const str = "Hello World";
console.log(countVowels(str)); 
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("kayak"));  
console.log(isPalindrome("mom"));    
console.log(isPalindrome("radar"));   
console.log(isPalindrome("refer"));  
console.log(isPalindrome("hello"));   
console.log(isPalindrome("A man, a plan, a canal, Panama"));   
console.log(isPalindrome("Was it a car or a cat I saw?"));    

// Write a JavaScript program to find the smallest round number not less than a given value. Note: A round number is informally considered to be an integer that ends with one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.
function findNextRoundNumber(number) {
    let numberString = number.toString();
    let lastNonZeroIndex = numberString.length - 1;
    while (lastNonZeroIndex >= 0 && numberString[lastNonZeroIndex] === '0') {
        lastNonZeroIndex--;
    }
    if (lastNonZeroIndex < 0) {
        return number;
    }
    let roundNumberString = numberString.slice(0, lastNonZeroIndex + 1) + '0'.repeat(numberString.length - lastNonZeroIndex - 1);
    let roundNumber = parseInt(roundNumberString, 10);
    return roundNumber;
}
let givenValue = 592;
let smallestRoundNumber = findNextRoundNumber(givenValue);
console.log(`The smallest round number not less than ${givenValue} is ${smallestRoundNumber}`);
