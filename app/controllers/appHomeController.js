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
            "image": "images/1.jpg",
            "shutterSpeed": "1/800",
            "aperture": "2",
            "iso": "25600",
            "location": "images/1.jpg",
            "imageNotes": "",
            "exposure": "+2",
            "userNotes": [],      
            "uid": currentUser
        },
        {
            "image": "images/2.jpg",
            "shutterSpeed": "1/800",
            "aperture": "2",
            "iso": "12800",
            "location": "images/2.jpg",
            "imageNotes": "",
            "exposure": "+1",
            "userNotes": [],        
            "uid": currentUser
        },
        {
            "image": "images/3.jpg",
            "shutterSpeed": "1/800",
            "aperture": "2",
            "iso": "6400",
            "location": "images/3.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/4.jpg",
            "shutterSpeed": "1/800",
            "aperture": "2",
            "iso": "4000",
            "location": "images/4.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/5.jpg",
            "shutterSpeed": "1/800",
            "aperture": "2",
            "iso": "2000",
            "location": "images/5.jpg",
            "imageNotes": "",
            "exposure": "-1",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/6.jpg",
            "shutterSpeed": "1/250",
            "aperture": "2",
            "iso": "12800",
            "location": "images/6.jpg",
            "imageNotes": "",
            "exposure": "-2",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/7.jpg",
            "shutterSpeed": "1/250",
            "aperture": "2",
            "iso": "5000",
            "location": "images/7.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/8.jpg",
            "shutterSpeed": "1/250",
            "aperture": "2",
            "iso": "2500",
            "location": "images/8.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/9.jpg",
            "shutterSpeed": "1/250",
            "aperture": "2",
            "iso": "1250",
            "location": "images/9.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/10.jpg",
            "shutterSpeed": "1/250",
            "aperture": "2",
            "iso": "640",
            "location": "images/10.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/11.jpg",
            "shutterSpeed": "1/30",
            "aperture": "2",
            "iso": "1250",
            "location": "images/4.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/12.jpg",
            "shutterSpeed": "1/30",
            "aperture": "2",
            "iso": "640",
            "location": "images/12.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/13.jpg",
            "shutterSpeed": "1/30",
            "aperture": "2",
            "iso": "320",
            "location": "images/13.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/14.jpg",
            "shutterSpeed": "1/30",
            "aperture": "2",
            "iso": "200",
            "location": "images/14.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/15.jpg",
            "shutterSpeed": "1/30",
            "aperture": "2",
            "iso": "100",
            "location": "images/15.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
    
    
    
    
    
    
        {
            "image": "images/16.jpg",
            "shutterSpeed": "1/125",
            "aperture": "4",
            "iso": "12800",
            "location": "images/16.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/17.jpg",
            "shutterSpeed": "1/125",
            "aperture": "4",
            "iso": "6400",
            "location": "images/17.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/18.jpg",
            "shutterSpeed": "1/125",
            "aperture": "4",
            "iso": "4000",
            "location": "images/18.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/19.jpg",
            "shutterSpeed": "1/125",
            "aperture": "4",
            "iso": "2000",
            "location": "images/19.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/20.jpg",
            "shutterSpeed": "1/125",
            "aperture": "4",
            "iso": "1000",
            "location": "images/20.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/21.jpg",
            "shutterSpeed": "1/50",
            "aperture": "4",
            "iso": "6400",
            "location": "images/21.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/22.jpg",
            "shutterSpeed": "1/50",
            "aperture": "4",
            "iso": "3200",
            "location": "images/22.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/23.jpg",
            "shutterSpeed": "1/50",
            "aperture": "4",
            "iso": "1600",
            "location": "images/23.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/24.jpg",
            "shutterSpeed": "1/50",
            "aperture": "4",
            "iso": "800",
            "location": "images/24.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/25.jpg",
            "shutterSpeed": "1/50",
            "aperture": "4",
            "iso": "400",
            "location": "images/25.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
    
    
    
    
    
    
        {
            "image": "images/26.jpg",
            "shutterSpeed": "1/50",
            "aperture": "8",
            "iso": "25600",
            "location": "images/26.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/27.jpg",
            "shutterSpeed": "1/50",
            "aperture": "8",
            "iso": "12800",
            "location": "images/27.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/28.jpg",
            "shutterSpeed": "1/50",
            "aperture": "8",
            "iso": "6400",
            "location": "images/28.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/29.jpg",
            "shutterSpeed": "1/50",
            "aperture": "8",
            "iso": "3200",
            "location": "images/29.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/30.jpg",
            "shutterSpeed": "1/50",
            "aperture": "8",
            "iso": "1600",
            "location": "images/30.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/31.jpg",
            "shutterSpeed": "1/30",
            "aperture": "8",
            "iso": "12800",
            "location": "images/31.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/32.jpg",
            "shutterSpeed": "1/30",
            "aperture": "8",
            "iso": "6400",
            "location": "images/32.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/33.jpg",
            "shutterSpeed": "1/30",
            "aperture": "8",
            "iso": "3200",
            "location": "images/33.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/34.jpg",
            "shutterSpeed": "1/30",
            "aperture": "8",
            "iso": "1600",
            "location": "images/34.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/35.jpg",
            "shutterSpeed": "1/30",
            "aperture": "8",
            "iso": "800",
            "location": "images/35.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/36.jpg",
            "shutterSpeed": "1/15",
            "aperture": "8",
            "iso": "12800",
            "location": "images/36.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/37.jpg",
            "shutterSpeed": "1/15",
            "aperture": "8",
            "iso": "4000",
            "location": "images/37.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/38.jpg",
            "shutterSpeed": "1/15",
            "aperture": "8",
            "iso": "2000",
            "location": "images/38.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/39.jpg",
            "shutterSpeed": "1/15",
            "aperture": "8",
            "iso": "1000",
            "location": "images/39.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/40.jpg",
            "shutterSpeed": "1/15",
            "aperture": "8",
            "iso": "500",
            "location": "images/40.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        
    
    
    
    
    
    
    
        {
            "image": "images/41.jpg",
            "shutterSpeed": "1/13",
            "aperture": "16",
            "iso": "25600",
            "location": "images/41.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/42.jpg",
            "shutterSpeed": "1/13",
            "aperture": "16",
            "iso": "12800",
            "location": "images/42.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/43.jpg",
            "shutterSpeed": "1/13",
            "aperture": "16",
            "iso": "6400",
            "location": "images/43.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
    
        {
            "image": "images/44.jpg",
            "shutterSpeed": "1/13",
            "aperture": "16",
            "iso": "2500",
            "location": "images/44.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/45.jpg",
            "shutterSpeed": "1/13",
            "aperture": "16",
            "iso": "1250",
            "location": "images/45.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/46.jpg",
            "shutterSpeed": "1/8",
            "aperture": "16",
            "iso": "12800",
            "location": "images/46.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/47.jpg",
            "shutterSpeed": "1/8",
            "aperture": "16",
            "iso": "6400",
            "location": "images/47.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/48.jpg",
            "shutterSpeed": "1/8",
            "aperture": "16",
            "iso": "3200",
            "location": "images/48.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },{
            "image": "images/49.jpg",
            "shutterSpeed": "1/8",
            "aperture": "16",
            "iso": "1600",
            "location": "images/49.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/50.jpg",
            "shutterSpeed": "1/8",
            "aperture": "16",
            "iso": "800",
            "location": "images/50.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/51.jpg",
            "shutterSpeed": "1/4",
            "aperture": "16",
            "iso": "6400",
            "location": "images/51.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/52.jpg",
            "shutterSpeed": "1/4",
            "aperture": "16",
            "iso": "3200",
            "location": "images/52.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/53.jpg",
            "shutterSpeed": "1/4",
            "aperture": "16",
            "iso": "1600",
            "location": "images/53.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/54.jpg",
            "shutterSpeed": "1/4",
            "aperture": "16",
            "iso": "800",
            "location": "images/54.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": [],             
            "uid": currentUser
        },
        {
            "image": "images/55.jpg",
            "shutterSpeed": "1/4",
            "aperture": "16",
            "iso": "320",
            "location": "images/55.jpg",
            "imageNotes": "",
            "exposure": "0",
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
              {value: "2", legend: ''},
              {value: "4", legend: ''},
              {value: "8", legend: ''},
            //   {value: "11", legend: ''},
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
              {value: "1/4", legend: ''},
              {value: "1/8", legend: ''},
              {value: "1/13", legend: ''},
              {value: "1/15", legend: ''},
              {value: "1/30", legend: ''},
              {value: "1/50", legend: ''},
              {value: "1/125", legend: ''},
              {value: "1/250", legend: ''},
              {value: "1/800", legend: ''}      
              
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
              {value: "100", legend: ''},
              {value: "200", legend: ''},
              {value: "320", legend: ''},
              {value: "400", legend: ''},
              {value: "500", legend: ''},
              {value: "640", legend: ''},
              {value: "800", legend: ''},
              {value: "1000", legend: ''},
              {value: "1250", legend: ''},
              {value: "1600", legend: ''},
              {value: "2000", legend: ''},
              {value: "2500", legend: ''},
              {value: "3200", legend: ''},
              {value: "4000", legend: ''},
              {value: "5000", legend: ''},
              {value: "6400", legend: ''},
              {value: "12800", legend: ''},
              {value: "25600", legend: ''}              
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
                        // $scope.imageLoop = imageLoop.image;                    
                        // repeatLoop.push(imageLoop);
                        // $scope.repeatLoop = repeatLoop;

                    // call factory function/method to firebase
                        console.log("imageLoop: ", imageLoop);                  
                        // console.log("repeatLoop: ", repeatLoop);
                        console.log("shutterClickFunction currentUser: ", currentUser);     
                        cardFactory.createCards(imageLoop, currentUser).then( function (response) {
                            getCards();
                        });
                }       
            });
        };

    // **********************************************************************
    // ****************************DELETE CARDS******************************
    // **********************************************************************
            
        $scope.deleteCard = function(cardId){
                cardFactory.deleteCard(cardId).then(function(response){
                    getCards();                               
                });   
            };
        
        // $scope.deleteUserCards = function(){
        //     console.log("deleteUserCards: ");
        //     cardFactory.deleteCard();
        // };
        getCards();
});