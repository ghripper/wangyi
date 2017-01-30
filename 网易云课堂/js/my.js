/*
 * @Author: lenovo
 * @Date:   2016-07-26 21:38:17
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-07-31 17:01:04
 */
$(document).ready(function() {
    //c初始化
    var index = 0;
    var num = $('.slide-img img').length;

    $('.btn li').click(function() {
        $(this).addClass('active').siblings().removeAttr('class')
        index = $(this).index();
        $('.slide-img img').hide().eq(index).fadeIn(1800);
    });

    //左右点击事件
    $('#pre').click(function() {

        index = index <= 0 ? 3 : --index;
        $('.slide-img img').hide().siblings().eq(index).fadeIn(1800);
        $('.btn li').eq(index).addClass('active').siblings().removeAttr('class')
    });
    $('#next').click(function() {
        changeright();
    });

    function changeright() {
        index = index >= (num - 1) ? 0 : ++index;
        $('.slide-img img').hide().siblings().eq(index).fadeIn(1800);
        $('.btn li').eq(index).addClass('active').siblings().removeAttr('class')
    }
    //定时器
    var t = setInterval(changeright, 3200)
    $('.slide-img').hover(function() {
        clearInterval(t)
    }, function() {
        t = setInterval(changeright, 3200)
    });



    //导航弹出 出现
    $('.nav li.down').hover(function() {
        $('.nav .down-hide1').fadeIn(200)

    }, function() {
        $('.nav .down-hide1').fadeOut(200)

    });

    $(' .down .down-hide1 span').hover(function() {

        $('.down-hide1').parent('.down').css({
            background: '#31a030',
        })
        $('.down-hide1').parent('.down').find('a').css({
            color: '#fff',
        })
    }, function() {
        $('.down-hide1').parent('.down').css({
            background: '#fff',
        })

        $('.down-hide1').parent('.down').find('a').css({
            color: '#555',
        })



    });

    //图片放大
    $('.content-middle  dl.change img').hover(function() {
        var nheight = 1.15 * $(this).height();
        var nwidth = 1.15 * $(this).width()
        $(this).animate({
            height: nheight,
            width: nwidth,
            left: ("-" + (0.2 * $(this).width()) / 2),
            top: ("-" + (0.15 * $(this).height()) / 2)
        }, 500);
    }, function() {
        $(this).animate({
            height: 142,
            width: 225,
            left: 0,
            top: 0
        }, 500)
    });



})