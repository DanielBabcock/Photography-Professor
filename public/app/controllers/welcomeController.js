"use strict";

/*
    this controller is instantiated when the '_____.html' template 
    is rendered at the '/login' path.
    it uses the welcomeFactory to handle the registration of new users, 
    login with google.
 */

app.controller("welcomeCtrl", function($scope, $window, cardFactory, welcomeFactory, $location){
    console.log("app welcomeController: ");
    
 
    welcomeFactory.isAuthenticated();
    // cardFactory,makeArray();
    // cardFactory.getAllCards()
    //     .then( (allCards) => {
    //         console.log("allCards", allCards);
    //     })


});