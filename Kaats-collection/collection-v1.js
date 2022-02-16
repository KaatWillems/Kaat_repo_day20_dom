//=======IMPORTS

import createCard from './foreach.js';

//GLOBAL VARIABLES
let section = document.querySelector('section')

// ForEACH to create content in all cards (imported for forEach.js): 
createCard()


 //create GIF:
 

 let cardX = document.createElement('div')
 cardX.classList.add('cardX')  
 
 section.appendChild(cardX);

 cardX.insertAdjacentHTML('beforeend', `<img style="-webkit-user-select: none;margin: 0;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://i.pinimg.com/originals/b7/4a/a9/b74aa9afaabaf39e7b3bac5ce94ad6d2.gif" class="gif">` )
  
//CREATE FILTERS

  /*pseudo
  create buttons with each genre   (with ul, li?) (Rock, Punk Rock, Grunge, Pop, Soul)
  add eventlistener 
   1) what to slect the buttons 
   2) click  
   3) action : hide others   
  */

let header = document.querySelector('header')
let divButtons = document.createElement ('div')
divButtons.classList.add('divButtons')  

header.appendChild(divButtons)

divButtons.insertAdjacentHTML("beforeend", '<button>Rock</button>')
divButtons.insertAdjacentHTML("beforeend", '<button>PunkRock</button>')
divButtons.insertAdjacentHTML("beforeend", '<button>Grunge</button>')
divButtons.insertAdjacentHTML("beforeend", '<button>Pop</button>')
divButtons.insertAdjacentHTML("beforeend", '<button>Soul</button>')
divButtons.insertAdjacentHTML("beforeend", '<button>All</button>')

let showCards = (myArray) => {
  myArray.forEach((div) => {
    div.style.display = 'flex'    
  })
}

let hideCards = () => { 
  let sectionX = Array.from(section.children) 
  sectionX.forEach((div) => {
    div.style.display = 'none'
  });
}

const displayGenre = (e) => {
  if (e.target.innerText === "ROCK"){        
    hideCards()
    let cardRock = document.querySelectorAll('div.Rock')
    showCards(cardRock)
       
    } else if (e.target.innerText === "PUNKROCK" ){    
      hideCards()
      let cardPunkRock = document.querySelectorAll('div.PunkRock')
      showCards(cardPunkRock)
       
    } else if (e.target.innerText === "GRUNGE"){    
      hideCards()
      let cardGrunge = document.querySelectorAll('div.Grunge')
      showCards(cardGrunge)
      
    } else if (e.target.innerText === "POP"){    
      hideCards()
      let cardPop = document.querySelectorAll('div.Pop')
      showCards(cardPop)
        
    } else if (e.target.innerText === "SOUL"){    
      hideCards()
      let cardSoul = document.querySelectorAll('div.Soul')
      showCards(cardSoul)
        
    } else if (e.target.innerText === "ALL") {
      let cardAll = document.querySelectorAll('div.card')
      let cardGif = document.querySelectorAll('div.cardX')
      showCards(cardAll)
      showCards(cardGif)
    }
}
divButtons.addEventListener('click', displayGenre)










