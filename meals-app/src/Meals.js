import React from "react";

function Meals(props) {
	const mealsCategories = props.mealsCategories.map((mealCategory, index) => {
		return mealCategory;
	});

	return <div>Meals</div>;
}
export default Meals;
