describe('Cities Component Test', function() {

    var forecast, Common, ForecastTemplate;

	beforeEach(module('app'));    

	beforeEach(inject(function($injector, $componentController){
        Common = $injector.get('Common');
        ForecastTemplate = $injector.get('ForecastTemplate');

        forecast = $componentController('forecast', {
            ForecastTemplate: ForecastTemplate,
            Common: Common
        });
    }));
    
    it('should test component definition', function () {    
        expect(forecast).toBeDefined();
        expect(forecast).not.toBeNull();
    });

    it('should test $onInit method', function () {
        forecast.$onInit();
        expect(forecast.template).toEqual(ForecastTemplate);
        expect(forecast.common).toEqual(Common);
    });

});