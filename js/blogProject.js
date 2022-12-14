const responsive = {
    0: {
        items: 1
    },

    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {
    $nav = $(".navArea")
    $toggleCollapse = $(".toggle-icons")

    // click event on toggle menu
    $toggleCollapse.click(function () {
        $nav.toggleClass("collapse")
    })

    // owl Carousel for blog
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        responsive: responsive
    });

    // click to slide to the top

    $(".move-up").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })

    // Animation Sliding
    AOS.init()

})



