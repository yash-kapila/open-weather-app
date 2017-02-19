describe('App Service Test', function() {

    var appService, filter;

	beforeEach(module('app'));    

	beforeEach(inject(function($injector){
        appService = $injector.get('appService');
        filter = $injector.get('$filter');
    }));
    
    it('should test service definition', function () {    
        expect(appService).toBeDefined();
        expect(appService).not.toBeNull();
    });

    it('should test getHours method', function () {
        var dateList = [
            {
                "dt": 1487473200,
                "dt_txt": "2017-02-19 03:00:00"
            },
            {
                "dt": 1487570400,
                "dt_txt": "2017-02-20 06:00:00"
            }
        ]
        var list = appService.getHours(dateList);
        expect(list).toBeDefined();
        expect(list[0].dt).toEqual("03");
        expect(list[1].dt).toEqual("06");
        expect(list[0].dt_txt).toEqual("February 19, 2017");
        expect(list[1].dt_txt).toEqual("February 20, 2017");

        list = appService.getHours([]);
        expect(list.length).toEqual(0);
    });
  
    it('should test formatTime method', function () {
        var time = [
            {
                'sys': {
                    'sunrise': 1487486868,
                    'sunset': 1487523691
                }
            },
            {
                'sys': {
                    'sunrise': 1487487077,
                    'sunset': 1487524695
                }
            }
        ];

        var list = appService.formatTime(time);
        expect(list).toBeDefined();
        expect(list[0].sys.sunrise).toEqual("6:47 AM");
        expect(list[0].sys.sunset).toEqual("5:01 PM");
        expect(list[1].sys.sunrise).toEqual("6:51 AM");
        expect(list[1].sys.sunset).toEqual("5:18 PM");

        list = appService.formatTime([]);
        expect(list.length).toEqual(0);
    });

    it('should test filterForecastList method', function () {
        var list = [
            { 'dt': '03' },
            { 'dt': '06' },
            { 'dt': '12' },
            { 'dt': '09' },
            { 'dt': '09' }
        ];

        var filter = appService.filterForecastList(list);
        expect(filter).toBeDefined();
        expect(filter.length).toEqual(2);

        for(var i=0;i<list.length;i++)
            list[i].dt = '03';

        filter = appService.filterForecastList(list);
        expect(filter.length).toEqual(0);
    });

    it('should test convertTemperatureToCelsius method', function () {
        var list = [
            {'main': {'temp_max': 279.596, 'temp_min': 276.53}},
            {'main': {'temp_max': 283.125, 'temp_min': 279.53}}
        ];

        var filter = appService.convertTemperatureToCelsius(list);
        expect(filter).toBeDefined();
        expect(filter[0].main.temp_max).toEqual(6.45);
        expect(filter[0].main.temp_min).toEqual(3.38);
        expect(filter[1].main.temp_max).toEqual(9.98);
        expect(filter[1].main.temp_min).toEqual(6.38);
    });
});