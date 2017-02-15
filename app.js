(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.itemsToBuy = ShoppingListCheckOffService.getBuyList();
  buy.itemsAlreadyBought = ShoppingListCheckOffService.getBoughtList();

  buy.boughtItem = function(itemIndex){
    ShoppingListCheckOffService.boughtItem(itemIndex);
  }

  buy.listBuyEmpty = function(){
    return buy.itemsToBuy.length == 0;
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;
  bought.itemsAlreadyBought = ShoppingListCheckOffService.getBoughtList();

  bought.listBoughtEmpty = function(){
    return bought.itemsAlreadyBought.length == 0;
  }

}

function ShoppingListCheckOffService(){
  var service = this;

  var buyList = [
    { name: "Laptops", quantity: 15 },
    { name: "Keyboards", quantity: 9 },
    { name: "Mouse", quantity: 6 },
    { name: "Headset", quantity: 4 },
    { name: "Speakers", quantity: 9 }
  ];

  var boughtList = [];

  service.getBuyList = function(){
    return buyList;
  }

  service.getBoughtList = function(){
    return boughtList;
  }

  service.boughtItem = function(itemIndex){
    var item = buyList.splice(itemIndex,1)[0];
    boughtList.push({name:item.name, quantity:item.quantity});
  }
}

})();