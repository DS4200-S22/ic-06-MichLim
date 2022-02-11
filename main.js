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

    let text = document.getElementById("random_num");

    let randNum = Math.random() * 100;
    console.log(randNum);

    text.innerHTML = randNum;

}

function button2Clicked() {
    console.log("Button 2 was clicked");


    // Get svg class
    let curr_color = document.getElementById("c").getAttribute("class"); 

    // Change color 
    if (curr_color == "blue") {
        document.getElementById("c").setAttribute("class", "green"); 
    } else {
        document.getElementById("c").setAttribute("class", "blue"); 
    }
    

    //If the circle is blue, clicking Button 2 should make it green. 
    //If the circle is green, clicking Button 2 should make it blue. 
    //You may use CSS or inline styling to achieve this functionality.    
}