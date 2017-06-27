angular.module('EmployeeService', []).factory('EmployeeService', ['$http', function($http) {
    return {

        loadAllEmployees: function(){
            return $http.get("http://localhost:8080/employee")
                .then(function successCallback(response){
                    return response;
                }, function errorCallback(response){
                    return response;
                })
        },

        addEmployee: function(employeeData){
            return $http.post("http://localhost:8080/employee", employeeData)
                .then(function successCallback(response){
                    return response;
                }, function errorCallback(response){
                    return response;
                });
        },

        deleteEmployee: function(employeeId){
             return $http.delete("http://localhost:8080/employee/"+employeeId)
                .then(function successCallback(response){
                    return response;
                }, function errorCallback(response){
                    return response;
                });
        }

    }
}]);