"use strict";

    // **********************************************************************
    // ********************PROVIDES BASIC CRUD W/ FIREBASE*******************
    // **********************************************************************

app.factory("cardFactory", function($q, $http, FBCreds, welcomeFactory){

    const url = FBCreds.databaseURL;
    let currentUser = welcomeFactory.getCurrentUser();
    
    return {

    // helper function to process the firebase object
    // into an array with it's ugly id assigned as its local id

        // makeArray : function(object){
        //     return Object.keys(object).map(key => {
        //         object[key].id = key;
        //         return object[key];
        //     });
        // },

    // **********************************************************************
    // ****************************GET from FB*******************************
    // **********************************************************************

        // call firebase for all the items
        // firebase returns an object of objects,
        // so we pass that to makeArray, a helper defined above

        getAllCards : function(user){
            console.log("user getAllCards", user);
            let emptyArray = [];

            return $q((resolve, reject)=>{
                $http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
                .then(items => {
                    console.log("itemsin .get: ", items);  
                    Object.keys(items.data).forEach( (key) => {
                        emptyArray.push(items.data[key]);
                    });                  
                    resolve(emptyArray);
            })
                    .catch(error => reject(error));
            });
        },

    // **********************************************************************
    // ****************************CreateCards*******************************
    // **********************************************************************

        // called from the appHomeController in the shutterClickFunction

        createCards : function(imageLoop, currentUser){
            let newImageLoop = JSON.stringify(imageLoop);
            // console.log("createCards currentUser: ", currentUser);
            return $http.post(`${url}/items.json`, newImageLoop)
                .then((data) => {
                    console.log("data");
                })
                .catch(error => console.log("error", error.message));
        },
        
    // **********************************************************************
    // ****************************DeleteCards*******************************
    // **********************************************************************

        // called from the appHomeController in the deleteCardsFunction and the 
        //deleteUserCards functions.
        // takes an id and deletes the corresponding card from the database

        deleteCards : function(id){
            return $q((resolve,reject)=>{
                $http.delete(`${url}/items/${id}.json`)
                    .then(response => resolve(response))
                    .catch(error => reject(error));
            });
        }
    };
});