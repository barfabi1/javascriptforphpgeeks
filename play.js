//The spread operator
let printThreeThings = function(thing1, thing2, thing3) {
  console.log(thing1, thing2, thing3);
}

let yummyThings = ['pizza', 'gelato', 'sushi', 'cheesburger'];

//można użyć ... amiast pisać yummyThings[0], yummyThings[1], yummyThings[2],
//funkcja ignoruje jesli jest za duzo argumentów
printThreeThings(...yummyThings);

//Use-casy:
//1. Reactjs
//2. Mergowanie tablic

let greatThings = ['swimming', 'sunsets', ...yummyThings, 'New Orleans'];

let copyOfGreatThings = greatThings;
//Tu jest trochę zwalone, bo jak się doda do skopiowanej tablicy przez ... to też pushuje się do orginalnej (jakaś forma referencji)
//Dlatego, że tablice w JS to obiekty, a prez ich skopiowanie mają tę samą referencję
copyOfGreatThings.push('summer');

console.log(greatThings);
console.log(copyOfGreatThings);

//Robienie prawdziwej kopii ze spread operatorem
let copyOfGreatThings = [...greatThings]; //Storzenie KOPII tablicy, a nie tej samej referencji
