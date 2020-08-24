import React from "react";

function MealDetails(props) {
	const mealDetailArray = props.mealDetails.map((mealDetail, index) => {
		return (
			<div>
				<div>{mealDetail.strMeal}</div>
				<div>{mealDetail.strCategory}</div>
				<div>{mealDetail.strArea}</div>
				<div>{mealDetail.strInstructions}</div>
			</div>
		);
	});

	return <div>{mealDetailArray}</div>;
}

export default MealDetails;
