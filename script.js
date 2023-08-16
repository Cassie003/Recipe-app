const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

searchBtn.addEventListener ('click', getMealList);

function getMealList() {
    let searchInputTxt = document.getElementById('.search-input')
    console.log(searchInputTxt);
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })

}
