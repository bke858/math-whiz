function processForm()
{
	var numberOfCorrectResponses= 0;
	
	var q1 = document.forms.quiz1.question1;
	
	if (q1[1].checked)
		{
		numberOfCorrectResponses= numberOfCorrectResponses + 1;
		}
	
	var q2 = document.forms.quiz1.question2;
	
	if (q2[0].checked)
		{
		numberOfCorrectResponses= numberOfCorrectResponses + 1;
		}
	
	var q3 = document.forms.quiz1.question3;
	
	if (q3[2].checked)
		{
		numberOfCorrectResponses= numberOfCorrectResponses + 1;
		}
	
	var score= 	Math.round(numberOfCorrectResponses / 3 * 100);
	alert( "You recieved a " + score + "!" );
	
	if (score >= 70)
		{
			document.getElementById( "content-frame" ).
			contentWindow.document.getElementById( "certificate-link" ).
			style.display = "inline";
		}
	
	parent.reportScores( score );
}

function reportScores( score )
{	
	// remove this line, it's only for testing the score: you don't always
	// want a score of 78

	
	oScorm.set("cmi.core.score.raw", score );
	oScorm.set("cmi.core.score.min", 0 );
	oScorm.set("cmi.core.score.max", 100 );

	if (score >= 70)
		{
		oScorm.set( "cmi.core.lesson_status", "passed" );

		}
	else
		{
		oScorm.set( "cmi.core.lesson_status", "failed" );

		
		}
	alert( "Reported " + score + " as your score." );

	oScorm.save();
}

