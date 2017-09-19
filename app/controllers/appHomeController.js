"use strict";

// $scope.firebase = $firebase(new Firebase("https://photo-tutor.firebaseio.com/"));

app.controller("appHomeCtrl", function($scope, $window, appHomeFactory, $location){
    
    console.log("app: ");

    const imageData = [
        {
            "image": "0",
            "shutterSpeed": "1/13",
            "aperture": "2.8",
            "iso": "320",
            "location": "images/0.jpg",
            "imageNotes": "Shallow depth of field, slow shutter speed, and low grain ISO."
        },
        {
            "image": "0",
            "shutterSpeed": "1/13",
            "aperture": "2.8",
            "iso": "1000",
            "location": "images/0.jpg",
            "imageNotes": ""
        },
        {
            "image": "1",
            "shutterSpeed": "1/60",
            "aperture": "2.8",
            "iso": "400",
            "location": "images/1.jpg",
            "imageNotes": "",
            "userNotes": []
        },
        {
            "image": "0",
            "shutterSpeed": "1/13",
            "aperture": "2.8",
            "iso": "100",
            "location": "images/0.jpg",
            "imageNotes": "",
            "userNotes": []
        },
        {
            "image": "0",
            "shutterSpeed": "1/13",
            "aperture": "2.8",
            "iso": "500",
            "location": "images/0.jpg",
            "imageNotes": "",
            "userNotes": []
        },
        {
            "image": "2",
            "shutterSpeed": "1/100",
            "aperture": "2.8",
            "iso": "50",
            "location": "images/2.jpg",
            "imageNotes": "Very low ISO",
            "userNotes": []
        },
        {
            "image": "3",
            "shutterSpeed": "1/20",
            "aperture": "2.8",
            "iso": "50",
            "location": "images/3.jpg",
            "imageNotes": "Slow shutter, very low ISO",
            "userNotes": []
        },
        {
            "image": "4",
            "shutterSpeed": "1/2000"  ,      
            "aperture": "2.8" ,
            "iso": "800",
            "location": "images/4.jpg",
            "imageNotes": "fast shutter, some grain due to mid ISO.",
            "userNotes": []
        }
    ];

     // **********************************************************************
    // ****************************SLIDER************************************
    // **********************************************************************

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
               
                const alllowedShutterSpeeds = matchingImages.map(image => {
                    return {
                        legend: image.shutterSpeed,
                        value: image.shutterSpeed  
                    };
                });
                // const alllowedShutterSpeeds = matchingImages.map(image => {
                //     return image.shutterSpeed === $scope.shutterSpeedSlider.value;
                // });
                // console.log("allowedshutters", alllowedShutterSpeeds);  
                $scope.shutterSpeedSlider.options.stepsArray = alllowedShutterSpeeds;
            }
        }
    };

    $scope.shutterSpeedSlider = {
        // value: 4000,
        options: {
            showTicksValues: true,
            showSelectionBar: true,
            stepsArray: [
              {value: "1/13", legend: 'slowest'},
              {value: "1/20", legend: ''},
              {value: "1/60", legend: ''},
              {value: "1/100", legend: ''},
              {value: "1/2000", legend: 'fast'}
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
                // console.log("matching images", matchingImages);
                // console.log("scope shutter: " + $scope.shutterSpeedSlider.value); // logs 'on end slider-id'
            
                // let allowedISO = matchingImages.map(image => {
                //     return image.shutterSpeed === $scope.isoSlider.value;
                // });
                let alllowedISO = matchingImages.map(image => {
                    return {
                        legend: image.iso,
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
              {value: "50", legend: 'low'},
              {value: "100", legend: 'low'},
              {value: "320", legend: ''},
              {value: "400", legend: ''},
              {value: "800", legend: ''},
              {value: "1000", legend: 'high'}
            ],

            id: 'iso-id',
            onEnd: function(id) {
                console.log('on end ' + id); // logs 'on end slider-id'
                
                // Update iso slider based on available iso
                let isoResponse = imageData;
                let matchingImages = isoResponse.filter(image => {
                    return image.iso === $scope.isoSlider.value;
                });  
                let alllowedISO = matchingImages.map(image => {
                    return {
                        legend: image.iso,
                        value: image.iso  
                    };
                });
                // console.log("iso images: ", matchingImages);
                
            }
    }
};

});



