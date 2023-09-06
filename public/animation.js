//go up btn
gsap.from(".goupbtn", {
    opacity: 0,
    duration: .9,
    scrollTrigger: {
        trigger: ".goupbtn",
        scroller: "body",
        start: "top 10%",
        toggleActions: "play none reverse",
    }
})