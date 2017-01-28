var app = angular.module("ShoppingListCheckOff", []);

app.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ShoppingListCheckOffService.$inject = [];

function ShoppingListCheckOffService(){
	var itemBought = [];
    return {
        setProperty: function(value) {
            itemBought = value;
        },
        getProperty: function () {
            return itemBought;
        }
    };
};


app.controller("toBuyController", toBuyController);

toBuyController.$inject = ["$scope", "ShoppingListCheckOffService"];

function toBuyController($scope, ShoppingListCheckOffService){
	$scope.titleName = "Shopping List Check Off";
	$scope.itemList = [];
	$scope.itemBought = [];
	$scope.itemList = [{ name: "cheese", quantity: 20 },{ name: "cookies", quantity: 40 }, { name: "milk", quantity: 15 }, { name: "vegetables", quantity: 25 }, { name: "fruits", quantity: 100 }];

	$scope.bought = function(index){
		$scope.itemBought.push($scope.itemList.splice(index, 1)[0]);
		$scope.itemList = $scope.itemList;	
		ShoppingListCheckOffService.setProperty($scope.itemBought);
	};	
};


app.controller("alreadyBoughtController", alreadyBoughtController);

alreadyBoughtController.$inject = ["$scope", "ShoppingListCheckOffService"];

function alreadyBoughtController($scope, ShoppingListCheckOffService){
	$scope.itemBought = [];

	$scope.$watch(function(){
		$scope.itemBought = ShoppingListCheckOffService.getProperty();
	});
};


