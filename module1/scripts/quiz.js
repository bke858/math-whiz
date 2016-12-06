function processForm()
{
	var numberOfCorrectResponses= 0;
	
	var q1 = document.forms.quiz1.question1;
	
	if ( q1 [ 1 ].checked )
		{
		numberOfCorrectResponses= numberOfCorrectResponses + 1;
		}
	
	var q2 = document.forms.quiz1.question2;
	
	if ( q2 [ 2 ].checked )
		{
		numberOfCorrectResponses= numberOfCorrectResponses + 1;
		}
	
	var q3 = document.forms.quiz1.question3;
	
	if ( q3 [ 2 ].checked )
		{
		numberOfCorrectResponses= numberOfCorrectResponses + 1;
		}
	
	var q4 = document.forms.quiz1.question4;
	
	if ( q4 [ 1 ].checked )
		{
		numberOfCorrectResponses= numberOfCorrectResponses + 1;
		}
	
	var score= 	Math.round(numberOfCorrectResponses / 4 * 100);
	alert( "You received a " + score + "!" );
	
	parent.reportScores( score );
}