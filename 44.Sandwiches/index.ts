function mySandwiches(...items: string []){
 return `I want Sandwich of ${items}`;
    };
    let collection1 = mySandwiches("Ham", " Cheeze", " Lettuce"); // can add as many you wish
     let collection2 = mySandwiches("Turkey", " Swiss");
    let collection3 = mySandwiches("Sprouts","Mustard","Mayo"); // without arrgument
    console.log(collection1);
    console.log(collection2);    
    console.log(collection3);
    