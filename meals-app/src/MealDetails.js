import React from "react";
import "./MealDetails.css";

function MealDetails(props) {
	console.log(props);
	const mealDetailArray = props.mealDetails.map((mealDetail, index) => {
		return (
			<div key={index}>
				<div id="divImgMeal">
					<img id="imgMeal" src={mealDetail.strMealThumb} alt="" />
				</div>
				<div id="strMeal">
					<label>Meal:</label>
					{mealDetail.strMeal}
				</div>
				<div id="category">
					<label>Category:</label>
					{mealDetail.strCategory}
				</div>
				<div id="area">
					<label>Area:</label>
					{mealDetail.strArea}
				</div>
				<div id="Instructions">
					<label>Instructions:</label>
					{mealDetail.strInstructions}
				</div>
			</div>
		);
	});
	return <div>{mealDetailArray}</div>;
}

export default MealDetails;
