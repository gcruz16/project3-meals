import React from "react";
import DropdownList from "react-widgets/lib/DropdownList";

function MealCategories(props) {
  const optionCategory = props.mealCategories.map((category, index) => {
    return <option key={index + 1}>{category.strCategory}</option>;
  });
  return (
    <div>
      <select>{optionCategory}</select>
    </div>
  );
}
export default MealCategories;
