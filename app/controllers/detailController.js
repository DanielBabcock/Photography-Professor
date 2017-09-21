// "use strict";

// /*
//     handle data for detail view
//  */

// app.controller("detailTaskCtrl", function($scope, $routeParams, appHomeFactory, cardFactory){

//     const vm = $scope;


//     const showTask = function(){
//         cardFactory.getSingleTask($routeParams.itemId)
//             .then(task=> {
//                 vm.task = task;
//                 vm.task.id = $routeParams.itemId;
//             });
//     }();
// });