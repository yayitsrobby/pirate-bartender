/* Bartender will ask user questions that determine the user's taste
and then identify ingredients that suit those tastes.

Create constructor functions for questions, ingredients, and the pantry
(which will contain all of the available ingredients). Then use these
constructors to create objects representing the bartenders questions,
ingredients and pantry.
*/

$(document).ready(function () {

  /*----------------- VARIABLES -----------------*/

  // constructor for the questions
  //  var Question = function (question, category) {
  //    this.question = question;
  //    this.category = category;
  //  };

  var questionsList = [];

  // constructor for the ingredients
  var Taste = function (question, ingredients) {
    this.question = question;
    this.ingredients = ingredients;
    questionsList.push(this);
  }

  var userPreferences = {
    strong: false,
    salty: false,
    bitter: false,
    sweet: false,
    fruity: false,
  };

  var strong = new Taste('Do ye like yer drinks strong?', ['glug of rum', 'slug of whisky', 'splash of gin'])
  var salty = new Taste('Do ye like it with a salty tang?', ['olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
  var bitter = new Taste('Are ye a lubber who likes it bitter?', ['shake of bitters', 'splash of tonic', 'twist of lemon peel']);
  var sweet = new Taste('Would ye like a bit of sweetness with yer poison?', ['sugar cube', 'spoonful of honey', 'splash of cola']);
  var fruity = new Taste('Are ye one for a fruity finish?', ['slice of orange', 'dash of cassis', 'cherry on top']);

  console.log(questionsList);
  // array of questions to iterate through
  for (var i = 0; i < questionsList.length; i++) {
    $('.main-form').append('<label>' + questionsList[i].question + '  <input type="checkbox" class="aye" value="' + questionsList[i] +
      '"> Aye!</label><br>')
  }

  //  var pantryList = [strongPantry, saltyPantry, bitterPantry, sweetPantry, fruityPantry];
  //  var finalDrink = new Bartender();

  // creates objects for drink name
  //  var drinkNameNouns = new DrinkNoun(['Mary', 'Sailor', 'Monkey', 'Booty', 'Dog', 'Martin', 'Bhaumik'])
  //var drinkNameAdj = new DrinkAdj(['Smelly', 'Bloody', 'Ugly', 'Beautiful', 'Bootilicious', 'Hurricane'])


  /*----------------- CODE BODY -----------------*/

  $('.submit-button').click(function () {
    event.preventDefault();



    // this grabs the user's preferences
    $('.aye').each(function () {
      var currentQuestion = $(this).val();
      if ($(this).is(':checked')) {
        userPreferences[currentQuestion] = true;
      }
    });
    console.log(userPreferences);

    // take their preferences and grab ingredients
    //    for (var pref in userPreferences) {
    //      var currentIngredient = pref + 'Ingredient';
    //      console.log($('currentIngredient'));
    //
    //      if (userPreferences[pref]) {


  });


  //  for (var i = 0; i < questionsList.length; i++) {
  //    while (true) {
  //      // var userInput = prompt(questionsList[i].question);
  //      if ((userInput === 'N') || (userInput === 'Y')) {
  //        break;
  //      }
  //    }
  //    var currentIngredient = questionsList[i].category;
  //    var currentPantry = currentIngredient.category;
  //
  //    if (userInput === 'Y') {
  //      var num = Math.floor(Math.random() * 3);
  //      userPreferences[currentIngredient.preference] = currentIngredient.ingredientsList[num];
  //    }
  //  }
  //  finalDrink.createDrink(userPreferences);
});


/*

 // constructor for the pantry
  var Pantry = function (ingredients) {
    this.ingredientsList = ingredients;
  };

  // constructor for createDrink method
  var Bartender = function () {
    // body...
  }

  var DrinkNoun = function (noun) {
    this.noun = noun;
  }

  var DrinkAdj = function (adjective) {
    this.adjective = adjective;
  }

  //creates Pantry objects based on constructors
  var strongPantry = {
    'glug of rum': 3,
    'slug of whisky': 3,
    'splash of gin': 3
  }

  var saltyPantry = {
    'olive on a stick': 3,
    'salt-dusted rim': 3,
    'rasher of bacon': 3
  }

  var bitterPantry = {
    'shake of bitters': 3,
    'splash of tonic': 3,
    'twist of lemon peel': 3
  }

  var sweetPantry = {
    'sugar cube': 3,
    'spoonful of honey': 3,
    'splash of cola': 3
  }

  var fruityPantry = {
    'slice of orange': 3,
    'dash of cassis': 3,
    'cherry on top': 3
  }

  Bartender.prototype.createDrink = function (userPrefs) {
    var drink = '';
    var j = 0;
    for (var prop in userPrefs) {
      if (userPrefs[prop] !== '') {
        pantryList[j][userPrefs[prop]]--;
        drink = drink + userPrefs[prop] + ', ';
      }
      j++;
    }
    var nounNum = Math.floor(Math.random() * drinkNameNouns.noun.length);
    var adjNum = Math.floor(Math.random() * drinkNameAdj.adjective.length);

    //    alert('You\'re drink is a ' + drinkNameAdj.adjective[adjNum] + ' ' + drinkNameNouns.noun[nounNum] + ' which has a ' + drink);
  }


*/
