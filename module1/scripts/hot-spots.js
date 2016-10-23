
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = <img src="images/hotspot-3.png" alt="Fraction" 
     		title = "fraction" >;
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = <img src="images/hotspot-4.png" alt="Fraction" 
     		title = "fraction" >;
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = <img src="images/hotspot2-3.png" alt="Fraction" 
     		title = "fraction" >;
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = <img src="images/hotspot2-4.png" alt="Fraction" 
     		title = "fraction" >;
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}