var titles = new Array("Equation 1", "Answer 1", "Equation 2", "Answer 2");

var description = new Array("Solve this first equation on a whiteboard or sheet of paper." + 
					" Click next to view the answer.",
					"Here is the answer. Did you get it right?", 
					"Solve this next equation. Remember to show your work!",
					"Here is the answer. Did you get it right?");

var images = new Array("images/p8-dragger1.png", "images/p8-bay1.png", "images/p8-dragger2.png", "images/p8-bay2.png");

var imagetitle = new Array("Equation 1", "Answer 1", "Equation 2", "Answer 2");

var alttitle = new Array("Equation 1", "Answer 1", "Equation 2", "Answer 2");

var index = 0;

function goNext()
{
	index= index + 1;
	
	if ( index == 4)
		{
			index = 3; 
		}
	
	document.getElementById("slideshow-title").innerHTML = titles[ index ];
	document.getElementById("description").innerHTML = description[ index ];
	document.getElementById("slideshow-image").src = images[ index ];
	document.getElementById("slideshow-image").title = imagetitle [ index ];
	document.getElementById("slideshow-image").alt = alttitle[ index ];
}

function goBack()
{
	index= index - 1;
	
	if ( index == -1)
		{
			index = 0; 
		}
	
	document.getElementById("slideshow-title").innerHTML = titles[ index ];
	document.getElementById("description").innerHTML = description[ index ];
	document.getElementById("slideshow-image").src = images[ index ];
	document.getElementById("slideshow-image").title = imagetitle[ index ];
	document.getElementById("slideshow-image").alt = alttitle[ index ];
}

function swap( swapValue )
{
	index = swapValue;
	
	document.getElementById("slideshow-title").innerHTML = titles[ index ];
	document.getElementById("description").innerHTML = description[ index ];
	document.getElementById("slideshow-image").src = images[ index ];
	document.getElementById("slideshow-image").title = imagetitle[ index ];
	document.getElementById("slideshow-image").alt = alttitle[ index ];
}


