$(document).ready(function(){
    $(".dropdown-btn").on("click", function(){
        $(".dropdown-content").fadeToggle();
    });
    window.onclick = function(event) {
        console.log(event.target);
        if (!(event.target.matches('.dropdown-btn') 
        || event.target.matches(".heart-icon") 
        || event.target.matches(".dropdown-content")
        || event.target.matches(".dropdown-content-share-it")
        || event.target.matches(".dropdown-content-subscribe, .dropdown-content-subscribe h2, .dropdown-content-subscribe p, .dropdown-content-subscribe input, .dropdown-content-subscribe button")
        || event.target.matches(".dropdown-content div, .dropdown-content a")
        || event.target.matches(".share-it-icons"))) {
            $(".dropdown-content").fadeOut();
        }
    }
    $(".section-1-text").cycle("fade");
    const refreshRate = 1000 / 60;
    var maxXPosition = $(".section-2").width()*1.3;
    var positionX = [];
    var positionY = [];
    var fi = [];
    var startYPosition = $(".bubbles").position().top + $(".bubbles").height() * 0.5;
    var speedX = 0.5;
    var A = $(".bubbles").height() * 0.2;
    var W = (2 * 3.14) / ($(".section-2").width() * 0.98);
    for (var i = 0; i < 8; i++) {
        positionX[i] = 0 + i * maxXPosition/8;
        positionY[i] = startYPosition;
        fi[i] = Math.random()*1000;
        console.log(positionX[i]);
    }
    $(".bubble").css("left", 0);
    window.setInterval(() => {
        var newPosX, newPosY;
        $('.bubble').each(function(index){
            if ($(this).css("display") == "none") {
                $(this).show();
            }
            newPosX = positionX[index] + speedX;
            if (newPosX > maxXPosition * 0.95) {
                newPosX = -$(this).width();
            }
            positionX[index] = newPosX;
            newPosY = startYPosition + (A * Math.sin(W * positionX[index]) - $(this).width()/2) + 15 * Math.sin(0.02 * positionX[index] + fi[index]);
            $(this).css("transform", "translate(" + positionX[index] + "px, " + newPosY + "px)");
        });
    }, refreshRate);
    $(".slides").slick({
        dots: true,
        centerPadding :"50px",
        arrows: true,
        prevArrow: $(".slider-prev-btn"),
        nextArrow: $(".slider-next-btn")
    });
    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){
            $(this).children(".video").get(0).play();   
            $(this).children(".playpause").fadeOut();
        } else {       
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });
    $('.single-item').slick();
});