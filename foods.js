let foods = new Set();
foods.add('gelato');
foods.add('tortas');
foods.add('gelato');
console.log(foods);

//Nie eksportuje się wszystko - trzeba samemu wybrać co ma być eksportowane
//Nie trzeba dopisywać .js
module.exports = foods;
