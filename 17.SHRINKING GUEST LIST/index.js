"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guest_list = ['Sadi', 'Mary', 'Aniqaw'];
var not_present = 'Mary';
var new_guest = 'Eman';
guest_list[1] = new_guest;
guest_list.unshift('Iqra', 'Areej', 'Shagufta');
console.log('\nUnfortunately we can not arrange the table , Only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log(`Sorry Mam.${remove_guest} you are not invited for dinner.`);
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Mam ' + guest_list[i] + ',\nYes you are still invited on dinner. \n\nThank You');
}
guest_list.splice(0, 2);
console.log(guest_list);
