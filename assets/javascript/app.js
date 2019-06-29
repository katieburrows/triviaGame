var timer = 3;
var intervalId;
var right = 0;
var wrong = 0;
var noAnswer = 0;

var questions = [{ 
    question: "1. What animal does Professor McGonagall turn into?",
    answers: ["toad", "rat", "cat", "penguin"],
    correctAnswer: "cat",
    image: ""
},  {
    question: "2. What Magical Creature has Hagrid always wanted?",
    answers: ["three headed dog", "dragon", "boarhound", "blast ended skrewt" ],
    correctAnswer: "dragon"
},  {
    question: "3. How many horcurxes in total did Lord Voldemort make?",
    answers: ["6", "7", "8", "9"],
    correctAnswer: "8"
},  {
    question: "4. Who is Harry Potters Godfather",
    answers: ["Peter Pettigrew", "Sirius Black", "Remus Lupin", "Severus Snape"],
    correctAnswer: "Sirius Black"
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

    //creating submit button using jQuery to apper once the start button has been hit.
    $("#submitButtonSpace").append("<button id = 'submit'>Submit it!</button>");

    //click event for the start button
    $("#submit").on("click", function(){
        //taking the timer off the page.
        $("#countDown").hide();

        $("#gameArea").hide();
        
        //triggering the function that will check the answers.
        calculateScore();
    })
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

if (timer === 0) {
    //taking the timer off the page.
    $("#countDown").hide();

    $("#gameArea").hide();
    
    //triggering the function that will check the answers.
    calculateScore();
}

function calculateScore(){
//thinking that $(this).attr() will be used and looped through again to check against the grading key 

            //if value grab the value and store it in userGuess
            //grab value of radio button
            //compare userGuess to questions[i].answers

//two ways to go about this potentially:  create a userGuess variable that will be able to tell if there is no value stored in it (not sure if this is possible with forms, probably is with :checked) OR if there is a true/false value in it.  Use that in the conditionals, if that doesn't work then may need to a create a variable once inside the conditional section that grabs the value (so 2-3 instances of this variable to be created/mutated).
    
    for (var i = 0; i < questions[i].answers.length; i++){
        var radioValue = $(this).attr();
        console.log(radioValue);
    }
        // var radioValue = $("input[name='question-" + [i] + "']:checked").val();
        // if(radioValue){
        //     console.log(`${"radio value:"} ${radioValue}`);
        // }
  
    

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
        
}

//once the timer is done OR the user has hit a submit button the screen is wiped away and the score is reported

//use data- ?