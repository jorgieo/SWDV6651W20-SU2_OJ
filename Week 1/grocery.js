var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, brand) {
        this.name = name;
        this.quantity = quantity;
        this.brand = brand;
    }
    return Grocery;
}());
var grocery_list = [new Grocery("milk", 1, "Happy Cow"),
    new Grocery("bread", 2, "Wonder"),
    new Grocery("eggs", 30, "Tired Chickens"),
    new Grocery("bananas", 6, "Chiquita"),
    new Grocery("bacon", 2, "Oinky Pigs")
];
var list_container = document.querySelector(".grocery-list");
function show_list(list) {
    list.forEach(function (element) {
        var p = document.createElement("p");
        p.innerHTML = "Name: " + element.name + "<br>" + "Quantity: " + element.quantity + "<br>" + "Brand: " + element.brand;
        list_container.appendChild(p);
    });
}
;
show_list(grocery_list);
