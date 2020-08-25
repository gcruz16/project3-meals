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
          <label> </label>
          {mealDetail.strMeal}
        </div>
        <div id="category">
          <label>Category: </label>
          {mealDetail.strCategory}
        </div>
        <div id="area">
          <label>Region: </label>
          {mealDetail.strArea}
        </div>
        <div id="Instructions">
          <label id="instructionsLabel">Preparation Instructions:</label>
          <div>{mealDetail.strInstructions}</div>
        </div>
      </div>
    );
  });
  return <div>{mealDetailArray}</div>;
}

export default MealDetails;
