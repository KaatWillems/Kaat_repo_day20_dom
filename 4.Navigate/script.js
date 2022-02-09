/* EXERCISE 1
Select the last child of the <ol> tag and put it at the begining of the list
*/

// const ol = document.querySelector('ol');


// const a = ol.children[0]
// const e = ol.children[4]


// ol.insertBefore(e, a);

    

//EX2
//Move the <h2> of the third section in the second one and vice-versa

let section = document.querySelectorAll('section');



let div = document.querySelector('div');

let section1 = section[0]

let section1HFirst = section1.children[0];

let section2 = section[1]

let section2HThird = section2.children[0];

let divChildHSecond = div.children[0];

let section3 = section[2]

section2.insertBefore(divChildHSecond,section2HThird);

let section2HThirdNew = section2.children[1]

console.log(section2HThirdNew);

let x = section3.children[0]

let p = document.querySelectorAll('p')

console.log(p[4]);

x.insertBefore(section2HThirdNew, p[4]);

// Delete the last section from the DOM, we don't need it anyways

section3.remove();

