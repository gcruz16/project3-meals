import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MealCategories from "../MealCategories";
import MealDetails from "../MealDetails";
import axios from "axios";
//import "../App.css";

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
		console.log(mealsURL);
		let response = await axios.get(mealsURL);
		this.setState({
			categoryMeals: response.data.meals,
		});
		console.log(this.state.categoryMeals);
	};

	getMealDetails = async (event) => {
		let meal = event.target.value;
		const mealURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
		let response = await axios.get(mealURL);
		this.setState({
			mealDetails: response.data.meals,
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Meals App</h1>
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
