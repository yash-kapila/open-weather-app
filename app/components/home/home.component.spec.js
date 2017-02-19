describe('Cities Component Test', function() {

    var home, spinnerService, dataService, HomeTemplate, CitiesList;
    var weatherData = readJSON('tests/json/cities.json');

	beforeEach(module('app'));    

	beforeEach(inject(function($injector, $componentController){
        dataService = $injector.get('dataService');
        CitiesList = $injector.get('CitiesList');
        spinnerService = $injector.get('spinnerService');
        HomeTemplate = $injector.get('HomeTemplate');

        home = $componentController('home', {
            HomeTemplate: HomeTemplate,
            spinnerService: spinnerService,
            CitiesList: CitiesList,
            dataService: dataService
        });
    }));
    
    it('should test component definition', function () {    
        expect(home).toBeDefined();
        expect(home).not.toBeNull();
    });

    it('should test $onInit method', function () {
        spyOn(spinnerService, 'showSpinner');
        spyOn(home, 'getCurrentWeatherDataForAllCities');
        home.$onInit();
        expect(spinnerService.showSpinner).toHaveBeenCalled();
        expect(home.template).toEqual(HomeTemplate);
        expect(home.citiesList).toEqual(CitiesList);
        expect(home.citiesWeatherData).toEqual([]);
        expect(home.getCurrentWeatherDataForAllCities).toHaveBeenCalledWith(home.citiesList);
    });

});