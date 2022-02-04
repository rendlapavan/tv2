# TV-Maze
Description:
This app displays shows based on rating and different genres using the open api: https://www.tvmaze.com/api.
the shows are displayed in alphabetical order.
Users can also search shows with show name.
if user clicks on a show, information related to that show will be displayed.
users can browse through particular genre by clicking on name of the genre.

## Installations
## Vue CLI
```
vue cli version used: 4.5.15
Vue Js is a progressive framework with a small size of around ~21kb , easy to understand and scale large 
application. For more informatyion

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a 
Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Project dependencies and devDependencies ------------
1. axios:
   It is a Promise which is based on HTTP client for the browser.
   Installation command:
   npm install axios
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. @vue/cli-plugin-unit-jest:
   Jest as a JS unit testing framework which is used to run unit test.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, 
   coverageThreshold,etc for getting exact code coverage with reports.

3. Store persistance: it enables the store to survive through page refresh.
   Installation command:
   npm install --save vuex-persistedstate
