$(document).ready(function(){
  var glove = $('.boxing_glove');

  function setup(){
    glove.on('mouseover', setInitialClass, false)
  }
  
  setup();

});
