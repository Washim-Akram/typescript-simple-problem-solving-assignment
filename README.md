# TypeScript Simple Problem Solving Assignment

This project contains solutions to 8 different programming problems implemented in TypeScript and short blogs about different types of typescript topics.

## Project Structure

Inside the "src" directory:-> "index.ts" contains TypeScript solutions for specific problems.

## Installation

To run this project, you need to have [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) installed on your machine.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Washim-Akram/typescript-simple-problem-solving-assignment
   cd typescript-simple-problem-solving-assignment
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Compile the TypeScript files**:

   ```
   npx tsc

   ```

---

---

## 🎯 Interview Questions - Blog Task

### 1. What are some differences between interfaces and types in TypeScript?

#### TypeScript: Interface vs Type

If you are learning TypeScript, you have probably heard about both `interface` and `type`. They seems and sounds like similar but there are a few key differences that we all should know.

##### I. Both Can Describe Object Shapes

Both `interface` and `type` give us the power to define the structure of an object:

```typescript
interface IUser {
  name: string;
  age: number;
}

type TUser = {
  name: string;
  age: number;
};
```

##### II. Interfaces Can Be Extended and Merged

We can add more properties to an interface to extends:

```typescript
interface Animal {
  name: string;
}

interface Cat extends Animal {
  age: number;
}
```

##### III. Type is More Flexible

type can do more rather than interfaces:

```typescript
type ID = string | number;
type Point = [number, number];
```

##### IV. Use Interface for Objects, Type for Everything Else

A good rule of thumb is that:

- Use interface when we are working with objects or classes.

- Use type when we need to combine types and more complex types

##### Conclusions or Final Thoughts

TypeScript gives us flexibility. If we need to just describing an object, interfaces are preferable and other use cases we usually use types.

---

---

### 3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

`any`, `unknown` and `never` types in TypeScript gives us more types and flexibility to write program safely and bugs free. Today we will know a little bit of these 3 types:

#### `any`:

- In typescript `any` means disability of type checking.
- When we will use `any`, we tell the typescript compiler to stop the type checking.
- In simple words at **"any"** cost we should avoid use of `any`.

#### `unknown`:

- In typescript the word `unknown` defines the not known types.
- It refers: when developer explicitly have to type any data but yet not know exactly the type.
- It's more safer and bugs free rather than `any` type.

#### `never`:

- In typescript the `never` type represents the type of values that never happen or occur.
- It's often used for functions that always throw an error

---

---

### 7. Provide an example of using union and intersection types in TypeScript.

#### Example Of Union Types:

_Union_ types allow us to take multiple types into an single parameter or variable. It's like javascript OR(|) operator. It can be either string, number, boolean and so on.

```typescript
function formatId(id: string | number): string {
  return `ID: ${id}`;
}

console.log(formatId(123)); // Output: ID: 123
console.log(formatId("ABC123")); // Output: ID: ABC123
```

Here, id is of type string | number, meaning it can be either a string or a number. The function will accept both without any issue.

#### Example Of Intersection Types:

_Intersection_ types allow us to combine multiple types into one. It's like javascript AND(&&) operator.

```typescript
type User = {
  name: string;
  age: number;
};

type Permissions = {
  canEdit: boolean;
  canDelete: boolean;
};

type UserWithPermissions = User & Permissions;

const admin: UserWithPermissions = {
  name: "Alice",
  age: 30,
  canEdit: true,
  canDelete: true,
};

console.log(admin);
```

In this example, the UserWithPermissions type combines User and Permissions properties, so the admin object has all properties from both types.
