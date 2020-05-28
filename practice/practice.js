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
