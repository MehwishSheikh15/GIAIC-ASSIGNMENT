"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I love Typesript.") {
    console.log(`Making a ${size} t-shirt with the meassage "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into Coding");
