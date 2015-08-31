/**
 * 商品、物流评论效果
 */

$(function() {
    var $commBox = $("#goodsList").siblings();

    $("#forComment").click(function() {
        if($commBox.is(":visible")) {
            $commBox.hide();
        }else {
            if($(this).text() == "已评价") {
                $(".none_comm").hide()
                    .next().show();
            } else if($(this).text() == "发表评价") {
                $(".has_comm").hide()
                    .prev().show();
            }
        }
    });

    $(".comm_star a").click(function() {
        $(this).addClass("active").siblings().removeClass("active");

        if($(this).hasClass("active")) {
            if($(this).parent().next().hasClass("result")) {
                $(this).parent().next().remove();
            }
            switch($(this).index()) {
                case 0:
                    $(this).parent().after("<span class='result'>不忍直视</span>");
                    $(this).parent().next().css({
                        "color": "#aaa",
                        "border-color": "#aaa"
                    });
                    break;
                case 1:
                    $(this).parent().after("<span class='result'>不满意</span>");
                    $(this).parent().next().css({
                        "color": "#aaa",
                        "border-color": "#aaa"
                    });
                    break;
                case 2:
                    $(this).parent().after("<span class='result'>一般咯</span>");
                    break;
                case 3:
                    $(this).parent().after("<span class='result'>还不错</span>");
                    break;
                case 4:
                    $(this).parent().after("<span class='result'>赞一个</span>");
                    $(this).parent().next().css({
                        "color": "red",
                        "border-color": "red"
                    });
                    break;
            }


        }
    });
});