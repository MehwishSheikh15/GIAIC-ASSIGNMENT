function carDetails (manufacturer: string, modelName: string, ...additionalInfo:any[]){
const car = {manufacturer, modelName, ...Object.fromEntries(additionalInfo)};
    return car;
    };
    const myCarDetails1= carDetails("Toyota", "Corolla", ['color', 'blue'], ['year', 2022]);
    const myCarDetails2 = carDetails("Tesla", "Model S", ['color', 'red'], ['features', ['Navigation', 'Sunroof']]);
    const myCarDetails3 = carDetails("Honda", "Civic", ['color', 'silver'], ['features', ['Navigation', 'Sunroof']], ['year', 2020]);
    
    console.log(myCarDetails1);
    console.log(myCarDetails2);
    console.log(myCarDetails3);
