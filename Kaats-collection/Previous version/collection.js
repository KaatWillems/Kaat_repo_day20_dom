const collection = [
    {
      title: 'Serve The Servants',
      artist: 'Nirvana',
      album: 'In Utero',
      genre: 'Grunge',
      picture: '/images/pic1.png'
    },

    {
      title: 'The Pot',
      artist: 'Tool',
      album: '10 000 Days',
      genre: 'Rock',
      picture: 'images/pic1.png'
    },  

    {
      title: 'Are you in',
      artist: 'Incubus',
      album: 'Morning view',
      genre: 'Rock',
      picture: 'images/pic1.png'
    },

    {
      title: 'Go with the Flow',
      artist: 'Queens of the Stoneage',
      album: 'Songs for the Deaf',
      genre: 'Rock',
      picture: 'images/pic1.png'
    },

    {
      title: 'Pardon me',
      artist: 'Incubus',
      album: 'Make Yourself',
      genre: 'Rock',
      picture: 'images/pic1.png'
    },

    {
      title: 'Everlong',
      artist: 'Foo Fighters',
      album: 'The Colour And The Shape',
      genre: 'Rock',
      picture: 'images/pic1.png'
    },

    {
      title: 'Rocketman',
      artist: 'Elton John',
      album: 'Honky Chateau',
      genre: 'Pop',
      picture: 'images/pic1.png'
    }, 

    {
      title: 'As',
      artist: 'Stevie Wonder',
      album: 'Songs In The Key Of Life',
      genre: 'Soul',
      picture: 'images/pic1.png'
    }, 

    {
      title: 'Are You Mine',
      artist: 'Arctic Monkeys',
      album: 'AM',
      genre: 'Rock',
      picture: 'images/pic1.png'
    },  

    {
      title: 'Give It All',
      artist: 'Rise Against',
      album: 'Siren Song Of The Counter-Culture',
      genre: 'Punk Rock',
      picture: 'images/pic1.png'
    }
  ]


//=====================CARD 1 
//PIC
let img = document.createElement('img');
img.src = 'images/pic2.png'
document.querySelector('.c1-pic').appendChild(img);


//TITLE
let cardOneTitle = document.querySelector('.c1-title');
let newTitle = document.createTextNode(collection[0].title)
cardOneTitle.appendChild(newTitle);
//console.log(cardOneTitle);

//ARTIST
let cardOneArtist = document.querySelector('.c1-artist');
let newArtist = document.createTextNode(collection[0].artist)
cardOneArtist.appendChild(newArtist);

//GENRE and ALBUM
let cardOneText = document.querySelector('.c1-text');
let newText = document.createTextNode(` This song was first released on the album "${collection[0].album}". The genre of the band is most often described as "${collection[0].genre}".`)
cardOneText.appendChild(newText);

//SPOTIFY

let imgSpot = document.createElement('img');
imgSpot.src = 'images/pic0.png'
document.querySelector('.spotify').appendChild(imgSpot);


// // loop

// // let article = document.querySelectorAll('article')

//  let section = document.querySelector('section')

// // let artist = document.querySelectorAll('.artist')


//  let card = document.querySelector('.card')



// collection.forEach((song)  => {  
  
//   let titleDiv = document.querySelector('.title')
  
//   titleDiv.insertAdjacentHTML('afterbegin', `${song.title}`);   
 
//  });



  
  

