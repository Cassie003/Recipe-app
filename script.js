const foodName = ['Nigerian','American','Chinese','Canadian','Kenyan','Ugandan'];

function getFood () {
    let foodInput = document.getElementById('foodsearch').value;
    console.log(foodInput);

    food = document.querySelectorAll('.meal-item');
    details = document.querySelectorAll('.meal-details');

    //let food = ""
    //for (let i = 0; i < food.length; i++) {
        //food += foodInput[i];
   // }


    if(foodInput == ''){
        alert('Please enter ');
    } else  ( foodInput == true && details ==true) {
        loadMeals();

        function loadMeals (){
            fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then(response => response.json())
            .then(data =>{
                console.log(data);
            });
               
        }
    }
}
