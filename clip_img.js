$(document).ready(function () {
    $("#img1,#img2,#img3").hover(function () {
        $(this).addClass("clip");
    }, function () {
        $(this).removeClass("clip");
    });

    $("#img_before1").hide(); $("#img_before2").hide(); $("#img_before3").hide();

    $("#img_container1").hover(function () {
        $("#img_before1").show();
    }, function () {
        $("#img_before1").hide();
    });
    $("#img_container2").hover(function () {
        $("#img_before2").show();
    }, function () {
        $("#img_before2").hide();
    });
    $("#img_container3").hover(function () {
        $("#img_before3").show();
    }, function () {
        $("#img_before3").hide();
    });
});