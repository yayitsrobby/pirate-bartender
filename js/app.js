/* Bartender will ask user questions that determine the user's taste
and then identify ingredients that suit those tastes.

Create constructor functions for questions, ingredients, and the pantry
(which will contain all of the available ingredients). Then use these
constructors to create objects representing the bartenders questions,
ingredients and pantry.
*/

$(document).ready(function () {

  /*----------------- VARIABLES -----------------*/

  var questionsList = [];
  var userPreferences = {};
  var pantry = {};

  // constructor for the ingredients
  var Taste = function (flavor, question, ingredients) {
    this.flavor = flavor;
    this.question = question;
    this.ingredients = ingredients;
    questionsList.push(this);
    for (var i = 0; i < ingredients.length; i++) {
      pantry[ingredients[i]] = 3;
    }
  }

  var Bartender = function (name, age) {
    this.name = name;
    this.age = age;
  }

  Bartender.prototype.randomizer = function (i) {
    var randomNum = Math.floor(Math.random() * questionsList[i].ingredients.length);
    return randomNum;
  }

  new Taste('strong', 'Do ye like yer drinks strong?', ['glug of rum', 'slug of whisky', 'splash of gin'])
  new Taste('salty', 'Do ye like it with a salty tang?', ['olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
  new Taste('bitter', 'Are ye a lubber who likes it bitter?', ['shake of bitters', 'splash of tonic', 'twist of lemon peel']);
  new Taste('sweet', 'Would ye like a bit of sweetness with yer poison?', ['sugar cube', 'spoonful of honey', 'splash of cola']);
  new Taste('fruity', 'Are ye one for a fruity finish?', ['slice of orange', 'dash of cassis', 'cherry on top']);

  var darrell = new Bartender('Darrell', '25');

  /*----------------- CODE BODY -----------------*/

  // array of questions to iterate through
  for (var i = 0; i < questionsList.length; i++) {
    $('.main-form').append('<label>' + questionsList[i].question + '  <input type="checkbox" class="aye" value="' + questionsList[i].flavor +
      '"> Aye!</label><br>')
  }

  $('.submit-button').click(function () {
    event.preventDefault();

    // this grabs the user's preferences
    $('.aye').each(function () {
      var currentQuestion = $(this).val();
      if ($(this).is(':checked')) {
        userPreferences[currentQuestion] = true;
      } else {
        userPreferences[currentQuestion] = false;
      }
    });
    console.log(userPreferences);

    var i = 0;
    for (var pref in userPreferences) {
      if (userPreferences[pref]) {
        while (true) {
          var ingredientNum = darrell.randomizer(i);
          var currentIngredient = questionsList[i].ingredients[ingredientNum];
          if (pantry.currentIngredient !== 0) {
            $('.results-section').append('<p>' + currentIngredient + '</p>');
            break;
          }
        }
      }
      i++;
    }
  });
});



//  var pantryList = [strongPantry, saltyPantry, bitterPantry, sweetPantry, fruityPantry];
//  var finalDrink = new Bartender();

// creates objects for drink name
//  var drinkNameNouns = new DrinkNoun(['Mary', 'Sailor', 'Monkey', 'Booty', 'Dog', 'Martin', 'Bhaumik'])
//var drinkNameAdj = new DrinkAdj(['Smelly', 'Bloody', 'Ugly', 'Beautiful', 'Bootilicious', 'Hurricane'])

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
