/*
* 促销广告切换栏
*/

/*javascript原生代码实现*/
/*
addLoadEvent(AdChange);

function AdChange() {
    var picList = document.getElementById("pic").getElementsByTagName("li");
    var numList = document.getElementById("num").getElementsByTagName("li");
    var timer = null;           //定义定时器
    var index = 0;              //定义索引值

    if(timer) {
        clearInterval(timer);
        timer = null;
    }

    timer = setInterval(autoChange, 3000);

    for(var i=0, len=numList.length; i<len; i++) {
        numList[i].name = i;
        numList[i].onmouseover = function(){
            changePicture(this.name);
        };
    }

    //自动切换图片和页签
    function autoChange() {
        index ++;
        //当索引值超过页签的长度的时候，归零
        if(index >= numList.length) {
            index = 0;
        }
        changePicture(index);
    }

    //切换图片
    function changePicture(currentIndex) {
        //遍历num下的所有li，消除所有li上的class以及相匹配的pic
        for(var j=0, len=picList.length; j<len; j++) {
            numList[j].className = "";
            picList[j].style.display = "none";
        }
        numList[currentIndex].className = "current";
        picList[currentIndex].style.display = "block";
        index = currentIndex;
    }
}
*/



/*jQuery代码实现*/
$(function() {
    var $numLists = $("#num li");
    var index = 0;                      //定义索引值
    var timer = null;                   //定义定时器

    //自动切换广告
    setTimer();

    $numLists.hover(function() {
        index = $numLists.index(this);
        showPic(index);
        if(timer) {
            clearInterval(timer);
        }
    }, function() {
        setTimer();
    });

    //使用定时器自动切换
    function setTimer() {
        timer = setInterval(function() {
            index ++;
            if(index >= $numLists.length) {
                index = 0;
            }
            showPic(index);
        }, 2000);
    }

    //显示不同的幻灯片
    function showPic(currentIndex) {
        $("#pic").find("li").eq(currentIndex).css("display", "block")          //显示相匹配的图片
            .siblings().css("display", "none");          //同辈的其他图片隐藏
        $("#num li").removeClass("current")             //先删除className
            .eq(currentIndex).addClass("current");             //后添加className
        index = currentIndex;
        
    }
});

