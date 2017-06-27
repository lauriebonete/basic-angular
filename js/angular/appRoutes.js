angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/employee/view", {
            templateUrl: 'pages/crud-employee.html',
            // controller: 'UserController'
        });

        // $locationProvider.html5Mode(true);s

}]);
