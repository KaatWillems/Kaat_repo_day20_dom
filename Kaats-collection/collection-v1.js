const collection = [
    {
      title: 'Serve The Servants',
      artist: 'Nirvana',
      album: 'In Utero',
      genre: 'Grunge',
      picture: 'images/pic1.png'
    },

    {
      title: 'The Pot',
      artist: 'Tool',
      album: '10 000 Days',
      genre: 'Rock',
      picture: 'images/pic2.png'
    },  

    {
      title: 'Are you in',
      artist: 'Incubus',
      album: 'Morning view',
      genre: 'Rock',
      picture: 'images/pic3.png'
    },

    {
      title: 'Go with the Flow',
      artist: 'Queens of the Stoneage',
      album: 'Songs for the Deaf',
      genre: 'Rock',
      picture: 'images/pic4.png'
    },

    {
      title: 'Pardon me',
      artist: 'Incubus',
      album: 'Make Yourself',
      genre: 'Rock',
      picture: 'images/pic3.png'
    },

    {
      title: 'Everlong',
      artist: 'Foo Fighters',
      album: 'The Colour And The Shape',
      genre: 'Rock',
      picture: 'images/pic6.png'
    },

    {
      title: 'Rocketman',
      artist: 'Elton John',
      album: 'Honky Chateau',
      genre: 'Pop',
      picture: 'images/pic7.png'
    }, 

    {
      title: 'As',
      artist: 'Stevie Wonder',
      album: 'Songs In The Key Of Life',
      genre: 'Soul',
      picture: 'images/pic8.png'
    }, 

    {
      title: 'Are You Mine',
      artist: 'Arctic Monkeys',
      album: 'AM',
      genre: 'Rock',
      picture: 'images/pic9.png'
    },  

    {
      title: 'Give It All',
      artist: 'Rise Against',
      album: 'Siren Song Of The Counter-Culture',
      genre: 'Punk Rock',
      picture: 'images/pic10.png'
    }
  ]




// LOOP to create content in all cards 
collection.forEach((song)  => {  
   
  let section = document.querySelector('section')

  let card = document.createElement('div')
  card.classList.add('card') 
  section.appendChild(card);


  card.insertAdjacentHTML('afterbegin', `<img src=${song.picture} class="pic">`)

  card.insertAdjacentHTML('beforeend', `<div class="title">${song.title}</div>`)

  card.insertAdjacentHTML('beforeend', `<div class="artist">${song.artist}</div>`)

  card.insertAdjacentHTML('beforeend', `<div class="text"> This song was first released on the album "${song.album}". The genre of the band is most often described as"${song.genre}".</div>`)

  card.insertAdjacentHTML('beforeend', `<hr/>`)

  card.insertAdjacentHTML('beforeend', `<img src="images/pic0.png" class="spotify">`)

  card.classList.add(`${song.genre.replace(' ','')}`)
 
 });



 //create GIF 
 let section = document.querySelector('section') 

 let cardX = document.createElement('div')
 cardX.classList.add('cardX')  
 
 section.appendChild(cardX);

 cardX.insertAdjacentHTML('beforeend', `<img style="-webkit-user-select: none;margin: 0;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://i.pinimg.com/originals/b7/4a/a9/b74aa9afaabaf39e7b3bac5ce94ad6d2.gif" class="gif">` )
  
//CREATE FILTERS

  //pseudo
  // create buttons with each genre   (with ul, li?) (Rock, Punk Rock, Grunge, Pop, Soul)
  //  add eventlistener 
    // 1) what to slect the buttons 
    // 2) click  
    // action : hide others   

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

  if (e.target.innerText === "Rock" ){    
    hideCards()
    let cardRock = document.querySelectorAll('div.Rock')
    showCards(cardRock)
       
  }  else if (e.target.innerText === "PunkRock" ){    
    hideCards()
    let cardPunkRock = document.querySelectorAll('div.PunkRock')
    showCards(cardPunkRock)
       
  } else if (e.target.innerText === "Grunge" ){    
  hideCards()
  let cardGrunge = document.querySelectorAll('div.Grunge')
  showCards(cardGrunge)
     
  } else if (e.target.innerText === "Pop" ){    
    hideCards()
    let cardPop = document.querySelectorAll('div.Pop')
    showCards(cardPop)
       
  } else if (e.target.innerText === "Soul" ){    
    hideCards()
    let cardSoul = document.querySelectorAll('div.Soul')
    showCards(cardSoul)
       
  } else if (e.target.innerText === "All") {
     let cardAll = document.querySelectorAll('div.card')
     let cardGif = document.querySelectorAll('div.cardX')
    showCards(cardAll)
    showCards(cardGif)
  }


}
divButtons.addEventListener('click', displayGenre)










