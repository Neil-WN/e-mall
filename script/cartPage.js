/**
 * 购物车页面效果
 */

$(function() {


    getTotalPrice();

    /*单选*/
    $(".item_single input").click(function() {
        if($(this).not(":checked")) {
            $(".checkall").prop("checked", false);
        }
        getTotalPrice();
    });

    /*全选*/
    $(".checkall").click(function() {
        if($(this).is(":checked")) {
            $(".checkbox").prop("checked", "checked");
            getTotalPrice();
        }
        else {
            $(".checkbox").prop("checked", false);
            getTotalPrice();
        }
    });


    /*商品数量增加*/
    $(".item_single").find(".amount_add").click(function() {
        var value = $(this).prev().val();
        if($(this).prev().val() < 0) {
            $(this).siblings(".amount_sub").css({"color": "#eee"});
        }
        else {
            $(this).siblings(".amount_sub").css({"color": "#575757"});
        }
        value ++;
        $(this).prev().attr("value", value);
        getTotalPrice();
    });

    /*商品数量减少*/
    $(".item_single").find(".amount_sub").click(function() {
        var value = $(this).next().val();
        if($(this).next().val() >= 1) {
            value --;
        }
        if($(this).next().val() <= 1) {
            $(this).css({"color": "#eee"});
        }
        else {
            $(this).css({"color": "#575757"});
        }
        $(this).next().attr("value", value);
        getTotalPrice();
    });

    /*删除单件商品*/
    $(".item_single").find(".cart_remove").click(function() {
        var conf = confirm("确定要从购物车中删除该商品吗？");
        if(conf) {
            $(this).parents(".item_single").remove();
            $(".cart_removed").css("display", "block")
                .find(".r_name a").html();
        }

    });

    /*删除所有选中商品*/
    $(".cart_floatbar").find(".remove_all").click(function() {
        var conf = confirm("确定要从购物车中删除所选中的商品吗？");
        if(conf) {
            if($(".checkbox").is(":checked")) {
                $(".checkbox:checked").parents(".item_single").remove();
            }
        }
    });

    /*去结算*/
    $(".cart_submit").click(function() {
            if($(".item_single").find(".checkbox").is(":checked")) {
                $(this).attr("href", "order.html");
            }
            else {
                alert("您未选中所需购买商品，请重新勾选商品。");
            }
    });

    /*计算总价*/
    function getTotalPrice() {
        var totalPrice = 0,
            quantity = 0,
            singlePrice = 0,
            sumPrice = 0;

        $(".item_single").each(function() {
            quantity = parseInt($(this).find(".amount_input").val());               //单品的数量
            singlePrice = parseFloat($(this).find(".p_price").html()).toFixed(2);               //单品的价格，保留2位小数
            sumPrice = singlePrice * quantity;
            $(this).find(".p_sum").html(sumPrice.toFixed(2).toString());

            if($(this).find(".checkbox").is(":checked")) {
                totalPrice += sumPrice;             //计算总价
                $(this).addClass("item_selected");              //添加选中背景
            }
            else {
                $(this).removeClass("item_selected");               //添加未选中背景
            }
        });
        $(".price_sum .sumPrice em").text(totalPrice.toFixed(2).toString());
    }

});
