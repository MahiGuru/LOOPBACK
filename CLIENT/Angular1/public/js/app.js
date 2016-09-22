angular
    .module('GPAPP', [
        'lbServices',
        'ui.router',
        'ngSanitize',
        'rzModule'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'public/views/login.html',
                controller: "loginCtrl"
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "public/views/signup.html",
                controller: "signupCtrl"
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