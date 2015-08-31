/**
 * Created by Neil on 2015/8/16.
 */

window.onload = function() {
    ListShow();
    MenuShow();
};

/*展示下拉列表*/
function ListShow() {
    var user = document.getElementById("user");
    var cart = document.getElementById("cart");

    if(addEventListener) {
        user.addEventListener("mouseenter", subItemShow, false);
        user.addEventListener("mouseleave", subItemHide, false);
        cart.addEventListener("mouseenter", subItemShow, false);
        cart.addEventListener("mouseleave", subItemHide, false);
    } else if(attachEvent) {
        user.attachEvent("onmouseenter", subItemShow);
        user.attachEvent("onmouseleave", subItemHide);
        cart.attachEvent("onmouseenter", subItemShow);
        cart.attachEvent("onmouseleave", subItemHide);
    }


    function subItemShow() {
        this.lastElementChild.style.display = "block";
    }

    function subItemHide() {
        this.lastElementChild.style.display = "none";
    }
}



function MenuShow() {
    var cate = document.getElementById("catLeft");
    var lists = cate.getElementsByTagName("li");

    for(var i= 0, len=lists.length; i<len; i++) {
        lists[i].item = i;
        
        if(addEventListener) {
            lists[i].addEventListener("mouseenter", subMenuShow, false);
            lists[i].addEventListener("mouseleave", subMenuHide, false);
        } else if(attachEvent) {
            lists[i].attachEvent("onmouseenter", subMenuShow);
            lists[i].attachEvent("onmouseleave", subMenuHide);
        }
    }

    function subMenuShow() {
        this.className = "lihover";
        var liHeight = (this.item - 1) * 30;                //当前li的高度
        //子菜单的高度
        var subHeight = this.getElementsByTagName("div")[0].offsetHeight;        
        //子菜单底部位置
        var bottomHeight = this.getElementsByTagName("div")[0].style.top + subHeight;
        console.log(bottomHeight + ", " + liHeight);

        if(bottomHeight < liHeight) {
            this.getElementsByTagName("div")[0].style.top = liHeight + "px";
        }
    }

    function subMenuHide() {
        this.className = "";
    }
}