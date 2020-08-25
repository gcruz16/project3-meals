import React from "react";
import "./Ingredients.css";

function Ingredients(props) {
  console.log(props);
  console.log(props.measurementArray);
  //   return <div>Ingredients</div>;
  const showIngredientsArray = props.ingredientArray.map(
    (displayIngredient, index) => {
      return <div key={index}>{displayIngredient}</div>;
    }
  );
  const showMeasurementArray = props.measurementArray.map(
    (displayMeasurement, index) => {
      return <div key={index}>{displayMeasurement}</div>;
    }
  );
  console.log(props);
  return (
    <div id="ingredientData">
      <div id="showIngredients">{showIngredientsArray}</div>
      <div id="showMeasurements">{showMeasurementArray}</div>
    </div>
  );
}

export default Ingredients;
