const searchBtn=document.getElementById('search-btn');

searchBtn.addEventListener('click', getMealList ); 

let mealList=document.querySelector('#meal-list');
function getMealList(){
   let x =  fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    x.then(value=>value);
}
const fetchPromise = fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
  );
  
//   fetchPromise
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });

    let res;
    fetchPromise
    .then((res) =>{
        res = res
        res.json().then(data =>console.log(data));
    })
    .catch((err) =>console.log(err));
    let x = 5;
    let y = x + res;