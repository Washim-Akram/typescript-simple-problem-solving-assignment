"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    if (toUpper === true || toUpper === undefined) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
function concatenateArrays(...arrays) {
    // return arrays.reduce((a, b) => [...a, ...b], []);  //This is not a good approach to solve this problem. This way we will face problems like: memory leaks and time complexity.
    // Better way to resolve
    return arrays.reduce((combinedArray, currentArray) => combinedArray.concat(currentArray), []);
}
class Vehicle {
    constructor(_make, _year) {
        this._make = _make;
        this._year = _year;
    }
    getInfo() {
        return `Make: ${this._make}, Year: ${this._year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, _model) {
        super(make, year);
        this._model = _model;
    }
    getModel() {
        return `Model: ${this._model}`;
    }
}
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
function getMostExpensiveProduct(products) {
    const validProducts = products.filter((product) => typeof product.price === "number" && !isNaN(product.price));
    if (Array.isArray(products) && products.length === 0) {
        return null;
    }
    else {
        return validProducts.reduce((prev, current) => prev.price > current.price ? prev : current);
    }
}
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
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
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        if (n < 0) {
            return Promise.reject(new Error("Negative number not allowed"));
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    });
}
