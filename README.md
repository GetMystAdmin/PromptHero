# PromptHero

## Introduction

This is a React application entry file. It does the initial setup and imports boilerplate code necessary for the application. This includes importing polyfills for stability and compatibility with IE11, setting up the Redux store for state management with the `Provider` from `react-redux`, and establishing consistent styling with `sanitize.css`.

The application utilizes `react-helmet-async` for managing changes to the document head, makes use of a root app component named `App` from the 'app' directory, and sets up internationalization with `i18n`.

Hot reloadable translation for `i18n` files and vital report for app performance are also configured in the application.

The application is then rendered into a DOM element with the id of 'root'.

## Features

- Polyfills for IE11 compatibility and stability.
- Redux for state management.
- Consistent styling with `sanitize.css`.
- A root app component, `App`.
- Automatic language initialization for internationalization with `i18n`.
- Hot reloading mechanism for `i18n` files.
- App performance report.
- Document head management with `react-helmet-async`.

## Installation 

To install and run the project on a local machine, follow these steps:

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. After the successful installation of the dependencies, run `npm start` to start the application in development mode.
5. The application will start running on `http://localhost:8888`.
