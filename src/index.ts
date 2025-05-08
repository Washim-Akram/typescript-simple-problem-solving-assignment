function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  // return arrays.reduce((a, b) => [...a, ...b], []);  //This is not a good approach to solve this problem. This way we will face problems like: memory leaks and time complexity.

  // Better way to resolve
  return arrays.reduce(
    (combinedArray, currentArray) => combinedArray.concat(currentArray),
    []
  );
}

class Vehicle {
  private _make: string;
  private _year: number;

  constructor(_make: string, _year: number) {
    this._make = _make;
    this._year = _year;
  }

  public getInfo(): string {
    return `Make: ${this._make}, Year: ${this._year}`;
  }
}

class Car extends Vehicle {
  private _model: string;

  constructor(make: string, year: number, _model: string) {
    super(make, year);
    this._model = _model;
  }
  public getModel(): string {
    return `Model: ${this._model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  const validProducts = products.filter(
    (product) => typeof product.price === "number" && !isNaN(product.price)
  );
  if (Array.isArray(products) && products.length === 0) {
    return null;
  } else {
    return validProducts.reduce((prev, current) =>
      prev.price > current.price ? prev : current
    );
  }
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    case Day.Monday:
    case Day.Tuesday:
    case Day.Wednesday:
    case Day.Thursday:
    case Day.Friday:
      return "Weekday";
    default:
      return "Invalid day";
  }
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    return Promise.reject(new Error("Negative number not allowed"));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
