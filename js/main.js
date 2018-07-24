$(document).ready(function(){
    $('path').hover(function(){
        $('.description').html($(this).attr('data-description'));
        $('.description').fadeIn();
    });
});