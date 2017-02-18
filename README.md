OpenWeather App
===============

### About
OpenWeather App displays the current weather, sunrise time(GMT) and the sunset time(GMT) for 5 major European cities. On selecting a particular city, the user can then see the sea level(hPa) and weather predictions for next 5 days.

This application has been developed using [Angular 1.6.1](https://github.com/angular/angular.js) and [Bootstrap 3.3.6](https://github.com/twbs/bootstrap). Routing in the application has been handled using ngRoute module provided by Angular itself.

The application is a single-page-application and follows a component-based architecture where screens are divided in components(stateful & stateless).

### Installation
Run the below command to install all project related dependencies 
```bash
npm install
```

### Launching the application
Execute either of the below to start a local node server.
```bash
npm start
```
```bash
node server.js
```
Server will be running at: `http://localhost:8080/`