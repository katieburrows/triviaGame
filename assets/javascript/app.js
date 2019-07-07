var timer = 10;
var intervalId;
var right = 0;
var wrong = 0;
var noAnswer = 0;

//get to individual question: questions[x].question
//get to individual answer: questions[x].answers


var questions = [{ 
    question: "1. What animal does Professor McGonagall turn into?",
    answers: ["toad", "rat", "cat", "penguin"],
    correctAnswer: "cat",
    image: "https://giphy.com/embed/y3Z92OG7KPCXS"
},  {
    question: "2. What Magical Creature has Hagrid always wanted?",
    answers: ["three headed dog", "dragon", "boarhound", "blast ended skrewt" ],
    correctAnswer: "dragon",
    image: "https://media.giphy.com/media/11EHYMlR23cji8/giphy.gif"
},  {
    question: "3. How many horcurxes in total did Lord Voldemort make?",
    answers: ["6", "7", "8", "9"],
    correctAnswer: "8",
    image: "https://media.giphy.com/media/3o7aD2yQmy5bn4AitO/giphy.gif"
},  {
    question: "4. Who is Harry Potter's godfather?",
    answers: ["Peter Pettigrew", "Sirius Black", "Remus Lupin", "Severus Snape"],
    correctAnswer: "Sirius Black",
    image: "https://media.giphy.com/media/B3z9CYWnCkFRC/giphy.gif"
}, {
    question: "5. Who put Harry Potter’s name in the Goblet of Fire?",
    answers: ["Mad Eye Moody", "Barty Crouch", "Barty Crouch Jr", "Igor Karkaroff" ],
    correctAnswer: "Barty Crouch Jr",
    image: "https://media.giphy.com/media/zU6duVFqBIzsY/giphy.gif"
}, {
    question: "6. In the books, who asks Hermione Granger to the Yule Ball?",
    answers: ["Viktor Krum", "Ron Weasley", "Neville Longbottom", "All of the above"],
    correctAnswer: "All of the above", 
    image: "https://media.giphy.com/media/l01fjs9HRzU08/giphy.gif"
}, {
    question: "7. What form does Harry Potter’s Patronus take?",
    answers: ["Doe", "Dog", "Otter", "Stag"],
    correctAnswer: "Stag",
    image: "https://media.giphy.com/media/ru4uZmSQOhatW/giphy.gif"
}, {
    question: "8. How many Deathly Hollows are there?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "3", 
    image: "https://media.giphy.com/media/H7qjJSFIvnVBK/giphy.gif"
}, {
    question: "9. Who killed Albus Dumbledore? ",
    answers: ["Voldemort", "Draco Malfoy", "Harry Potter", "Severus Snape"],
    correctAnswer: "Severus Snape",
    image: "https://media.giphy.com/media/XY7LShVWm9xEQ/giphy.gif"
}, {
    question: "10. Which of the following professors never taught a Defense Against the Dark Arts Class?",
    answers: ["Severus Snape", "Mad Eye Moody", "Dolores Umbridge", "Gilderoy Lockhart"],
    correctAnswer: "Mad Eye Moody",
    image: "https://media.giphy.com/media/S5s0P6MhcLeeY/giphy.gif"
}]



//when the start button is clicked it kicks off the trivia questions and  code.
$("#start").on("click", function(event){
    event.preventDefault();
   
    //hiding the start button.
    $("#start").hide();



    //display one question to the div--for loop to go through each question which is being overwritten by right/wrong calculation and the corresponding gif, set on a timer, then the next question appears which overwrites the calculation/gif until there are no more questions. The delay is occuring with a timer.

        //when start is clicked the first question goes into the Q div and answers into the A div
            //create the structure of the Q div with jQuery--create new p, add text, add to page.
            //create the structure of the A div with jQuery, append it below the Q div--for loop through the answer choices, create a radio button and assign it's value as the value of the loop's iteration value



    //looping through all the questions
    for (var i = 0; i < questions.length; i++){

        var iteratedQuestion = questions[i].question;

        var iteratedAnswers = questions[i].answers;

        // //creating true/false radio buttons for each question
        // var radioButtonTrue = $("<fieldset><label class='radio-inline'><input type='radio' value = 'true' name= 'question-" + i +  " '> True </label></fieldset>");
        // var radioButtonFalse = $("<fieldset><label class='radio-inline'><input type='radio' value = 'false' name= 'question-" + i + " '> False</label></fieldset>");
        
        // //appending radio buttons onto the page
        // $("#questionDisplay").append(radioButtonTrue, radioButtonFalse);   

        // //function to decrement counter
        // counter();
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











        
        //decrementing counter starts --10 seconds
        //User answers or time runs out:
            //grade the answer immediately after the user clicks the radio button: 
                //correct
                    //the user answers correctly
                    //score++
                //incorrect
                    //the user doesn't answer
                    //OR the answer is wrong
                    //score variable unaffected
        //Overwrite the question with the next question w/ .html() or whatever method blows the other text away.
            //repeat decrementing/scoring process

    //once all the questions have been gone through display the user's score and offer a chance to restart the game--restart code.