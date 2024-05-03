# Build Your Own Reddit App

Codecademy instructions: For this project, you will build an application for Reddit using everything you’ve learned, including React and Redux. Reddit is a website where people share links to articles, media and other things on the web. The Reddit API provides data which you will integrate into your application. The application will allow users to view and search posts and comments provided by the API.

# Languages used

Mini-reddit uses javascript, React, Redux, html, and a bit of css. It uses the Redux store to manage state and slices. 

# Wireframe

Components include Search, Posts, Comments, Subreddit dropdown, and a Home/Main. The Main component was necessary for the comments to render properly. Without it, the comments were not being called correctly and therefore not displaying. Once the Main component was set up, the PostsList component was able to fetch both the posts and comments.

# Site Deployment

The site is deployed through netlify. It is connected directly to github and pulls from the mini-reddit repository.

# Features

At the top of the page there is a search bar. It searches the page locally, so a subreddit is needed to be chosen first. The subreddits are in a dropdown menu under the header. The subreddits could have been listed on the top of the page or in a sidebar menu, but I liked the look and feel of the dropdown menu. The page is simple and I didn't want too much clutter on the page. 

Once a subreddit is chosen, the posts for the subreddit are displayed. There is a comment button under each post which toggles showing/hiding the comments when clicked. 

# Future Work

I shall continue working on my knowledge of JS, React, and Redux, as well as improving the CSS at a later time. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
