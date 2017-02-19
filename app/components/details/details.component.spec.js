describe('Details Component Test', function() {

    var cityDetails, spinnerService, dataService, appService, DetailsTemplate, routeParams, routeService, Common, defer;

	beforeEach(module('app'));    

	beforeEach(inject(function($injector, $componentController, $routeParams){
        dataService = $injector.get('dataService');
        appService = $injector.get('appService');
        spinnerService = $injector.get('spinnerService');
        DetailsTemplate = $injector.get('DetailsTemplate');
        routeService = $injector.get('routeService');
        Common = $injector.get('Common');
        routeParams = $routeParams;

        cityDetails = $componentController('cityDetails', {
            dataService: dataService,
            appService: appService,
            spinnerService: spinnerService,
            DetailsTemplate: DetailsTemplate,
            routeService: routeService,
            Common: Common,
            routeParams: routeParams
        });
    }));
    
    it('should test component definition', function () {    
        expect(cityDetails).toBeDefined();
        expect(cityDetails).not.toBeNull();
    });

    it('should test $onInit method', function () {
        spyOn(spinnerService, 'showSpinner');
        spyOn(cityDetails, 'getSeaLevelData');
        cityDetails.$onInit();
        expect(spinnerService.showSpinner).toHaveBeenCalled();
        expect(cityDetails.common).toEqual(Common);
        expect(cityDetails.template).toEqual(DetailsTemplate);
        expect(cityDetails.forecastList).toEqual([]);
        expect(cityDetails.cityName).toEqual('');
        expect(cityDetails.countryCode).toEqual('');
        expect(cityDetails.isDataLoaded).not.toBeTruthy();
        expect(cityDetails.getSeaLevelData).toHaveBeenCalledWith(routeParams.id);
    });

    it('should test filterForecastList method', function () {
        spyOn(appService, 'filterForecastList');
        cityDetails.filterForecastList();
        expect(appService.filterForecastList).toHaveBeenCalled();
    });

    it('should test convertTemperatureToCelsius method', function () {
        spyOn(appService, 'convertTemperatureToCelsius');
        cityDetails.convertTemperatureToCelsius();
        expect(appService.convertTemperatureToCelsius).toHaveBeenCalled();
    });

    it('should test goBackToHome method', function () {
        spyOn(routeService, 'goBackToHome');
        cityDetails.goBackToHome();
        expect(routeService.goBackToHome).toHaveBeenCalled();
    })

});