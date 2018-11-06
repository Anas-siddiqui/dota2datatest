angular.module('mainController', ['ui.bootstrap'])

//Our main controller which will handle the incoming data and response back
//Using the simple bootstrap method for pagination with angular
//All helper functions to format our Dota 2 data are implemented below

    .controller('mainCtrl', function ($scope, $http) {

        $scope.match_data = [];
    var count =0;
    
     $http({
            method: 'GET',
            url: "https://api.opendota.com/api/proMatches"
        }).then(function (res) {
            $scope.match_data = res.data;
        console.log('ex2')
    
         $scope.totalItems = res.data.length;;
         
        }, function (error) {

        });
           $scope.viewby = 10;
   
  
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5; 

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; 
}

$scope.formatDuration = function(i) {
    $scope.temp= (i/60).toFixed(2);
    $scope.split= $scope.temp.split('.');
    if(parseInt($scope.split[1]) > 59){
       $scope.split[0] = String(parseInt($scope.split[0]) + 1);
       $scope.split[1] = String(parseInt($scope.split[1]) - 60);
        if(parseInt($scope.split[1]) < 10){
            $scope.split[1] = "0"+String($scope.split[1]);
        }
        
    }
    return $scope.split[0]+':'+$scope.split[1]; 
}

$scope.formatScore = function(radiant,dire) {
    
    return radiant+":"+dire;
    
}
$scope.formatWin = function(radiantWin) {
    
    if(radiantWin){
        return "Radiant Victory";
    }
    else{
        return "Dire Victory";
    }
    
}
$scope.formatTime = function(timestamp) {
    
var a = new Date(timestamp * 1000);

  
  
 
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
    
  var time = a.getDate() + '.' + a.getMonth() + '.' + a.getFullYear() + ' ' + hour + ':' + min + ':' + sec ;
  return time;
    
}
$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}



    })
