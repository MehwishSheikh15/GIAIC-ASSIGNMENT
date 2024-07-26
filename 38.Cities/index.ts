function describe_city(nameOfCity: string, country: string = "Pakistan") {
    return `${nameOfCity} is in ${country}.`;
}


let city1 = describe_city("Hyderabad","Pakistan");
let city2 = describe_city("South Africa","Cape Town");
let city3 = describe_city("India","Delhi");
let city4 = describe_city("New York", "USA");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

function default_city(nameOfCity: string, country: string = "Pakistan") {
    return `${nameOfCity} is in ${country}.`;
}

let city5 = default_city("Karachi");
let city6 = default_city("Lahore");
let city7 = default_city("Tokyo","Japan");

console.log(city6);
console.log(city5);
console.log(city7);
