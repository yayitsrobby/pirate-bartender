/* Bartender will ask user questions that determine the user's taste
and then identify ingredients that suit those tastes.

Create constructor functions for questions, ingredients, and the pantry
(which will contain all of the available ingredients). Then use these
constructors to create objects representing the bartenders questions,
ingredients and pantry.
*/

$(document).ready(function () {

  // constructor for the questions
  var Question = function (question, category) {
    this.question = question;
    this.category = category;
  };

  // constructor for the ingredients
  var Ingredients = function (ingredients) {
    this.ingredientsList = ingredients;
  }

  // constructor for the pantry
  var Pantry = function (ingredients) {
    this.ingredientsList = ingredients;
  };

  // creates objects based on constructors
  var strong = new Question('Do ye like yer drinks strong?', 'strong');
  var salty = new Question('Do ye like it with a salty tang?', 'salty');
  var bitter = new Question('Are ye a lubber who likes it bitter?', 'bitter');
  var sweet = new Question('Would ye like a bit of sweetness with yer poison?', 'sweet');
  var fruity = new Question('Are ye one for a fruity finish?', 'fruity');



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
