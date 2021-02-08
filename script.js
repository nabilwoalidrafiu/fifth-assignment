//  show searched food items 
const matchingFood = food => {
    const foodName = document.getElementById("searchBox").value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    const errorText = document.getElementById("error-text");
    fetch(url)
        .then(response => response.json())
        .then(data => {
            showFood(data.meals);
            errorText.innerText = "";
        })
        .catch((error) => {
            errorText.innerText = "Sorry! Not found this food";
        })
}


const showFood = meals => {
    const foodsDiv = document.getElementById("foodItem");
    foodsDiv.innerHTML = "";
    meals.forEach(meal => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "foodDiv"
        const foodInfo = `
        <div onclick="foodsDetails('${meal.strMeal}')">
            <img id="mealImage" src="${meal.strMealThumb}">
            <h4>${meal.strMeal}</h4>
        </div>
        `
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });

}


// details information for single food
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
        <div>
            <h1>${meal.strMeal}</h1>
            <h5>Ingredients:</h5>
            <ul>
                <li>${meal.strMeasure1} ${meal.strIngredient1}</li>
                <li>${meal.strMeasure2} ${meal.strIngredient2}</li>
                <li>${meal.strMeasure3} ${meal.strIngredient3}</li>
                <li>${meal.strMeasure4} ${meal.strIngredient4}</li>
                <li>${meal.strMeasure5} ${meal.strIngredient5}</li>
                <li>${meal.strMeasure6} ${meal.strIngredient6}</li>
                <li>${meal.strMeasure7} ${meal.strIngredient7}</li>
                <li>${meal.strMeasure8} ${meal.strIngredient8}</li>
                <li>${meal.strMeasure9} ${meal.strIngredient9}</li>
                <li>${meal.strMeasure10} ${meal.strIngredient10}</li>
            </ul>
        </div>
         `
    displayNone();

}
const displayNone = () => {
    document.getElementById("foodItem").style.display = "none";
    document.getElementById("searchBox").style.display = "none";
    document.getElementById("search").style.display = "none";
}