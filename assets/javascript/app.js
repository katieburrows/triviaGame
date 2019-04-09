            //all of the possible answers are displayed w/ radio button
                //make sure the user can only check one radio button
            //once the timer is done OR the user has hit a submit button the screen is wiped away and the score is reported
                //correct, incorrect, unanswered.
var timer = 3;
var intervalId;

var questions = [{ 
    question: "1. Alexander Hamilton was a US President.",
    answers: ["true", "false"],
    correctAnswer: "false"
},  {
    question: "2. There are four seasons every year.",
    answers: ["true", "false"],
    correctAnswer: "true"
},  {
    question: "3. 10 + 10 = 200.",
    answers: ["true", "false"],
    correctAnswer: "false"
},  {
    question: "4. There are 6 continents.",
    answers: ["true", "false"],
    correctAnswer: "false"
}, {
    question: "5. I-25 is a literal nightmare to drive.",
    answers: ["true", "false"],
    correctAnswer: "true"
}, {
    question: "6. Vanilla JavaScript is comprised of jQuery and React.",
    answers: ["true", "false"],
    correctAnswer: "false"
}, {
    question: "7. There are 6 primary colors.",
    answers: ["true", "false"],
    correctAnswer: "false"
}, {
    question: "8. H20 is denser in its liquid state than its solid state.",
    answers: ["true", "false"],
    correctAnswer: "true"
}, {
    question: "9. The freezing point in celsius is 0 degrees.",
    answers: ["true", "false"],
    correctAnswer: "true"
}, {
    question: "10. New Mexico is one of the states that comprises 'the Four Corners.'",
    answers: ["true", "false"],
    correctAnswer: "true"
}]

//when the start button is clicked it kicks off our code.
$("#start").on("click", function(event){
    event.preventDefault();
   //hiding the start button.
    $("#start").hide();

    //function to decrement counter
    counter();

    //looping through all the questions
    for (var i = 0; i < questions.length; i++){
        //creating a new paragraph for each question.
        var newP = $("<p>");
        
        //creating true/false radio buttons for each question
        var radioButtonTrue = $("<fieldset><label class='radio-inline'><input type='radio' value = 'true' name= 'question-" + i +  " '> True </label></fieldset>");
        var radioButtonFalse = $("<fieldset><label class='radio-inline'><input type='radio' value = 'false' name= 'question-" + i + " '> False</label></fieldset>");

        //setting content of the new paragraph to the question that the loop is on
        newP.text(questions[i].question);
        
        //appending paragraph with question in it onto the page
        $("#questionDisplay").append(newP);
        
        //appending radio buttons onto the page
        $("#questionDisplay").append(radioButtonTrue, radioButtonFalse);
        
    }
});

function counter(){
    //clearing intervalId so that no other instances can affect the timer
    clearInterval(intervalId);
    //setting intervalId to run decrement() every second
    intervalId = setInterval(decrement, 1000);
}

//this function is called every second from counter().
function decrement() {
    //taking the time down by one second.
    timer--;
    //targeting #countDown div and updating the page with the timer's current position.
    $("#countDown").html("<h2>" + timer + "</h2>");
        //conditional to check where the timer is at.  If the timer is run down to 0 we want to end the quiz.
        if (timer === 0) {
            //taking the timer off the page.
            $("#countDown").hide();

            // alert("Time's Up!");
            //triggering the function that will check the answers.
            calculateScore();
        }
}

function calculateScore(){
    console.log("calculate score function hit");

    //compare value of radio button to correct answer
        //if correct correctAnswers++
        //if wrong wrongAnswers++
        //if no value was selected unanswered++
        
    //thinking that $(this).val() will be used and looped through again to check against the grading key that's been set up with data-.
}
