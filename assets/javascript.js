$(document).ready(function(){

    //firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBcjvJIRCUeYFgLljogtk0KEQqMu5xqQO4",
        authDomain: "train-scheduler-ec3e9.firebaseapp.com",
        databaseURL: "https://train-scheduler-ec3e9.firebaseio.com",
        projectId: "train-scheduler-ec3e9",
        storageBucket: "",
        messagingSenderId: "575236598402",
        appId: "1:575236598402:web:d969e51b1ace9427b5e29b"
      };

//1. initialize firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

let trainName = "";
let destination = "";
let frequency = 0;
let firstTrainTime = 0;

//2. create button for adding train schedule - then update the html + update the database
$(document).on("click", ".btn", function (event) {
    event.preventDefault();

    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    firstTrainTime = $("#firstTrainTime").val().trim();
    frequency = $("#frequency").val().trim();
    
})


//3. 

});