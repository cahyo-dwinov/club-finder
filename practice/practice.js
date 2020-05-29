//Destructuring Object and Array
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    nationality: "indonesian"
}

const {firstName, lastName, age} = profile;
console.log(firstName, lastName, age);


const {nationality} = profile;
console.log(nationality);

//Spreading
const favorites = ["Seafood", "Pecel", "Bakso", "Mie"];
const others = ["Roti", "Pizza", "Donat"];

const allFavorites = [...favorites, ...others];
console.log(allFavorites);


//Rest Parameter
// function sum(...numbers) {
//     var result = 0;
//     for(let number of numbers) {
//         result += numbers
//     }
//     return result;
// }
// console.log(sum(1, 2, 3, 4, 5));

//REST PARAMETER FOR ARRAY DESTRUCTURING
const refrigerator = ['Samsung', 50, 2, 'Milk', 'Cheese', 'Egg', 'Butter'];
const [manufacture, wight, door, ...items] = refrigerator;
console.log(manufacture);
console.log(door);
console.log(items);