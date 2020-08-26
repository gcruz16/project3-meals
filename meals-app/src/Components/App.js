import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import MealSubOption from "../MealSubOption";
import MealDetails from "../MealDetails";
import axios from "axios";
import "./App.css";

// let categoryURL = "https://www.themealdb.com/api/json/v1/1/categories.php";
let baseFilterByURL = "https://www.themealdb.com/api/json/v1/1/list.php?";
let filterByURL = "";
let myFilterBy = "";
let subFilterByURL = "";
let filterByResponse = "";
let subFilterByResponse = "";

class App extends Component {
	constructor() {
		super();
		this.state = {
			filterBy: "category",
			filterByData: [],
			subFilterByData: [],
			mealCategories: [],
			categoryMeals: [],
			mealDetails: [],
		};
	}
	getSearchBy = async (event) => {
		myFilterBy = event.target.value;
		switch (myFilterBy) {
			case "category":
				filterByURL = baseFilterByURL + "c=list";
				subFilterByURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`;
				break;
			case "ingredient":
				filterByURL = baseFilterByURL + "i=list";
				subFilterByURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=Chicken`;
				break;
			case "region":
				filterByURL = baseFilterByURL + "a=list";
				subFilterByURL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=American`;
				break;
			default:
				filterByURL = baseFilterByURL + "c=list";
				break;
		}
		filterByResponse = await axios.get(filterByURL);
		subFilterByResponse = await axios.get(subFilterByURL);

		this.setState({
			filterBy: myFilterBy,
			filterByData: filterByResponse.data.meals,
			subFilterByData: subFilterByResponse.data.meals,
		});
	};
	getSubOptionMeals = async (event) => {
		let changeSubOption = event.target.value;
		let baseSubOptionMealURL = "";
		let mealsURL = "";
		switch (this.setState.filterBy) {
			case "category":
				mealsURL = baseSubOptionMealURL + `c=${changeSubOption}`;
				break;
			case "ingredient":
				mealsURL = baseSubOptionMealURL + `i=${changeSubOption}`;
				break;
			case "region":
				mealsURL = baseSubOptionMealURL + `r=${changeSubOption}`;
				break;
		}
		let response = await axios.get(mealsURL);
		this.setState({
			categoryMeals: response.data.meals,
		});
	};

	componentDidMount = async () => {
		filterByURL = baseFilterByURL + "c=list";
		subFilterByURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`;

		filterByResponse = await axios.get(filterByURL);
		subFilterByResponse = await axios.get(subFilterByURL);
		this.setState({
			filterBy: myFilterBy,
			filterByData: filterByResponse.data.meals,
			subFilterByData: subFilterByResponse.data.meals,
		});
		// console.log(this.state.filterByData);
		// console.log(this.state.subFilterByData);
		// // let response = await axios.get(categoryURL);
		// const mealsURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`;
		// let mealResponse = await axios.get(mealsURL);
		// this.setState({
		// 	categoryMeals: mealResponse.data.meals,
		// 	mealCategories: response.data.categories,
		// });
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
					<img
						alt=""
						src="https://image.flaticon.com/icons/svg/608/608857.svg"
					/>
					<div id="titleDiv">
						<h1 id="pageTitle">The Meal Database</h1>
					</div>
					<div id="imageDiv">
						<img
							alt=""
							id="pageImage"
							src="https://media.self.com/photos/5ec2fa11589de8da3fd4ccbd/master/w_1280,h_960,c_limit/veestro two final.png"
						/>
					</div>
					<div id="menuIcons">
						<Link to="/" id="homePage">
							<img
								alt=""
								id="iconHomePage"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSmTFP1d8qpA1pcUhE1RWfz-o_JLSYGqSKIw&usqp=CAU"
							/>
						</Link>
					</div>
				</div>
				<main>
					<Switch>
						<Route
							exact
							path="/"
							render={(routerProps) => (
								<MealSubOption
									{...this.state}
									getsubOptionMeals={this.getSubOptionMeals}
									getMealDetails={this.getMealDetails}
									getSearchBy={this.getSearchBy}
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
