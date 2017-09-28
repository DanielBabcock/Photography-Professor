// "use strict";

// /*
//     handle data and provide functionality to edit a task
//  */

// app.controller("editCardCtrl", function($scope, cardFactory, appHomeFactory, $routeParams, $location){

//     const vm = $scope;

//     // bind a few values to scope
//     vm.title = "Edit Card";
//     vm.submitButtonText = "Edit Item";
//     vm.card = {

//         userNotes: "",
//         // dependencies: "",
//         // dueDate: "",
//         // urgency: "",
//         card: ""
//         // isCompleted: "",
//         // location: ""

//     };

//     // display the details of a given card in form.html
//     // invoke from details view when the 'edit' button is clicked
//     const showEditCard = function(){
//         cardFactory.getSingleCard($routeParams.itemId)
//             .then(data => {
//                 console.log("data", data);
//                 vm.card = data;
//                 vm.card.id = $routeParams.itemId;
//             });
//     };

//     // edit card
//     // using location to redirect
//     vm.submitCard = function(){
//         cardFactory.editCard($routeParams.itemId, vm.card)
//             .then(data => $location.path('/card-list'));
//     };

//     showEditCard();

// });