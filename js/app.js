/* Bartender will ask user questions that determine the user's taste
and then identify ingredients that suit those tastes.

Create constructor functions for questions, ingredients, and the pantry
(which will contain all of the available ingredients). Then use these
constructors to create objects representing the bartenders questions,
ingredients and pantry.
*/

$(document).ready(function() {

    // constructor for the questions
    var Question = function(question, category) {
        this.question = question;
        this.category = category;
    };

    // constructor for the ingredients
    var Ingredients = function(ingredients) {
        this.ingredientsList = ingredients;
    }

    // constructor for the pantry
    var Pantry = function(ingredients) {
        this.ingredientsList = ingredients;
    };

    //creates ingredients based on constructors
    var strongIngredient = new Ingredients(['glug of rum', 'slug of whisky', 'splash of gin']);
    var saltyIngredient = new Ingredients(['olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
    var bitterIngredient = new Ingredients(['shake of bitters', 'splash of tonic', 'twist of lemon peel']);
    var sweetIngredient = new Ingredients(['sugar cube', 'spoonful of honey', 'splash of cola']);
    var fruityIngredient = new Ingredients(['slice of orange', 'dash of cassis', 'cherry on top']);

    // creates objects based on constructors
    var strongQuestion = new Question('Do ye like yer drinks strong?', strongIngredient);
    var saltyQuestion = new Question('Do ye like it with a salty tang?', saltyIngredient );
    var bitterQuestion = new Question('Are ye a lubber who likes it bitter?', bitterIngredient);
    var sweetQuestion = new Question('Would ye like a bit of sweetness with yer poison?', sweetIngredient);
    var fruityQuestion = new Question('Are ye one for a fruity finish?', fruityIngredient);

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

    var questionsList = [strongQuestion, saltyQuestion, bitterQuestion, sweetQuestion, fruityQuestion];

    for (var i = 0; i < questionsList.length; i++) {
      prompt(questionsList[i].question);
      console.log(questionsList[i].category);
    }


});








/*
var strong = new Pantry(['Glug of rum', 'slug of whisky', 'splash of gin']);

//
{
  question: 'Do ye like yer drinks strong?',
  ingredients: ['slug of whisky'],
  pantry: ['Glug of rum', 'slug of whisky', 'splash of gin'],
  category: 'strong'
}

pantry = {
  strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
  salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
  bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
  sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
  fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
}

var newDrink = new Ingredients(sjdfioasjdfoaj);
*/
/*

object with all questions
var questions = {everything}

for (i = 0; i < questions.length; i++)
{
prompt the user asking the question

if yes, then it pulls a random ingredient from the pantry of strong/salty/etc
  {
    go into the pantry object and pull one ingredient at random and add to ingredients object
  }
if no, then moves on
}

*/