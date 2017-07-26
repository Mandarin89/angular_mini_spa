var app = angular.module('shop', ['ngScrollbars']);
// scrollbar config
app.config(function (ScrollBarsProvider) {
    ScrollBarsProvider.defaults = {
        scrollButtons: {
            scrollAmount: 'auto', 
            enable: true 
        },
        scrollInertia: 200,
        axis: 'y', 
        theme: 'minimal-dark',
        autoHideScrollbar: false
    };
});
//

// start application
app.run(function($rootScope) {
	// data
	$rootScope.products = [
		{
			"id":0,
			"name":"Trello account",
			"price":"100",
			"quantity" : "2",
			"description" : "Tréllo — это бесплатное веб-приложение для управления проектами небольших групп, разработанное Fog Creek Software",
			"image":{
				"src":"app/template/images/products/1.jpg",
				"title":"Trello"
			},
			"q" : '1'
		},
		{
			"id":1,
			"name":"RackWare RMM",
			"price":"200",
			"quantity" : "1",
			"description" : "RackWare RMM Platform for the Enterprise Hybrid Cloud",
			"image":{
				"src":"app/template/images/products/2.jpg",
				"title":"RackWare RMM"
			},
			"q" : '1'
		},
		{
			"id":2,
			"name":"The tallymate vending machine",
			"price":"300",
			"quantity" : "4",
			"description" : "The vending machine is built with a front of acid resistant steel and a hardened touchscreen that can not be vandalized.",
			"image":{
				"src":"app/template/images/products/3.jpg",
				"title":"The tallymate vending machine"
			},
			"q" : '1'
		},
		{
			"id":3,
			"name":"Fishing",
			"price":"400",
			"quantity" : "3",
			"image":{
				"src":"app/template/images/products/4.jpg",
				"title":"Fishing"
			},
			"q" : '1'
		},
		{
			"id":4,
			"name":"eCommerce",
			"price":"400",
			"quantity" : "2",
			"description" : "Solve complex B2B eCommerce and order management challenges with our cloud-based, RESTful API. Build and deploy custom apps faster, easier and at lower cost.",
			"image":{
				"src":"app/template/images/products/5.jpg",
				"title":"eCommerce"
			},
			"q" : '1'
		},
		{
			"id":5,
			"name":"Electronic Travel Authority",
			"price":"500",
			"quantity" : "57",
			"image":{
				"src":"app/template/images/products/6.jpg",
				"title":"Electronic Travel Authority"
			},
			"q" : '1'
		},
		{
			"id":6,
			"name":"Sportwear",
			"price":"600",
			"quantity" : "5",
			"description" : "Sportswear or activewear is clothing, including footwear, worn for sport or physical exercise. Sport-specific clothing is worn for most sports and physical exercise, for practical, comfort or safety reasons.",
			"image":{
				"src":"app/template/images/products/7.jpg",
				"title":"Sportwear"
			},
			"q" : '1'
		}			
	];
	//
	// cart items here
	$rootScope.cartArray = {}; 
});