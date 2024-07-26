let magicians: string[] = ["alice", "bob", "charlie"];
function show_magicians(greet: string){
for(let item of magicians){
console.log(greet, item);
}
 };
show_magicians("Hello, How are you Mr.");
show_magicians("Hello, "); //2nd time calling
