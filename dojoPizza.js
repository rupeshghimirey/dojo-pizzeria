var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);


function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

//pizza1
var pizza1 = pizzaOven("deep dish", "traditional", ["mozazarella"], ["pepperoni", "sausage"]);
//console.log(pizza1);

//pizza2
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozazarella", "feta"], ["mushrooms", "olives", "onions"]);
//console.log(pizza2);

//pizza3
var pizza3 = pizzaOven("thin crust", "bbq sauce", ["extra cheese"], ["chicken", "pineapple", "banana peppers"]);
//console.log(pizza3);

//pizza4
var pizza4 = pizzaOven("hand tossed", "traditional", ["cheddar"], ["bacon", "pineapple", "red peppers"]);
//console.log(pizza4);


var pizzas = [pizza1, pizza2, pizza3, pizza4];
//console.log(pizzas)
function randomPizza() {
randomIndex = Math.floor(Math.random() * pizzas.length);
console.log(pizzas[randomIndex]);
}
randomPizza();