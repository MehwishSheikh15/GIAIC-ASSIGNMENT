"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function my_album(artist, title) {
    return { artist, title };
}
let album1 = my_album("Michael Jackson", "Thriller");
let album2 = my_album("Ed Sheeran", "�� (Divide)");
let album3 = my_album("Eminem", "Recovery");
let album4 = my_album("Beyoncé", "Lemonade");
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
function my_album2(artist, title, tracks) {
    return { artist, title, tracks };
}
let album5 = my_album2("Michael Jackson", "Thriller", 10);
let album6 = my_album2("Ed Sheeran", "�� (Divide)", 12);
let album7 = my_album2("Eminem", "Recovery");
console.log(album5);
console.log(album6);
console.log(album7);
