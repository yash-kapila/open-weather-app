describe('Data Service Test', function() {

    var dataService, Common, httpBackend;

	beforeEach(module('app'));    

	beforeEach(inject(function($injector, $httpBackend){
        dataService = $injector.get('dataService');
        Common = $injector.get('Common');
        httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should test getCurrentWeather method', function () {
        var id = '2759794';
        httpBackend.expectGET(Common.baseUrl.weather+'?appid='+Common.APPID+'&id='+id).respond(200);    
        dataService.getCurrentWeather(id);
        httpBackend.flush();
    });

    it('should test getSeaLevelData method', function () {
        var id = '2759794';
        httpBackend.expectGET(Common.baseUrl.forecast+'?appid='+Common.APPID+'&id='+id).respond(200);    
        dataService.getSeaLevelData(id);
        httpBackend.flush();
    });
});