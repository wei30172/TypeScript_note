// Function

// Example 1
let talk: (a: string, b: string) => void;

talk = (name: string, words: string) => {
  console.log(`${name} says ${words} !`);
}

talk('Claire', 'hi'); // Claire says hi !

// Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// Example 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (student: person) => {
  console.log(`${student.name} is ${student.age} years old.`);
}

logDetails({name: 'Claire', age: 30}); // Claire is 30 years old.