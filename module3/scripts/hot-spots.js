
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "<img src='images/p5-output1.png' alt='Output 1' title='Output1'>";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "<img src='images/p5-output2.png' alt='Output 2' title='Output2'>";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "<img src='images/p5-output3.png' alt='Output 3' title='Output3'>";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "<img src='images/p5-output4.png' alt='Output 4' title='Output4'>";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}