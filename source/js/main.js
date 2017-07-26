$(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
            // console.log($('.item.active'));
                 var id = $('#myCarousel .item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});

// Smooth Scroll
$(document).on('click', 'a', function(event, BODY_WIDTH){
    // event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top + (BODY_WIDTH > 1120 ? 0 : -100)
    }, 500);
});

function tabChange(e) {

var dataAttrValue = e.getAttribute('data-tabs');

$("p.tabs.active").removeClass('active ').hide();
$("p." + dataAttrValue).addClass('active').show();

}

