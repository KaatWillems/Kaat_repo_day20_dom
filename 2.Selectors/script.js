

// //EXERCISE 1
// add a title attribute to every element that has the important class, stating "this is an importatnt item"
    //pseudocode:   
    // check elements that have class = important 
    // if elenment = class important ,
    // add a title attribute to it "this is..""

// let importantClasses = document.querySelectorAll('.important')

// importantClasses.forEach(importantClass => {
//     if(importantClass.classList.contains('important')){
//         importantClass.setAttribute("title", "this is an important item")
//     }  
    
// });


//EXERCISE 2 
// Select all the imgs tags and loop through them. If they have no important class, turn their display property to none
    //pseudocode 
    //select all img tags 
    //loop through them
    // if img tags dont have a class 'important' , turn display = none


    //incorrect option that display none if they have a class 
// let imgTags = document.querySelectorAll('img')


// imgTags.forEach((imgTag) => {
//     if(imgTag.classList.contains('important')){
//         imgTag.style.display = "none"
//     }  
// })


//other option: 


// let imgTags = document.querySelectorAll('img')


// imgTags.forEach((imgTag) => {
//     if(imgTag.className != ('important')){
//         imgTag.style.display = "none"
//     }  
// })


// EXERCISE 3
// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well

let paras = document.querySelectorAll('p')

paras.forEach(para => {
    console.log(para.innerText); // prints out the content off the p 
   // check class name 

    
});

//EXERCISE 4 
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

    //pseudo:
    // select all p 
    // if p has no class = give it a radom texrt color 

// let paras = document.querySelectorAll('p')

// paras.forEach(para => {
    // you need to put the function in the for each  block, only then all the p have a different color 
    
    
// });


// //function random colors 
// const randomColors = () => {

// }
