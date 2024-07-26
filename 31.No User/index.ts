let users : string[] = ["admin", "user1", "user2", "user3", "user4"];

if(users.length === 0){
    console.log("We need to find some users!");
}
else{
    users = [];
    console.log("All users have been removed " + users.length);
}