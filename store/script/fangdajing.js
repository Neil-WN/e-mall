/**
 * 商品图片的放大镜效果
 */

$(function() {
    $(".small_img").hover(function() {
        $(this).find(".float_box").show()
            .parent().next().show();
    }, function() {
        $(this).find(".float_box").hide()
            .parent().next().hide();
    }).mousemove(function(e) {
        var ev = e;
        var voidLeft = $(".info_left").offset().left;

        if(ev.pageX < (voidLeft + 98) ) {
            ev.pageX = voidLeft + 98;
        }
        else if(ev.pageX > (voidLeft + 400)) {
            ev.pageX = voidLeft + 400;
        }

        if(ev.pageY < 290) {
            ev.pageY = 290;
        }
        else if(ev.pageY > 540) {
            ev.pageY = 540;
        }

        /*鼠标移动时float_box的坐标*/
        var leftPosition = ev.pageX - $(".info_left").offset().left - $(".float_box").width() / 2;
        var topPosition = ev.pageY - $(".info_left").offset().top - $(".float_box").height() / 2;
        /*鼠标移动时float_box的相对位移*/
        var presentX = leftPosition / ($(this).width() - $(".float_box").width());
        var presentY = topPosition / ($(this).height() - $(".float_box").height());



        if(leftPosition < 0) {
            leftPosition = 0;
        }
        else if(leftPosition > ($(this).width() - $(".float_box").width())) {
            leftPosition = ($(this).width() - $(".float_box").width());
        }

        if(topPosition < 0) {
            topPosition = 0;
        }
        else if(topPosition > ($(this).height() - $(".float_box").height())) {
            topPosition = ($(this).height() - $(".float_box").height());
        }

        $(".float_box").css({
            "left": leftPosition + "px",
            "top": topPosition + "px"
        });

        $(".big_img img").css({
            "left": - presentX * ($(".big_img img").width() - $(".big_img").width()) + "px",
            "top": - presentY * ($(".big_img img").height() - $(".big_img").height()) + "px"
        });
    });


});