import React from "react";
import "./MealDetails.css";
import Ingredients from "./Ingredients";

function MealDetails(props) {
  console.log(props);
  let ingredientArray = [];
  let measurementArray = [];

  props.mealDetails.forEach((mealDetail, index) => {
    if (mealDetail.strIngredient1) {
      ingredientArray.push(mealDetail.strIngredient1);
      measurementArray.push(mealDetail.strMeasure1);
    }
    if (mealDetail.strIngredient2) {
      ingredientArray.push(mealDetail.strIngredient2);
      measurementArray.push(mealDetail.strMeasure2);
    }
    if (mealDetail.strIngredient3) {
      ingredientArray.push(mealDetail.strIngredient3);
      measurementArray.push(mealDetail.strMeasure3);
    }
    if (mealDetail.strIngredient4) {
      ingredientArray.push(mealDetail.strIngredient4);
      measurementArray.push(mealDetail.strMeasure4);
    }
    if (mealDetail.strIngredient5) {
      ingredientArray.push(mealDetail.strIngredient5);
      measurementArray.push(mealDetail.strMeasure5);
    }
    if (mealDetail.strIngredient6) {
      ingredientArray.push(mealDetail.strIngredient6);
      measurementArray.push(mealDetail.strMeasure6);
    }
    if (mealDetail.strIngredient7) {
      ingredientArray.push(mealDetail.strIngredient7);
      measurementArray.push(mealDetail.strMeasure7);
    }
    if (mealDetail.strIngredient8) {
      ingredientArray.push(mealDetail.strIngredient8);
      measurementArray.push(mealDetail.strMeasure8);
    }
    if (mealDetail.strIngredient9) {
      ingredientArray.push(mealDetail.strIngredient9);
      measurementArray.push(mealDetail.strMeasure9);
    }
    if (mealDetail.strIngredient10) {
      ingredientArray.push(mealDetail.strIngredient10);
      measurementArray.push(mealDetail.strMeasure10);
    }
    if (mealDetail.strIngredient11) {
      ingredientArray.push(mealDetail.strIngredient11);
      measurementArray.push(mealDetail.strMeasure11);
    }
    if (mealDetail.strIngredient12) {
      ingredientArray.push(mealDetail.strIngredient12);
      measurementArray.push(mealDetail.strMeasure12);
    }
    if (mealDetail.strIngredient13) {
      ingredientArray.push(mealDetail.strIngredient13);
      measurementArray.push(mealDetail.strMeasure13);
    }
    if (mealDetail.strIngredient14) {
      ingredientArray.push(mealDetail.strIngredient14);
      measurementArray.push(mealDetail.strMeasure14);
    }
    if (mealDetail.strIngredient15) {
      ingredientArray.push(mealDetail.strIngredient15);
      measurementArray.push(mealDetail.strMeasure15);
    }
    if (mealDetail.strIngredient16) {
      ingredientArray.push(mealDetail.strIngredient16);
      measurementArray.push(mealDetail.strMeasure16);
    }
    if (mealDetail.strIngredient17) {
      ingredientArray.push(mealDetail.strIngredient17);
      measurementArray.push(mealDetail.strMeasure17);
    }
    if (mealDetail.strIngredient18) {
      ingredientArray.push(mealDetail.strIngredient18);
      measurementArray.push(mealDetail.strMeasure18);
    }
    if (mealDetail.strIngredient19) {
      ingredientArray.push(mealDetail.strIngredient19);
      measurementArray.push(mealDetail.strMeasure19);
    }
    if (mealDetail.strIngredient20) {
      ingredientArray.push(mealDetail.strIngredient20);
      measurementArray.push(mealDetail.strMeasure20);
    }
  });

  const mealDetailArray = props.mealDetails.map((mealDetail, index) => {
    return (
      <div key={index} id="mainMealDetail">
        <div id="divStrName">
          <div id="strMeal">{mealDetail.strMeal}</div>
        </div>
        <div id="divImgIngredients">
          <div id="divImgMeal">
            <img id="imgMeal" src={mealDetail.strMealThumb} alt="" />
            <div>
              <div id="category">
                <label id="categoryLabel">Category: </label>
                {mealDetail.strCategory}
              </div>
              <div id="region">
                <label id="regionLabel">Region: </label>
                {mealDetail.strArea}
              </div>
              <div id="youtoubeDiv">
                <a href={mealDetail.strYoutube} target="_blank">
                  <img
                    alt=""
                    id="youtoubeIcon"
                    src="https://cdn.iconscout.com/icon/free/png-256/youtube-86-226404.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <div id="ingredients">
            <Ingredients
              ingredientArray={ingredientArray}
              measurementArray={measurementArray}
            />
          </div>
        </div>

        <div id="Instructions">
          <label id="instructionsLabel">Preparation Instructions:</label>
          <div id="instructionDetails">{mealDetail.strInstructions}</div>
        </div>
      </div>
    );
  });
  return <div>{mealDetailArray}</div>;
}

export default MealDetails;
