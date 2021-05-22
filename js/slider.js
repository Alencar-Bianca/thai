$(function(){

    var indiceAtual = 0;
    var indiceMaximo = $('.main-banner .img').length;
    var delay = 5000;
    initSlider();

    function initSlider(){
        $('.main-banner .img').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider();
        },delay);
    }

    function alternarSlider(){
        $('.main-banner .img').eq(indiceAtual).fadeOut(2000);
        indiceAtual++;
        if(indiceAtual == indiceMaximo)
            indiceAtual = 0;
        $('.main-banner .img').eq(indiceAtual).fadeIn(2000);
    }
});