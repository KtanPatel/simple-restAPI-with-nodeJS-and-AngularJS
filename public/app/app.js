var app = angular.module('myApp',['ngRoute','ngAnimate','ngResource','toaster'/*,'ngProgress'*/])
    .config(function($httpProvider){

        $httpProvider.interceptors.push('myHttpInterceptor');

    });

app.factory('myHttpInterceptor',function($q, toaster){
    return {
        responseError : function(response){
            console.log(response);

            if(response.data){
                if(response.data.message)
                    toaster.error("ERROR : ",response.data.message);
                else
                toaster.error("ERROR : ",response.data);
            }
            return $q.reject(response);
        }
    }
});

app.factory('Product',function($resource){
    return $resource('./api/product/:id',{id: '@_id'},{
        update :{
            method: 'PUT'
        }
    });
});

/*

app.directive('loading',['$http','$ngProgress',function($http,$ngProgress){
    return{
        restrict : 'A',
        link : function(scope, ele, attr){
            scope.isLoading = function(){
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading,function(v){
                if(v)
                    ngProgress.start();
                else
                ngProgress.complete();
            });
        }
    }
}])

*/