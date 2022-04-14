let a = 'hello';
console.log(a);
// alert(a);
document.write(a);
let b = 'owu';
console.log(b);
let c = 'com';
console.log(c);
let d = 'ua';
console.log(d);
let e = 1;
console.log(e);
let f = 10;
console.log(f);
let g = -999;
console.log(g);
let h = 123;
console.log(h);
let i = 3.14;
console.log(i);


let book =
    {
        title: 'Harry Potter',
        pages:  34,
        genre: 'fantasy',
    };
console.log(book.pages);

let book_new =
    {
        title: 'Harry Potter',
        pages:  34,
        genre: 'fantasy',
        authors: ['me','wife','daughter']
    };
console.log(`${book_new.authors[0]} ${book_new.authors[1]} ${book_new.authors[2]}`);

let firstName = 'Артем';
let middleName = 'Святненко';
let lastName = 'Дмитрович';
console.log(`${firstName} ${middleName} ${lastName}`);

let test = prompt("FIO", firstName +' ' + middleName + ' ' + lastName);
console.log(test);

let k = 100; let l = '100'; let m = true;

console.log(typeof k);
console.log(typeof l);
console.log(typeof l);

let books =[
    {
        title: 'Harry Potter',
        pages:  34,
        genre: 'fantasy',
    },
    {
        title: 'Dune',
        pages:  543,
        genre: 'sci-fi',
    },
    {
        title: 'JS for Dummies',
        pages:  345,
        genre: 'textbook',
    },
];
console.log(books[0].genre + books[0].pages + books[0].title);
console.log(books[0]);
console.log(typeof books[0]);
console.log(typeof books[0].genre);




