# Typescript

- Plain Javascript with type notations.

- All the code you write in typescripts gets compiled by TS compiler into vanila JS.

- Just for developer convinience it seems.

- If you want to see how the compliled output of typescript looks, check here ---> https://www.typescriptlang.org/play

## Environment Setup

```bash
# Install typescript
npm install -g typescript

# Helps compile and execute in on command. Duh!!
npm install -g ts-node

# run this, if you want to check if ts installed or not (Trust Issues!! :P)
tsc --help
```

## Running

- Create a TS file to do something.

```bash
# To compile -->  it will create a compiled js file, use node to run the compiled js
tsc [filename].ts

# One command to run and compile? Here it is!!
ts-node [filename].ts
```
