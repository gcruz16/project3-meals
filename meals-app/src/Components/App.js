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
        <div id="pageHeading">
          <div id="titleDiv">
            <h1 id="pageTitle">The Meal Database</h1>
          </div>
          <div id="imageDiv">
            <img
              id="pageImage"
              src="https://media.self.com/photos/5ec2fa11589de8da3fd4ccbd/master/w_1280,h_960,c_limit/veestro two final.png"
            />
          </div>
        </div>
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
            <div id="mealDetails">
              <Route
                path="/meals/:strMeal"
                render={(routerProps) => (
                  <MealDetails {...this.state} {...routerProps} />
                )}
              />
            </div>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
