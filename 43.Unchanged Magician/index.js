"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians2 = ["alice", "bob", "charlie"];
//making a copy of an array
let magiciansCopy = [...magicians2];
function show_magicians(greet) {
    let withGreetings = "";
    for (let item of magiciansCopy) {
        withGreetings += `${greet} ${item}\n`;
    }
    return withGreetings;
}
;
let myGreetings = show_magicians("Hello");
let makeArray = myGreetings.split('\n');
console.log(makeArray);
//original array
console.log(magicians2);
