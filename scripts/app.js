(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuy = this;
		toBuy.shoppingList = ShoppingListCheckOffService.getshoppinglist();

		toBuy.removeShopItem = function(itemIndex, itemName, itemQuantity) {
			ShoppingListCheckOffService.removeShopItem(itemIndex, itemName, itemQuantity);
		}	
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var alreadyBought = this;
		alreadyBought.boughtList = ShoppingListCheckOffService.getboughtitemList();
	}

	function ShoppingListCheckOffService() {
		var service = this;
		var boughtItems = [];
		var shoppingList = [
			{
				name: "Milk",
				quantity: "4"
			},
			{
				name: "Donuts",
				quantity: "100"
			},
			{
				name: "Cookies",
				quantity: "250"
			},
			{
				name: "Chocolate",
				quantity: "10"
			},
			{
				name: "Soda",
				quantity: "15"
			},
			{
				name: "Noodles",
				quantity: "25"
			}
		]

		service.getshoppinglist = function () {
			return shoppingList;
		}

		service.removeShopItem = function (itemIndex, itemName, itemQuantity) {
			shoppingList.splice(itemIndex, 1);
			service.addBoughtItems(itemName, itemQuantity);
		}

		service.addBoughtItems = function (itemName, itemQuantity) {
			var item = {
				name: itemName,
				quantity: itemQuantity
			}
			boughtItems.push(item);
		}

		service.getboughtitemList = function () {
			return boughtItems;
		}

	}

})();