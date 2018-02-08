/*
* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/

var order11821 = {
	CustomerName: "James Franko",
	Address: "2155 E Lake Dr",
	City: "Seattle",
	State: "WA",
	ZipCode: 11310,
	Pizza: {
	  Crust: "thin",
	  PizzaSauce: "robust marinara",
	  Cheese: "regular"
	},
	  Toppings: {
	    Veggies: ["olives", "green peppers"],
	    Meats: ["pepperoni", "ham", "sausage"]
	},
	SideItems: ["breadsticks", "6 piece bq wings"],
	Sauces: "ranch",
	SpecialInstructions: "please cut into squares",
	PaymentType: "cash",
	StoreId: 112
}

var order11372 = {
	CustomerName: "Justin Bieber",
	Address: "1801 W Rodeo Dr",
	City: "Beverly Hills",
	State: "CA",
	ZipCode: 91833,
	Pizza: {
		Crust: "stuffed crust",
		PizzaSauce: "creamy garlic alfredo",
		Cheese: "double"
		},
	Toppings: {
		Veggies: ["onion", "anchovies", "mushrooms"],
		Meats: ["chicken", "bacon"]
	},
	SideItems: "double fudge brownie dessert",
	Sauces: ["bbq", "garlic sauce"],
	SpecialInstructions: "call 815 at the gate",
	PaymentType: "credit card",
	StoreId: 382
}

/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/
var currentOrders = {
	orders : [order11821, order11372]
}

/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/

currentOrders.orders[0].PizzaSauce = "Classic Marinara"
currentOrders.orders[0].Toppings.Veggies.push("spinach")
currentOrders.orders[0].Toppings.Meats.pop()
currentOrders.orders[0]["orderTime"] = "20 minutes"


console.log(order11821)
