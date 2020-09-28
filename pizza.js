var Order = function() {
	this.pizza = null;
	this.beverage = null;
}

//root object in a prototype chain
var Pizza = function() {
	this.toppings = null;
	this.crustThickness = 1;
};

Pizza.prototype.setCrustThickness = function(thickness) {
	this.crustThickness = this.crustThickness * thickness
}

Pizza.prototype.setToppings = function(topping) {
	this.toppings = this.toppings || [];
	this.toppings.push(topping);
}

var DeepDish = function(toppingsArr) {
	this.description = "Chewy and greasy, but so filling!";
	this.setToppings.call(this, toppingsArr);
	this.crust = this.setCrustThickness(3);
}

DeepDish.prototype = new Pizza();

var TraditionalHandTossed = function() {
var Order = function() {
	this.pizza = null;
	this.beverage = null;
}

//root object in a prototype chain
var Pizza = function() {
	this.toppings = null;
	this.crustThickness = 1;
};

Pizza.prototype.setCrustThickness = function(thickness) {
	this.crustThickness = this.crustThickness * thickness
}

Pizza.prototype.setToppings = function(topping) {
	this.toppings = this.toppings || [];
	this.toppings.push(topping);
}

var DeepDish = function(toppingsArr) {
	this.description = "Chewy and greasy, but so filling!";
	this.setToppings.call(this, toppingsArr);
	this.crust = this.setCrustThickness(3);
}

DeepDish.prototype = new Pizza();

var TraditionalHandTossed = function() {
	this.description = "Boring, but wont offend picky eaters."
}
TraditionalHandTossed.prototype = new Pizza();

// make me a thin crust, too!


// var myPizza = new DeepDish();
// myPizza.setCrustThickness(3)
// console.log("myPizza's crust thickness", myPizza.crustThickness );

// root function in a prototype chain
var Topping = function() {
	this.price = 1.00
}

var Pepperoni = function() {
	this.isSpicy = false;
}
Pepperoni.prototype = new Topping();
Pepperoni.prototype.makeSpicy = function() {
	this.isSpicy = true;
}

var BananaPepper = function() {
	this.isBananaPepper = true;
};
BananaPepper.prototype = new Topping();
BananaPepper.prototype.makeBananaPepper = function () {
	this.isBananaPepper = false;
}

// root function
var Beverage = function() {
	this.hasIce = true;
};

var Soda = function() {

};
Soda.prototype = new Beverage();

// a new order
var order01 = new Order();
var spicyPepp = new Pepperoni();
spicyPepp.makeSpicy();
console.log ("ourPepp", spicyPepp );
var bananaPepp = new BananaPepper();

var order01Toppings = [bananaPepp, spicyPepp];
console.log("order one is ready!", order01Toppings);
var order01Pizza = new DeepDish(...order01Toppings);
console.log("Pizza", order01Pizza);
order01Pizza.setCrustThickness(3);

var order01Bev = new Soda();

order01.pizza = order01Pizza;
order01.beverage = order01Bev;

console.log("Our first order!", order01);

document.getElementById("orders").innerHTML = "<li> Description: " + order01.pizza.description.toString() + "</li>";
