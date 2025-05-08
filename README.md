# TypeScript Simple Problem Solving Project

This project contains solutions to 8 different programming problems implemented in TypeScript.

## Project Structure

Each file contains a TypeScript solution for a specific problem.

## Installation

To run this project, you need to have [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) installed on your machine.

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
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

## 🎯 Interview Questions - Blog Task

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
