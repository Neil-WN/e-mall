/**
 * 左侧导航列表效果
 */

$(function() {
    $("#goodsLeft").children("dl:lt(2)").children("dd").show();

    $("#goodsLeft dt").click(function() {
        if($(this).siblings().is(":visible")) {
            $(this).siblings().hide();
        } else {
            $(this).siblings().show();
        }
    });

   /* $(window).scroll(function() {
        var scrollHeight = $(window).scrollTop() + $(window).height();
        var topHeight = $(".header").height() + $(".mini_site").height() + $("#goodsLeft").height();

        if(scrollHeight > topHeight) {
            $("#goodsLeft").css({
                "position": "fixed",
                "top": -(topHeight - $(window).height())
            });
        } else {
            $("#goodsLeft").css("position", "relative");
        }
    });*/
});