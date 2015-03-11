/**
 * 商品筛选效果
 */

$(function() {
    //“更多”
    $(".moreCond .more").click(function() {
        if($(".brand_list").height() == 54) {
            $(this).parents(".brand_list").css("height", "113px");
            $(this).text("收起").next().removeClass("down").addClass("up");
        }
        else {
            $(this).parents(".brand_list").css("height", "54px");
            $(this).text("更多").next().removeClass("up").addClass("down");
        }
    });

    //“更多选项”
    var $toggleBtn = $(".goods_right .showmore");
    var $selection = $(".goods_right dl:gt(4)");
    $selection.hide();

    $toggleBtn.click(function() {
        //如果元素显示
        if($selection.is(":visible")) {
            $selection.hide();
            $(this).css("width", "73px")
                .find(".angle").removeClass("up").addClass("down")
                .next().text("更多选项");
        }
        else {
            $selection.show();
            $(this).css("width", "45px")
                .find(".angle").removeClass("down").addClass("up")
                .next().text("收起");
        }
    });
});