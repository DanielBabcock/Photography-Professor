"use strict";

/*
    the main job of this controller is to bind data related to whether a user is logged in or not
    to the the scope of the navbar, which provides conditional affordances based on this
    for instance, a user doesn't see the 'logout' button until they are logged in...
 */

app.controller("navCtrl", function($scope, $window, $rootScope){

    // probs not a good idea
    // the idea, though is to illustrate the use of $rootScope
    // to make values available in multiple scopes.
    $rootScope.showSearch = true;

    // instantiate an alias for $scope
    const vm = $scope;

    // bind searchText to scope

    
    // default to false
    vm.isLoggedIn = false;

    // this will be userd to filter the list based on
    // user's input into the search bar

    // vm.logOut = () => userFactory.logOut();
    
     // hmmm... how, when, and why does this actually work?
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          vm.isLoggedIn = true;
          vm.$apply();
        } else {
          vm.isLoggedIn = false;
          $window.location.href = "#!/login";
        }
      });


});