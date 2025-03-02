document.addEventListener("DOMContentLoaded", function() {
    gsap.from("#hero-title", { duration: 1.5, opacity: 0, y: -50, ease: "power2.out" });
    gsap.from(".hero p", { duration: 1.5, opacity: 0, y: 20, delay: 0.5, ease: "power2.out" });
    gsap.from(".glass-card", { duration: 1, opacity: 0, scale: 0.9, delay: 1, ease: "elastic.out(1, 0.5)" });
});
