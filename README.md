# **Meals and Recipe Application** <img src="https://image.flaticon.com/icons/svg/608/608857.svg"  width="70" height="70" />
***

## Application Description
...

This application displays a database of meals and recipes. It enables users to select meals from the database by category and then by selecting a specific meal.

### User Stories
### MVP
1.  Users must be able to use this application to find recipes.
2.  Users need to be able to filter by category.
3.  Users need a dropdown window that contains categories to select from.
4.  After retrieving the data, users need to see the name and image of the meal.
5.  Users need to be able to see the list of ingredients and instructions when they click on the meal.
6.  Users need a home page icon in the heading section so they can toggle to home page anytime.

### Post MVP
1. Users need to be able to filter by multiple criteria such as: category, ingredient and region.
2. Users need a dropdown window that contains multiple criteria (category, ingredient and region) to select from.
3. Users need another dorpdown window that contains a list based on criteria(category, ingredient and region) they selected.
4. Users need to be able to see a link to check a video from meal detail page.

**Wireframe Images Used In This Project**
 <img src="https://github.com/gcruz16/project3-meals/blob/master/public/Project3wireframeimage1.png"  width="400" height="400" align-content="center"/>


## Technical Requirements

1. HTML and CSS code to create the views for the user.
2. Axios to retrieve the API meal data to the program.
3. Javascript, XML and React to perform all the database functions.
4. It is deployed on Heroku.
5. API: [The Meal DB](https://www.themealdb.com/api.php) 
### List all Categories, Area, Ingredients
https://www.themealdb.com/api/json/v1/1/list.php?c=list
https://www.themealdb.com/api/json/v1/1/list.php?a=list
https://www.themealdb.com/api/json/v1/1/list.php?i=list
### Filter by main ingredient
https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
### Filter by Category
https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
### Filter by Area
https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
### Search meal by name
https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata


## Project Links
- [github repo](https://github.com/gcruz16/project3-meals)
- [Jeff's Deployed app on Heroku](https://jeffb-project3-meals.herokuapp.com/)
- [Gladys' Deployed app on Heroku]https://meals-app-project3.herokuapp.com/)


