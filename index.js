$(document).ready(function(e) {
    var i = 0;
    var len = $('.slide .textSlide .slide-txt').length;
    var timeLoop;
        timeLoop = setInterval(function(){             
            $('.slide .textSlide .slide-txt').eq(i).css("display","none"); // hide all the li elements
            i = i + 1;
            
            if(i >= len){
                 i = 0;
            }
            $('.slide .textSlide .slide-txt').eq(i).css("display","block"); // show the current li
         }, 2000);
});


