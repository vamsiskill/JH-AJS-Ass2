(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ToBuy = this;

  ToBuy.Items = ShoppingListCheckOffService.getToBuyItems();
    
  ToBuy.BtoB = function (itemIndex) {
    ShoppingListCheckOffService.BuytoBought(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var Bought = this;

  Bought.Items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var TobuyItems = [{Qty:10, Name:"Cookies"}, {Qty:5, Name:"Sugary Drinks"}, {Qty:3, Name:"Pepto Bismol"}];
  var BoughtItems = [];

  service.BuytoBought = function (itemIdex) {
    var MovingItem = TobuyItems[itemIdex]
    
    BoughtItems.push(MovingItem)
    TobuyItems.splice(itemIdex, 1);
	  
  };

  service.getToBuyItems = function () {
    return TobuyItems;
  };
	
  service.getBoughtItems = function () {
    return BoughtItems;
  };
}

})();
