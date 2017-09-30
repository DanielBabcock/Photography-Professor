"use strict";

// **********************************************
//     Controls: Image dummy JSON, then sliders,
//         then shutter click to create cards, then 
//         delete button for cards. 
// **********************************************

app.controller("appHomeCtrl", function($scope, $window, $location, cardFactory, welcomeFactory){
    
    const settingsArray = [];
    const repeatLoop = [];
    let currentUser = "99IhzrNCXHZ59ORbpioT4zOxg083";
    $scope.cardSource =[];




    let getCards = function(){
        cardFactory.getAllCards(currentUser)
        .then( (response) => {
            console.log("repsonse apphome", response);
            $scope.cardSource = response;
        });
    console.log("cardsource apphome", $scope.cardSource);
    };

    // **********************************************************************
    // ****************************TEMPORARY IMAGE DATA**********************
    // **********************************************************************
       
    const imageData = [
        {
            "image": "images/0.jpg",
            "shutterSpeed": "1/13",
            "aperture": "2.8",
            "iso": "320",
            "location": "images/0.jpg",
            "imageNotes": "Shallow depth of field, slow shutter speed, and low grain ISO.",
            "exposure": "-2",
            "userNotes": [],
            "uid": currentUser
        },
        {
            "image": "images/1.jpg",
            "shutterSpeed": "1/60",
            "aperture": "2.8",
            "iso": "400",
            "location": "images/1.jpg",
            "imageNotes": "blah blah",
            "exposure": "0",
            "userNotes": [],
            "uid": currentUser
            
        },
        {
            "image": "images/3.jpg",
            "shutterSpeed": "1/100",
            "aperture": "2.8",
            "iso": "50",
            "location": "images/2.jpg",
            "imageNotes": "Very low ISO",
            "exposure": "+2",
            "userNotes": [],
            "uid": currentUser
        },
    ];
    // **********************************************************************
    // ****************************SLIDERS***********************************
    // **********************************************************************

    // Legends are screwed up on SS and ISO
    $scope.apertureSlider = {
        // value: 16,
        options: {
            showTicksValues: true,
            showSelectionBar: true,
            stepsArray: [
              {value: "2.8", legend: ''},
              {value: "4", legend: ''},
              {value: "5.6", legend: ''},
              {value: "11", legend: ''},
              {value: "16", legend: ''}
            ],
            id: 'aperture-id',
            onEnd: function(id) {
                // Update, filter based on Aperture.
                const response = imageData;
                const matchingImages = response.filter(image => {
                    return image.aperture === $scope.apertureSlider.value;
                });
                    settingsArray.splice(0, 1, $scope.apertureSlider.value);
                const allowedShutterSpeeds = matchingImages.map(image => {
                    return {
                        value: image.shutterSpeed  
                    };
                });
                $scope.shutterSpeedSlider.options.stepsArray = allowedShutterSpeeds;
            }
        }
    };
    $scope.shutterSpeedSlider = {
        // value: 4000,
        options: {
            showTicksValues: true,
            showSelectionBar: true,
            stepsArray: [
              {value: "1/13", legend: ''},
              {value: "1/20", legend: ''},
              {value: "1/60", legend: ''},
              {value: "1/100", legend: ''},
              {value: "1/2000", legend: ''}
            ],
            id: 'shutter-id',
            onEnd: function(id) {
                // Update filter based on Shutter Speed
                let shutterResponse = imageData;
                let matchingImages = shutterResponse.filter(image => {                   
                    return image.shutterSpeed === $scope.shutterSpeedSlider.value;
                });
                    // passing info to empty array
                    settingsArray.splice(1, 1, $scope.shutterSpeedSlider.value);
                    console.log("settingsArray:", settingsArray);
                let allowedISO = matchingImages.map(image => {
                    return {
                        // legend: image.iso,
                        value: image.iso  
                    };
                });
                // scope slider to available ISOs
                $scope.isoSlider.options.stepsArray = allowedISO;
            }
        }
    };
    $scope.isoSlider = {
        options: {
            showTicksValues: true,
            showSelectionBar: true,
            stepsArray: [
              {value: "50", legend: ''},
              {value: "100", legend: ''},
              {value: "320", legend: ''},
              {value: "400", legend: ''},
              {value: "800", legend: ''},
              {value: "1000", legend: ''}
            ],
            id: 'iso-id',
            onEnd: function(id) {

                // passing info to empty array
                settingsArray.splice(2, 1, $scope.isoSlider.value);
                // console.log("settingsArray:", settingsArray);
            }
        }
    };
        
    // **********************************************************************
    // ****************************SHUTTER BUTTON FUNCTION*******************
    // **********************************************************************

    // Shutter button function here. It passes selected settings 
        // from the above filters to the CardFactory
        // and outputs the corresponding image from data(later database) to the appHome.html
        // as a card. cardFactory sends it to Firebase.
        
        $scope.shutterClickFunction = function() {
            currentUser = welcomeFactory.getCurrentUser();
            console.log("currentUser apphomectrl", currentUser);
            imageData.forEach(function(imageLoop){
                if(imageLoop.aperture === settingsArray[0] && 
                    imageLoop.shutterSpeed === settingsArray[1] && 
                    imageLoop.iso === settingsArray[2])
                    {
                        imageLoop.uid = currentUser;
                        $scope.imageLoop = imageLoop.image;                    
                        // repeatLoop.push(imageLoop);
                        // $scope.repeatLoop = repeatLoop;

                    // call factory function/method to firebase
                        console.log("imageLoop: ", imageLoop);                  
                        console.log("repeatLoop: ", repeatLoop);
                        console.log("shutterClickFunction currentUser: ", currentUser);     
                        cardFactory.createCards(imageLoop, currentUser);
                        getCards();
                }       
            });
        };

    // **********************************************************************
    // ****************************DELETE CARDS******************************
    // **********************************************************************
            
        $scope.deleteCard = function(cardId){
                cardFactory.deleteCard(cardId);   
                getCards();           
            };
        
        // $scope.deleteUserCards = function(){
        //     console.log("deleteUserCards: ");
        //     cardFactory.deleteCard();
        // };
        getCards();
});