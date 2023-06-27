console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "FIZZBUZZ");
    } else if (i % 3 === 0) {
        console.log(i, "FIZZ");
    } else if (i % 5 === 0) {
        console.log(i, "BUZZ");
    } 
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let i = 1;
while (i < 100) {
    if (i % 2 != 0) {
        console.log(i)
    }
    i++;
}

i = 0;
do {
    if (i % 2 != 0) {
        console.log(i)
    }
    i++;
} while (i < 100);

i = 0;
do {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0){
        console.log("FIZZ");
    } else if (i % 5 == 0){
        console.log("BUZZ");
    }
    i++;
}   while (i < 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500));
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);
// creates a random number between 100 and 500

let foundValue = false;

for (let j = 0; j <= n; j++) {
    if (j === value){
        foundValue = true;
        console.log("Found value!");
        break;
    } 
}

if (!foundValue){
    console.log("Did not find value");
}

// Exercise 5 Section do/while loop
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1);
// creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100);
// creates a random number between 100 and 1000

for (let inc = start; inc < end; inc++){
    if (inc % fizzDivisor == 0 && inc % buzzDivisor == 0){
        console.log (inc, "FIZZBUZZ");
    } else if (inc % fizzDivisor == 0){
        console.log("FIZZ");
    } else if (inc % buzzDivisor == 0){
        console.log("BUZZ");
    }
}
console.log(fizzDivisor, buzzDivisor);