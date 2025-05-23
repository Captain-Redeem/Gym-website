/* JavaScript for the navigation bar */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}



/* Gallery Scripting */
/*
Puts all the panels into a node list similar to an Array
*/
const panels=document.querySelectorAll('.panel')

/*
Using forEach which is a higher order array method to take in an argument
*/
panels.forEach(panel => {
    /*
    Here, we are waiting for the mouse to click on the panel.
    When the click happens, we will run a function.
    */
   panel.addEventListener('click', ()=> {
       /*
       When we click on the card, we want to make that card active and will
       open to flex 5
       */
      removeActiveClasses()
      panel.classList.add('active')
   })
})

/*
Function to remove the active class on all the cards so that it collapses a card
once another has been clicked on.
*/
function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}