
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



$(document).ready(function () {
    $('#Tharmel').owlCarousel({
        loop:true,
        autoplay: true,
        nav: true,
        dots: false,
        autoplaySpeed: 2000,
        smartSpeed: 2000,
        margin: 20,
        stagepadding: 200,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 1
            },

            768: {
                items: 1
            },

            1366: {
                items: 1
            }
        }
    });
});


let tl = gsap.timeline()

tl.from(".text-common", {
    x: -700,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrub:2,
})

tl.from(".animate-product", {
    y: -700,
    duration:1,
    delay: 2,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".animate-product",
        start: "180% 50%",
        end: '0% 0%',
        scroller: ".smooth-scroll",
        markers: false,
        scrub:2,
    }
})


tl.from(".premium-product", {
    x:500,
    duration:3,
    delay: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".inovative-item",
        start: "-30% 30%",
        end: '-10% 0%',
        scroller: ".smooth-scroll",
        markers: false,
        scrub:3,
    }

})

tl.from(".premium-item", {
    x:500,
    duration:3,
    delay: 0.20,
    opacity: 0,
    scrollTrigger: {
        trigger: ".premium-item",
        start: "-120% 30%",
        end: '-10% 0%',
        scroller: ".smooth-scroll",
        markers: false,
        scrub:true,
    }

})



tl.from(".product-packaging",{
    y:-500,
    delay:1,
    duration:3,
    opacity:0,
    scrollTrigger:{
        trigger:".integranted-section",
        start: "10% 30%",
        end: '-10% 0%',
        scroller: ".smooth-scroll",
        markers: true,
        scrub:2,
    }
})

tl.from(".interandted-common",{
    y:800,
    delay:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".interandted-common",
        start: "-150% 50%",
        end: '-180% 0%',
        scroller: ".smooth-scroll",
        markers: true,
        scrub:2,
    }
})

tl.from(".stability-text",{
    x:-500,
    delay:1,
    duration:10,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:".why-pitpack",
        start: "20% 50%",
        end: '-180% 0%',
        scroller: ".smooth-scroll",
        markers:false,
        scrub:5,
    }
})

tl.from(".animate-pack",{
    y:-500,
    duration:5,
    delay:3,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:".why-pitpack",
        start: "20% 50%",
        end: '-180% 0%',
        scroller: ".smooth-scroll",
        markers:false,
        scrub:2,
    }
})


tl.from(".animate-foot1",{
    x:-500,
    duration:1,
    delay:5,
    opacity:0,
    // scrollTrigger:{
    //     trigger:".animate-foot1",
    //     start: "-20% 60%",
    //     end: '-180% 0%',
    //     scroller: ".smooth-scroll",
    //     markers:true,
    //     scrub:0.50,
    // }
})