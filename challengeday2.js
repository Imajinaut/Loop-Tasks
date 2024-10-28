// if conditionals
let x= 3
if (x>2) {
    console.log(`It is greater`)
}


// ELSE IF 

let rating = 0

if (rating===3) {
    console.log(`Excellent`)
}
else if(rating===2){
    console.log(`YOU CAN DO BETTER`)
 }else{
    console.log(`WTF!`)
 }


 let age = 90

 if(age<6 || age >=65){
    console.log(`YOU GET IN FOR FREE`)
 }
 else{
    console.log(`YOU NEED TO PAY $10`)
 }


//  Switch Statement

// we want to check the day of the week with number

let day = 6

switch (day) {
    case 1:
        console.log(`MONDAY`)
        break;

    case 2:
        console.log(`TUESDAY`)
        break;
    case 3:
            console.log(`WEDNESDAY`)
            break;
    case 4:
        console.log(`THURSDAY`)
        break;
    case 5:
        console.log(`FRIDAY`)
        break;
    case 6:
        console.log(`SATURDAY`)
        break;

}




//  To do Task
// Create a variable using let to store your age, and another using const to store your name. Print a message to the console that says "Hello, [your name]! You are [your age] years old.

let myage = 24
const myName = `Michael`

console.log(`Heelo, ${myName}!, You are ${myage} years old`)

// Declare an array containing your five favorite colors. Use const to define this array. Then, use console.log() to print the third color in the array.

const myArrayColors = [`red`, `blue`, `green`, `yellow`, `orange`]
console.log(myArrayColors[2])

// Create an object representing a book with properties for title (string), author (string), pages (number), and isRead (boolean). Use console.log() to print out a sentence describing the book.

let myBook = {
    title: `think and grow rich`,
    author: `Napoleon Hills`,
    isRead: true
}

console.log(`The Title of my book is ${myBook.title}, written by ${myBook.author}, it's ${myBook.isRead} I have read it once.`)


// Write a program that calculates the area of a rectangle. Use let to declare variables for length and width, then use arithmetic operators to calculate and log the area.

let basee = 4
let height = 6
let area = basee*height
console.log(area)


// Create two variables with numerical values. Use comparison operators to check if the first number is greater than, less than, or equal to the second number. Log the results of each comparison.

let num1 = 50
let num2 = 50

if (num1>num2) {
    console.log(`num1 is greater`)
}else if(num1<num2) {
    console.log(`Num2 is greater`)
} else {
    console.log(`Both are a equal`)
}


// Write a program that uses the modulus operator (%) to check if a given number is even or odd. Log a message stating whether the number is even or odd.

let num3 = 25
let num4 = 4

if (num3%2===0) {
    console.log(`this is even`)
} else if(num3%2===1){
    console.log(`this is odd`)
}


// Create a simple age checker program. Use an if-else statement to check if a person's age (stored in a variable) is 18 or older. If true, log "You can vote!". Otherwise, log "You're too young to vote.

let realage = 17

if (realage>=18) {
    console.log(`You can vote!`)
} else {
    console.log(`You're too young to vote!`)
}


// Write a program that uses logical operators to check if a person is eligible for a discount. Create variables for age and student status (boolean). If the person is under 18 OR a student, log "You get a discount!". Otherwise, log "Regular price applies."

let yourage =14
let isStudent = false

if (yourage<18 || isStudent===true) {
    console.log(`You get a discount!`)
} else {
    console.log(`Regular price applies.`)
}


// Create a grading program. Use if-else if-else statements to assign a letter grade based on a numerical score. For example, 90-100 is A, 80-89 is B, and so on. Log the letter grade for a given score.

let graade= 45

if (graade<=100 && graade>=90) {
    console.log(`A`)
} else if(graade<=89 && graade>=80){
    console.log(`B`)
}  else if(graade<=79 && graade>=70){
    console.log(`C`)
}   else if(graade<=69 && graade>=60){
    console.log(`D`)
}   else if(graade<=59 && graade>=50){
    console.log(`E`)
}else if(graade<=49 && graade>=40){
    console.log(`F`)
}else{
    console.log(`WTF`)}


// Write a program that combines arithmetic and comparison operators. Create two variables with numerical values. Calculate their sum, difference, product, and quotient. Then use comparison operators to check which operation resulted in the largest value, and log a message stating which operation it was.

let firstone = 24
let secondOne = 3

let addMe= firstone+secondOne
let subtractMe = firstone-secondOne
let divideMe = firstone/secondOne
let multipleMe = firstone*secondOne

if (addMe>subtractMe && addMe>multipleMe && addMe>divideMe ) {
    console.log(`${addMe} is the highest value`)
} else if(subtractMe>addMe && subtractMe>multipleMe && subtractMe>divideMe){
    console.log(`${subtractMe} is the highest value`)
}else if(multipleMe>addMe && multipleMe>subtractMe && multipleMe>divideMe){
    console.log(`${multipleMe} is the highest value`)
}else if(divideMe>addMe && divideMe>multipleMe && divideMe>subtractMe){
    console.log(`${divideMe} is the highest value`)
}else {
    console.log(`Dont understand this logic`)
}