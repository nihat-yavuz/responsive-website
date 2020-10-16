// var fs = require('fs');
// fs.readFile('slider.js', "utf8", function(err, data) {
//   console.log(data)
//   let dataArray = data["images"]
//   let sliderData = ""
//   for (let i = 0; i < dataArray.length; i++) {
//     sliderData += '<img class="img-fluid" src="'+dataArray.url+'" alt="'+dataArray.title+'">';
//   }
//   $('#slider').append(sliderData)
// })



// const fs = require('fs');
//   let dataRead = JSON.parse(fs.readFileSync('..json/slider.json','utf-8'));
//   let sliderData = ""
//   for (let i = 0; i < dataRead.length; i++) {
//     sliderData += '<img class= "img-fluid" src="'+dataRead[i]["url"]+'"+alt="'+dataRead[i]["title"]+'">'
//   }
//   $('#slider').append(sliderData)



var app = angular.module('mulakat', []);

app.controller('MainCtrl', function($scope, $http) {
  $http.get('json/slider.json')
    .success(function(data, status, headers, config) {
      $scope.images = data.items;
    })
});