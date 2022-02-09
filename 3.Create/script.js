/* EXCERSIE 1  Modify the script.js to create a new <section> with a random background-color for each learners in your promo. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article> */
    //pseudocode
    // create section 
    //create random background 
    // create p  
    //  add text (name learner) to the p 
    // insert p in section 
    // insert all in article 

    
   let newSection = document.createElement("section");

   let newP = document.createElement('p');

   let newContentSection = document.createTextNode("test"); // or paragraph??

   newSection.appendChild(newContentSection);

   let currentH2 = document.querySelector("h2");
   
   document.querySelector('article').insertBefore(newSection, currentH2.nextElementSibling);

// let updatedArticle = document.querySelector('article');

// let newHTML = '<section><p id="p1">learner1</p><p id="p2">learner2</p><p>learner3</p></section>'

// updatedArticle.insertAdjacentHTML('beforeend', newHTML);


// let myparas = document.querySelectorAll('p');

let rgb = [];   



//change background color:

myparas.forEach(myp => {
    
    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);

   myp.style.backgroundColor =  'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
   
    if((rgb[0])+(rgb[1])+(rgb[2])<=382) {
      
      textColor = 'white';
    } else {
        
        textColor = 'black';
    }   

    myp.style.color = textColor;

   

});


// EXERCISE 2
//If the background is dark the text should be white, if the background is light the text should be black

// PSEUDO; check the rgb of the backgorund is dark or ligth 
//ANSWER (see above in the for each loop )

//EXERCISE 3 
//Find a way so that everytime you load the page the order of the elements changes!

    //pseuo 
    //if load (on load?)
    // change the order of the p 


    // const shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
            
    //     }
    // }

//function shuffle array 
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        
    }
}
    
 //change order
 shuffleArray(myparas);
 console.log(myparas);


//diogo
// zet leet rgb in de functie 
// laart uw funcite iets returnen (object met naam:sumrgb 

