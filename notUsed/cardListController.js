// "use strict";

// /*
//     handle data and functionality needed in cardList.html (sort of the main view)
//     using todoFactory and userFactory to interact with the database
//  */

// // showCardList()

// app.controller("cardListCtrl", function($scope, $rootScope, cardFactory, appHomeFactory){

//     // this is probably not a good idea.
//     // the idea, though is to have this available
//     // in the scope of the navBar and the card list
//     $rootScope.showSearch = true;

//     // putting '$scope' in a const
//     const vm = $scope;
//     // vm.searchText = filterFactory;
    
//     // initialize an array, bound to scope
//     vm.cards = [];

//     // get all cards from firebase, using the factory
//     // and bind the returned array to scope (vm) 
//     const showAllCards = function(){
//         let user = appHomeFactory.getCurrentUser();
//         cardFactory.getAllCards(user)
//             .then(cards => vm.cards = cards);
//     };

//     // called from list.html gets the itemId from $routeParams
//     // and passes this to the factory, where an $http.delete removes it from the database
//     vm.deleteCard = function(id){
//         cardFactory.deleteCard(id)
//             .then(()=>showAllCards());
//     };

    


//     // when the controller is instantiated,
//     // go ahead and show all cards for the current user
//     showAllCards();

// });