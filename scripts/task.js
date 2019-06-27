'use strict'

var firebaseConfig = {
  apiKey: "AIzaSyByN-TqO9wrkCamd37JrSZJ0EliHqZeq4Y",
  authDomain: "new-task-rabbit.firebaseapp.com",
  databaseURL: "https://new-task-rabbit.firebaseio.com",
  projectId: "new-task-rabbit",
  storageBucket: "new-task-rabbit.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.controller('TaskController', function($scope, $location) {

  var db = firebase.firestore()
  
  db.collection("tasks")
    .get()
    .then(function(snapshot) {
      $scope.tasks = snapshot.docs.map(elem => elem.data())
      $scope.$apply()
    })
    .catch(function(error) {
      console.log("Error: ", error)
    })


  $scope.postTask = function(task) {
    var tasksRef = db.collection("tasks")
    
    tasksRef.doc().set({
      title: task.title,
      description: task.description,
      total: task.total,
    })
    $location.path('/browse')
  }
})