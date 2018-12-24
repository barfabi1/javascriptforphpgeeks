// var - zasięg jest funkcją, w której się znajduje i każda zagnieżdżona funkcja
// let - jest "block scoped", czyli każde otwarcie klamerek to zasięg dla leta poza nim

//const i let są takie same, orpócz tego, że const nie można ponownie deklarować
//w const można zmieniać propercje, ale nie samego consta
//w ES6 można używać: var, const i let
const aGreatNumber = 10;
const aGreatObject = {withGreatKeys: true };

aGreatObject.withGreatKeys = false;
if(true) {
      //aGreatNumber = 42;
}

setTimeout(() => {
  console.log(aGreatNumber);
  console.log(aGreatObject)
}, 1000);

console.log('Waiting....');

//Variable hoisting - jeśli zmienna jest wyżej od swojej deklaracji, to zostanie jej przypisana wartość undefined
//czyli jak kod znajdzie jakąś zmienną, to nad nią przypisuje var nazwa_zwmiennej - bez wartości, aż na początek zasięgu

//var są hoistowane, let NIE SĄ HOISTOWANE - wprowadza porządek
//let nie jest hoistowany dzięki tzw. The Temporal Dead Zone
