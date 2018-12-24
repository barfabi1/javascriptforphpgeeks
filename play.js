console.log(aGreatNumber);
// var - zasięg jest funkcją, w której się znajduje i każda zagnieżdżona funkcja
// let - jest "block scoped", czyli każde otwarcie klamerek to zasięg dla leta poza nim

let aGreatNumber = 10;

if(true) {
      aGreatNumber = 42;
}

setTimeout(() => {
  console.log(aGreatNumber);
}, 1000);

console.log('Waiting....');

//Variable hoisting - jeśli zmienna jest wyżej od swojej deklaracji, to zostanie jej przypisana wartość undefined
//czyli jak kod znajdzie jakąś zmienną, to nad nią przypisuje var nazwa_zwmiennej - bez wartości, aż na początek zasięgu

//var są hoistowane, let NIE SĄ HOISTOWANE - wprowadza porządek
//let nie jest hoistowany dzięki tzw. The Temporal Dead Zone
