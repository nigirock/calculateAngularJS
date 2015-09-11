var app = angular.module("App",[]);
app.controller("mainCtrl",function($scope){
    $scope.value = function(){
        return $scope.calc;
    };
    console.log($scope.value);
});