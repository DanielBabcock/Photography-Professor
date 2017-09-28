"use strict";

/*
    this controller is instantiated when the '_____.html' template 
    is rendered at the '/login' path.
    it uses the welcomeFactory to handle the registration of new users, 
    login with google.
 */

app.controller("welcomeCtrl", function($scope, $window, welcomeFactory, $location){
    console.log("app welcomeController: ");
    
 
    // $scope.loginGoogle = function(){
    //     welcomeFactory.authWithProvider()
    //         .then(result => {
    //             let user = result.user.uid;
                
    //             console.log("user: ", result);

    //             $location.path('/appHome');
    //             $scope.$apply();
    //         })
    //         .catch(error => console.log("google login error", error.message, error.code));
    // };


});