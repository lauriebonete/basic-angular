angular.module("MainController",[]).controller("MainController", function($scope, EmployeeService){
    $scope.message = 'Everyone come and see how good I look!';


    $scope.load = function(){
        EmployeeService.loadAllEmployees()
            .then(function(response){
                if(response.status === 200){
                    $scope.employeeList = response.data;
                }
            });
    }


    $scope.addEmployeeFunction = function(){
        EmployeeService.addEmployee($scope.addEmployee)
            .then(function(response){
                if(response.status === 201){
                    $scope.employeeList.push($scope.addEmployee);
                }
            });
    };

    $scope.deleteThis = function(employeeId){
        EmployeeService.deleteEmployee(employeeId)
            .then(function(response){
                // if(response.status === 201){
                //     $scope.employeeList.push($scope.addEmployee);
                // }
                console.log(response);
            });
    };


    $scope.clicked = function(){
        $scope.message = "New Message";
    };
});