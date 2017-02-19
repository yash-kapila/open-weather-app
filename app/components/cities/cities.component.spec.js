describe('Cities Component Test', function() {

    var cities, Common, routeService, appService, CitiesTemplate;
    var weatherData = readJSON('tests/json/cities.json');

	beforeEach(module('app'));    

	beforeEach(inject(function($injector, $componentController){
        appService = $injector.get('appService');
        Common = $injector.get('Common');
        routeService = $injector.get('routeService');
        CitiesTemplate = $injector.get('CitiesTemplate');

        cities = $componentController('cities', {
            CitiesTemplate: CitiesTemplate,
            Common: Common,
            routeService: routeService,
            appService: appService
        });
    }));
    
    it('should test component definition', function () {    
        expect(cities).toBeDefined();
        expect(cities).not.toBeNull();
    });

    it('should test $onInit method', function () {
        cities.$onInit();
        expect(cities.template).toEqual(CitiesTemplate);
        expect(cities.common).toEqual(Common);
    });

    it('should test $onChanges method', function () {
        spyOn(cities, 'formatDate');
        var changes = {
            weatherData: {
                currentValue: []
            }
        };
        cities.$onChanges(changes);
        expect(cities.weatherData).toEqual([]);
        expect(cities.isDataRetrieving).not.toBeTruthy();

        changes.weatherData.currentValue = weatherData;
        cities.$onChanges(changes);
        expect(cities.weatherData).toEqual(weatherData);
        expect(cities.isDataRetrieving).toBeTruthy();
        expect(cities.formatDate).toHaveBeenCalledWith(weatherData);
    });

    it('should test formatDate method', function () {
        spyOn(appService, 'formatTime');
        cities.formatDate(weatherData);
        expect(appService.formatTime).toHaveBeenCalledWith(weatherData);
    });

    it('should test viewSeaLevelDetails method', function () {
        spyOn(routeService, 'goToDetailsView');
        var record = {
            id: 2673730
        };
        cities.viewSeaLevelDetails(record);
        expect(routeService.goToDetailsView).toHaveBeenCalledWith('/2673730');
    });

});