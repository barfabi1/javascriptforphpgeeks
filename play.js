const favoriteFood = 'gelato';
const iLoveFood = 'The year is ' + (new Date().getFullYear()) +' and my favorite food is '+ favoriteFood;

console.log(iLoveFood);

//Template template strings.
//Zamiast cudzysłowia używamy ticka (``)
const iLoveFood2 = `The year is ${(new Date().getFullYear())} and my favorite food is ${favoriteFood}`;
console.log(iLoveFood2);
