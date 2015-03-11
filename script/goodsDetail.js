/**
 * 商品详情
 */

$(function() {
    $("#goodsTab a").click(function() {
        $(this).addClass("selected")
            .siblings().removeClass("selected");

            if($(this).hasClass("selected")) {
                switch($(this).index()) {
                    case 0: $("#goodsDetail").children("div:eq(0)").show()
                        .siblings().hide();
                        break;
                    case 1: $("#goodsDetail").children("div:eq(1)").show()
                        .siblings().hide();
                        break;
                    case 2: $("#goodsDetail").children("div:eq(2)").show()
                        .siblings().hide();
                        break;
                }
            }
    });

    $(".detail_desc").find(".standard_more").click(function() {
        $("#goodsTab").find(".tab_param").addClass("selected")
            .prev().removeClass("selected");
        $(".detail_desc").hide()
            .next().show();
    });

    $(window).scroll(function() {
        var scrollHeight = $(window).scrollTop();
        var topHeight = $(".header").height() + $(".mini_site").height() + $(".detail_info").height() + $("#goodsTab").height();

        if(scrollHeight > topHeight) {
            $("#goodsTab").css({
                "position": "fixed",
                "top": 0
            });
        } else {
            $("#goodsTab").css("position", "relative");
        }
    });
});