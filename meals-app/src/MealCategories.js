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
							alt=""
							onClick={props.getMealDetails}
							id="mealImage"
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
			<div>
				<p>Meal Category</p>
				<select onChange={props.getCategoryMeals}>{optionCategory}</select>
			</div>
			<div id="catMeals">
				<div id="catMealHeading">{mealsArray}</div>
			</div>
		</div>
	);
}
export default MealCategories;
