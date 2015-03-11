/**
 * 登录界面效果
 */

$(function() {
    $(".login_txtbox input").focus(function() {
        $(this).siblings("label").hide()
            .parent().css("border", "1px solid #ffb400");
    }).blur(function() {
        if($(this).val() == "") {
            $(this).siblings("label").show();
        }
        $(this).parent().css("border", "1px solid #ccc");
    });
});