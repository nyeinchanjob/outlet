angular.module('app.routes', [])

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
        .state('menu', {
            url: '/side-menu-main',
            templateUrl: 'templates/menu.html',
            controller: 'menuCtrl'
        })

        .state('menu.home', {
            url: '/home',
            views : {
                'side-menu-main' : {
                    templateUrl: 'templates/home.html',
                    controller: 'homeCtrl'
                }
            }
        })

        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        })

        .state('outlets', {
            url: '/outlet_list',
            templateUrl: 'templates/outlets.html',
            controller: 'outletsCtrl'
        })

        .state('outletSDetail', {
            url: '/outlet_detail',
            templateUrl: 'templates/outletSDetail.html',
            controller: 'outletSDetailCtrl'
        })

        .state('survey', {
            url: '/survey',
            templateUrl: 'templates/survey.html',
            controller: 'surveyCtrl'
        })

        .state('types', {
            url: '/types',

            templateUrl: 'templates/types.html',
            controller: 'typesCtrl'
        })

        .state('typeSDetail', {
            url: '/typeSDetail',
            templateUrl: 'templates/typeSDetail.html',
            controller: 'typeSDetailCtrl'
        })

        .state('menu.questions', {
            url: '/questions',
            views: {
                'side-menu-main' : {
                    templateUrl: 'templates/questions.html',
                    controller: 'questionsCtrl'
                }
            }

        })

        .state('questionSDetail', {
            url: '/questionSDetail',
            templateUrl: 'templates/questionSDetail.html',
            controller: 'questionSDetailCtrl'
        })

        .state('setting', {
            url: '/setting',
            templateUrl: 'templates/setting.html',
            controller: 'settingCtrl'
        })i

        .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'profileCtrl'
        })

        $urlRouterProvider.otherwise('side-menu-main/home')

});
