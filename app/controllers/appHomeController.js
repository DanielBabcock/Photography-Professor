"use strict";

// $scope.firebase = $firebase(new Firebase("https://photo-tutor.firebaseio.com/"));

// $scope.editFunction = function(event){
//     console.log("click event function", event)}; 

app.controller("appHomeCtrl", function($scope, $window, appHomeFactory, $location){
    
    console.log("app: ");


     // **********************************************************************
    // ****************************SLIDER************************************
    // **********************************************************************


// create Variables that are data points from json.



    $scope.apertureSlider = {
        value: 16,
        restrict: "E",
        // value: 16,
        // floor: 1,
        // ceil: 17,
        // step: 0.1,
        // precision: [],
        // ticksArray: [2.8, 4, 5.6, 8, 11, 16], 
        // showTicksValues: 5,      // pull available in data  
        // showSelectionBar: true,        
        // showTicks: true,
        options: {
            floor: 2,
            ceil: 16,
            step: 0.1,
            precision: 1,
            showTicksValues: true,
            showSelectionBar: true,
            stepsArray: [
              {value: "2.8", legend: 'Very shallow'},
            //   {value: 2},
              {value: "4", legend: 'Shallow'},
            //   {value: 4},
              {value: "5.6", legend: 'Average'},
            //   {value: 6},
              {value: "11", legend: 'Deep'},
            //   {value: 8},
              {value: "16", legend: 'Very deep'}
            ],

            // id: 'slider-id',
            // function should filter  availble shutter speeds in next slider
            onEnd: function(id) {
                console.log('on end ' + id); // logs 'on end slider-id'
            }
        }
    };
    $scope.shutterSpeedSlider = {
        value: 4000,
        ticksArray: [], // pull from available shot at previously selected f-stop
        showTicksValues: 10,        
        showSelectionBar: true,        
        showTicks: true,
        step: 10,
        options: {
            id: 'slider-id',
            // function should filter  availble shutter speeds in next slider
            onEnd: function(id) {
                console.log('on end ' + id); // logs 'on end slider-id'
            }
        }
    };
    $scope.isoSlider = {
        value: 6400,
        // ticksArray: [0, 10, 25, 50, 100],
        showTicks: true,   
        // options: {
        //         showSelectionBar: true,
        //         getPointerColor: function(value) {
        //             if (value <= 3)
        //                 return 'red';
        //             if (value <= 6)
        //                 return 'orange';
        //             if (value <= 9)
        //                 return 'yellow';
        //             return '#2AE02A';
        // }
        //     id: 'slider-id',
        //     onEnd: function(id) {
        //         console.log('on end ' + id); // logs 'on end slider-id'
            // }
        // }
    };

});
