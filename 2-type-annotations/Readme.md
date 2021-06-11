# Type Annotations

- Code we add to tell what variable or property is of what type.

- If you don't, TS will do Type Interference and try to figure out, what the variable type is.

```ts
const apples: number = 5;
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
```
