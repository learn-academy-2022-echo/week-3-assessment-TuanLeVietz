// ASSESSMENT 3: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.


// a) Create a test with expect statements for each of the variables provided.

//Pseudocode:We invoke the method describe/it with the argument fibo.
//in plain words we describe what the function does 'takes in any number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence', then we provided it with an argument for the function to call on. Using toEqual we chain it together and expect it to equal the expected output. 
//Now that the setup is complete for the test we run it using "$ yarn jest" and it should give us an error that says fibo not defined, which is a good error. 

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe('fibo', () => {
    it('takes in any number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence', () => {
        expect(fibo(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibo(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// b) Create the function that makes the test pass.
//Pseudocode: create a function fibo and assign a new array to 0 and 1 for the Fibonacci sequence to start.
//We're gonna run a for loop to iterate the arguments length and set up the Fibonacci sequence. Each number it iterates is gonna get pushed to the new array and were gonna slice the array at 1 since it starts with a 0. 


const fibo = (number) => {
    let newArr = [0, 1]
    for (let i = 2; i <= number; i++) {
        newArr.push(newArr[i - 2] + newArr[i - 1])
   }
    return newArr.slice(1)
}

console.log(fibo(fibLength1))
console.log(fibo(fibLength2))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

//Pseudocode:We invoke the method describe/it with the argument sortedOdds.
//in plain words we describe what the function does 'it takes in an array and returns an array of only odd numbers sorted from least to greatest', then we provided it with an argument for the function to call on. Using toEqual we chain it together and expect it to equal the expected output. 
//Now that the setup is complete for the test we run it using "$ yarn jest" and it should give us an error that says fibo not defined, which is a good error. 

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe('sortedOdds', () => {
    it("takes in an array and returns an array of only odd numbers sorted from least to greatest", () => {
        expect(sortedOdds(fullArr1)).toEqual([-9, 7, 9, 199]);
        expect(sortedOdds(fullArr2)).toEqual([-823, 7, 23]);
    })
})

// b) Create the function that makes the test pass.

//Pseudocode: declare a high order function named sortedOdds and pass it through an array.
//Use the .filter method and set the requirements to odd numbers by using modulo 2 not equal to 0. set typeof value to strictly equal to number, this way it will filter only odd numbers. Then we sort this whole array with .sort method to arrange the numbers from least to greatest. 

const sortedOdds = (array) => {
    return array.sort((a, b) => a - b).filter(value => typeof value === "number" && value % 2 !==0)

}

console.log(sortedOdds(fullArr1))
console.log(sortedOdds(fullArr2))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

//Pseudocode:We invoke the method describe/it with the argument allSum.
//in plain words we describe what the function does 'takes in an array and returns an array of the accumulating sum', then we provided it with an argument for the function to call on. Using toEqual we chain it together and expect it to equal the expected output. 
//Now that the setup is complete for the test we run it using "$ yarn jest" and it should give us an error that says allSum is not defined, which is a good error. 

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []
 
describe('allSum', () => {
    it("takes in an array and returns an array of of the same length with the numbers and accumulates the sum", () => {
        expect(allSum(numbersToAdd1)).toEqual([2, 6, 51, 60]);
        expect(allSum(numbersToAdd2)).toEqual([0, 7, -1, 11]);
        expect(allSum(numbersToAdd3)).toEqual([]);
    })
})

// b) Create the function that makes the test pass.

//pseudocode: Declare a function named allSum. We're gonna run a for loop to create a new array and add the accumulating sum. 
//to set up the math were gonna add array at i with array at i-1

const allSum = ( array ) => {
    for(let i = 1; i < array.length; i++) {
      array[i] = array[i] + array[i - 1]
    }
    return array  
}

 console.log(allSum(numbersToAdd1))
 console.log(allSum(numbersToAdd2))
 console.log(allSum(numbersToAdd3))

 //Im not sure what is wrong with this i ran it a couple times and it showed that it passed then i came back to it and now it gives me a fail on line 106 even tho i didnt change anything. 