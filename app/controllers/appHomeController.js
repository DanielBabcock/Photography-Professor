"use strict";

// $scope.firebase = $firebase(new Firebase("https://photo-tutor.firebaseio.com/"));

app.controller("appHomeCtrl", function($scope, $window, appHomeFactory, $location){
    
    // console.log("app: ");

    const settingsArray = [];
    const repeatLoop = [];


    const imageData = [
        {
            "image": "images/0.jpg",
            "shutterSpeed": "1/13",
            "aperture": "2.8",
            "iso": "320",
            "location": "images/0.jpg",
            "imageNotes": "Shallow depth of field, slow shutter speed, and low grain ISO.",
            "exposure": "-2",
            "userNotes": []
        },
        {
            "image": "images/0.jpg",
            "shutterSpeed": "1/13",
            "aperture": "2.8",
            "iso": "1000",
            "location": "images/0.jpg",
            "imageNotes": "",
            "exposure": "-1",
            "userNotes": []
        },
        {
            "image": "images/1.jpg",
            "shutterSpeed": "1/60",
            "aperture": "2.8",
            "iso": "400",
            "location": "images/1.jpg",
            "imageNotes": "",
            "exposure": "0",
            "userNotes": []
        },
        {
            "image": "images/2.jpg",
            "shutterSpeed": "1/13",
            "aperture": "2.8",
            "iso": "500",
            "location": "images/0.jpg",
            "imageNotes": "",
            "exposure": "+1",
            "userNotes": []
        },
        {
            "image": "images/3.jpg",
            "shutterSpeed": "1/100",
            "aperture": "2.8",
            "iso": "50",
            "location": "images/2.jpg",
            "imageNotes": "Very low ISO",
            "exposure": "+2",
            "userNotes": []
        },
        {
            "image": "images/4.jpg",
            "shutterSpeed": "1/20",
            "aperture": "2.8",
            "iso": "50",
            "location": "images/3.jpg",
            "imageNotes": "Slow shutter, very low ISO",
            "exposure": "-2",
            "userNotes": []
        },
        {
            "image": "images/logo.png",
            "shutterSpeed": "1/2000"  ,      
            "aperture": "2.8" ,
            "iso": "800",
            "location": "images/4.jpg",
            "imageNotes": "fast shutter.",
            "exposure": "-2",
            "userNotes": []
        }
    ];

    // **********************************************************************
    // ****************************SLIDER************************************
    // **********************************************************************

    // Legends are screwed up on SS and ISO
    $scope.apertureSlider = {
        // value: 16,
        options: {
            showTicksValues: true,
            showSelectionBar: true,
            stepsArray: [
              {value: "2.8", legend: 'Very shallow'},
              {value: "4", legend: 'Shallow'},
              {value: "5.6", legend: 'Average'},
              {value: "11", legend: 'Deep'},
              {value: "16", legend: 'Very deep'}
            ],

            id: 'aperture-id',
            onEnd: function(id) {
                // API Call here
                
                // Update, filter based on Aperture.
                const response = imageData;
                const matchingImages = response.filter(image => {
                    return image.aperture === $scope.apertureSlider.value;

                });
               
                // passing info to empty array
                    settingsArray.splice(0, 1, $scope.apertureSlider.value);
                    // console.log("settingsArray:", settingsArray);

                const allowedShutterSpeeds = matchingImages.map(image => {
                    return {
                        // legend: image.shutterSpeed,
                        // legend: $scope.shutterSpeedSlider.options.stepsArray.legend,
                        value: image.shutterSpeed  
                    };
                });
                // const alllowedShutterSpeeds = matchingImages.map(image => {
                //     return image.shutterSpeed === $scope.shutterSpeedSlider.value;
                // });
                // console.log("allowedshutters", alllowedShutterSpeeds);  
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
              {value: "1/13", legend: 'Slow'},
              {value: "1/20", legend: 'Less Slow'},
              {value: "1/60", legend: 'less slow'},
              {value: "1/100", legend: 'avg'},
              {value: "1/2000", legend: 'Fast'}
            ],
            id: 'shutter-id',
            // API Call here

            onEnd: function(id) {
                // console.log('on end ' + id); // logs 'on end slider-id'

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
        // value: 6400,
        options: {
            showTicksValues: true,
            showSelectionBar: true,
            stepsArray: [
              {value: "50", legend: 'low grain'},
              {value: "100", legend: 'low grain'},
              {value: "320", legend: 'some noise'},
              {value: "400", legend: 'some noise'},
              {value: "800", legend: 'more noise'},
              {value: "1000", legend: 'high grain'}
            ],

            id: 'iso-id',
         
            onEnd: function(id) {

                // passing info to empty array
                settingsArray.splice(2, 1, $scope.isoSlider.value);
                // console.log("settingsArray:", settingsArray);

            }
            }
        };
        
    // Shutter button function here. It passes selected settings 
        // from the above filters to the imageCardFactory/imageCardController
        // and outputs the corresponding image from database to the card.html
        // as a card.
        // This is what is in the partial/appHome.html 
        // <input ng-click="shutterClickFunction()" type="image" 
        // src="images/shutterBtn.jpeg" alt="Submit">
        
        // $scope.count = 0;
        $scope.shutterClickFunction = function() {
            
            imageData.forEach(function(imageLoop){
                if(imageLoop.aperture === settingsArray[0] && imageLoop.shutterSpeed === settingsArray[1] && imageLoop.iso === settingsArray[2]){
                     // do this
                    $scope.imageLoop = imageLoop.image;
                    // console.log("imageLoop: ", imageLoop);
                    
                    
                    repeatLoop.push(imageLoop);
                    $scope.repeatLoop = repeatLoop;

                    // console.log("repeatLoop: ", repeatLoop);
  
                }
                    
            });

            console.log("shutter was clicked: ");
        };

        // delete card function

        $scope.deleteCardFunction = function(item){
            $scope.repeatLoop.splice(item, 1);
            repeatLoop.splice(item, 0);
            console.log("item: ", item);
        }



});



