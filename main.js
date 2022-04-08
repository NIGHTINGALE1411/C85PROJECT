canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")//Create a reference for canvas 

carheight=170
carwidth=90//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
 
carx=10
cary=10//Set initial position for a car image.

function add() {
	backgroundimgtag=new Image()
	backgroundimgtag.onload=uploadBackground
	backgroundimgtag.src=background_image

	greencarimgtag= new Image()
	greencarimgtag.onload=uploadgreencar
	greencarimgtag.src=greencar_image//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(backgroundimgtag,0,0,800,600)

}

function uploadgreencar() {
	ctx.drawImage(greencarimgtag,carx,cary,carwidth,carheight)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (cary>=0){
		cary=cary-10
		console.log(carx,cary)
		uploadBackground()
		uploadgreencar()
	}}


function down()
{if ( cary<=500){
	cary= cary+10
	console.log(carx,cary)
	uploadBackground()
	uploadgreencar()
}
	
}

function left()
{if (carx>=0){
	carx=carx-10
	console.log(carx,cary)
	uploadBackground()
	uploadgreencar()
}
	
}

function right()
{  if (carx<=700){
	carx=carx+10
	console.log(carx,cary)
	uploadBackground()
	uploadgreencar()
}
	
}
