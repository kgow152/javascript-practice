
 // Q1: Check if a number is positive, negative, or zero
let num1 = -5;

if (num1 > 0) {
    console.log("Q1: Positive number");
} else if (num1 < 0) {
    console.log("Q1: Negative number");
} else {
    console.log("Q1: Zero");
}

// Q2: Check whether a number is even or odd
let num2 = 7;

if (num2 % 2 === 0) {
    console.log("Q2: Even number");
} else {
    console.log("Q2: Odd number");
}

// Q3: Find the larger of two numbers
let a = 15;
let b = 25;

if (a > b) {
    console.log("Q3: Larger number is " + a);
} else if (b > a) {
    console.log("Q3: Larger number is " + b);
} else {
    console.log("Q3: Both numbers are equal");
}

// Q4: Assign a grade based on percentage
let percentage = 85;

if (percentage < 0 || percentage > 100) {
    console.log("Q4: Invalid percentage");
} else if (percentage >= 80) {
    console.log("Q4: Grade A");
} else if (percentage >= 70) {
    console.log("Q4: Grade B");
} else if (percentage >= 60) {
    console.log("Q4: Grade C");
} else if (percentage >= 50) {
    console.log("Q4: Grade D");
} else {
    console.log("Q4: Grade F");
}

// Q5: Check whether a year is a leap year
let year = 2024;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Q5: Leap year");
} else {
    console.log("Q5: Not a leap year");
}

// Q6: Print day name using switch-case
let day = 3;

switch (day) {
    case 1: console.log("Q6: Monday"); break;
    case 2: console.log("Q6: Tuesday"); break;
    case 3: console.log("Q6: Wednesday"); break;
    case 4: console.log("Q6: Thursday"); break;
    case 5: console.log("Q6: Friday"); break;
    case 6: console.log("Q6: Saturday"); break;
    case 7: console.log("Q6: Sunday"); break;
    default: console.log("Q6: Invalid day number");
}

// Q7: Simple calculator using switch-case
let numA = 20;
let numB = 5;
let operator = "*";

switch (operator) {
    case "+": console.log("Q7: Result = " + (numA + numB)); break;
    case "-": console.log("Q7: Result = " + (numA - numB)); break;
    case "*": console.log("Q7: Result = " + (numA * numB)); break;
    case "/":
        if (numB !== 0) {
            console.log("Q7: Result = " + (numA / numB));
        } else {
            console.log("Q7: Cannot divide by zero");
        }
        break;
    default: console.log("Q7: Invalid operator");
}

// Q8: Check whether a character is a vowel or consonant
let character = "e";

switch (character.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Q8: Vowel");
        break;
    default:
        if (/^[a-z]$/i.test(character)) {
            console.log("Q8: Consonant");
        } else {
            console.log("Q8: Not a valid alphabet");
        }
}

// Q9: Traffic light instructions using switch-case
let trafficLight = "Red";

switch (trafficLight.toLowerCase()) {
    case "red": console.log("Q9: Stop"); break;
    case "yellow": console.log("Q9: Wait"); break;
    case "green": console.log("Q9: Go"); break;
    default: console.log("Q9: Invalid traffic light color");
}

// Q10: Menu-driven program using switch-case
let choice = 2;
let balance = 1000;
let amount = 200;

switch (choice) {
    case 1:
        console.log("Q10: Current balance = Rs. " + balance);
        break;
    case 2:
        balance += amount;
        console.log("Q10: Deposit successful. Balance = Rs. " + balance);
        break;
    case 3:
        if (amount <= balance) {
            balance -= amount;
            console.log("Q10: Withdrawal successful. Balance = Rs. " + balance);
        } else {
            console.log("Q10: Insufficient balance");
        }
        break;
    case 4:
        console.log("Q10: Exit");
        break;
    default:
        console.log("Q10: Invalid menu choice");
}
