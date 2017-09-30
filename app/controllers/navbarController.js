"use strict";

/*
    the main job of this controller is to bind data related to whether a user is logged in or not
    to the the scope of the navbar, which provides conditional affordances based on this
    for instance, a user doesn't see the 'logout' button until they are logged in...
 */

app.controller("navCtrl", function($scope, $window, $rootScope, cardFactory, welcomeFactory, $location){

  let user = null;

  const vm = $scope;
  
      vm.account = {};
  
      vm.logIn = () => welcomeFactory.logIn(vm.account)
              .then($window.location.href = '#!/appHome');  
         
      vm.loginGoogle = function(){
          welcomeFactory.authWithProvider()
              .then(result => {
                  user = result.user.uid;
                    console.log("navbar user", user);
                  $location.path('/appHome');
                  vm.$apply();
              })     
              .catch(error => console.log("google login error", error.message, error.code));
      };
     
      vm.isLoggedIn = false;
      
          vm.logOut = () => welcomeFactory.logOut();
          
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



  
      
      
  
  
