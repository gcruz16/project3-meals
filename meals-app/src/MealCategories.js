import React from "react";

function MealCategories(props) {
  const optionCategory = props.mealCategories.map((category, index) => {
    return <option key={index + 1}>{category.strCategory}</option>;
  });
  return (
    <div>
      <div>
        <p>Meal Category</p>
        <select onChange={props.getCategoryMeals}>{optionCategory}</select>
      </div>
    </div>
  );
}
export default MealCategories;
