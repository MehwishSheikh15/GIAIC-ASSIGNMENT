"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["admin", "user1", "user2", "user3", "user4"];
let new_users = ["user5", "user6", "ADMIN", "user7", "user8"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
});
