import React from "react";
import "./CategoryMeals.css";

function CategoryMeals(props) {
	console.log(props);
	const mealsArray = props.categoryMeals.map((meal, index) => {
		return (
			<div>
				<div id="mealDiv">
					<img
						alt=""
						onClick={props.getMealDetails}
						id="mealImage"
						src={meal.strMealThumb}
					/>
					<p id="mealName">{meal.strMeal}</p>
				</div>
			</div>
		);
	});
	return (
		<div id="catMeals">
			<div id="catMealHeading">{mealsArray}</div>
		</div>
	);
}

export default CategoryMeals;
