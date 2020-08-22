import React, { Component } from "react";
//import "../App.css";
import MealCategories from "../MealCategories";
import axios from "axios";
import CategoryMeals from "../CategoryMeals";

const categoryURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mealCategories: [],
      categoryMeals: [],
    };
  }
  //   getMeals = async (event) => {
  componentDidMount = async () => {
    let response = await axios.get(categoryURL);

    this.setState({
      mealCategories: response.data.categories,
    });
  };

  getCategoryMeals = async (event) => {
    let changeCategory = event.target.value;
    const mealsURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${changeCategory}`;
    let response = await axios.get(mealsURL);
    this.setState({
      categoryMeals: response.data.meals,
    });
  };

  render() {
    console.log(this.state.mealCategories);
    return (
      <div className="App">
        <h1>Meals App</h1>
        <MealCategories
          mealCategories={this.state.mealCategories}
          categoryMeals={this.state.categoryMeals}
          getCategoryMeals={this.getCategoryMeals}
        />
        <CategoryMeals categoryMeals={this.state.categoryMeals} />
      </div>
    );
  }
}

export default App;
