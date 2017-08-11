// fortune teller reading 

// declaring possible fortune outcomes 
var fortunes = [
  "Somebody will mistaken you for a homeless person and put R2 in your hand",
  "The barista will burn your coffee thus ruining your entire morning",
  "You will notice your first grey hair this evening",
  "A bee will fly into your cooldrink engulfing you in feelings of death, wastage and despair",
  "Somebody wants to give you a kitten",
  "Don't eat lettuce today as it will negatively effect your chakra alignment",
  "You will receive a call from a call centre selling you life insurance",
  "A seagull will shit on your shoulder, bestowing upon you good luck"] ;

// makes the fortune appear once the button is clicked 
function readFortune() {
  var fortune = cheese() 
  document.getElementById("fortune").innerHTML = fortune
  document.getElementById("stop").disabled = true;
}

// chooses a fortune at random to be displayed 
function cheese() {
  var randomNumber = Math.floor(Math.random() * fortunes.length);
  console.log("random number" + randomNumber);
  return fortunes[randomNumber];
}

// makes the second button generate a new fortune infinitely 
function reset() {
  var fortune = cheese() 
  document.getElementById("fortune").innerHTML = fortune
}



// lotto number generator 

var randomNumbersArray = [];

// holds all of the below functions 
$(function() {
    generateRandomNumbers();
    displayRandomNumbers();
});

// tells the function to only select 6 numbers 
function generateRandomNumbers() {
    for (i = 0; i < 6; i++) {
        generateRandomNumberFrom1To(60);
    }
}

// randomly generates 6 numbers between 1 and 60 
function generateRandomNumberFrom1To(maxValue) {
    var randomNumber;
    do {
      randomNumber = Math.ceil(Math.random() * maxValue);
    } 
    while ($.inArray(randomNumber, randomNumbersArray) > -1);
    randomNumbersArray.push(randomNumber);
}

// makes sure the 6 random numbers display 
function displayRandomNumbers() {
    for (i in randomNumbersArray) {
        $("#randomNumbers").append(randomNumbersArray[i] + "  ")
        ;
    }

  }

// makes the 6 randomly selected numbers display only when the button is clicked 
function revealNumbers() {
    var x = document.getElementById('randomNumbers');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'block';
    }
    // makes the page automatically jump down to reveal answers
    window.scrollTo(0,document.body.scrollHeight);

  }


