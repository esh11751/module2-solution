    (function () {
      "use strict";
      angular.module("ShoppingListCheckOff", [])
          .controller("BuyListController", BuyListController)
          .controller("BoughtListController", BoughtListController)
          .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

      BuyListController.inject= ['ShoppingListCheckOffService'];
      function BuyListController(ShoppingListCheckOffService){
            var showbuylist= this;

            showbuylist.buyList = ShoppingListCheckOffService.getbuyitems();
              showbuylist.additem= function (itemindex){
                ShoppingListCheckOffService.addtoboughtlist(itemindex);
              };
              showbuylist.errormessage="Everything is bought!";

      }

    BoughtListController.inject= ['ShoppingListCheckOffService'];
    function BoughtListController(ShoppingListCheckOffService ){
          var showboughtlist=this;
        showboughtlist.boughtList = ShoppingListCheckOffService.getboughtitems();
         showboughtlist.emptymessage="Nothing bought yet.";
    }

  function ShoppingListCheckOffService() {
          var service= this;
          var buyList=[
                      { name: "cookies", quantity: "10"}, { name: "donuts", quantity: "20"},{ name: "milkybars",quantity: "30"},{ name:"lollypups",quantity: "10"},{ name: "snickers",quantity: "5"}
                      ];

        var boughtList= [];
        service.getbuyitems= function () {

           return buyList;
        };
        service.getboughtitems= function () {
                  return boughtList;
        };
        service.addtoboughtlist= function(itemindex){
          boughtList.push(buyList[itemindex]);
          buyList.splice(itemindex,1);
        };
  }

    })();
