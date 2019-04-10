            //all of the possible answers are displayed w/ radio button
                //make sure the user can only check one radio button
            //once the timer is done OR the user has hit a submit button the screen is wiped away and the score is reported
                //correct, incorrect, unanswered.
var timer = 3;
var intervalId;
var right = 0;
var wrong = 0;
var noAnswer = 0;

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

            $("#gameArea").hide();
            
            //triggering the function that will check the answers.
            calculateScore();
        }
}

function calculateScore(){
    console.log("calculate score function hit");

    
    //check if there was an answer; compare userGuess of radio button to correct answer to calculate the score.
        /*if (!value){
            noAnswer++

        } else if (value){
            if (value === correctAnswer){
                right++;
            } else if (value != correctAnswer){
                wrong++;
            }
        }

        $("#scoreBoard").append(`${"Score: "}${right}${"/10"}`);
        $("#scoreBoard").append(`${"Number of wrong answers:"} ${wrong}`);
        $("#scoreBoard").append(`${"Number of unanswered questions:"} ${noAnswer}`);
        */


        //if no value unanswered++
        //if value grab the value and store it in userGuess
            //compare userGuess to questions[i].answers
                //if correct correctAnswers++
                //if wrong wrongAnswers++
                $( "label" ).on( "click", function() {
                    console.log( $( "label:checked" ).val() + " is checked!" );
                  });
        
    //thinking that $(this).val() will be used and looped through again to check against the grading key that's been set up with data-.

    
        //grab value of radio button
}


//use data- ?