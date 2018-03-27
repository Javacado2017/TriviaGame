$(function(){


function triviaGame() {

    gameOutset();

};

triviaGame(); 



//Function to start new the game 
function gameOutset() {

    $('#gameStatus').addClass('button').append('<button>New Game</button>');

    $('button').click(function() {
        $('#mainContent').html('');
        timerInterval = gameTimer();
        gameQuestions();
        gameSubmit();
    });

};

//Function to submit 
function gameSubmit(){

    $('#gamePrompt').addClass('button').append('<button>Submit</button>');

    $('button').click(function() {
       clearInterval(timerInterval);
       $('#gameStatus').html('');
       $('#gamePrompt').html('');
       gameOutset();
       gameResults();
    });
};


//Function to pull data and create 10 questions into the trivia game
function gameQuestions() {

    //Sets the number of questions the game will have
    var numberQuestions = 10

    //Shuffles the array of objects
    var questions = shuffle(stateAbbr); 
    var questionsSet = questions.slice(0,10);

    //Suffles the array of object and pulls three wrong answer from array
    var wrongAnswers = []

    function getWrongs(){

        var options = shuffle(stateAbbr);
        
        for (i=0; i < 3; i++){
            wrongAnswers.push(options[i].abbreviation); 
        };

        return wrongAnswers
    };

    //Creates the array of objects for the questions and the answers
    var triviaQuestions = []
    
    function dataQuestions(){
        
        for (i=0; i < numberQuestions; i++){
            triviaQuestions.push({
                question: questions[i].name,
                answer: questions[i].abbreviation,
                options: .concat(questions[i].abbreviation)
            });
            console.log(triviaQuestions, numberQuestions);
        };
    };

    dataQuestions();


};





//Function for the countdown time
var timerInterval;

function gameTimer() {

    //Clears the gameStatus section
    $('#gameStatus').html('');

    //Displays the timer in the gameStatus section
    var timer = 5
    $('#gameStatus').html('You have ' + timer + ' seconds remaining.');

    //Starts the countdown
    var interval = setInterval(function() {

        timer--;
        $('#gameStatus').html('You have ' + timer + ' seconds remaining.');

        //Condition for whem the timer goes to zero and trivia game has not been completed
        if (timer === 0) {
            $('#mainContent').html('');
            $('#gameStatus').html('');
            $('#gamePrompt').html('');

            gameOutset();

            $('#mainContent').html('Oh no! You ran out of time. Try again.');
            clearInterval(interval);
        };

    }, 1000);

    return interval;
    
};





});

//I got this online, https://stackoverflow.com/a/3718452
function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray; 
};

//This defines all the states and they're abreviations
var stateAbbr = [
    {
        'name': 'Alabama',
        'abbreviation': 'AL'
    },
    {
        'name': 'Alaska',
        'abbreviation': 'AK'
    },
    {
        'name': 'American Samoa',
        'abbreviation': 'AS'
    },
    {
        'name': 'Arizona',
        'abbreviation': 'AZ'
    },
    {
        'name': 'Arkansas',
        'abbreviation': 'AR'
    },
    {
        'name': 'California',
        'abbreviation': 'CA'
    },
    {
        'name': 'Colorado',
        'abbreviation': 'CO'
    },
    {
        'name': 'Connecticut',
        'abbreviation': 'CT'
    },
    {
        'name': 'Delaware',
        'abbreviation': 'DE'
    },
    {
        'name': 'District Of Columbia',
        'abbreviation': 'DC'
    },
    {
        'name': 'Federated States Of Micronesia',
        'abbreviation': 'FM'
    },
    {
        'name': 'Florida',
        'abbreviation': 'FL'
    },
    {
        'name': 'Georgia',
        'abbreviation': 'GA'
    },
    {
        'name': 'Guam',
        'abbreviation': 'GU'
    },
    {
        'name': 'Hawaii',
        'abbreviation': 'HI'
    },
    {
        'name': 'Idaho',
        'abbreviation': 'ID'
    },
    {
        'name': 'Illinois',
        'abbreviation': 'IL'
    },
    {
        'name': 'Indiana',
        'abbreviation': 'IN'
    },
    {
        'name': 'Iowa',
        'abbreviation': 'IA'
    },
    {
        'name': 'Kansas',
        'abbreviation': 'KS'
    },
    {
        'name': 'Kentucky',
        'abbreviation': 'KY'
    },
    {
        'name': 'Louisiana',
        'abbreviation': 'LA'
    },
    {
        'name': 'Maine',
        'abbreviation': 'ME'
    },
    {
        'name': 'Marshall Islands',
        'abbreviation': 'MH'
    },
    {
        'name': 'Maryland',
        'abbreviation': 'MD'
    },
    {
        'name': 'Massachusetts',
        'abbreviation': 'MA'
    },
    {
        'name': 'Michigan',
        'abbreviation': 'MI'
    },
    {
        'name': 'Minnesota',
        'abbreviation': 'MN'
    },
    {
        'name': 'Mississippi',
        'abbreviation': 'MS'
    },
    {
        'name': 'Missouri',
        'abbreviation': 'MO'
    },
    {
        'name': 'Montana',
        'abbreviation': 'MT'
    },
    {
        'name': 'Nebraska',
        'abbreviation': 'NE'
    },
    {
        'name': 'Nevada',
        'abbreviation': 'NV'
    },
    {
        'name': 'New Hampshire',
        'abbreviation': 'NH'
    },
    {
        'name': 'New Jersey',
        'abbreviation': 'NJ'
    },
    {
        'name': 'New Mexico',
        'abbreviation': 'NM'
    },
    {
        'name': 'New York',
        'abbreviation': 'NY'
    },
    {
        'name': 'North Carolina',
        'abbreviation': 'NC'
    },
    {
        'name': 'North Dakota',
        'abbreviation': 'ND'
    },
    {
        'name': 'Northern Mariana Islands',
        'abbreviation': 'MP'
    },
    {
        'name': 'Ohio',
        'abbreviation': 'OH'
    },
    {
        'name': 'Oklahoma',
        'abbreviation': 'OK'
    },
    {
        'name': 'Oregon',
        'abbreviation': 'OR'
    },
    {
        'name': 'Palau',
        'abbreviation': 'PW'
    },
    {
        'name': 'Pennsylvania',
        'abbreviation': 'PA'
    },
    {
        'name': 'Puerto Rico',
        'abbreviation': 'PR'
    },
    {
        'name': 'Rhode Island',
        'abbreviation': 'RI'
    },
    {
        'name': 'South Carolina',
        'abbreviation': 'SC'
    },
    {
        'name': 'South Dakota',
        'abbreviation': 'SD'
    },
    {
        'name': 'Tennessee',
        'abbreviation': 'TN'
    },
    {
        'name': 'Texas',
        'abbreviation': 'TX'
    },
    {
        'name': 'Utah',
        'abbreviation': 'UT'
    },
    {
        'name': 'Vermont',
        'abbreviation': 'VT'
    },
    {
        'name': 'Virgin Islands',
        'abbreviation': 'VI'
    },
    {
        'name': 'Virginia',
        'abbreviation': 'VA'
    },
    {
        'name': 'Washington',
        'abbreviation': 'WA'
    },
    {
        'name': 'West Virginia',
        'abbreviation': 'WV'
    },
    {
        'name': 'Wisconsin',
        'abbreviation': 'WI'
    },
    {
        'name': 'Wyoming',
        'abbreviation': 'WY'
    }
];


