/**
 * 购买商品效果
 */


$(function() {
    var val = $("#amountInput").val();

    /*购买数量减少*/
    $("#amountSub").click(function() {
        if($(this).next().val() > 1) {
            val --;
            $(this).next().attr("value", val);
            if($(this).next().val() < 2){
                $(this).css({
                    "color": "#ddd"
                });
            }
        }
    });

    /*购买数量增加*/
    $("#amountAdd").click(function() {
        val ++;
        $(this).prev().attr("value", val);
        if($(this).prev().val() > 1) {
            $("#amountSub").css({
                "color": "#575757"
            });
        }
    });

    $("#yanbao li").click(function() {
        if($(this).hasClass("selected")) {
            $(this).removeClass("selected");
        }
        else {
            $(this).addClass("selected");
        }
    });

    /*添加到购物车*/
});