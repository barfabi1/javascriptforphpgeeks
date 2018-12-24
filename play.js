class AGreatClass {
  constructor(greatNumber) {
    this.greatNumber = greatNumber;
  }

  returnGreatThings() {
    return this.greatNumber;
  }
}

//W klasach ES6 można nadpisywać metody klas rodziców
//odpowiednik PHP parent:returnGreatThings() w JS to super
class AnotherGreatClass extends AGreatClass {

  //jeśli klasa potomna ma nadpisywać konstruktor, to musi przyjmować wszystkie argumenty swoijego rodzica
  constructor(greatNumber, greatWord) {
    super(greatNumber); //Funkcja super (nie słowo super) wywołuje konsturktor klasy rodzica
    this.greatWord = greatWord;
  }
  returnGreatThings() {
    let greatNumber = super.returnGreatThings();
    return [greatNumber, this.greatWord];
  }
}

const aGreatObject = new AnotherGreatClass(43, 'adventure');
console.log(aGreatObject.returnGreatThings());
