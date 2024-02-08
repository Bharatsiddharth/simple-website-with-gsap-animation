let tl = gsap.timeline(); 

tl.from(".nav1", {
    opacity:0,
    scale:0.5,
    duration:0.5
})


tl.from(".nav2 h4,i ", {
    y:-10,
    opacity:0,
    duration:0.5,
    stagger:1
})


tl.from(".content", {
    opacity:0,
    duration:1,
})

tl.from(".content .h1,.p1", {
    y:-10,
    opacity:0,
    duration:1,
    // rotate: 45
})

// // here on page 2 start


gsap.from(".page2", {
    opacity:0,
    duration:1,
    scrollTrigger: ".page2"
})

gsap.from(".content2 ,.h11 ,.p11 ,.card1, .card2, .card3", {
    x:40,
    opacity:0,
    duration:1,
    stagger:1,
    color: "red",
    scrollTrigger: {
        trigger: ".content2 ,.h11 ,.p11 ,.card1, .card2, .card3",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub:3
    }
})


// here on page 3 start

// tl.from(".content3", {
//     opacity:0,
//     duration:1,
//     scrollTrigger: {
//         trigger: ".content3",
//         scroller: "body",
//         // markers:true,
//         start: "top 60%",
//         end: "top 40%",
//         scrub:3
//     }
// })

tl.from(".page3-h1,.p111", {
    y:-40,
    opacity:0,
    duration:0.5,
    rotate:45,
    stagger:1,
    scrollTrigger: {
        trigger: ".page3-h1",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 10%",
        scrub:3
    }
   
})


tl.from("h5", {
    y:-40,
    x:20,
    color: "#000000",
    opacity:0,
    duration: 1,    
    stagger:1,
    scrollTrigger: {
        trigger: "h5",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 42%",
        scrub:3
    }
})


//                                             //   page 4


tl.from(".page4", {
    opacity:0,
    duration:3,
    scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 0%",
        scrub:3
    }
})


tl.from(".page4-h1,.page4-p", {
    y:-40,
    opacity:0,
    duration:2,
    rotate:45,
    stagger:1,
    scrollTrigger: {
        trigger: ".page4-h1, page4-p",
        scroller: "body",
        // markers:true,
        start: "top 10%",
        end: "top 20%",
        scrub:3
    }
   
})


tl.from(".content4", {
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger: {
        trigger: ".content4",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 10%",
        scrub:3
    }
   
})


tl.from(".content4 .img", {
    opacity:0,
    duration:2,
    scale:0.5,
    stagger:1,
    scrollTrigger: {
        trigger: ".content4 .img",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 0%",
        scrub:5
    }
   
})



tl.from(".content4 h4", {
    x:10,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger: {
        trigger: ".content4 .img",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 40%",
        scrub:5
    }
   
})



tl.from("footer .upper", {
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger: {
        trigger: "footer .upper",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 60%",
        scrub:5
    }
   
})

tl.from(".upper h2,.upper button", {
    opacity:0,
    duration:0.5,
    stagger:1,
    scrollTrigger: {
        trigger: "upper h2,.upper button",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 60%",
        scrub:5
    }
})



tl.from("footer .lower", {
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger: {
        trigger: "footer .upper",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 60%",
        scrub:5
    }
   
})


tl.from(".lower h1, .lower h3, .lower .socialmedia", {
    opacity:0,
    duration:2,
    delay:1,
    stagger:1,
    scrollTrigger: {
        trigger: "footer .upper",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 50%",
        scrub:5
    }
   
})
