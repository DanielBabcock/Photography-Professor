// "use strict";

// /*
//     provide the data and functionality to handle the creation of new cards
//     using cardFactory to write to the database
//  */

// app.controller("addCardCtrl", function($scope, appHomeFactory, $window, cardFactory){

//     const vm = $scope;

//     // bundle some values to scope to customize the form
//     // vm.title = "New Card";
//     vm.shutterClickFunction = "Add New Card";

//     const user = cardFactory.getCurrentUser();

//     // gather data from form to send to db
//     vm.userCard = {
//         image: "",
//         imageNotes: "",
//         userNotes: "",
//         uid: user
//     };


//     // call factory to add vm.card to db
//     // set the href to '#!/card-list'
//     // this redirects and applies a digest cycle 
//     // so your new card is displayed with the others
//     // if you use $location.url, you will only see the new card 
//     // once you refresh and force a digest cycle
//     vm.submitCard = function(){
//         cardFactory.addCard(vm.card);
//             $window.location.href = "#!/appHome";
//     };
// });





