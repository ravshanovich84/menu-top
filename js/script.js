$(document).ready(function () {
    var $btn = $(".show_hide-menu");
    var $mane = $(".menu")
    var $trasnform = $(".show_hide-menu h3 i")
    $btn.click(function () {
        $trasnform.css({ transform: "rotate(180deg)", transition: "1s" });

        $mane.animate(

            {
                left: "0"

            },
            1000
        )

        $btn.click(function () {



            $mane.animate(
                {
                    left: "-300"

                },
                1000
            )

        })

        $btn.click(function () {
            $trasnform.css({ transform: "rotate(360deg)", transition: "1s" });
        })

    })
});