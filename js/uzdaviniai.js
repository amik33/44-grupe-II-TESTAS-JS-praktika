console.clear();

console.log('-----------1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs-----------');

function func1 (a, b) {
    if (a > b) {
        console.log('a didesnis uz b');
    } else if (a < b) {
        console.log('b didesnis uz a');
    } 
}

func1(4, 5)

console.log('------------2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10----------');

const func2 = () => {

    let array = [];
    for (let i = 1; i <= 10; i++ ) {
        array.push(Math.abs(i));
    }
    return array;
}

console.log(func2());

console.log('----------3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10------------');

const func3 = () => {

    let array = [];
    for (let i = 0; i <= 10; i += 2 ) {
        array.push(Math.abs(i));
    }
    return array;
}

console.log(func3());

console.log('----------4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje------------');

const func4 = () => {

    let array = [];
    for (let i = 0; i < 5; i++ ) {
        array.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
    }
    return array;
}

console.log(func4());

console.log('----------5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5------------');

let res = 0;
while (res !== 5) {
    res = Math.floor(Math.random() * 10) + 1;
    console.log(res);
}

console.log('-----------6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų-----------');

let array = [];
const arraylength = Math.floor(Math.random() * (30 - 20 + 1) + 20);

for (let i = 0; i < arraylength; i++) {
    array.push(Math.floor(Math.random() * (30 - 10 + 1) + 10));
}
console.log(array);

let bign = 0;

array.filter(n => n > bign ? bign = n : bign = bign);
console.log('max: ', bign);

console.log('--------------7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės-----------------');

let arrayObj = [];
let letter = ['A', 'B', 'C', 'D'];
let counts = {};

for (let i = 0; i < 100; i++) {
    let randomLetterIndex = Math.floor(Math.random() * letter.length);
    let randomLetter = letter[randomLetterIndex];
    arrayObj.push(randomLetter);

    if (counts[randomLetter]) {
        counts[randomLetter]++;
    } else {
        counts[randomLetter] = 1;
    }
}

console.log(arrayObj);
console.log(counts);

console.log('------------- 8. Parašyti funkciją - func8. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas. Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė----------------');

const func8 = (x, y) => {

    if(typeof x === 'number' && typeof y === 'number') {
      if ((x + y) % 2 !== 0) {
        return 'Suma nelyginė';
      }
      return x + y;
    }
    if(Array.isArray(x) && Array.isArray(y)) {
      return x.length + y.length;
    }
  
    return 'negali būti vienas skaičius, kitas masyvas';
}

console.log(func8(1, 3),'skaičių sumą');
console.log(func8([1, 2],[1, 2, 3]),'masyvų ilgių suma');
console.log(func8(1, 2));

console.log('---------------9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)-----------------');

const func9 = (number) => {

    if (typeof number !== 'string' && Number.isInteger(number) && number > 1) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(func9(7));
console.log(func9(9));
console.log(func9(-3));
console.log(func9(2));


console.log('------------- 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX"---------------');

const func10 = () => {
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
    }
    return num;
}

