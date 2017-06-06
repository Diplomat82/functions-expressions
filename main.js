// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

    // Your answer here
function max(firstNum, secondNum){


    if (firstNum > secondNum) {
      return firstNum;
    } else {
      return secondNum;
    }
}

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a, b, c){
    // Your answer here



      if (a > b && a > c) {
        return a;

      } else if (b > a && b > c) {
        return b;

      } else {
        return c;
      }
}

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
  var x = char.toLowerCase();
    if(x== "a"|| x == "e" || x == "i" || x == "o" || x== "u" || x == "y")  {
       return true;
     } else {
					return false;
      }
}
// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(a, b) {
  return a + b;


}

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

// INPUT: TAKING IN 3 NUMBERS
function avg(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
// OUTPUT: ONE NUMBER

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
// INPUT: A STRING


// OUTPUT: A STRING
  function getLength(word) {
    // return a number
    return word.length;
  }
  // OUTPUT: A NUMBER

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
//INPUT: 2 NUMBERS
function greaterThan(number, number2) {
  if(number > number2){
    return true;
  } else{
    return false;

  }
}
//OUTPUT: BOOLEAN




// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
// INPUT:/ string
function greet(name) {
  return "Hello, " + name + "!";
  
}

//OUTPUT: String

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
