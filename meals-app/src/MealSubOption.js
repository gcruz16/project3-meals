import React from "react";
import { Link } from "react-router-dom";
import "./MealSubOption.css";

function MealSubOption(props) {
	console.log("Props in MealSubOption");
	let subOption = "";
	console.log(props);
	// return <div>something</div>;
	switch (props.filterBy) {
		case "category":
			subOption = props.filterByData.map((category, index) => {
				return <option key={index + 1}>{category.strCategory}</option>;
			});
			break;
		case "ingredient":
			subOption = props.filterByData.map((ingredient, index) => {
				return <option key={index + 1}>{ingredient.strIngredient}</option>;
			});
			break;
		case "region":
			subOption = props.filterByData.map((region, index) => {
				return <option key={index + 1}>{region.strArea}</option>;
			});
			break;
		default:
			subOption = props.filterByData.map((category, index) => {
				return <option key={index + 1}>{category.strCategory}</option>;
			});
			break;
	}

	const mealsArray = props.subFilterByData.map((meal, index) => {
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
					<p id="selectCategory">Select Meal by:</p>
					<select id="categoryDropdown" onChange={props.getSearchBy}>
						<option value="category">Category</option>
						<option value="ingredient">Ingredient</option>
						<option value="region">Region</option>
					</select>
				</div>

				<div id="divCategory">
					<div id="divSelectCategory">
						<p id="selectCategory"> Select sub Filter:</p>
						<select id="categoryDropdown" onChange={props.getSubOptionMeals}>
							{subOption}
						</select>
					</div>
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
export default MealSubOption;
