//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for(let i = 0; i < Object.keys(person3).length; i++){
    if(Array.isArray(Object.values(person3)[i])){
        Object.values(person3)[i].forEach(element => {
            console.log(element)
        });
    } 
    
    else {
        console.log(Object.values(person3)[i])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Human{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    printInfo = () =>  {
        return (`The human's name is ${this.name}. The human's age is ${this.age}`)
    }

    addAge = (val) => {
        console.log(`Current age is ${this.age}`)
        this.age += val
        return `New age is ${this.age}` 
    }
}

let John = new Human('John',26)
let Ama = new Human('Ama',37)

console.log(John.printInfo())
console.log(Ama.printInfo())

console.log(John.addAge(3))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
let sizeCheck = (str) => {
    if (str.length > 10){
        return "Big Word"
    } else if (str.length < 10){ 
        return "Small Number"
    } else {
        return "number is 10"
    }
}
const bigOrNot = async (stri) => {
    const eval = await sizeCheck(stri)
    console.log(eval)
    return eval
}

bigOrNot("1234567891")