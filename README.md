OpenWeather App
===============

### About
OpenWeather App displays the current weather, sunrise time(GMT) and the sunset time(GMT) for 5 major European cities. On selecting a particular city, the user can then see the sea level(hPa) and weather predictions for next 5 days.

This application has been developed using [Angular 1.6.1](https://github.com/angular/angular.js) and [Bootstrap 3.3.6](https://github.com/twbs/bootstrap). Routing in the application has been handled using ngRoute module provided by Angular itself.

The application is a single-page-application and follows a component-based architecture where screens are divided in components(stateful & stateless). Separation of concerns was also taken care while development. All business logic is kept in services thus keeping keeping them out of controllers thus keeping them skinny.

The directory structure of the application is:

- components
- services
- styles
- assets

**Components** folder contain all our application components. Sub-folder 'common' contains all components that are used across the application i.e the Spinner component. Cities component is a _re-usable stateless_ component which depends on the data fed to it by its parent component. Details and Home are two parent components representing the two views of the application.

**Services** folder contain all application service and constant files. _Constants_ have been defined for the cities which appear on the first screen and strings used in component's templates. There is a _data service_ whose purpose is to interact with the APIs and get requested data for the controller. _Routing service_ is used to manage all routing in the application thus keeping it separate from the controller. _App service_ contains all the business logic of the application.

**Assets** folder contains all static assets like the background image used in the application.

**Styles** folder contains a single style-sheet that is used by the components.

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