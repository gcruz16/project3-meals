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
 <img src="https://github.com/gcruz16/project3-meals/blob/master/meals-app/public/Project3wireframeimage1.png"  width="400" height="400" align-content="center"/>


## Technical Requirements

1. HTML and CSS code to create the views for the user.
2. Axios to retrieve the API meal data to the program.
3. Javascript, XML and React to perform all the database functions.
4. It is deployed on Heroku.
5. API: [The Meal DB](https://www.themealdb.com/api.php) 
List all Categories, Area, Ingredients
https://www.themealdb.com/api/json/v1/1/list.php?c=list
https://www.themealdb.com/api/json/v1/1/list.php?a=list
https://www.themealdb.com/api/json/v1/1/list.php?i=list
Filter by main ingredient
https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
Filter by Category
https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
Filter by Area
https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
Search meal by name
https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata


## Project Links
- [github repo](https://github.com/gcruz16/project3-meals)
- [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
