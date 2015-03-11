/**
 * 注册界面效果
 */
/*
* 未解决问题：
* 1. 点击txtbox时，提示符消失，当焦点失去的时候，如果txtbox中为空，在恢复
*    默认的提示符。问题在于，当已经填写了内容时，再清空txtbox，此时失去焦点时
*    默认的提示符不会出现。
* */
$(function() {
    var $passwd = $(".passwd");
    var $confirm = $(".confirm");

    /*菜单切换*/
    $("#regMenu li").click(function() {
        var $menu =  $(this).parents("#regMenu");

        $(this).addClass("selected")
            .siblings().removeClass("selected");
        //切换至相应的注册表单
        /*邮箱注册*/
        if($(this).is(".email_menu")) {
            $menu.siblings(".email").show()
                .next().hide();
        }
        /*手机注册*/
        else if($(this).is(".phone_menu")){
            $menu.siblings(".phone").show()
                .prev().hide();
        }
    });

    /*点击txtbox时，提示字符消失，出现边框*/
    $(".reg_box .reg_txtbox input").focus(function() {
        $(this).siblings(".lab_note").hide()
            .prev().css("border", "2px solid #addd77");
    }).blur(function() {
        //定义正则表达式变量
        var emailPat = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;            //邮箱匹配

        //当txtbox的值为空时
        if($(this).val() === "") {
            $(this).siblings(".lab_note").show();
        }

        //验证手机号
        if($(this).is(".mobilephone")) {
            if($(this).val() === "") {
                showError($(this), "手机号码不能为空！");
            }
            else if($(this).val().length < 11) {
                showError($(this), "格式错误，请输入正确的手机号码！");
            }
            else {
                showCorrect($(this));
            }
        }
        //验证用户名
        if($(this).is(".username")) {
            if($(this).val() === "") {
                showError($(this), "用户名不能为空！");
            }
            else if($(this).val().length<6) {
                showError($(this), "长度小于6，请输入正确的用户名！");
            }
            else {
                showCorrect($(this));
                /*$.post("http://192.168.200.28:8080/ShoppingMallOnstage/user/register.jsp", {userName: $(this).val()}, function(data) {
                    var eValue = JSON.parse(data.info);
                    if(eValue === 0) {
                        showCorrect($(this));
                    }else {
                        showError($(this), "用户名已存在！");
                    }

                } );*/
            }
        }
        //验证邮箱
        if($(this).is(".email")) {
            if($(this).val() === "") {
                showError($(this), "邮箱不能为空！");
            }
            else if($(this).val()!="" && !emailPat.test($(this).val())) {
                showError($(this), "请输入正确的email地址！");
            }
            else {
                showCorrect($(this));
            }
        }
        //验证设置密码
        if($(this).is(".passwd")) {
            if($(this).val() === "") {
                showError($(this), "密码不能为空！");
            }
            else if($(this).val().length<6) {
                showError($(this), "密码太短，请重新设置密码！");
            }
            else {
                showCorrect($(this));
            }
        }
        //验证确认密码
        if($(this).is(".confirm")) {
            if($(this).val() != $passwd.val() || $(this).val()==""){
                showError($confirm, "两次输入密码不一样！");
            }
            else if($(this).val() === $passwd.val()){
                showCorrect($confirm);
            }
        }
        if($confirm.val() != $passwd.val() && $confirm.val() !=""){
            showError($confirm, "两次输入密码不一样！");
        }

        //输入信息错误时，显示错误信息及效果
        function showError(target, errMsg) {
            target.css("border", "2px solid #ff1427")
                .siblings("img").detach(".img_correct")
                .parent().append("<span class='formtips onError'>" + errMsg +"</span>");

        }

        //输入信息正确时，显示正确信息及效果
        function showCorrect(target) {
            target.css("border", "none")
                .parent().append("<img class='img_correct' src='image/icon/yes.png'/>")
                .find("span").detach(".formtips");
        }
    });

    /*验证码*/
    $(".verify").focus(function() {
        $(this).css("border", "2px solid #addd77");
    }).blur(function() {
        $(this).css("border", "none");
    });


});