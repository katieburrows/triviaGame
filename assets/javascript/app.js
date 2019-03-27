//the app starts with a blank page and a start button as the only thing on the page
    //click event on start to:
        //the start button is wiped away and the quiz starts    
            //timer is counting down
                //display countdown
            //all the questions are displayed (10 questions)
            //all of the possible answers are displayed
                //make sure the user can only check one radio button
            //once the timer is done OR the user has hit a submit button the screen is wiped away and the score is reported
                //correct, incorrect, unanswered.
var timer = 3;
var intervalId;

$("#start").on("click", function(event){
    event.preventDefault();
    $("#start").hide();
//function to decrement counter
    counter();
});

function counter(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $("#countDown").html("<h2>" + timer + "</h2>");
        if (timer === 0) {
            $("#countDown").hide();
            alert("Time's Up!");
            calculateScore();
        }
}

function calculateScore(){
    console.log("calculate score function hit");
}





//trivia questions:

/*
"Alexander Hamilton was a US President."
    "False"

"There are four seasons every year."
    "True"

"10 + 10 = 200."
    "False"

"There are 6 continents."
    "False"

"During the US's summer world-wide carbon emissions are the lowest."
    "True"

"I-25 is a literal nightmare to drive."
    "True"

"Vanilla JavaScript is comprised of jQuery and React."
    "False"

"There are 6 primary colors."
    "False"

"H20 is denser in its liquid state than its solid state."
    "True"

"New Mexico is one of the states that comprise 'the Four Corners.'"
    "True"

*/