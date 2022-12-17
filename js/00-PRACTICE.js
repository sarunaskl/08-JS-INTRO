// Kintamuju iniciaviamas
//1.
const a = 2;
console.log(a);
const b = 3;
console.log(b);
const c = 4;
console.log(c);
//2.
const Text1 = `Labas`;
console.log(`${Text1}`);
const Text2 = `Rytas`;
console.log(`${Text2}`);
const Text3 = `Visiem`;
console.log(`${Text3}`);
//3.
let ArrayA = [5, 345, 53, 65, 3];

//Veiksmai su skaiciais
//1.
let suma = 0;
suma =suma + a + b + c;
console.log(`${suma}`);
//2.
let sumaW =(`${Text1} ${Text2} ${Text3}`);
console.log(`${sumaW}`);
//3.
let sumaNr = 0;
sumaNr = kint1 - kint2 + kint3 - kint4 + kint5;
console.log(`${sumaNr}`);
//4.
let sumaW2 =(`${Text1}, ${Text2}, ${Text3}`);
console.log(`${sumaW2}`);
console.log('-------------');
console.log('KINTAMUJU PALYGINIMAS');
console.log('-------------');
//Kintamuju palyginimas
//1.
console.log(`Lyginima ar a = ${a} yra didesnis uz b = ${b}`);
if (a < b) {
    console.log(`${b} yra daugiau uz ${a}, atsakymas BANDYKITE DAR KARTA`);  
} else {
    if (a > b) {
        console.log(`${b} yra maziau uz ${a}, atsakymas POMIDORAS`);
    }
    else {
        console.log(`skaiciai yra lygus`);
    }
}
//2.
console.log(`Text1 ilgis ${Text1.length}, Text2 ilgis ${Text2.length},Text3 ilgis ${Text3.length}`);
//3.
