// app.js
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Hero section animation
  gsap.from('#title', {
    opacity: 0,
    y: -100,
    scale: 1.2,
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.5
  });

  gsap.from('nav a', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2
  });

  // Border animations for each section
  gsap.utils.toArray('.border-animation').forEach(border => {
    gsap.fromTo(border, {
      scale: 0,
      transformOrigin: 'center'
    }, {
      scale: 1,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: border.parentElement,
        start: 'top center',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // Section fade and slide animations
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
});
