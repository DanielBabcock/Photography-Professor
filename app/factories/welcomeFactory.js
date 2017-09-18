"use strict";

/*
    provides the basic auth functionality for firebase
    as well a couple of additional helpers and utility methods related to user stuff.
 */
// $q is A service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done processing.
// The $http service is a function which takes a single argument — a configuration object — that is used to generate an HTTP request and returns a promise.
app.factory("welcomeFactory", function($q, $http){

    // default to null, checked and updated onAuthStateChanged
    // and used throughout the application to check if there is a current user
    // and if so, what their firebase uid is.
    let currentUser = null;

    
    // Create an instance of the Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();

    // if a user is authenticated, resolve true, else reject false
    // this is returns a promise whose status is checked in the resolve
    // to many of the paths configure with $routeprovider in app.js
    // they will be injected when the controller is instantiated, 
    // and are available to $scope in that controller under $resolve.
    // else a $routeChangeError will be fired
    const isAuthenticated = function (){
        return new Promise ((resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                if (user){
                    currentUser = user.uid;
                    resolve(true);
                }else {
                    reject(false);
                }
            });
        });
    };

    const getCurrentUser = function(){
        return currentUser;
    };


    
    const logIn = function(user){
        return firebase.auth()
                       .signInWithEmailAndPassword(user.email, user.password);
    };


    const logOut = function(){
        return firebase.auth().signOut();
    };


    // this takes an object created in the controller
    // which has an email and password from the form data
    // gathered in user.html
    const register = function(user){
        return firebase.auth()
                       .createUserWithEmailAndPassword(user.email, user.password);
    };

    const authWithProvider = function(){
        return firebase.auth().signInWithPopup(provider);
    };

    return {

        getCurrentUser,
        logIn,
        logOut,
        register,
        isAuthenticated,
        authWithProvider
        
    };

});