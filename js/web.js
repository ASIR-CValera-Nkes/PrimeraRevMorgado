/**
 * Created by Usuario on 11/10/2016.
 */

var zones = [],
    lastClass = "Start";

window.onload = function () {
    var m = document.getElementsByClassName("scroll-place"),
        i = 0;
    for(; i < m.length; ++i)
        zones[Math.round(($(m[i]).offset().top - 50) / 100) * 100] = m[i].dataset.place;
};

$(document).ready(function ()
{

    $("#content").hover(
        function () {
            $('#content').animate({ opacity: 0.95, duration: 1000 });
        }, function () {
            $('#content').animate({ opacity: 0.8, duration: 1000 });
        }
    );

    var animateMe = function(targetElement, speed, len, del)
    {
        $(targetElement).animate(
            {
                'margin-top': len + 'px'
            },
            {
                duration: speed
            }
        ).delay(del).animate(
            {
                'margin-top': -len + 'px'
            },
            {
                duration: speed,
                complete: function(){
                    animateMe(this, speed, len, del);
                }
            }
        ).delay(del);
    };

    animateMe($('#centered_arrow span'), 500, 5, 50);

    $(".scroll-nav").click(function () {
        var dest = $(this).data('dest');
        $('html, body').animate({
            scrollTop: $(".scroll-place[data-place='" + dest + "']").offset().top - 50
        }, 1000);
    });

    $("#go-top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 3000);
    });

    var fadeChars = function(target, str, dur)
    {
        if(typeof dur === 'undefined') dur = 100;
        var q = jQuery.map(str.split(''), function (letter)
        {
            return $('<span>'+letter+'</span>');
        });

        var dest = $(target),
            c = 0,
            i = setInterval(function ()
            {
                q[c].appendTo(dest).hide().fadeIn(dur);
                ++c;
                if (c >= q.length) clearInterval(i);
            }, dur);

    };

    $("#slogan_title").hide().show("slide", { direction: "down" }, 1000);
    //$("#slogan_text").hide().delay(1000).show("slide", { direction: "left" }, 2000);
    $("#slogan_text").html("");
    setTimeout(function() {
        fadeChars($("#slogan_text"), "Portafolio & blog especializado en programación, diseño y desarrollo web");
    }, 1000);

    $(window).scroll(function ()
    {
        var scroll = Math.round($(this).scrollTop() / 100) * 100;
        if(scroll in zones)
        {
            $(".menu-func[data-dest='" + lastClass + "']").parent().attr('class', '');
            $(".menu-func[data-dest='" + zones[scroll] + "']").parent().attr('class', 'active');
            lastClass = zones[scroll];
            //Bugged height effect
            /*var l = $("#" + lastClass),
                h = l.height();
            l.css('height', h + 'px');
            l.hide().delay(1000).show("slide", { direction: "left" }, 2000);*/
        }
    });

    var img_length = 4,
        index = Math.floor(Math.random() * img_length);

    $('.mask').animate({opacity: 1}, 500, function(){
        //index = (index + 1) % img_length;
        // in presentacion element change bg images
        $('.pres').css("background", "url('images/back"+index+".jpg') center center no-repeat fixed");
    }).animate({opacity: 0}, 500);

    /*var img_length = 4,
        index = 0;

    (function changeBG(){
        // mask element only for transition
        $('.mask').delay(11000).animate({opacity: 1}, 300, function(){
            index = (index + 1) % img_length;
            // in presentacion element change bg images
            $('.pres').css("background", "url('images/back"+index+".jpg') center center no-repeat fixed");
        }).animate({opacity: 0}, 300);
        setTimeout(changeBG, 1000);
    })();*/

});