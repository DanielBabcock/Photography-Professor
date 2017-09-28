"use strict";

/*
    provide the basic crud interactions with firebase
*/

app.factory("cardFactory", function($q, $http, FBCreds){

    const url = FBCreds.databaseURL;

    return {

    // helper function to process the firebase object
    // into an array with it's ugly id assigned as its local id

        makeArray : function(object){
            return Object.keys(object).map(key => {
                object[key].id = key;

                console.log("makeArray from cardFactory");
                
                return object[key];

            });
        },

        // call firebase for all the items
        // firebase returns an object of objects,
        // so we pass that to makeArray, a helper defined above
        getAllCards : function(user){
            return $q((resolve, reject)=>{
                $http.get(`${url}/items/${user}.json`)
                    .then(items => resolve(makeArray(items.data)))
                    .catch(error => reject(error));
            });
        },

        // just using $http is fine here
        // SHUTTER CLICK ADDS CARD
        createCards : function(obj){
            let newObj = JSON.stringify(obj);
            return $http.post(`${url}/items/${user}.json`, newObj)
                .then(data => data)
                .catch(error => console.log("error", error.message));
                console.log("FB shutter click");
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