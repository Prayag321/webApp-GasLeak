//go up btn
gsap.from(".goupbtn", {
    opacity: 0,
    duration: .9,
    y: 50,
    scrollTrigger: {
        trigger: "#manual",
        scroller: "body",
        start: "top 30%",
        toggleActions: "play none none reverse",
    }
})

// Navbar Animation
gsap.from("nav", {
    opacity: 0,
    duration: .8,
    y: -50,
    delay: 0.4,
    ease: "power2.inOut"
});

// Carousel Animation
gsap.from(".carousel", {
    opacity: 0,
    duration: 2,
    delay: 0.4,
    ease: "power2.inOut"
});

// Card Animation
gsap.from(".card-container", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".card-container",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
        toggleActions: "play none none reverse"

    }
});

// real time sensor info
gsap.from(".card-client", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".cantactus",
        start: "top 40%",
        end: "bottom 80%",
        scrub: 1,
        toggleActions: "play none none reverse",
        markers:"true"

    }
});

