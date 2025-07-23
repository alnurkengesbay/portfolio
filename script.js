document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.circle');

  circles.forEach((circle) => {
    gsap.set(circle, {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 1.5 + 0.5
    });

    gsap.to(circle, {
      duration: 30 + Math.random() / 100,
      x: "+=" + (Math.random() * 400 - 200),
      y: "+=" + (Math.random() * 400 - 200),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
});
