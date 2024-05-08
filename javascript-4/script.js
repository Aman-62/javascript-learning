"use strict"

const restaurant = {
    name: "Subway",
    location: "123 Main St",
    categories: ["Italian", "Indian", "Vegetarian", "Organic"],
    starterMenu: ["Fries", "Soup", "Salad"],
    mainMenu: ["Pizza", "Pasta", "Burger"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({time, address, mainIndex, starterIndex}) {
        // const {time, address, mainIndex, starterIndex} = obj;

        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
}

restaurant.orderDelivery({
    time: "22.30",
    address: "dummy address",
    mainIndex: 1,
    starterIndex: 2,
})
restaurant.orderDelivery({
    address: "dummy address",
    starterIndex: 2,
})

//* Destructuring Objects
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//* custom variable names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
console.log(restaurant, hours, tags);

//* default Values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//* nested object
const {fri: {open: o = 1, close: c = 1}} = openingHours;
console.log(o, c);

/*

//* Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//* skip an element
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//* switch values
// const temp = main;
// main = secondary;
// secondary = temp;

[secondary, main] = [main, secondary]
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

//* Nested destructuring
const nested = [2, 4, [5, 6]];

const [p, q, [r, s]] = nested;
console.log(p, q, r, s);

//* Default values
const [i = 1, j = 1, k = 1] = [8, 9];
console.log(i, j, k);

*/