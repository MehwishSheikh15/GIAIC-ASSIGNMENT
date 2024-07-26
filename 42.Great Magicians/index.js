"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["alice", "bob", "charlie"];
function show_magicians(great) {
    for (let item of magicians) {
        console.log(great, item);
    }
}
;
show_magicians("Hello, How are you Mr.");
show_magicians("Hello, "); //2nd time calling
