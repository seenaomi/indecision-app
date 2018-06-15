var nameVar = 'Naomi';
var nameVar = 'See';
console.log('nameVar', nameVar);

let nameLet = 'Naomi';
nameLet = 'Grace';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = 'Naomi See';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);