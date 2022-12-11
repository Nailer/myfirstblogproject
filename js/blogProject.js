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
    });


})



