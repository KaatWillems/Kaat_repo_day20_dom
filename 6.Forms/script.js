/*EX1Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
*/

    ///psuedo
    //add eventlisten with key up , position first field 
    //functoion create innertext into span id display firstname 


let displaySpan = document.querySelector('#display-firstname');
let inputField = document.querySelector('input')



// const addName = () => {
//    nameArray.push(inputField);
//      displaySpan.innerText = displaySpan;
//     console.log('test');
   
// }

const logKey = (e) => {
    //if (e.which <= 90 && e.which >= 48) {
       displaySpan.textContent += e.key;
//}
};


inputField.addEventListener('keyup', logKey)
    



// inputField.addEventListener('input', (e) => {
//     displaySpan.textContent = "Inputted text: " + e.data;
// });

//inputField.addEventListener('input', addName)

/* Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.*/

let inputAge = document.querySelectorAll('input')[1];

const displayMessage = (e) => {  
     if (e.which >= 66) {        
        document.getElementById("a-hard-truth").style.visibility = "visible";
        console.log('ja');

    }
} 



// const displayMessage = (e) => {
//     let age = parseInt(e.key) 
//      if (age >= 18) {        
//         document.getElementById("a-hard-truth").style.visibility = "visible";

//     }
// } 

inputAge.addEventListener('keyup', displayMessage)

//ex 3

/*Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.*/

//add key up listeren 
//pos both fields 
// function: turn field red if password is less than 6 

let input1 = document.querySelectorAll('input')[2];
let input2 = document.querySelectorAll('input')[3];




const visualHint = (e) => {
    if (input1.value.length < 6) {
       
        input1.style.backgroundColor = "red";
    } else {
        input1.style.backgroundColor = "";
    }

}

input1.addEventListener('keyup', visualHint)

const visualHint2 = (e) => {
    if (input2.value.length < 6 || input1.value != input2.value) {          
        input2.style.backgroundColor = "red";
    } else {
        input2.style.backgroundColor = "";
    }

}

input2.addEventListener('keyup', visualHint2);


/* Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white. */

// add change listener 
// position select field
// function toggle a dark mode (bakcground black, text white)

let select = document.querySelector('#toggle-darkmode');


const changeDark = (e) => {
    if (select.value === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    
    } else if (select.value === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

    }
}


select.addEventListener('change', changeDark)
