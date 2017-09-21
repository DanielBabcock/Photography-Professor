"use strict";

/*
    handle data and functionality needed in list.html (sort of the main view)
    using todoFactory and userFactory to interact with the database
 */

app.controller("listCtrl", function($scope, $rootScope, cardFactory, appHomeFactory){

    // this is probably not a good idea.
    // the idea, though is to have this available
    // in the scope of the navBar and the list
    $rootScope.showSearch = true;

    // putting '$scope' in a const
    const vm = $scope;
    // vm.searchText = filterFactory;
    
    // initialize an array, bound to scope
    vm.tasks = [];
    
    // get all tasks from firebase, using the factory
    // and bind the returned array to scope (vm) 
    const showAllTasks = function(){
        let user = appHomeFactory.getCurrentUser();
        cardFactory.getAllTasks(user)
            .then(tasks => vm.tasks = tasks);
    };

    // called from list.html gets the itemId from $routeParams
    // and passes this to the factory, where an $http.delete removes is from the database
    vm.deleteTask = function(id){
        cardFactory.deleteTask(id)
            .then(()=>showAllTasks());
    };

    
    // called by and ng-change on a checkbox in list.html
    // updates the isComplete property in the database and re-renders the todos
    // because it's ng-model, the checkbox gets the value 'true' when checked,
    // we put this in an object and pass it to a factory method,
    // which uses $http.patch to update that particular value on this object
    vm.toggleDoneTask = function(thingy){
        cardFactory.editTask(thingy.id, {isCompleted:thingy.isCompleted})
            .then(()=>showAllTasks());
    };

    // when the controller is instantiated,
    // go ahead and show all tasks for the current user
    showAllTasks();

});