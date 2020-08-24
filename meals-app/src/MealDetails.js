import React from "react";

function MealDetails(props) {
	console.log(props);
	const mealDetailArray = props.mealDetails.map((mealDetail, index) => {
		return (
			<div key={index}>
				<div>
					<label>Meal:</label>
					{mealDetail.strMeal}
				</div>
				<div>
					<label>Category:</label>
					{mealDetail.strCategory}
				</div>
				<div>
					<label>Area:</label>
					{mealDetail.strArea}
				</div>
				<div>
					<label>Instructions:</label>
					{mealDetail.strInstructions}
				</div>
			</div>
		);
	});
	return <div>{mealDetailArray}</div>;
}

export default MealDetails;
