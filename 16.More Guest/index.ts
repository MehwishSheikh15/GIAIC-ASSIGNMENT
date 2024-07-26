var guest_list : string[] = ['Sadi', 'Mary', 'Aniqaw'];

var not_present : string = 'Mary';
var new_guest : string = 'Eman';
guest_list[1] = new_guest;
for(var i=0; i<guest_list.length; i++){
    console.log('Respected Mam ' + guest_list[i] + ',\nI would like to invite you to dinner at my house.\n\nThank You');
}
guest_list.unshift('Iqra' , 'Areej' , 'Shagufta');
for(var i=0; i<guest_list.length; i++){
    console.log('Respected Mam ' + guest_list[i] + ',\nI would like to invite you to dinner at my house. \n\nThank You');
}