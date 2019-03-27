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

//when the start button is clicked it kicks off our code.
$("#start").on("click", function(event){
    event.preventDefault();
   //hiding the start button.
    $("#start").hide();
    //function to decrement counter
    counter();
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

            alert("Time's Up!");
            //triggering the function that will check the answers.
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