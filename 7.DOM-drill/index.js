let ul = document.querySelector('ul');

let liS = Array.from(ul.childNodes);


//Write a for loop to iterate over every child. In this loop:
//Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)

//Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list

    //pseudo:
    //for loop to iterate all children 
    // if child.nodetype ===1 
  

for (let i = 0; i < liS.length; i++) {
     if (liS[i].nodeType === 1) {
        if (liS[i].innerText === "Fast and Furious") {
            ul.prepend(liS[i])
        }
        //class important
        liS[11].classList.add('important');
        //alert
        const alertFunction = (e) => {
            if (e.target === liS[i]) {
            alert(liS[i].innerText);
                if (e.target.innerText === "Fast and Furious") {
                    alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
                }
            }
            
        }
        ul.addEventListener('click', alertFunction);

        //check equal 
        const tags = [...document.querySelectorAll('li')];
        const texts = new Set(tags.map(x => x.innerHTML));
        tags.forEach(tag => {
        if(texts.has(tag.innerHTML)){
            texts.delete(tag.innerHTML);
        }
        else{
        tag.remove()
        }
        })

       


   
    }
}



//Since Fast and Furious is the most important franchise ever, add a class .important to the element // see above  liS[11].classList.add('important');


//Add an eventListener on every items of the list. If the item is clicked an alert() pops up to display the name of clicked element
    //psuedo
    // add evenlist 
    //position: ul  or liS 
    // click 
    // action alert lis 

//Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.

    // psuedo
    // if e target === fast and furious 
     // the alert should display "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."

//(*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).
    //pseudo 
    // check if duplicate  (equal node)
    // if dupliacate then, remove that 
 
 //(*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order, however Fast and Furious should remain the first element (most important franchise ever, remember?)   
    // add eventlistener  
    //position:body 
    // keyup (r)KeyR
    // function sort in rando, order 

const randomSort = (e) => {
    if (e.which === 82) {
       
        let list = document.querySelector('ul'), i;
        for (i = list.children.length; i >= 0; i--) {
            list.appendChild(list.children[Math.random() * i | 1]);

        }
    } else if (e.which === 68) {
        let dom = document.querySelector('ul').childNodes[0]
        let clone = dom.cloneNode(true);
        ul.prepend(clone);   
    }
}
 document.body.addEventListener('keyup', randomSort)

// (*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned

//Create a new <div> before the list, using createElement and insertBefore

let div = document.createElement('div');

// let newContentDiv = document.createTextNode (" ***I'm the new Div***");
// div.appendChild(newContentDiv) ;

let currentUl = document.querySelector('ul');

document.body.insertBefore(div, currentUl);

//Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"

let select = document.createElement('select');

div.appendChild(select);

let newContentSelect = '<option> Important franchises</option> <option> Normal franchises</option>'

select.insertAdjacentHTML('beforeend', newContentSelect);

//Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')

    // evenlistener 
    // on toggle 2 (change)
    // where listenting  : select 
    // doing: showing only the ones with class .important 




//georgiana code

let selectTag = document.createElement('select');
let option1 = document.createElement('option')
option1.value = "important franchises"
option1.text = "Important franchises"

let option2 = document.createElement('option');
option2.value = "normal franchises"
option2.text = "Normal franchises"
option2.defaultSelected = true;

div.appendChild(selectTag);
selectTag.prepend(option1, option2);

selectTag.addEventListener('change', switchMovies = (e)=>{
  if (selectTag.value === "important franchises"){
  let important = document.querySelector('.important');
     ul.style.visibility = 'hidden';
     important.style.visibility = 'visible';
  } else {
    ul.style.visibility = 'visible';
  }


})