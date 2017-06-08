myApp.controller('ToyController', ['splitService', function(splitService){
  console.log('made it to the ToysController');
  let vm = this;



  vm.theSound = function (url){
    console.log('reached theSound with url:', url);
    vm.PlaySound = new Audio ();
    vm.PlaySound.src = url;
  };

  splitService.getToyWords();

  vm.word = splitService.toysArray[splitService.counter];

  vm.toyLetters = splitService.letterObjectArray;

  vm.toyClick = function(){
    vm.word = '';
    vm.toyLetters =[];
    console.log('Array at click!!!', vm.toyLetters);
    splitService.counter = splitService.counter +1;
    if (splitService.counter < splitService.toysArray.length) {
      console.log('LESS THAN');
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.toyLetters = splitService.letterObjectArray;
    } else {
      splitService.counter = 0;
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.toyLetters = splitService.letterObjectArray;
    }
    vm.word = splitService.toysArray[splitService.counter];
};






}]);
