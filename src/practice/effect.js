gsap.registerPlugin(ScrollTrigger);

// apply parallax effect to any element with a data-speed attribute
gsap.to("[data-speed]", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0
  }
});

gsap.from(".box", { // Start 1000px below the viewport
    opacity: 0, // Start with 0 opacity
    borderRadius: "50%", // Start with rounded corners
    duration: 0.5, // Duration of the animation
    ease: "power4.inOut", // Easing function for smooth animation
    stagger: 0.1 // Stagger the animation start time for each box
});

gsap.to(".box", {
    opacity: 1, // End with 100% opacity
    // borderRadius: "0%", // End with full rounded corners
    duration: 1, // Duration of the animation
    ease: "power4.inOut", // Easing function for smooth animation
    stagger: 0.1, // Stagger the animation end time for each box
    scrollTrigger: { // Use scrollTrigger to animate elements based on scroll position
        trigger: ".section", // The element that is being scrolled
        start: "top bottom", // Start animation when the element reaches the bottom of the viewport
        end: "bottom top", // End animation when the element reaches the top of the viewport
        scrub: true // Smooth scroll the animation based on scroll position
    }
})

        // gsap.to(".scroll-rev span", {
        //     scrollTrigger: {
        //         trigger: ".scroll-rev",
        //         start: "top 50%",
        //         end: "top 10%",
        //         scrub: true,
        //         stagger:true
        //     },
        //     backgroundSize: "100% 100%",
        //     ease: "none",
        //     duration:4
        // });
