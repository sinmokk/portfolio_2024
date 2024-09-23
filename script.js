gsap.from("section.hero h1.top_h1", {
    opacity: 0.5,
    duration: 4,
    color:"pink",
    scrub: true
})
gsap.from("section.hero h1.bottom_h1", {
    y: 100,
    duration: 1.5
})

var tl = gsap.timeline()

tl.from(".item1" , {
    x: -50,
    duration: 1,
    scrollTrigger:  {
        scrub: true,
        markers: true, 
        start: " top 20%"
    }
    
})
gsap.to(".item2", {
    x:-200,
    rotate: -3,
    scrollTrigger:  {
        scrub: true,
        markers: true, 
        start: "top 50%",
        // end: "bottom 20%"
    }
})
tl.to(".item3", {
    rotate: -10,
    scrollTrigger:  {
        scrub: true,
        // markers: true, 
        start: "top 10%",
        // end: "bottom 20%"
    }
})
gsap.to(".item4" , {
    x: 400,
    rotate: 4,
    y:-20,
    scrollTrigger:  {
        scrub: true,
        // markers: true, 
        start: "top 10%",
        // end: "bottom 20%"
    }
})
gsap.to(".item5", {
   x: -340,
   rotate:-3,
   y: -30,
})
gsap.to(".item6", {
    y: -30,
    x: -161
})
gsap.to(".item7", {
    x: 200,
    rotate: -10,
    y: -195,
    duration: 1
})
gsap.to(".item8", {
    y: -130,
})


// scroll Trigger 넣어야 한다.