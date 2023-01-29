$(document).ready(function () {
    var $show = $(".show");
    var $i = $(".show i");
    var $hide = $("header .hide");
    var $section = $("section");
    var $success = $("section .success");
    var $footer = $("footer");


    $show.click(function () {
        $section.css({
            display: "block",
        })

        $i.css({
            transform: "rotate(90deg)", transition: "1s",
        });
    });
    $show.click(function () {
        $hide.css({
            display: "block",
        })

        $show.css({
            display: "none",
        })
    });
    $hide.click(function () {
        $show.css({
            display: "block",
        })

        $hide.css({
            display: "none",
        })

        $section.css({
            display: "none",
        })

        $footer.css({
            display: "none",
        })

        $i.css({
            transform: "rotate(270deg)", transition: "1s",
        });
    });
    $success.click(function () {
        $footer.css({
            display: "block",
        })

    });
});
