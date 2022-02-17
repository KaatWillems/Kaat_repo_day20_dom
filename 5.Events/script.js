//Code provided by Diogo
const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

//MY CODE
//GLOBAL VARIABLES
let mainDiv = document.querySelector('.displayedsquare-wrapper');
let greenSquare = document.querySelector("div.actionsquare.green")   
let violetSquare = document.querySelector("div.actionsquare.violet") 
let orangeSquare = document.querySelector("div.actionsquare.orange") 
let bigList = document.querySelector('ul');
let arraySquare = [];
let actionsquares = document.querySelectorAll('.actionsquare')


//FUNCTION CREATING EXTRA SQUARES ON CLICK
const duplicateSquares = (e) => {
  if (e.target === greenSquare) {
      let greenDiv = document.createElement('div');
      greenDiv.classList='displayedsquare green';
      mainDiv.appendChild(greenDiv);  
      
    } else if (e.target === violetSquare) {
      let violetDiv = document.createElement('div');
      violetDiv.classList='displayedsquare violet';
      mainDiv.appendChild(violetDiv);
  
    } else if (e.target === orangeSquare) {
      let orangeDiv = document.createElement('div');
      orangeDiv.classList='displayedsquare orange';
      mainDiv.appendChild(orangeDiv);
    }
  }
  
  for(let actionsquare of actionsquares){
    actionsquare.addEventListener('click', (e)=>{duplicateSquares(e)
    })
  }

// FUNCTION CREATE NEW LI  ON WHEN CREATING EXTRA SQUARES

const createLi = (e) => {
  if (e.target === greenSquare) {
      let createLi = document.createElement('li');
      createLi.innerText = `[${getElapsedTime()}] You created a new violet square!`
      bigList.appendChild(createLi); 
      
    } else if (e.target === violetSquare) {
      let violetDiv = document.createElement('div');
      violetDiv.classList='displayedsquare violet';
      mainDiv.appendChild(violetDiv);
  
    } else if (e.target === orangeSquare) {
      let orangeDiv = document.createElement('div');
      orangeDiv.classList='displayedsquare orange';
      mainDiv.appendChild(orangeDiv);
    }
  }
  
  for( actionsquare of actionsquares){
    actionsquare.addEventListener('click', (e)=>{createLi(e)
    })
  }



// const clickOnSquare =(e) => {
  
// if (e.target === greenSquare) 

// {
//     let greenDiv = document.createElement('div');
//     greenDiv.classList='displayedsquare green';
//     mainDiv.appendChild(greenDiv);  

//     let createLi = document.createElement('li');
//     createLi.innerText = `[${getElapsedTime()}] You created a new green square!`
//     bigList.appendChild(createLi);

//     arraySquare.push(greenDiv);
//     mainDiv.onclick = function () {
//       alert(e.target.classList[1]);};
    
    
//   } else if (e.target === violetSquare)

//   {
//     let violetDiv = document.createElement('div');
//     violetDiv.classList='displayedsquare violet';
//     mainDiv.appendChild(violetDiv);
//     let createLi = document.createElement('li');
//     createLi.innerText = `[${getElapsedTime()}] You created a new violet square!`
//     bigList.appendChild(createLi);
//     mainDiv.onclick = function () {
//       alert(e.target.classList[1]);};
//   } else 

//   {
//     let orangeDiv = document.createElement('div');
//     orangeDiv.classList='displayedsquare orange';
//     mainDiv.appendChild(orangeDiv);
//     let createLi = document.createElement('li');
//     createLi.innerText = `[${getElapsedTime()}] You created a new orange square!`
//     bigList.appendChild(createLi);
//     mainDiv.onclick = function () {
//       alert(e.target.classList[1]);};
//   }
  
//   console.log(e.target.classList[1])  
//   console.log(getElapsedTime())
// }

// const actionsquares = document.querySelectorAll('.actionsquare')
// for(let actionsquare of actionsquares){
//   actionsquare.addEventListener('click', (e)=>{
//       clickOnSquare(e)
//   })

// }


/*Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
When the spacebar is hit randomly change the background color of the whole page
Log when the spacebar is used the same way you used for the generated squares.
When the l key is pressed the log gets deleted (erases the generated <li>s)
When the s key is pressed the squares get deleted (erases the generated squares) */

//pseudo
// ad aven tto the body , listenning keypress 

let body = document.querySelector('body');
let lis = [] 

const changeBackground = (e) => {
   if (e.code === "Space") {
      document.body.style.backgroundColor = "red";
      let createLi2 = document.createElement('li');
    createLi2.innerText = `[${getElapsedTime()}] You pressed the spacebar!`
    bigList.appendChild(createLi2);
    lis.push(createLi2);
    
  }

}
//console.log(lis);


body.addEventListener('keypress', changeBackground);

//Log when the spacebar is used the same way you used for the generated squares.


//When the l key is pressed the log gets deleted (erases the generated <li>s)
//let liAll = document.querySelectorAll('li');
let ul = document.querySelector('ul');


  const deleteLog = (e) => {
    if (e.code === "KeyL") {
      console.log("test");  
      
      ul.remove();
    }
  }
  

body.addEventListener('keypress', deleteLog);

//When the s key is pressed the squares get deleted (erases the generated squares) 

let section = document.querySelector('.displayedsquare-wrapper')

const deleteLog2 = (e) => {
  if (e.code === "KeyS") {
    console.log("test");  
    
    section.remove();
  }
}


body.addEventListener('keypress', deleteLog2);


// Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square

// let z = document.querySelector('.displayedsquare-wrapper').children

// const alertSquare = (e) => {
//   if (e.target === greenSquare) {
//     alert("green");
//   }
// }

// z.addEventListener('click', alertSquare);


mainDiv.onclick = function () {
  alert(e.target.classList[1]);

} ;


//z.addEventListener('click', (e)=>{alertSquare(e)});


// const actionsquares = document.querySelectorAll('.actionsquare')
// for(let actionsquare of actionsquares){
//   actionsquare.addEventListener('click', (e)=>{
//       clickOnSquare(e)
//   })


