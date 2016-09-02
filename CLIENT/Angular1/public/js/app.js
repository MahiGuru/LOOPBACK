angular
    .module('GPAPP', [
        'lbServices',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'public/views/login.html',
                controller: "loginCtrl"
            })
            .state('venues', {
                url: '/venues',
                templateUrl: 'public/views/venues.html',
                controller: 'venueCtrl'
            })
            .state('menu', {
                url: '/menu',
                templateUrl: 'public/views/menu.html',
                controller: 'menuCtrl'
            })
            .state('reviewItems', {
                url: '/reviewItems',
                templateUrl: 'public/views/reviewItems.html',
                controller: "reviewController"
            });

        $urlRouterProvider.otherwise('/');
    }]);