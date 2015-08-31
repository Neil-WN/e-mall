/**
 * 物流排名效果
 */
$(function() {
    $(".ranking_title li").click(function() {
        $(this).addClass("selected")
            .siblings().removeClass("selected");

        if($(this).hasClass("selected")) {
            switch($(this).index()) {
                case 0: $(".ranking_month").show().next().hide();
                    break;
                case 1: $(".ranking_year").show().prev().hide();
                    break;
            }
        }
    });
});