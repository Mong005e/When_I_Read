myApp.controller('ToyController', ['splitService', function(splitService){
  console.log('made it to the ToysController');

let vm = this;

 //testing route
vm.counter=splitService.counter;
vm.letterObjectArray= splitService.letterObjectArray;

vm.nextClick = function (){
  console.log('clicked next');

  splitService.getToyWords();
  // vm.letterObjectArray = [];
};

// take a word, break it down into individual letters
// letter sounds could be a switch statement that checks the letter - although how would you do long and short?
//each word could be an array of objects
//each object contains a letter, and sound.

//will also need an array of background images
//how can I check to see how many images we need?  letterArray.length?

//should split function taking words apart, and assigning sounds into a service






// vm.splitArray(['DOLLS', 'GAME', 'BALL']);
// vm.toWordObject(['D','O','L','L']);

}]);