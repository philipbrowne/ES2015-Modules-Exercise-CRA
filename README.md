# React: Modules Exercise

## Assignment Guidelines:

For this assignment you should create three JavaScript files:

src/helpers.js
This file should export two array helper functions:

choice(items): returns a randomly selected item from array of items
remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
src/foods.js
This file should export this array of fruits:

[
"π", "π", "π", "π", "π", "π", "π", "π",
"π", "π", "π", "π", "π₯", "π", "π₯",
];
src/index.js
This file should import the fruits and both array helpers. It should then:

Randomly draw a fruit from the array
Log the message βIβd like one RANDOMFRUIT, please.β
Log the message βHere you go: RANDOMFRUITβ
Log the message βDelicious! May I have another?β
Remove the fruit from the array of fruits
Log the message βIβm sorry, weβre all out. We have FRUITSLEFT left.β

### Testing This:

Run this with npm start and you should see something like this in your browser console:

`I'd like one π, please`

`Here you go: π`

`Delicious! May I have another?`

`I'm sorry, we're all out. We have 14 left.`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you canβt go back!**

If you arenβt satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point youβre on your own.

You donβt have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldnβt feel obligated to use this feature. However we understand that this tool wouldnβt be useful if you couldnβt customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
