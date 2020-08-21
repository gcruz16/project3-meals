import React, { Component } from "react";
import "./App.css";
import Meals from "./Meals.js";
import axios from "axios";

const mealsURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

class App extends Component {
	constructor() {
		super();
		this.state = {
			mealsList: [],
		};
	}
	//   getMeals = async (event) => {
	componentDidMount = async () => {
		let response = await axios.get(mealsURL);

		this.setState({
			mealsList: response.data,
		});
	};

	render() {
		return <div className="App"></div>;
	}
}

export default App;
