"use strict";

/*
    provide the basic crud interactions with firebase
*/

app.factory("cardFactory", function($q, $http, FBCreds){

    const url = FBCreds.databaseURL;

    // helper function to process the firebase object
    // into an array with it's ugly id assigned as its local id
    const makeArray = function(object){
        return Object.keys(object).map(key => {
            object[key].id = key;
            return object[key];
        });
    };

    // call firebase for all the items
    // firebase returns an object of objects,
    // fo we pass that to makeArray, a helper defined above
    const getAllCards = function(user){
        return $q((resolve, reject)=>{
            $http.get(`${url}/items.json?orderBy="uid"&equalTo="${user}"`)
                .then(items => resolve(makeArray(items.data)))
                .catch(error => reject(error));
        });
    };

    // just using $http is fine here
    const addCard = function(obj){
        let newObj = JSON.stringify(obj);
        return $http.post(`${url}/items.json`, newObj)
            .then(data => data)
            .catch(error => console.log("error", error.message));
    };

    // takes an item's id and a an object containing the property to update
    const editCard = function(id, obj) {
        return $q((resolve, reject)=>{
            let newObj = JSON.stringify(obj);
            $http.patch(`${url}/items/${id}.json`, newObj)
                .then(data=> resolve(data))
                .catch(error => reject(error));
        });
    };

    // takes an id and deletes the corresponding card from the database
    const deleteCard = function(id){
        return $q((resolve,reject)=>{
            $http.delete(`${url}/items/${id}.json`)
                .then(response => resolve(response))
                .catch(error => reject(error));
        });
    };

    const getSingleCard = function(itemId){
        return $q((resolve,reject)=> {
            $http.get(`${url}/items/${itemId}.json`)
                .then(item => resolve(item.data))
                .catch(error => reject(error));
        });
    };

    // returning methods defined above
    return {

        getAllCards,
        addCard,
        editCard,
        deleteCard,
        getSingleCard
    };

});