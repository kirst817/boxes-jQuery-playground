

$(document).on('ready', function(){
  console.log("Ready");

  var secretBox = $('#secretBox');
  secretBox.css('background-color', 'white');
  secretBox.append('<h1>Secret Box!</h1>')

  $('#row1').children().addClass('boxType3');

  $('#row4 div:last-child').hide();

  $('#container').on('click', function(event){
    console.log(event.pageX, event.pageY);

  });

  $('.boxType1').append('<a href="http://www.galvanize.com">Galvanize</a>').on('click',
  function(e){
   e.preventDefault();
  $('.boxType1')
      alert("You can never leave the page");
  });

  $('.box').on('click', function(){
    if (! $(this).html()){
    $(this).append('<img src="http://www.pawderosa.com/images/puppies.jpg" height="100px">');
} else {
  $(this).html('');
}

});
