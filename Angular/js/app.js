/*starts app*/
angular.module("MyApp",["ngRoute"])
//adds config function to manipulate view.html pages
.config(function($routeProvider){
	$routeProvider.when("/new",{
		controller:"NewItemController",
		templateUrl: "form.html"
	}).when("/list",{
		controller:"ListController",
		templateUrl: "listView.html"
	}).when("/view3",{
		controller:"DBController",
		templateUrl: "View3.html"
	}).when("/edit/:itemIndex",{
		controller:"EditController",
		templateUrl: "form.html"
	}).otherwise({
		redirectTo:"/new"
	})
})
//controller for edit button
.controller("EditController",function($scope,dataService,$routeParams){
    // Make sure we have all of the items available.
    $scope.nameArray = dataService.getNames();
    
    // Grab the item from the specified index.
    $scope.theItem = $scope.nameArray[ $routeParams.itemIndex ];
    
    //sets userName to empty string
	$scope.city = $scope.theItem.city;
 	//sets street to empty string
	$scope.state = $scope.theItem.state;
	//sets city to empty string
	$scope.address = $scope.theItem.address;
	//sets date to empty string
	$scope.date = $scope.theItem.date;
	//sets zipcode to empty string
	$scope.about = $scope.theItem.about;
    //adding items function for edit
    $scope.addName = function(){
		var obj = {};
		obj.city = $scope.city;
		obj.state = $scope.state;
		obj.address = $scope.address;
		obj.date = $scope.date;
		obj.about = $scope.about;

		//pushes user name to nameArray
		dataService.updateName(obj,$routeParams.itemIndex);
		//this will clear out a username when deleted
		//$scope.userName = '';
        document.location.hash = "#/list";
	} 
})
//controller for list items
.controller("ListController",function($scope,dataService){
    //array of names
	$scope.nameArray = dataService.getNames();
    
    //function for deleting a name fron the list
	$scope.deleteName = function(deletedName){
		dataService.removeName(deletedName);
	}
})
//controller for adding new items
.controller("NewItemController",function($scope,dataService){
    //sets userName to empty string
	$scope.city = '';
 	//sets street to empty string
	$scope.state = '';
	//sets city to empty string
	$scope.address = '';
	//sets date to empty string
	$scope.date = '';
	//sets zipcode to empty string
	$scope.about = '';
	
	//function for adding name/info
	$scope.addName = function(){
		var obj = {};
		obj.city = $scope.city;
		obj.state = $scope.state;
		obj.address = $scope.address;
		obj.date = $scope.date;
		obj.about = $scope.about;

		//pushes user name to nameArray
		dataService.addName(obj);
		//this will clear out a username when deleted
		$scope.userName = '';
        //this will shoot users to see the results of their form inputs when adding an item 
        document.location.hash = "#/list";
	}
})

