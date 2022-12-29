
// Create canvas variable
var canvas=new_fabric.canvas(myCanvas);
//Set initial positions for ball and hole images.
block_x = 0;
block_y = 0;
hole_x = 200;
hole_y = 800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	new_image();
	fabric.Image.fromURL("golf-h.png",function Image{
     hole_obj=img;
	 hole_obj= scaleToWidth(50);
	 hole_obj= scaleTohHight(50);
	 hole_obj.set({
		top:hole_y,
		left:hole_x
	 });
	canvas.add(hole_obj);
});
new_image
}
function new_image();
{
	fabric.Image.fromURL("ball.png",function Image{
		ball_obj=img;
		ball_obj= scaleToWidth(50);
		ball_obj= scaleTohHight(50);
		ball_obj.set({
		   top:hole_y,
		   left:hole_x
		});
	   canvas.add(ball_obj);
   });
   new_image	
}




function new_image()
{
	// write code to Upload ball image on canvas
	function load_img()
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&((block_y==hole_y){
		canvas.remove(ball_obj);
		document.getElementById(hd3).innerHTML="gole!!!!!!!!!!!!!!!!!!!!!";
		document.getElementById(myCanvas).style.borderColor="cyan";
	}
	else{
		if(keyPressed == '38')
		{
			up();
		
			console.log("up");
		}
		if(keyPressed == '45')
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
		if(ball_y>=5)
		{
			ball_y=ball_y+block_image_height;
			console.log("block image hight="+ ball_x+"y="+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y<=450)
			{
				ball_y=ball_y+block_image_height;
				console.log("block image hight="+ ball_x+"y="+ball_y);
				canvas.remove(ball_obj);
				new_image();
			}
	}

	function left()
	{
		if(ball_x >5)
		{
			
			
				ball_x=ball_x+block_image_height;
				console.log("block image hight="+ ball_y+"y="+ball_x);
				canvas.remove(ball_obj);
				new_image();
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
	
			
				ball_y=ball_y+block_image_height;
				console.log("block image hight="+ ball_x+"y="+ball_y);
				canvas.remove(ball_obj);
				new_image();
			
		}
	}
}
	
