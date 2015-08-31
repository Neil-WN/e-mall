/**
 *
 * 购物车下拉效果
 */


$(function() {
    $(".cart").hover(function() {
        $(this).find("#cartList").show();
        $(this).children(".shop_text").find("span").removeClass("down").addClass("up");
    }, function() {
        $(this).find("#cartList").hide();
        $(this).children(".shop_text").find("span").removeClass("up").addClass("down");
    });
});