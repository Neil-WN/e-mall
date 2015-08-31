/*
*  商品菜单栏特效
*/

/*javascript原生代码实现*/
/*addLoadEvent(SubmenuShow);

function SubmenuShow() {
    var lists = document.getElementById("catLeft").getElementsByTagName("li");
    for(var i=0, len=lists.length; i<len; i++) {
        lists[i].i = i;
        lists[i].onmouseover = function() {
            this.className = "lihover";

            var liHeight = (this.i - 1) * 30;       //当前li的高度
            var subHeight = this.getElementsByTagName("div")[0].offsetHeight;           //子菜单悬浮框的高度
            var bottomHeight = this.getElementsByTagName("div")[0].style.top + subHeight;           //子菜单底部位置
            //如果子菜单的底部在li的上边，则需要将子菜单悬浮框往下移
            if(bottomHeight < liHeight) {
                this.getElementsByTagName("div")[0].style.top = liHeight + "px";
            }
        };

        lists[i].onmouseout = function() {
            this.className = "";
        };
    }
}*/


/*jQuery代码实现*/
$(function() {
    var $lists = $("#catLeft li");
    var $blank = $("<span class='blank'></span>");

    $lists.hover(function() {
        $(this).append($blank)
            .addClass("lihover").find(".submenu");

        var subTop = $(this).position().top * (-1);
        $(this).find(".submenu").css("top", subTop);

        var liHeight = $(this).height();
        var subHeight = $(this).find(".submenu").height();
        var bottomHeight = $(this).find(".submenu").position().top + subHeight;

        if(bottomHeight < liHeight) {
            $(this).find(".submenu").css("top", -liHeight);
        }
    }, function() {
        $(this).removeClass("lihover").find(".submenu");
    });
});