# Getting Started with Create React App

This project is made to test the concept of jest-image-testing
App base is created using [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run the test, first run the app in one terming using the command:

### `npm start`

Which runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

And execute the below command to execute the test

### `npm test`

When the test will fail, it will create a new image inside `__diff_output__` directory inside the failed test file component. And you can see the pixel difference in that `__diff_output__` image.

This is using *puppeteer* to simulate chrome browser and then take a snapshot and test the image using *jest-image-snapshot*, the test runner runs the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
