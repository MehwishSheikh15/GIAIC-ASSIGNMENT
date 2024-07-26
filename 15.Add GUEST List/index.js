"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guest_list = ['Sadi', 'Mary', 'Aniqaw'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Mam ' + guest_list[i] + ',\nI would like to invite you to dinner at my house.\n\nThank You');
}
var not_present = 'Mary';
var new_guest = 'Eman';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Mam ' + guest_list[i] + ',\nI would like to invite you to dinner at my house.\n\nThank You');
}
console.log(`Mam. ${not_present} will not able to attend dinner.`);
