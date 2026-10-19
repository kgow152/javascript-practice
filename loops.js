
// Q1: Print numbers from 1 to 10
console.log("Q1: Numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Q2: Sum of first N natural numbers using while loop
let n = 10;
let i = 1;
let sum = 0;

while (i <= n) {
    sum += i;
    i++;
}

console.log("Q2: Sum of first " + n + " numbers = " + sum);

// Q3: Print multiplication table of a given number
let tableNumber = 5;

console.log("Q3: Multiplication table of " + tableNumber);

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

// Q4: Calculate factorial using while loop
let factorialNumber = 5;
let factorial = 1;
let count = 1;

while (count <= factorialNumber) {
    factorial *= count;
    count++;
}

console.log("Q4: Factorial of " + factorialNumber + " = " + factorial);

// Q5: Print numbers from 10 down to 1
console.log("Q5: Reverse counting");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Q6: Print even numbers up to N using do-while loop
let limit = 20;
let evenNumber = 2;

console.log("Q6: Even numbers up to " + limit);

if (limit >= 2) {
    do {
        console.log(evenNumber);
        evenNumber += 2;
    } while (evenNumber <= limit);
} else {
    console.log("No even numbers in this range");
}

// Q7: Calculate the sum of digits using while loop
let digitNumber = 12345;
let tempNumber = Math.abs(digitNumber);
let digitSum = 0;

while (tempNumber > 0) {
    digitSum += tempNumber % 10;
    tempNumber = Math.floor(tempNumber / 10);
}

console.log("Q7: Sum of digits of " + digitNumber + " = " + digitSum);

// Q8: Generate the first 10 terms of Fibonacci series
let first = 0;
let second = 1;
let fibonacci = [];

for (let i = 1; i <= 10; i++) {
    fibonacci.push(first);

    let next = first + second;
    first = second;
    second = next;
}

console.log("Q8: Fibonacci series = " + fibonacci.join(", "));

// Q9: Guessing game using do-while loop
let secretNumber = 7;
let guesses = [3, 5, 7];
let guessIndex = 0;
let guess;

do {
    guess = guesses[guessIndex];
    console.log("Q9: Guess = " + guess);

    guessIndex++;
} while (guess !== secretNumber && guessIndex < guesses.length);

if (guess === secretNumber) {
    console.log("Q9: Correct guess!");
} else {
    console.log("Q9: No correct guess");
}

// Q10: Check whether a number is prime
let primeNumber = 17;
let isPrime = primeNumber > 1;

for (let i = 2; i <= Math.sqrt(primeNumber) && isPrime; i++) {
    if (primeNumber % i === 0) {
        isPrime = false;
    }
}

if (isPrime) {
    console.log("Q10: " + primeNumber + " is a prime number");
} else {
    console.log("Q10: " + primeNumber + " is not a prime number");
}
