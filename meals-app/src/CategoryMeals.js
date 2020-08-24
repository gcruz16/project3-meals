import React from "react";
import "./CategoryMeals.css";
// import { Link } from "react-router-dom";

function CategoryMeals(props) {
	// console.log(props.match);
	const mealsArray = props.categoryMeals.map((meal, index) => {
		return (
			<div>
				<div id="mealDiv">
					{/* <Link to={`/meals/${meal.strMeal}`}> */}
					<img
						alt=""
						onClick={props.getMealDetails}
						id="mealImage"
						src={meal.strMealThumb}
					/>
					{/* </Link> */}
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
