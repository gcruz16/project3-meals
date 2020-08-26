import React from "react";
import "./Ingredients.css";

function Ingredients(props) {
	const showIngredientsArray = props.ingredientArray.map(
		(displayIngredient, index) => {
			return (
				<div key={index} id="ingredientItem">
					{displayIngredient}
				</div>
			);
		}
	);
	const showMeasurementArray = props.measurementArray.map(
		(displayMeasurement, index) => {
			return (
				<div key={index} id="measurementItem">
					{displayMeasurement}
				</div>
			);
		}
	);
	console.log(props);
	return (
		<div id="ingredientData">
			<div id="ingredientsTitle">Ingredients</div>
			<div id="listIngredients">
				<div id="showMeasurements">{showMeasurementArray}</div>
				<div id="showIngredients">{showIngredientsArray}</div>
			</div>
		</div>
	);
}

export default Ingredients;
