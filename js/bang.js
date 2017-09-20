$(function () {
    var index=0;
    //头部
    $("#top-nav").find("li").addClass("grey");
    $("#inner-nav").find("a").addClass("grey").hover(
        function(){
            $(this).addClass("underline");
        },
        function(){
            $(this).removeClass("underline");

        }
    );
    $("#logo li").children("a").addClass("grey").hover(
        function () {
            $(this).css("background-color","#f8f8f8");
        },
        function () {
            $(this).css("background-color","");
        }
    );
    //banner
    //轮播图
    var number=0;
    var timer=setInterval(slide,3500);
    var lef=0;
    var go=false;
    var page;
    function fn(num){
        if(!go){
            $("#banner>ul").animate({left:lef},2000);
            lef-=1200;
            if(lef==-4800){
                lef=0;
            }
            $("#banner>ol>li").children().eq(num).css("background-color","#666666");
            $("#banner>ol>li").eq(num).siblings().children().css("background-color","#c6c6c6");
        }
    }
    //自动
    function slide(){
        if(!go){
            number++;
            if(number==4){
                number=0;
            }
            fn(number);
        }
    }
    fn(number);
    //手动 圆点
    $("#banner>ol").children().click(
        function () {
            number=$(this).index();
            switch(number){
                case 0:
                    lef=0;
                    break;
                case 1:
                    lef=-1200;
                    break;
                case 2:
                    lef=-2400;
                    break;
                case 3:
                    lef=-3600;
                    break;
                case 4:
                    lef=-4800;
                    break;
            }
            go=false;
            fn(number);
            go=true;
        });
    $("#banner").hover(
        function () {
            go=true;
        },
        function () {
            go=false;
        });
    //banner二级菜单
    $("#list").find("li").hover(
        function () {
            $(this).children("div").css("display","block");
    },
        function () {
            $(this).children("div").css("display","none");
        }
    );
    $("#list").find("li").children("a").hover(
        function () {
            $(this).css({"background-color":"rgba(17,136,85,0.6)"});

        },
        function () {
            $(this).css({"background-color":""});

        }
    );
    $("#list").find("li").children("div").find("a").hover(
        function () {
            $(this).css({"color":"#118855"});
        },
        function () {
            $(this).css({"color":"#000"});
        }
    );
    $(".menu").find("a").hover(
        function () {
        $(this).css("border-color","#118855");
    },
        function () {
        $(this).css("border-color","#e0e0e0");
        }
    );
    //城市区县
    //    城市二级菜单
    $("#city-menu dl:nth-child(1)>dd").hover(
        function(){
            $(this).css({"color":"#ff6600","text-decoration":"underline"});
        },
        function(){
            $(this).css({"color":"#666666","text-decoration":"none"});
        }
    );
//    城市关闭按钮事件
    $("#city-menu h4>span").click(function(){
        $("#city-menu").css("display","none");
    });
//    城市点击显示下拉图片二级菜单事件
    $(".bj").click(function(){
        $("#city-menu").css("display","block");
        $("#county").css("display","none");
    });
    //城市点击文字出现二级菜单事件
    $(" .city>span").click(function(){
        $("#city-menu").css("display","block");
        $("#county").css("display","none");

    });
    //    县区关闭按钮事件
    $("#county h4>span").click(function(){
        $("#county").css("display","none");
    });
    //县区点击下拉图片出现二级菜单事件
    $(".area").click(function(){
        $("#county").css("display","block");
        $("#city-menu").css("display","none");
    });
    //县区点击文字出现二级菜单事件
    $(".districts>span").click(function(){
        $("#county").css("display","block");
        $("#city-menu").css("display","none");
    });
    //县区二级菜单houver事件
    $("#county a").hover(
        function(){
            $(this).css("text-decoration","underline");
        },
        function(){
            $(this).css("text-decoration","none");
        }
    );
    //    拼音部分的houver效果
    $(".letter>span").hover(
        function(){
            $(this).css({"color":"#ff6600","text-decoration":"underline"});
        },
        function(){
            $(this).css({"color":"#000000","text-decoration":"none"});
        }
    );
    //    拼音部分的首字母点击事件
    $(".letter>span:first-child").click(function(){
        $(this).css({"color":"#ff6600","font-weight":"bolder"});
        $(this).siblings().css({"color":"#000000","font-weight":"normal"});
        $("#initial>.first").css("display","block");
        $("#initial>.first").siblings().css({"display":"none"});
    });
    $(".letter>span:nth-child(2)").click(function(){
        $(this).css({"color":"red","font-weight":"bolder"});
        $(this).siblings().css({"color":"#000000","font-weight":"normal"});
        $("#initial>.two").css("display","block");
        $("#initial>.two").siblings().css({"display":"none"});
    });
    $(".letter>span:nth-child(3)").click(function(){
        $(this).css({"color":"#fc6621","font-weight":"bolder"});
        $(this).siblings().css({"color":"#000000","font-weight":"normal"});
        $("#initial>.three").css("display","block");
        $("#initial>.three").siblings().css({"display":"none"});
    });
//    首字母下的拼音hover效果
    $("#initial a").hover(
        function(){
            $(this).css({"color":"#ff6600","text-decoration":"underline"});
        },
        function(){
            $(this).css({"color":"#000000","text-decoration":"none"});
        }
    );

    //content
    //进入店铺
    $(".main-list").children("li").hover(
        function () {
            $(this).css("background-color","#F7F7F7");
            $(this).children("a").css("display","inline-block");
        },
        function () {
            $(this).css("background-color","#fff");
            $(this).children("a").css("display","none");
        }
    );
    //ajax获取数据
        function getData(){
            $.ajax({
                url:"js/bang.json",
                type:"get",
                dataType:"json",
                async:true,
                success: function (data) {
                    $("span").remove(".icon");
                    if(index==0){
                        $(".pre").hide();
                    }
                    for(var j=0;j<=4;j++){
                        $(".main-list>li").eq(j).children("img").attr("src",data[index].shop[j].img);
                        $(".main-list>li").eq(j).find(".title").children("a").text(data[index].shop[j].title);
                        $(".main-list>li").eq(j).find(".business").text(data[index].shop[j].business);
                        $(".main-list>li").eq(j).find(".address").text(data[index].shop[j].address);
                        $(".main-list>li").eq(j).find(".reparation").text(data[index].shop[j].reparation);
                        $(".main-list>li").eq(j).find(".identify").text(data[index].shop[j].identify);
                        $(".main-list>li").eq(j).find(".view").text(data[index].shop[j].view);
                        for(var k=0;k<data[index].shop[j].icon.num;k++){
                            var icon=$("<span></span>").addClass("icon");
                            icon.css({"vertical-align":"middle","display":"inline-block","width":"18px","height":"15px","background-image":"url("+data[index].shop[j].icon.src+")"});
                            $(".main-list>li").eq(j).find(".shop-class").after(icon);
                        }

                    }

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.readyState + XMLHttpRequest.status + XMLHttpRequest.responseText);
                }
            });
        }

    //店铺ajax
    $(".page>li").eq(0).children("a").css({"border":"none","color":"#fff"});
    $(".page").find("a").click(
        function () {
             index=$(this).html()-1;
            $(this).css({"color":"#fff","border":"none"}).addClass("orange");
            $(this).parent().siblings().children("a").removeClass("orange").css({"color":"#999999","border":"1px solid #999999"});
            $(".pre").css("display","inline-block");
            getData();
        }

    );
    //上一页下一页
    $(".pre").click(
        function () {
            index-=1;
            $(".page>li").eq(index).children("a").css({"color":"#fff","border":"none"}).addClass("orange").parent().siblings().children("a").removeClass("orange").css({"color":"#999999","border":"1px solid #999999"});
            getData();
        }
    );
    $(".next").click(
        function () {
            index+=1;
            $(".page>li").eq(index).children("a").css({"color":"#fff","border":"none"}).addClass("orange").parent().siblings().children("a").removeClass("orange").css({"color":"#999999","border":"1px solid #999999"});
            getData();
        }
    );
    //首页数据
    getData();

    //右侧hover效果
    $(".right-txt h4 a").hover(
        function () {
            $(this).css("text-decoration","underline");
        },
        function () {
            $(this).css("text-decoration","none");
        }
    );
    //footer滑动效果
    $("#footer-nav dd a").hover(
        function () {
            $(this).css("text-decoration","underline");
        },
        function () {
            $(this).css("text-decoration","none");
        }
    );
    $("#footer-last1 p a").hover(
        function () {
            $(this).css("text-decoration","underline");
        },
        function () {
            $(this).css("text-decoration","none");
        }
    );
});

