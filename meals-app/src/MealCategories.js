import React from "react";
import { Link } from "react-router-dom";
import "./MealCategories.css";

function MealCategories(props) {
  console.log(props);

  const optionCategory = props.mealCategories.map((category, index) => {
    return <option key={index + 1}>{category.strCategory}</option>;
  });

  const mealsArray = props.categoryMeals.map((meal, index) => {
    return (
      <div key={index}>
        <div id="mealDiv">
          <Link to={`/meals/${meal.strMeal}`}>
            <img
              id="mealImage"
              alt={meal.strMeal}
              onClick={props.getMealDetails}
              src={meal.strMealThumb}
            />
          </Link>
          <p id="mealName">{meal.strMeal}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div id="categoryHeading">
        <div id="divSelectCategory">
          <p id="selectCategory"> Select a Meal Category:</p>
        </div>
        <div id="divCategory">
          <select id="categoryDropdown" onChange={props.getCategoryMeals}>
            {optionCategory}
          </select>
        </div>
      </div>
      <div id="main">
        <div id="catMeals">
          <div id="catMealHeading">{mealsArray}</div>
        </div>
      </div>
    </div>
  );
}
export default MealCategories;
