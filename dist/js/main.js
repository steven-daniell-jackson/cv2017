function answers(){

var totalQuestions = 3;
var score = 0;
var correctAnswers = ['c', 'b', 'a'];
var answers = [];

answers[0] = $('input[name=q1]:checked').val();
answers[1] = $('input[name=q2]:checked').val();
answers[2] = $('input[name=q3]:checked').val();


for (var i = 0; i < totalQuestions; i++) {
  
if (answers[i] === correctAnswers[i]){
    console.log('test');
    score++;
}

}

$('.results').html("Results: You scored " + score + "/" + totalQuestions).css('color', 'red');
alert ("You scored " + score + "/" + totalQuestions);

    return false;
}