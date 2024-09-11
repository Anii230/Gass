import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // The scroll speed duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      direction: 'vertical', // Could be horizontal or vertical scrolling
      smooth: true, // Enable smooth scrolling
    });

    const animate = (time) => {
    lenis.raf(time);
    requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy(); // Clean up when the component is unmounted
    };
}, []);
};

export default useLenis;
