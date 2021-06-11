# Typed Arrays

```js
// Typed Arrays - each array has same type of value

// it is mostly inferred by typescript, if it is initialised
// but if its initialised as empty array, define the type
const carMakers: string[] = ["Maruti", "Mahindra", "Ford"];

const dates: Date[] = [new Date(), new Date()];

const carByMake: string[][] = [["Alto"], ["Renault"], ["Figo"]];

// advantages
// helps with inference when we fetch value from array

const someCar = carMakers[0];
const popCar = carMakers.pop();

// does not let push incorrent values

carMakers.push(1100);

// help with map, filter, reduce

carMakers.map((iCar) => {
  return iCar;
});

// multiple types in array
// flexible types

const importantDate: (Date | string)[] = [new Date(), "2020/09/01"];
importantDate.push(new Date());
importantDate.push("2056-09-01");
```
