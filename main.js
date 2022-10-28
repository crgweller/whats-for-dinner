var mealForm = document.getElementById("getMeal")

var sideDishes = ["broccoli", "roasted potatoes", "soup"]
var mainDishes = ["steak", "roasted squirrel", "shakshuka"]
var dessert = ["ice cream", "gelato", "sorbet"]

mealForm.addEventListener('submit', function(e) { 
    e.preventDefault();
    
    var meal = document.getElementById("getMeal").elements["meal"].value;

    if (!meal) {
        alert("Please select a value.")
        return false
    }

    document.querySelector('.meal-display').innerHTML = ""; 
    var display = "";

    if (meal === "Side") {
        display = sideDishes[Math.floor(Math.random() * sideDishes.length)]
    }
    else if (meal === "Main Dish") {
        display = mainDishes[Math.floor(Math.random() * mainDishes.length)]
    } 
    else if (meal === "Dessert") {
        display = dessert[Math.floor(Math.random() * dessert.length)]
    }
    else if (meal === "Entire Meal") {
        display = `${mainDishes[Math.floor(Math.random() * mainDishes.length)]} with ${sideDishes[Math.floor(Math.random() * sideDishes.length)]} and for dessert, ${dessert[Math.floor(Math.random() * dessert.length)]}.`
    }
    var mealTitle = document.createElement("p");
    mealTitle.innerText = "You should make:";
    document.querySelector('.meal-display').appendChild(mealTitle);

    var snackyTime = document.createElement("p");
    snackyTime.innerText = display;
    document.querySelector('.meal-display').appendChild(snackyTime);
})

document.getElementById("clear").onclick = function clear () {
    document.querySelector('.meal-display').innerHTML = ""
    var emptyBucket = document.createElement("img")
    emptyBucket.classList.add("garbage-can")
    emptyBucket.src = "./assets/cookpot.svg"
    document.querySelector('.meal-display').appendChild(emptyBucket)
}


