"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
};

const restaurant = {
    name: "Subway",
    location: "123 Main St",
    categories: ["Italian", "Indian", "Vegetarian", "Organic"],
    starterMenu: ["Fries", "Soup", "Salad"],
    mainMenu: ["Pizza", "Pasta", "Burger"],
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({
        time = "20:00",
        address,
        mainIndex = 0,
        starterIndex = 0,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },
    orderPizza(ing1, ing2) {
        console.log([ing1, ing2]);
    },
};

const ordersSet = new Set([
    "Pasta",
    "Pizza",
    "Pizza",
    "Burger",
    "Pasta",
    "Pizza",
]);
console.log(ordersSet);

console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");

ordersSet.delete("Pasta");

// ordersSet.clear();
console.log(ordersSet);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUniqueSet = new Set(staff);
console.log(staffUniqueSet);

const staffUniqueArr = [...new Set(staff)];
console.log(staffUniqueArr);

/*

console.log(restaurant);


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//* for_of

for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1}:  ${menu[i]}`);
}

// for (let element of menu) {
//     console.log(element);
// }

for (let [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// ["a", "b", "c"].entries()
// [[0, "a"], [1, "b"], [2, "c"]]



restaurant.numGuests = 0;

console.log(restaurant.numGuests);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// '', null, undefined, NaN, 0
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish Coalescing
// undefined, null
const guests3 = restaurant.numGuests ?? 10;
console.log(guests3);


//* Short Circuiting (&& and ||)
// falsy values? 0, '', undefined, null, NaN

// Use ANY data type, return ANY data type, short-circuiting
//* || => return first truthy value, if there is no truthy value then last falsy value
console.log("===||===");
console.log(3 || "Rahul");
console.log("" || "Rahul");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 20;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//* && => return first falsy value, if there is no falsy value then last truthy value
console.log("===&&===");
console.log(0 && "Rahul");
console.log(7 && "Rahul");
console.log("Hello" && 23 && null && "Rahul");

if (restaurant.orderPizza) {
    restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");


//* Rest Operator

// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4, 5]];
console.log(arr);

// Rest, because on LEFT side of =
const [a, b, ...others] = [10, 20, 30, 40, 50];
console.log(a, b);
console.log(others);

const [item1, item2, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(item1, item2);
console.log(otherFood);

const {sat, ...weekdays} = restaurant.openingHours
console.log(sat);
console.log(weekdays);

function add(x, ...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

add(2, 4)
add(2, 4, 6, 10 )
add(2, 4, 6, 10, 12, 14)
add(2, 4, 6, 10, 100, 200, 1000)

//* Spread Operator

const arr = [5, 7, 9];

// const badArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badArr);

const goodArr = [1, 2, ...arr];
console.log(goodArr);
console.log(...goodArr);
console.log(1, 2, 5, 7, 9);

// [5, 7, 9] => [5, 7, 9]
// ...[5, 7, 9] => 5, 7, 9
// [...[5, 7, 9]] => [5, 7, 9]

const newMenu = [...restaurant.mainMenu, "Sandwich"];
console.log(newMenu);

//* copy array
const mainMenuCopy = [...restaurant.mainMenu];

//* join more than 1 array
const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(wholeMenu);

//* Strings
const str = "Rahul";
const letters= [...str, " ", "S."];
console.log(letters);

// const ingredients = [
//     prompt("Let's make Pasta! Ingredient 1?"),
//     prompt("Ingredient 2?"),
//     prompt("Ingredient 3?")
//     ];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients)

//* Objects
const newRestaurant = { foundedIn: 1965, ...restaurant, founder: "Mohit", name: "Subway-new" };
console.log(newRestaurant);


//* Destructuring Objects

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


//* Challenge 1

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//* 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
//* 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
//* 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//* 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
//* 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
//* 6
const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored.`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

//* 7
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

*/
