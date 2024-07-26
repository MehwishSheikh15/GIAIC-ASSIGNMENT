"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(name, country) {
    // return `"${name}, ${country}"`;
    console.log(`"${name}, ${country}"`);
}
city_country("Karachi", "Pakistan");
let myCities = city_country("Karachi", "Pakistan");
console.log(myCities);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("New York", "USA"));
