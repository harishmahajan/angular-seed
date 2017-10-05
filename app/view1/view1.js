'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', [function() {
    _ //.each({one: 1, two: 2, three: 3}, alert);
    // _.map([1, 2, 3], function(num) {
    //   console.log(num * 3);
    // });

    _.map({one:1 ,two:2 ,three:3},function(num,key){
      console.log("-->",num*3);
    });

    var sum = _.reduce([1, 2, 3], function(memo, num){
                return num + memo; }, 0);

      console.log("sum:- ",sum);
      var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
      console.log("even:- ",even);

      var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
      console.log("evens:- ",evens);

      var d = [{name:'bha',date:'26/05/2017'},
               {name:'bha',date:'26/05/2017'},
               {name:'bha',date:'26/05/2017'},
               {name:'bha',date:'21/05/2017'},
               {name:'bha',date:'22/05/2017'}];

      console.log(_.sortBy(_.uniqBy(d,'date'),['date']));

      console.log(_.countBy([6.1, 4.2, 6.3, 6.2, 6.7], Math.floor));
    //   console.log(_.sortedUniq(d, function(dt){
    //   return dt.date;
    // }));

  }]);
