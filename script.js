$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.barra').addClass("sticky");
        }else{
            $('.barra').removeClass("sticky");
        }
    });
});