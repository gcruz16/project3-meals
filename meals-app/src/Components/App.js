import React, { Component } from "react";
import axios from "axios";
import Meals from "./Meals.js";

const mealsURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

class App extends Component {
	constructor() {
		super();
		this.state = {
			mealsCategories: [],
		};
	}
	//   getMeals = async (event) => {
	componentDidMount = async () => {
		let response = await axios.get(mealsURL);

		this.setState({
			mealsCategories: response.data,
		});
	};
	render() {
		return (
			<div className="App">
				<div>Meals App</div>
				<Meals mealsCategories={this.state.mealsCategories} />
			</div>
		);
	}
}

export default App;
