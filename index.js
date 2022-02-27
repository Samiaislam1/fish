const food = () => {
    const foodName = document.getElementById("search");
    const foodText = foodName.value;


    foodName.value = ""
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => display(data
            .meals));

}

const display = meals => {
    const result = document.getElementById('result');
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0 - 200)}</p>
        </div>
    </div>`;
        result.appendChild(div);
    });
}