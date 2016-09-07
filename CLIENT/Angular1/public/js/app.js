angular
    .module('GPAPP', [
        'lbServices',
        'ui.router',
        'ngSanitize'
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
                templateUrl: 'public/views/menu.html',
                controller: 'menuCtrl'
            })
            .state('venueList', {
                url: '/venueList',
                templateUrl: 'public/views/venueList.html',
                controller: 'venueListCtrl'
            })
            .state('reviewItems', {
                url: '/reviewItems',
                templateUrl: 'public/views/reviewItems.html',
                controller: "reviewController"
            });

        $urlRouterProvider.otherwise('/');
    }]);