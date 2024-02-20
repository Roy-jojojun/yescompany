jQuery(document).ready(function () {
    $('.navi>li').mouseover(function () {
        $(this).find('.submenu').stop().slideDown(500);
        }).mouseout(function () {
             $(this).find('.submenu').stop().slideUp(500);
            })
    

            $('.imgslide a:gt(0)').hide();
            setInterval(function () {
            $('.imgslide a:first-child')
            .fadeOut(1000)
            .next('a')
            .fadeIn(1000)
            .end()
            .appendTo('.imgslide');
                },3000);

    $(".notice li:first-child").click(function () {
        $("#modal1").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal1").removeClass("active");
    });
    $(".notice li:second").click(function () {
        $("#modal2").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal2").removeClass("active");
    });
    $(".notice li:third").click(function () {
        $("#modal3").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal3").removeClass("active");
    });
    $(".notice li:last-child").click(function () {
        $("#modal4").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal4").removeClass("active");
    });

});