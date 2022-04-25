// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayUsers = [
    {id: 31,name: 'Mikola', age: 18},
    {id: 44,name: 'Petro', age: 23},
    {id: 11,name: 'Vasil', age: 56},
];


// function square(a,b) {
//   let result = (a * b);
//   return result;
// };
//
// let answer = square(30,50);
//  console.log(answer);
//

// function squareC(r) {
//    let resultC = (Math.pow(r,2) * Math.PI);
//    return resultC;
//  };
// let answerC = squareC(2);
// console.log(answerC);

//  function squareCyl(r, h) {
//    let resultCyl = ((2 * (Math.pow(r,2) * Math.PI)) + (2 * Math.PI * r * h));
//    return resultCyl;
//  };
//
// let answerCyl = squareCyl(2,4);
// console.log(answerCyl);

// function arrEnum(a) {
//     for (let current1 of arrayUsers){
//         document.write(`${current1.id} ${current1.name} ${current1.age}`)
//     }
// };
// arrEnum(arrayUsers);

function par(a) {
        document.write(`<p> ${a} </p>`)
     };
par('some text');

//  function listcreator (a,b,c){
//     document.write(`<ul>`);
//     document.write(`<li> ${a} </li>`);
//     document.write(`<li> ${b} </li>`);
//     document.write(`<li> ${c} </li>`);
//      document.write(`</ul>`);
//  };
// listcreator(3,5,7);

// function listcreator (size){
//     document.write(`<ul>`);
//    for (let i = 0; i < size; i++ ) {
//     document.write(`<li> item ${i+1} </li>`);
//        }
//     document.write(`</ul>`);
// };
// listcreator(7);


// function mix() {
//     for ( let argument of arguments){
//         document.write(`<ul>`);
//         document.write(`<li> ${argument} </li>`);
//         document.write(`</ul>`);
//         // console.log(`${argument}`);
//     }
//  };
//
// mix(45, 'hello', true);

// let arrayUsers = [
//     {id: 31,name: 'Mikola', age: 18},
//     {id: 44,name: 'Petro', age: 23},
//     {id: 11,name: 'Vasil', age: 56},
// ];
//
//
// function blocks(a) {
//     for (let current of arrayUsers){
//         document.write(`<div> ${current.id} ${current.name} ${current.age}</div>`)
//          }
// };
//
// blocks(arrayUsers);