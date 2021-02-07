const matchingFood = food => {
    const foodName = document.getElementById("searchBox").value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            showFood(data.meals);
        })
}


const showFood = meals => {
    const foodsDiv = document.getElementById("foodItem");
    foodsDiv.innerHTML = "";
    meals.forEach(meal => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "foodDiv"
        const foodInfo = `
        <img onclick="foodsDetails('${meal.strMeal}')" id="mealImage" src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        `
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
  
}

const foodsDetails = foods => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foods}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderfoodInfo(data.meals)
        })
}
const renderfoodInfo = meals => {
    const meal = meals[0];
    const foodinfoDiv = document.getElementById("foodinfoDiv")
    foodinfoDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
        <h5>Ingredients</h5>
        <p>${meal.strMeasure1} ${meal.strIngredient1}</p>
        <p>${meal.strMeasure2} ${meal.strIngredient2}</p>
        <p>${meal.strMeasure3} ${meal.strIngredient3}</p>
        <p>${meal.strMeasure4} ${meal.strIngredient4}</p>
        <p>${meal.strMeasure5} ${meal.strIngredient5}</p>
        <p>${meal.strMeasure6} ${meal.strIngredient6}</p>
    `
    displayNone();
    
}
const displayNone = () =>{
    document.getElementById("foodItem").style.display = "none";
    document.getElementById("searchBox").style.display = "none";
    document.getElementById("search").style.display = "none";
}