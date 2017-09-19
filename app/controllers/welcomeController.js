"use strict";

/*
    this controller is instantiated when the 'user.html' template 
    is rendered at the '/login' path.
    it uses the welcomeFactory to handle the registration of new users, 
    login with google or email and password.
 */

app.controller("welcomeCtrl", function($scope, $window, welcomeFactory, $location){
    console.log("app: ");
    
    const vm = $scope;

    // this will hold user's email and password
    vm.account = {};

    // called when the 'register' button is clicked.
    // form data is gathered and sent to welcomeFactory and our register method
    // passes it off to firebase
    vm.register = function(){
        welcomeFactory.register({
            email: vm.account.email,
            password: vm.account.password
        })
        .then(userData => {
            vm.logIn();
        })
        .catch(error => console.log("error with login", error));
    };

    vm.logIn = () => welcomeFactory.logIn(vm.account)
                                .then($window.location.href = '#!/task-list');

    vm.loginGoogle = function(){
        welcomeFactory.authWithProvider()
            .then(result => {
                let user = result.user.uid;
                $location.path('/appHome');
                vm.$apply();
            })
            .catch(error => console.log("google login error", error.message, error.code));
    };


});