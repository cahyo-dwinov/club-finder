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


