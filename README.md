## Description
This boilerplate is made using React 17.0.2 and TypeScript. The pages are made responsive using Bootstrap. Redux toolkit is used to make API calls and manage the state.   

## Features
* Typescript support
* React Hooks
* React Hook Form
* React Bootstrap
* Centralized navigation with react-router-dom.
* Redux Toolkit with hooks support
* PWA using Workbox Build
* RBAC (Role Based Access Control) - along with route guards
* Public/Private routing
* Public/Private Layouts

## Components
* Form components for react-hook-form => `react-datepicker` `react-select`
* Lazy load image
* HOC for hiding elements according to permissions

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build:sw`

Builds the app for production to the `build` folder along with a service worker. The service worker will have to be enabled in `index.tsx` and the routes set in `src/sw-template.js`.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
