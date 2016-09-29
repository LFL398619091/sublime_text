angular.module('myApp',[])
    .factory('user',function () {
        return {
            username:'zss',
            age:18,
            sex:0
        }
    })
.controller('firstController',['$scope','user',function ($scope,user) {
    $scope.user = user;
}])