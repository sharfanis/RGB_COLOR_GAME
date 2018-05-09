
var colors = generateRandomColors(6);
/*[
"rgb(255, 0, 0)",              
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"];
*/
var squares = document.querySelectorAll(".square");

//var pickedcolor = colors[3];
// making a pick color function which will pick random color for selection
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("select");
var message = document.querySelector("#mid");
//Changes the color of the background once the correct color is picked
var bk = document.querySelector("h1");
//Button to change the colors of the game
var resetbtn = document.querySelector("#reset");
//Button to select easy and hard mode
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#HardBtn");
//No of square dfor easy and hard mode
var numSquare = 6;

// Easy button logic
easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selectedColor");
  hardBtn.classList.remove("selectedColor");
   numSquare = 3;
   colors = generateRandomColors(numSquare);
   pickedcolor = pickColor();
   colorDisplay.textContent = pickedcolor;
   //this will hide by bottom 3 squares
   for(var i=0 ; i<squares.length ;i++)
   {
   	 if(colors[i]){
   	 	squares[i].style.backgroundColor = colors[i];
   	 } else{
   	 squares[i].style.display = "none";
   }
}

});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selectedColor");
  easyBtn.classList.remove("selectedColor");
   numSquare =6;
   colors = generateRandomColors(numSquare);
   pickedcolor = pickColor();
   colorDisplay.textContent = pickedcolor
  // this logic will block all the squares
  for(var i=0 ; i<squares.length ;i++)
   {
   	 squares[i].style.backgroundColor = colors[i];
   	 squares[i].style.display = "block";
   }

});

resetbtn.addEventListener("click", function(){
	// generate random colors
     colors = generateRandomColors(numSquare);
	//pick random color
     pickedcolor = pickColor();
     //chnge the display of the new picked random color
     colorDisplay.textContent = pickedcolor;
     //Make empty string for "bingo message"
     message.textContent = "";
     //Give the rest button name "new colors"
     resetbtn.textContent = "New Colors?";
	//assign those random colors to the squares
	for(var d=0;d<squares.length;d++){
     squares[d].style.backgroundColor = colors[d];
 }
    //resetting the background of the stripe to 
     bk.style.backgroundColor = 'steelblue';
});

// Updating the color display in RGB<span> to picked color.
colorDisplay.textContent = pickedcolor;

for(var i=0;i<squares.length;i++){
// Add initial colors to square
squares[i].style.backgroundColor = colors[i];
// Add click listeners to square boxes 
squares[i].addEventListener("click", function(){
     // grab clicked color with picked colors
     var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedcolor)
     {
     	//alert("right color");
     	message.textContent = " Correct !! Bingo";
     	message.style.color = 'black';
     	changeColorOfAllSquaresOnSuccess(clickedColor);
     	bk.style.backgroundColor = pickedcolor;
     	resetbtn.textContent = "Play Again ?";


     }else {
     	//alert("try again");
     	this.style.backgroundColor  = "#232323";
     	message.textContent =" Try Again !!";
     }
    // alert(this.style.backgroundColor);
	});

}

function changeColorOfAllSquaresOnSuccess(color){

	for (var j=0;j<squares.length;j++){
        squares[j].style.backgroundColor  = color;
       	}
}

function pickColor()
{
   var random = Math.floor((Math.random()) * colors.length);
  return colors[random];

}

function generateRandomColors(num){

	// create a array 
	var arr = [];
// This will basically form a random color .
	for(var i=0; i<num ;i++)
	{
        var val = formRandomColor();
        arr.push(val);
	}
	//return the array
	return arr;
}

function formRandomColor()
{
   // Create a random color using R,G,B
   // Random value for color R
   var r = Math.floor(Math.random()*256);
   // Random value for color G
   var g = Math.floor(Math.random()*256);
   //Random value for color B 
   var b = Math.floor(Math.random()*256);

   return ("rgb("+r+ ","+" " + g + ","+ " " + b + ")");
}