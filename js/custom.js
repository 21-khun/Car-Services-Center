var image = document.getElementById('photo').getElementsByClassName('photo1');
for (var i = 0; i < image.length; i++) {
    image[i].onmouseover = function() {

        this.style.border = "2px solid black";
        this.style.boxShadow = "10px -5px 10px gray";
    }
    image[i].onmouseout = function() {

        this.style.border = "0px";
        this.style.boxShadow = "0px 0px 0px white";
    }


}



$(document).ready(function() {
    $('.btn-group .btn').click(function() {
        $(this).css({
            'background-color': 'red',
            'color': 'white'

        }).siblings().css({
            'background-color': 'white',
            'color': 'red'
        })
    })



    $('.btn').click(function() {
        const value = $(this).attr('data-filter');
        if (value == "all") {
            $('.itemBox').show('1000');


        } else {

            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');

        }

    })
    $('.list-inline-item').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })




    $('#imageCarousel').carousel();

    $('.collapse').on('shown.bs.collapse', function() {
        $(this).parent().find('.glyphicon').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
    }).on('hidden.bs.collapse', function() {
        $(this).parent().find('.glyphicon').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
    })




})