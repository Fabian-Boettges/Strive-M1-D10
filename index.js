// JS EXERCISES

//       27) Write a function to get the maximum and minimum values from the previously created array
//       29) Create a function that gets 2 arrays as parameters and returns the longest one
//       30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values


//       21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
let x = "John"
let y = "Doe"

console.log(`${x} <> ${y}`)

//       22) Create an object with properties such name, surname, email

let object = {
    name: "Christopher",
    surname: "Wallace",
    email: "biggie.smalls@gmail.com"

}
console.log(object)

//       23) Delete the email property from the previously created object

delete object.email

//       24) Create an array with 10 strings in it

let arrayOfStrings = ["biggie", "bigL", "nas", "NYC", "east", "coast", "guru", "mpc", "corleone", "doom"]

//       25) Print in the console every string from the previous array

console.log(arrayOfStrings)

//       26) Create an array with 100 random numbers in it

let = arrayOfRandomNumbers = []
for (i=0; i<100; i++){
    arrayOfRandomNumbers[i]=Math.floor(Math.random()*100)+1
}

console.log(arrayOfRandomNumbers)

//       27) Write a function to get the maximum and minimum values from the previously created array


//       28) Create an array of arrays, in which every array has 10 random numbers

let arrayOfArrays = [

    Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    Array.from({length: 10}, () => Math.floor(Math.random() * 10)),
    Array.from({length: 10}, () => Math.floor(Math.random() * 10))
    
]

console.log(arrayOfArrays)

