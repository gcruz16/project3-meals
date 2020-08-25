import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MealCategories from "../MealCategories";
import MealDetails from "../MealDetails";
import axios from "axios";
import "./App.css";

const categoryURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mealCategories: [],
      categoryMeals: [],
      mealDetails: [],
    };
  }

  getCategoryMeals = async (event) => {
    let changeCategory = event.target.value;
    const mealsURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${changeCategory}`;
    let response = await axios.get(mealsURL);
    this.setState({
      categoryMeals: response.data.meals,
    });
  };

  componentDidMount = async () => {
    let response = await axios.get(categoryURL);
    const mealsURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`;
    let mealResponse = await axios.get(mealsURL);
    this.setState({
      categoryMeals: mealResponse.data.meals,
      mealCategories: response.data.categories,
    });
  };

  getMealDetails = async (event) => {
    let meal = event.target.getAttribute("alt");
    const mealURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    let response = await axios.get(mealURL);
    this.setState({
      mealDetails: response.data.meals,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>The Meal DB</h1>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => (
                <MealCategories
                  {...this.state}
                  getCategoryMeals={this.getCategoryMeals}
                  getMealDetails={this.getMealDetails}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/meals/:strMeal"
              render={(routerProps) => (
                <MealDetails {...this.state} {...routerProps} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
