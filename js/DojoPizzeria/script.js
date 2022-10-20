function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza1 = {};
    pizza1.crustType = crustType;
    pizza1.sauceType = sauceType;
    pizza1.cheeses = cheeses;
    pizza1.toppings= toppings;
    return pizza1;
}
var pizza2 = pizzaOven("m", "a", "2", "f");
console.log(pizza2);
var pizza3 = pizzaOven("a", "b", "c", "d");
console.log(pizza3);

var randomPizza = pizza2.random(pizza2,pizza3);
console.log(randomPizza);

