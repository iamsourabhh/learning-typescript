let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];

let myNumbers: number[] = [22, 3, 93];

let truths: boolean[] = [true];

// classes

class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

let words = ["red", "green", "blue"];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

let numbers = [-10, -1, 23];

// this variable can have either a number or boolean
let numberAboveZero: boolean | number = false;

numbers.forEach((number) => {
  if (number > 0) {
    numberAboveZero = number;
  }
});

// Typescript will try to figure out
// what type of value function returns
// but will not try to figure out the types of arguement it accepts

// the return type mentioned is not really necessary
// typescript will infer the type of function it returns
const add = (a: number, b: number): number => {
  return a + b;
};

// alternate forms of declaration for functions

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// never is used, if we are never going to complete the execution of the function
const throwError = (message: string): never => {
  throw new Error(message);
};

// destructuring with annotations functions
const forecast = {
  date: new Date(),
  weather: "Sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: String;
}): void => {
  console.log(date);
  console.log(weather);
};

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: {
  coords: { lat: number; lng: number };
} = profile;
