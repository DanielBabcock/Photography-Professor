"use strict";

/*
    the main job of this controller is to bind data related to whether a user is logged in or not
    to the the scope of the navbar, which provides conditional affordances based on this
    for instance, a user doesn't see the 'logout' button until they are logged in...
 */

app.controller("navCtrl", function($scope, $window, $rootScope, welcomeFactory, $location){


  const vm = $scope;
  
      // this will hold user's email and password
      vm.account = {};
  
      // called when the 'register' button is clicked.
      // form data is gathered and sent to welcomeFactory and our register method
      // passes it off to firebase
    //   vm.register = function(){
    //       welcomeFactory.register({
    //           email: vm.account.email,
    //           password: vm.account.password
    //       })
    //       .then(userData => {
    //           vm.logIn();
    //       })
    //       .catch(error => console.log("error with login", error));
    //   };
  
      vm.logIn = () => welcomeFactory.logIn(vm.account)
                                  .then($window.location.href = '#!/appHome');
  
      vm.loginGoogle = function(){
          welcomeFactory.authWithProvider()
              .then(result => {
                  let user = result.user.uid;
                  $location.path('/appHome');
                  vm.$apply();

                  console.log("loginGoogle at navbarCtrl", result.user.uid);
              })
              .catch(error => console.log("google login error", error.message, error.code));
      };

      // default to false
      vm.isLoggedIn = false;
      
      
          vm.logOut = () => welcomeFactory.logOut();
          
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



  
      
      
  
  
