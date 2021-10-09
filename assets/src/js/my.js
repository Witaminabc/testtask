$('.owl-carousel').owlCarousel({
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(".owl-prev").html('<img src="img/left3.png" alt="">');
$(".owl-next").html('<img src="img/right2.png" alt="">');