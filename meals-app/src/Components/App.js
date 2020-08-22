import React, { Component } from "react";
//import "../App.css";
import MealCategories from "../MealCategories";
import axios from "axios";
import { DropdownList } from "react-widgets";

const mealsURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mealCategories: [],
    };
  }
  //   getMeals = async (event) => {
  componentDidMount = async () => {
    let response = await axios.get(mealsURL);

    this.setState({
      mealCategories: response.data.categories,
    });
  };

  render() {
    console.log(this.state.mealCategories);
    return (
      <div className="App">
        <h1>Meals App</h1>
        <MealCategories mealCategories={this.state.mealCategories} />
      </div>
    );
  }
}

export default App;
