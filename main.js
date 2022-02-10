/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/


//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modify the body of this function as described in the assignment Readme
function button1Clicked() {
    console.log("Button 1 was clicked"); 

    let button1 = document.getElementById("button1");
    button1.innerHTML = newText();

    let randNum = Math.random();
    console.log(randNum);
}

function button2Clicked() {
    //If the circle is blue, clicking Button 2 should make it green. 
    //If the circle is green, clicking Button 2 should make it blue. 
    //You may use CSS or inline styling to achieve this functionality.    
}