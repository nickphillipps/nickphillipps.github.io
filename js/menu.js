$(document).ready(function(){ 

  
$('body').addClass('js');

$('#menuTrigger').on('click', function(e) {
    e.preventDefault();
    $('#mainNav').toggleClass('off-canvas-show');
    $('#menuTrigger').toggleClass('active');

});
});
