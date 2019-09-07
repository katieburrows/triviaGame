// alert("Site and functionality in progress");
var timer = 2;
var intervalId;
var right = 0;
var wrong = 0;
var noAnswer = 0;

var questions = [{ 
    question: "1. What animal does Professor McGonagall turn into?",
    answers: ["toad", "cat", "rat", "bat"],
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

$("#form").hide();
$("#scoreBoard").hide();

//when the start button is clicked it kicks off the trivia questions and  code.
$("#start").on("click", function(event){
    event.preventDefault();
   
    //hiding the start button.
    $("#start").remove();

    $("#form").show();

    for (var i = 0; i < questions.length; i++) {
        $(".card-body").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $(".card-body").append("<div class = 'radioBtns'><input style = 'font-size:45px' type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''></div>" + questions[i].answers[j]);
        }
      }

      var userAnswer = $(this).val();
      console.log(userAnswer);
      
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
            
            //triggering the function that will check the answers.
            calculateScore();
        }
}

if (timer === 0) {
    //taking the timer off the page.
    $("#countDown").hide();

    //triggering the function that will check the answers.
    calculateScore();
    


}

function calculateScore() {
    $("#scoreBoard").show();
    for (var i = 0; i <questions.length; i++) {
        $.each($("input[name='question-"+ i + "']:checked"), function() {
            var userGuess = $(this).attr("value");
            if (userGuess === questions[i].correctAnswer) {
                console.log(`correct ${userGuess}`);
                right++;
            } else {
                console.log(`incorrect ${userGuess}`);
                wrong++;
            }
        });
    };
    console.log(`right: ${right}`);
    console.log(`wrong: ${wrong}`);
}

        $("#scoreBoard").append(`${"Score: "}${right}${"/10"}`);
        $("#scoreBoard").append(`${"Number of wrong answers:"} ${wrong}`);

        
        


//once the timer is done OR the user has hit a submit button the screen is wiped away and the score is reported



//once all the questions have been gone through display the user's score and offer a chance to restart the game--restart code.

//add footer

