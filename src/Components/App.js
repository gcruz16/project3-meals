import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import MealSubOption from "../MealSubOption";
import MealDetails from "../MealDetails";
import axios from "axios";
import "./App.css";

// let categoryURL = "https://www.themealdb.com/api/json/v1/1/categories.php";
let baseFilterByURL = "https://www.themealdb.com/api/json/v1/1/list.php?";
let filterByURL = "";
let myFilterBy = "Category";
let mySubFilterBy = "Beef";
let subFilterByURL = "";
let filterByResponse = "";
let subFilterByResponse = "";

class App extends Component {
	constructor() {
		super();
		this.state = {
			filterBy: "category",
			subFilterBy: "Beef",
			filterByData: [],
			subFilterByData: [],
			mealDetails: [],
			filterChanged: false,
		};
	}
	getFilterBy = async (event) => {
		console.log("getFilterBy");
		myFilterBy = event.target.value;
		console.log("myFilterBy-->" + myFilterBy);
		console.log(event.target);
		switch (myFilterBy) {
			case "category":
				filterByURL = baseFilterByURL + "c=list";
				mySubFilterBy = "Beef";
				subFilterByURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mySubFilterBy}`;
				break;
			case "ingredient":
				filterByURL = baseFilterByURL + "i=list";
				mySubFilterBy = "Chicken";
				subFilterByURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mySubFilterBy}`;
				break;
			case "region":
				filterByURL = baseFilterByURL + "a=list";
				mySubFilterBy = "American";
				subFilterByURL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${mySubFilterBy}`;
				break;
			default:
				filterByURL = baseFilterByURL + "c=list";
				mySubFilterBy = "Beef";
				subFilterByURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mySubFilterBy}`;
				break;
		}
		console.log(subFilterByURL);

		filterByResponse = await axios.get(filterByURL);
		subFilterByResponse = await axios.get(subFilterByURL);

		this.setState({
			filterBy: myFilterBy,
			filterChanged: true,
			subFilterBy: mySubFilterBy,
			filterByData: filterByResponse.data.meals,
			subFilterByData: subFilterByResponse.data.meals,
		});
	};

	getSubOpMeal = async (event) => {
		let baseSubMealURL = "https://www.themealdb.com/api/json/v1/1/filter.php?";
		let mealsURL = "";
		let response = "";
		console.log("getSubOpMeal");
		console.log(this.state.filterBy);
		console.log(this.state.subFilterBy);
		console.log(event.target.value);
		mySubFilterBy = event.target.value;
		switch (this.state.filterBy) {
			case "category":
				mealsURL = baseSubMealURL + `c=${mySubFilterBy}`;
				break;
			case "ingredient":
				mealsURL = baseSubMealURL + `i=${mySubFilterBy}`;
				break;
			case "region":
				mealsURL = baseSubMealURL + `a=${mySubFilterBy}`;
				break;
			default:
				mealsURL = baseSubMealURL + `c=${mySubFilterBy}`;
				break;
		}
		console.log(mealsURL);
		response = await axios.get(mealsURL);
		this.setState({
			subFilterBy: mySubFilterBy,
			filterChanged: false,
			subFilterByData: response.data.meals,
		});
	};

	componentDidMount = async () => {
		filterByURL = baseFilterByURL + "c=list";
		subFilterByURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`;

		filterByResponse = await axios.get(filterByURL);
		subFilterByResponse = await axios.get(subFilterByURL);
		this.setState({
			filterBy: myFilterBy,
			subFilterBy: mySubFilterBy,
			filterChanged: true,
			filterByData: filterByResponse.data.meals,
			subFilterByData: subFilterByResponse.data.meals,
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
					<img
						id="plateImg"
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
									getSubOpMeal={this.getSubOpMeal}
									getFilterBy={this.getFilterBy}
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
