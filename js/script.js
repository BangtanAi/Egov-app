$(function(){
    $('.menu__link').on('click', function(){
        $('.submenu', this).toggleClass('active');
    });
    $('.menu__btn').on('click', function(){
        $('.submenu-main').toggleClass('actived');
    });
});



