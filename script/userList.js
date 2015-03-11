/*
 * 用户登录下拉效果
 */

$(function() {
    $("#user").hover(function() {
        $(this).children("#userList").show();
        $(this).children("#userText").find("span").removeClass("down").addClass("up");
    }, function() {
        $(this).children("#userList").hide();
        $(this).children("#userText").find("span").removeClass("up").addClass("down");
    });
});