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
            .state('menu', {
                url: '/menu',
                templateUrl: 'public/views/venues.html',
                controller: 'VenueController'
            })
            .state('reviewItems', {
                url: '/reviewItems',
                templateUrl: 'public/views/reviewItems.html',
                controller: "reviewController"
            });

        //$urlRouterProvider.otherwise('/');
    }]);