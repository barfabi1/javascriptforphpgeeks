//Map, WeakMap, Set

//let foods = {};
//foods.italian = 'gelato';
//foods.mexican = 'torta';
//foods.canadian = 'poutine';
//
//console.log(foods.italian);

//Mapa to inny sposób na tworzenie tablic asocjacyjnych
//Warto ich użwać bo mają przydatne metody
//w mapach można używać KLUCZY KTÓRE NIE SĄ STRINGAMI (nawet mogą być obiektami)

//let foods = new Map();
//foods.set('italian', 'gelato');
//foods.set('mexican', 'torta');
//foods.set('canadian', 'poutine');
//
//let southernUSStates = ['Tennessee', 'Kentucky', 'Texas'];
//foods.set(southernUSStates, 'hot chicken');
//console.log(
//  foods.get('italian'),
//  foods.has('french'),
//  foods.get(southernUSStates),
//  foods.size
//);

//WeakMap vs Map - klucze WeakMap MUSZĄ być obiektami
//Zamieniam klucze na tablice, bo tablice są obiektami w JS
// set(['italian'] i get(['italian'] nie są takimi samymi obiektami w pamięci, są różnymi obiektami
//w WeakMap nie można używać .size

let foods = new WeakMap();
foods.set(['italian'], 'gelato');
foods.set(['mexican'], 'torta');
foods.set(['canadian'], 'poutine');

let southernUSStates = ['Tennessee', 'Kentucky', 'Texas'];
foods.set(southernUSStates, 'hot chicken');
southernUSStates = null; //Przypisanie WeakMap do null pozwala garbage collectorowi na jej usuniącie, odwrotnie jest w Map
//ale lepiej używać Map

console.log(
  foods.get(['italian']),
  foods.get(southernUSStates),
  foods.size
);
