/*
 * 用户登录效果
 */

$(function() {
    $("#user").hover(function() {
        $(this).children("#userList").slideDown("slow");
        $(this).children("#userText").find("span").removeClass("down").addClass("up");
    }, function() {
        $(this).children("#userList").slideUp("slow");
        $(this).children("#userText").find("span").removeClass("up").addClass("down");
    });
});