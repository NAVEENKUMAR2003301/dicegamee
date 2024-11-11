

 // Player 1 Dice Roll
 var randomNumber1 = Math.floor(Math.random() * 6) + 1;
 var randomImageSource1 = "dice" + randomNumber1 + ".png";
 var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomImageSource1);

 // Player 2 Dice Roll
 var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 var randomImageSource2 = "dice" + randomNumber2 + ".png";
 var image2 = document.querySelectorAll("img")[1];
 image2.setAttribute("src", randomImageSource2);

 // Determine Winner
 setTimeout(()=> {
 
 if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").textContent=FullName+" Wins!✨";
 } else if (randomNumber1 < randomNumber2) {
     document.querySelector("h1").innerHTML = "Device wins!✨";
 } else {
     document.querySelector("h1").innerHTML = "Draw!";
 }

 
 },1000);

 // Refresh page function
 function refreshPage() {
    location.reload();
}
var Name = prompt("Enter Your Name:");
var FirstLetterCap = Name.slice(0,1);
var Cap = FirstLetterCap.toUpperCase();
var RestOf = Name.slice(1,Name.length);
var SmallRemain = RestOf.toLowerCase();
var FullName = Cap+SmallRemain;
var paragraph = document.querySelector('p');
paragraph.textContent=FullName;


