$('#start').on('click',function(){
    $('#start').remove();
    game.loadQuestion();    
})
//passing through the event what has been clicked
//answer button dynamically being generated 
$(document).on('click','.answer-button',function(e){
game.clicked(e);
})

$(document).on('click','#reset',function(){
    game.reset();
})

var questions = [{
    question: "Bob saves money for Tina's sweet sixteen party by...",
    answers: ["donating blood","moonlighting as cab driver","catering another party","skimping on ingredients"],
    correctAnswer: "moonlighting as cab driver",
    image:"assets/images/sheeshCabBob.jpg"
}, {
    question: "Tina's new frenemy Tammie gets her in trouble by...",
    answers: ["texting tina to sneak out","persuading everyone to drink margarita mix","stealing and reading tina's erotic friend fiction out loud during lunch","all of the above"],
    correctAnswer: "all of the above",
    image:"assets//images/badTina.jpg"
}, {
    question: "Linda starts working part-time at Fresh Field grocery store and Bob learns...",
    answers: ["how to use his leather tools","capoeira","parkour","working without your partner sucks"],
    correctAnswer: "working without your partner sucks",
    image:"assets//images/lindapendentWoman.jpg"
}, {
    question: "Things incorrectly stated in the episode Topsy",
    answers: ["Topsy was an elephant","Thomas Edison electrocuted Topsy","the examination of animal remains is called an autopsy","Thomas Edison invented the kinetoscope"],
    correctAnswer: "the examination of animal remains is called an autopsy",
    image:"assets//images/topsy.jpg"
}, {
    question: "Linda's high school band the Ta Tas was totally humiliated at a talent show when...",
    answers: ["they were beat by band called Bad Hair Day","Linda wore a misshapen scrunchie","Linda rehearsed and prepared the wrong song","Linda fell on stage"],
    correctAnswer: "they were beat by band called Bad Hair Day",
    image:"assets/images/purpleRainUnion.jpg"
}, {
    question: "During a slumber party, we learn that Jody...",
    answers: ["hates braids","is trying out for field hockey","is double-jointed","likes cats"],
    correctAnswer: "is trying out for field hockey",
    image: "assets//images/slumberParty.jpg"
}, {
    question: "Tina disovers the traitor in her Thunder Girls troop by",
    answers: ["asking her sister Louise for help","creating a safe space","sending false leads to each troopmate to see which takes the bait","having Gene go through the trash of every girl in troop 218"],
    correctAnswer: "sending false leads to each troopmate to see which takes the bait",
    image:"assets//images/tinaTailorSoldierSpy.jpg"
}, {
    question: "Tina has to show up to school as a robot when...",
    answers: ["she sprains her ankle","she is having a nightmare","her cheerleading team does a robot routine","Jimmy Jr. loses the election for class president"],
    correctAnswer: "she sprains her ankle",
    image:"assets//images/exMachTina.jpg"
}];

let game = {
    questions:questions, 
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    unanswered:0,
// --COUNTDOWN METHOD--
// in charge of changing the timer; decreasing counter on screen
// tells us if we've run out of time or not
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter)
        if(game.counter<=0){
            console.log("TIMES UP!");
            game.timeUp();
        }
    },
// --LOAD QUESTION METHOD--
// whenever new question loaded, timer set to 1 second
// for loop to load questions into buttons
    loadQuestion: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').html("<h2>TIME REMAINING <span id='counter'>30</span> Seconds</h2>");
        $('#subwrapper').append('<h2>'+questions[game.currentQuestion].question+'</h2>');
        for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
            $('#subwrapper').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions [game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
        }
    },

// --NEXT QUESTION METHOD--
    nextQuestion: function(){
    game.counter = 30;
    $('#counter').html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
    },
// --TIME UP METHOD--
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html('<h2>YOU ARE OUT OF TIME! OMG!</h2>');
        $('#subwrapper').append('<h3>The correct answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');

    },
// --RESULTS METHOD--
// --tells us whenever we reached the last question
    results: function(){
        clearInterval(timer);
        $('#subwrapper').html("<h2>ALL DONE!</h2>");
        $('#subwrapper').append("<h3>Correct: "+game.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect: "+game.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+game.unanswered+"</h3>");
        $('#subwrapper').append("<button id='reset'>WANT TO TRY AGAIN?</button>");
    },
// --CLICKED METHOD-
    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
        game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
        
    },
// --ANSWERED CORRECTLY METHOD--
    answeredCorrectly: function(){
    console.log("YOU GOT IT!"); 
    clearInterval(timer);
    game.correct++;
    $('#subwrapper').html('<h2>YOU GOT IT RIGHT!</h2>');
    if(game.currentQuestion==questions.length-1){
        setTimeout(game.results,3*1000);
    } else {
        setTimeout(game.nextQuestion,3*1000);
    }      
    },
// --ANSWERED INCORRECTLY METHOD--
    answeredIncorrectly: function(){
        console.log("INCORRECT!"); 
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h2>YOU GOT IT WRONG!</h2>');
        $('#subwrapper').append('<h3>The Correct Answer Was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }      
        },
// --RESET METHOD--
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    }
}