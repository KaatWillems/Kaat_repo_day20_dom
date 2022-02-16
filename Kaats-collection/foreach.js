import collection from './collectionlist.js';

const createCard = () => {
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
    card.insertAdjacentHTML('beforeend', `<a href="${song.spotify}" target="blank"><img src="images/pic0.png" class="spotify">`)
    card.classList.add(`${song.genre.replace(' ','')}`)
   
   });

}



export default createCard