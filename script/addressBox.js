/**
 * 订单结算
 * 收货地址效果
 */

$(function() {
    $("#addrBox").find("#newAddrId").click(function() {
        $(this).parents(".list_info").next().show();
    });
});