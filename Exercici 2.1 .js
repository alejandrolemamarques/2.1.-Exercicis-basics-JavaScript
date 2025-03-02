// Arrow functions ----------------------------------------------------
// 1.1.1
const add = (a, b) => a + b;

// 1.1.2
randomNumber = () => Math.floor(Math.random() * 101);

// 1.1.3
class Person {
    constructor(name) {
        this.name = name;
    }
    
    // This will make the greet method an instance property instead of a normal method, which
    // is inefficient memory wise, since each instance will have its own copy of the method.
    greet = () => {
        console.log(`Hello ${this.name}`);
    }
}

const person = new Person("John");

person.greet();

// 1.1.4
const printNumbers = (numbers) => {
    for (const number of numbers) {
        console.log(number);
    }
}

printNumbers([1, 2, 3, 4, 5]);

// 1.1.5
const messageWithDelay = (message) => {
    setTimeout(() => {
        console.log(message);
    }, 3000);
}

messageWithDelay("Hello");

// Ternary operator ---------------------------------------------------
// 1.2.1
function potConduir(edad) {
    return edad >= 18 ? "Pots conduir" : "No pots conduir";
}

console.log(potConduir(18));
console.log(potConduir(17));

// 1.2.2
function compareNumbers(num1, num2) {
    return num1 > num2 ? 'num 1 es més gran' : 'num2 es més gran';
}

console.log(compareNumbers(1, 2));
console.log(compareNumbers(2, 1));

// 1.2.3
function negativePositiveOrZero(num) {
    return num > 0 ? 'Positiu' : num < 0 ? 'Negatiu' : 'Zero';
}

function trobarMaxim(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}

console.log(negativePositiveOrZero(1));
console.log(negativePositiveOrZero(0));
console.log(negativePositiveOrZero(-1));

console.log(trobarMaxim(1, 2, 3));
console.log(trobarMaxim(3, 2, 1));
console.log(trobarMaxim(2, 3, 1));

// 1.2.4
function parOImpar(numeros) {
    for (const num of numeros) {
        num % 2 === 0 ? console.log(`${num} es parell`) : console.log(`${num} es senar`);
    }
}

parOImpar([1, 2, 3, 4, 5]);

// Callbacks ----------------------------------------------------------
// 1.3.1
function processar(num, callback) {
    const resultat = callback(num);
}

// 1.3.2
function calculadora(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calculadora(1, 2, (a, b) => a + b));

// 1.3.3
function esperarISaludar(nom, callback) {
    setTimeout(() => {
        callback(nom);
    }, 2000)
}

// 1.3.4
function processarElements(array, callback) {
    for (const element of array) {
        callback(element);
    }
}

// 1.3.5
function processarCadena(cadena, callback) {
    cadenaMajuscules = cadena.toUpperCase();
    callback(cadenaMajuscules);
} 

// Rest and spread operators ------------------------------------------
// 1.4.1
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const array3 = [...array1, ...array2];

// 1.4.2
function suma(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}

// 1.4.3
const objecte1 = {
    nom: "Joan",
    edat: 20,
    ciutat: "Barcelona"
}

const objecte2 = {
    ...objecte1
}

objecte2.nom = "Maria";

console.log(objecte1);
console.log(objecte2);

// 1.4.4
const array = [1, 2, 3, 4, 5];

const [primer, segon, ...resta] = array;

// 1.4.5
function myFunc(a, b, c) {
    console.log(a, b, c);
}
const myArray = [1, 2, 3];

myFunc(...myArray);

// 1.4.6
objecteA = {
    nom: "Joan",
    edat: 20,
    ciutat: "Barcelona"
}

objecteB = {
    aficions: ["futbol", "tennis", "pesca"],
    altura: 180,
    pes: 70
}    

objecteC = {
    ...objecteA,
    ...objecteB
}


// Array transformations ----------------------------------------------
// 1.5.1
const array4 = [1, 2, 3, 4, 5];
const array5 = array4.map(num => num ** 2);
console.log(array5);

// 1.5.2
const array6 = array5.filter(num => num % 2 === 0);
console.log(array6);

// 1.5.3
const array7 = [1, 10, 8, 11];
const numGreaterThan10 = array7.find(num => num > 10);
console.log(numGreaterThan10);

// 1.5.4
const array8 = [13, 7, 8, 21];
const sum = array8.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// 1.5.5
const array9 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
const result = array9
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result);

// 1.5.6
const array10 = [11, 12, 13, 14];

const everyGreaterThan10 = array10.every(num => num >= 10);
const someGreaterThan10 = array10.some(num => num >= 10);

console.log(everyGreaterThan10);
console.log(someGreaterThan10);

// Array loops --------------------------------------------------------
// 1.6.1
const array11 = ['Anna', 'Bernat', 'Clara'];
array11.forEach(name => console.log(name));

// 1.6.2
for (const name of array11) {
    console.log(name);
}

// 1.6.3
const numeros = [1, 2, 3, 4, 5, 6];
const nomesParells = numeros.filter(num => num % 2 === 0);

// 1.6.4
const obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' }; 
for (const key in obj) {
    console.log(key, obj[key]);
}

// 1.6.5
for (const num of numeros) {
    if (num === 5) break;
    console.log(num);
}

// 1.6.6
let noms = ['Anna', 'Bernat', 'Clara'];
for (const [index, nom] of noms.entries()) {
    console.log(`Index: ${index}, Nom: ${nom}`);
}

// Promises & async/await ---------------------------------------------
// 1.7.1
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola mon!');
    }, 2000);
});

// 1.7.2
promesa.then(result => console.log(result));

// 1.7.3
const promesaReject = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola') {
                resolve('Promesa resolta correctament');
            } else {
                reject('Error: Input incorrecte');
            }
        }, 2000);
    });
};

// 1.7.4
async function processarPromesa() {
    const resultat = await promesa;
    console.log(resultat);
}

// 1.7.5
async function processarPromesa2() {
    try {
        const resultat = await promesaReject('Hola');
        console.log(resultat);
    } catch (error) {
        console.log(error);
    }
}

// 1.7.6
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa 2 resolta correctament');
    }, 2000);
});

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa 3 resolta correctament');
    }, 3000);
});

Promise.all([promesa2, promesa3]).then(resultats => {
    console.log('Promise all completada');
    console.log(resultats);
});










