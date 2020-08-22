import React from "react";
import "./CategoryMeals.css";
function CategoryMeals(props) {
  const mealsArray = props.categoryMeals.map((meal, index) => {
    return (
      <div>
        <div id="mealDiv">
          <img id="mealImage" src={meal.strMealThumb} />
          <p id="mealName">{meal.strMeal}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <p>Category Meals</p>
      {mealsArray}
    </div>
  );
}

export default CategoryMeals;
