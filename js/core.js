document.addEventListener('DOMContentLoaded', function(){
    $(function (){
        var showMenu = false;
        $('.burger').click(function(){
            showMenu = !showMenu;
            if(showMenu){
                $('.header').addClass('header_open-mobile-menu');
                $('.burger').addClass('burger_is-active');
                $('body').addClass('no-scroll');
            }else{
                $('.header').removeClass('header_open-mobile-menu');
                $('.burger').removeClass('burger_is-active');
                $('body').removeClass('no-scroll');
            }
        });

        $('.close-modal').click(function () {
           $('.modal').css({'display' : 'none'});
        });

        $('.callback').click(function () {
            $('.modal').css({'display' : 'flex'});
        })
    });
});