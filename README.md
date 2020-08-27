# **Meals and Recipe Application** <img src="https://image.flaticon.com/icons/svg/608/608857.svg"  width="70" height="70" />
***

## Application Description
...

This application displays a database of meals and recipes. It enables users to select meals from the database by category and then by selecting a specific meal.

### User Stories
### MVP
1.  Users must be able to use this application to find recipes for many different types of meals.
2.  Users need to be able to search for meals by category.
3.  Users need a dropdown window that contains categories to select from.
4.  After selecting a category, users need to see a list of meals from that category. 
5.  After clicking on a meal image, users need to see the information about that meal.
6.  Users need to be able to see the list of ingredients and instructions for each meal.
7.  Users need a home page icon in the heading section so they can toggle to home page anytime.

### Post MVP
1. Users need to be able to filter by multiple criteria such as: category, ingredient and region.
2. Users need a dropdown window that contains multiple criteria (category, ingredient and region) to select from.
3. Users need another dropdown window that contains a list based on criteria(category, ingredient and region) they selected.
4. Users need to be able to select a link to view a video from meal detail page.

## Wireframe
### Wireframe App
 <img src="https://github.com/gcruz16/project3-meals/blob/master/public/MealsDB_wireframe.png"  width="400" height="400" align-content="center"/>
### Flow Chart App
 <img src="https://github.com/gcruz16/project3-meals/blob/master/public/MealsDB_FlowChartApp.png"  width="400" height="400" align-content="center"/>

## Menu Search Screen
<img src="https://github.com/gcruz16/project3-meals/blob/master/public/MenuAppMain.png"  width="500" height="400" align-content="center"/>

## Menu Detail Screen
<img src="https://github.com/gcruz16/project3-meals/blob/master/public/MenuScreen.png"  width="500" height="400" align-content="center"/>

## Technical Requirements

1. HTML and CSS code to create the views for the user.
2. Axios to retrieve the API meal data to the program.
3. Javascript and XML to perform all the database functions.
4. React, react-dom and react-router-dom. 
5. It is deployed on Heroku.
6. API: [The Meal DB](https://www.themealdb.com/api.php) 
  #### List all Categories, Area, Ingredients
* https://www.themealdb.com/api/json/v1/1/list.php?c=list 
* https://www.themealdb.com/api/json/v1/1/list.php?a=list 
* https://www.themealdb.com/api/json/v1/1/list.php?i=list 
  #### Filter by main ingredient
* https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
  #### Filter by Category
* https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
  #### Filter by Area
* https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
  #### Search meal by name
* https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata


## Project Links
* [github repo](https://github.com/gcruz16/project3-meals)
* [Jeff's Deployed app on Heroku](https://jeffb-project3-meals.herokuapp.com/)
* [Gladys' Deployed app on Heroku](https://meals-app-project3.herokuapp.com/)


