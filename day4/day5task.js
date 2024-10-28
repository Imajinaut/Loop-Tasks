// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Write a for loop that prints the numbers from 1 to 10 to the console.
for (let i = 1; i <= 10; i++) {
    console.log(`let this number ${i}`);
    
}

// Create an array of your favorite fruits. Use a for loop to print each fruit to the console.

let myArray = [`orange`, `apple`, `blueberry`, `guava`, `tangerine`]
for (const fruit of myArray) {
    console.log(fruit)
}


// Write a program that uses a for loop to calculate the sum of all numbers from 1 to 100.
let total=0
 for (let i = 0; i <= 100; i++) {
    total+=i
    console.log(total)
    
 }


// Create a for loop that prints only the even numbers between 0 and 20.
for (let i = 0; i <= 20; i++) {
    let even = i
    
}

// Write a while loop that counts down from 10 to 1, printing each number to the console.


// Create a program that uses a do...while loop to ask the user to enter a number. Keep asking until they enter a number greater than 10.

// let userEnter = 0
// do {
//     userEnter= prompt(`Plese Enter a number`)
//     userEnter = Number(userEnter)
// } while (userEnter<=10);



// Write a program that uses a while loop to generate a random number between 1 and 10, and keeps generating numbers until it gets a 7.

let ranDomNum = 0
while (ranDomNum!==7) {
    ranDomNum = Math.floor(Math.random()*10)
    
    console.log(`${ranDomNum}`)
}




// Create an array of 5 numbers. Use a for loop to multiply each number by 2 and update the array with the new values.

let fiveArray = [2,3,4,6,7]
for (let i = 0; i < fiveArray.length; i++) {
    fiveArray[i]= fiveArray[i]*2
    
}
console.log(fiveArray)

// Write a program that uses a do...while loop to print the first 10 numbers in the Fibonacci sequence.

let ranDomNum1 = 0
let ranDomNum2 = 1
let count =0
do {
    console.log(ranDomNum1)
    let nextNum = ranDomNum1+ranDomNum2


    ranDomNum1=ranDomNum2
    ranDomNum2=nextNum
    count++

} while (count<10);

// Create a simple game where the computer thinks of a number between 1 and 100. Use a while loop to allow the user to guess the number, telling them if their guess is too high or too low, until they guess correctly.


let numGenerated= Math.floor(Math.random()*100) +1
let userGuess = 0
while (numGenerated!=userGuess) {
    userGuess = prompt(`Please Enter A Number`)
    userGuess=parseFloat(userGuess)
    if (userGuess<numGenerated) {
        console.log(`Guess to low and number generated is ${numGenerated}`)
    }else if(userGuess>numGenerated){
        console.log(`Guess too high  and number generated is ${numGenerated}`)
    }else{
        console.log(`UserGuess = ${userGuess} = NumberGenerated = ${numGenerated}`)
    }
    


}