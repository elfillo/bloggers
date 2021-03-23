document.addEventListener('DOMContentLoaded', function(){
    $(function (){
        var showMenu = false;
        $('.burger').click(function(){
            showMenu = !showMenu;
            if(showMenu){
                /*$('.mobile_menu').css({
                    'display':'block',
                    'opacity':'1',
                    'transition':'0.2s'
                });*/
                $('.header-mobile').css({
                    'height': '100vh',
                });
                $('.burger').css({
                    'display':'block'
                });
                $('.burger span:nth-child(2)').css({
                    'opacity' : 0,
                    'transition':'0.2s'
                });
                $('.burger span:nth-child(1)').css({
                    'transform':'rotate(45deg)',
                    'position':'absolute',
                    'top':'50%',
                    'transition':'0.2s',
                    'border' : '2px solid #fff'
                });
                $('.burger span:nth-child(3)').css({
                    'transform':'rotate(-45deg)',
                    'position':'absolute',
                    'top':'50%',
                    'transition':'0.2s',
                    'border' : '2px solid #fff'
                });
            }else{
                $('.header-mobile').css({
                    'height': '0',
                });
                $('.burger').css({
                    'display':'flex'
                });
                $('.burger span:nth-child(1)').css({
                    'transform':'none',
                    'position':'static',
                    'transition':'0.2s',
                    'border' : '2px solid #1D1D1D'

                });
                $('.burger span:nth-child(3)').css({
                    'transform':'none',
                    'position':'static',
                    'transition':'0.2s',
                    'border' : '2px solid #1D1D1D'
                });
                $('.burger span:nth-child(2)').css({
                    'opacity' : 1,
                    'transition':'0.2s'
                });
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