//go up btn
gsap.from(".goupbtn", {
    opacity: 0,
    duration: .9,
    y:50,
    scrollTrigger: {
        trigger: "#manual",
        scroller: "body",
        start: "top 30%",
        markers:"false",
        toggleActions: "play none none reverse",
    }
})