describe('Routes Service Test', function() {

    var routeService, location;

	beforeEach(module('app'));    

	beforeEach(inject(function($injector, $location){
        routeService = $injector.get('routeService');
        location = $location;
        spyOn(location, 'path');
    }));
    
    it('should test service definition', function () {    
        expect(routeService).toBeDefined();
        expect(routeService).not.toBeNull();
    });

    it('should test goToDetailsView method', function () {
        routeService.goToDetailsView('');
        expect(location.path).toHaveBeenCalledWith('');

        routeService.goToDetailsView('2759794');
        expect(location.path).toHaveBeenCalledWith('2759794');      
    });

    it('should test goBackToHome method', function () {
        routeService.goBackToHome();
        expect(location.path).toHaveBeenCalledWith('/');
    });
});