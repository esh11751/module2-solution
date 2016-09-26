    (function () {
      "use strict";


      var shoppingList1= ["milk","chapathi","dal","curd"];
      var shoppingList2=[
        {
          name: "apple",
          quantity: "2"
        },
        {
          name:"orange",
          quantity: "5"
        },
        {
          name: "cherry",
          quantity: "15"
        }
      ];

      angular.module("DIApp", [])
          .controller("DIController", DIController)
          .filter("custom", CustomFactory)
          .filter("check",CheckFactory);
          DIController.inject= ['$scope','customFilter'];
        function DIController( $scope, customFilter ){
        $scope.name = "Eshwar"; //$filter('uppercase')("Eshwar");
      //  $scope.FullName ="";
        $scope.namevalue="0.45"; //$filter('currency')("0.45","$$","3");
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2  = shoppingList2;

        $scope.sayhello = function () {
          var msg = "I like tea and swwetts";
          msg = customFilter(msg);
          return msg;
        };

        $scope.showNumberofWatchers = function () {
        //  alert("insidewatchers func");
          console.log("# of watchers: ", + $scope.$$watchersCount);
        };
        $scope.setFullName = function () {
        //  alert("insidewatchers func");
        $scope.FullName = $scope.name +" "+"Dinne";
        };

        $scope.logFullName = function () {
        //  alert("insidewatchers func");
          console.log("log FullName: ", + $scope.FullName);
        };
        $scope.logname = function () {
        //  alert("insidewatchers func");
          console.log("log Name: ", + $scope.name);
        };

        $scope.addlist2 = function () {
          // var itemname=$scope.newname;
          // var itemquantity=$scope.newquantity;
          var newitem=
            {name:$scope.newname,
              quantity: $scope.newquantity
            };

          shoppingList2.push(newitem);

        };
    }

    function CustomFactory() {
      return function(input) {
        //alert("hi");
        input = input ||"";
        input=input.replace("like","love");
        return input;
      };
    };
    function CheckFactory() {
      return function(input,target,replace) {
        //alert("hi");
        input = input ||"";
        input=input.replace(target,replace);
        return input;
      };
    };
    })();
