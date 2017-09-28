"use strict";

/*
    provide the basic crud interactions with firebase
*/

app.factory("cardFactory", function($q, $http, FBCreds, welcomeFactory){

    const url = FBCreds.databaseURL;
    let currentUser = welcomeFactory.getCurrentUser();
    
    return {

    // helper function to process the firebase object
    // into an array with it's ugly id assigned as its local id

        // makeArray : function(object){
        //     // console.log("makeArray");
        //     return Object.keys(object).map(key => {
        //         object[key].id = key;

        //         console.log("makeArray from cardFactory");
                
        //         return object[key];

        //     });
        // },

        // call firebase for all the items
        // firebase returns an object of objects,
        // so we pass that to makeArray, a helper defined above
        getAllCards : function(user){
                console.log("user", user);
            return $q((resolve, reject)=>{
                $http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${currentUser}"`)
                .then(items => {
                    resolve((items));
            })
                    .catch(error => reject(error));
            });
            
        },

        // just using $http is fine here
        // SHUTTER CLICK ADDS CARD
        createCards : function(imageLoop, currentUser){
            let newImageLoop = JSON.stringify(imageLoop);
            // console.log("createCards currentUser: ", currentUser);
            return $http.post(`${url}/items/${currentUser}.json`, newImageLoop)
            
                .then((data) => {
                    console.log("data");
                })
                .catch(error => console.log("error", error.message));
        },
        
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