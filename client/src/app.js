var EmployeeView = require('./views/employeeView');




var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest() ;
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}


var requestComplete = function() {
  if(this.status !== 200) return;
  var employeeString = this.responseText;
  var employees = JSON.parse(employeeString);
  var employeeView = new EmployeeView(employees); // EmployeeView is a function from employeeView.js
}

// this function will be activated on event load, it's setted with an url and a function that makes a request for 'url', and that activates the function requestComplete
var app = function(){
  var url = "http://localhost:3000/employees"; // we're accessing our own api, otherwise we could have other webaddress here
  makeRequest(url, requestComplete);
}


window.addEventListener('load', app);