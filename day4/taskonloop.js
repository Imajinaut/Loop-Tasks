// Quick intro to loop




// 1. Print numbers 1-10 using a while loop

let i =0
while (i<=10) {
   console.log(i)
   i++
}

// 2. Count backwards from 10 to 1 using a for loop

for (let m = 10; m >= 0; m--) {
   console.log(m)
   
}
// 3. Sum all numbers from 1 to 5 using any loop
let numbers=[1,2,3,4,5]
let sum = 0

for (let s = 0; s < numbers.length; s++) {
   sum+=numbers[s]
   console.log(sum)
}

// 4. Print even numbers from 2 to 20
let evenNum = []
for (let e = 1; e <=20; e++) {
   if (e%2===0) {
      console.log(e)
   }
   
}
// 5. Create a loop that prints your name 5 times

let m =0
let myName = "mike"
while (m<5) {
   
   console.log(`myname is: ${myName}`)
   m++
}


// 6. Calculate the factorial of 5 (5! = 5 x 4 x 3 x 2 x 1)

// 7. Print multiplication table for number 5 (5 x 1, 5 x 2, etc.)

// 8. Sum all even numbers between 1 and 50

// 9. Count how many times the letter 'a' appears in a string

// 10. Print numbers 1-20, but print "Fizz" for multiples of 3

// 11. Find the largest number in an array using a loop
// let numbers = [23, 54, 32, 87, 47];

// 12. Calculate the average of numbers in an array

// 13. Reverse an array without using array.reverse()

// 14. Remove all even numbers from an array

// 15. Find duplicate numbers in an array

// 16. Merge two sorted arrays into one sorted array

// 17. Count positive and negative numbers in an array

// 18. Find the second largest number in an array

// 19. Print a pattern using loops:
/*
*
**
***
****
*****
*/

// 20. Check if a number is prime using a loop

// 21. Print all pairs of numbers in array that sum to 10
// let nums = [2, 4, 6, 7, 8, 3, 5];

// 22. Create a loop that prints this pattern:
/*
   1
  121
 12321
1234321
*/

// 23. Find all prime numbers between 1 and 100

// 24. Implement bubble sort using loops

// 25. Create a shopping cart total calculator:
// let cart = [
//     {item: "bread", price: 2.99, quantity: 2},
//     {item: "milk", price: 3.50, quantity: 1},
//     {item: "eggs", price: 4.99, quantity: 3}
// ];

// 26. Calculate compound interest for 5 years using nested loops

// 27. Create a phone number validator using loops

// 28. Implement a simple calculator for an array of operations
// Example: ["2", "+", "3", "*", "4"]

// 29. Create a loop that generates this pattern:
/*
1
2 3
4 5 6
7 8 9 10
*/

// 30. Create a basic game loop where player has 3 lives and needs to 
// guess numbers until they either win or lose all lives