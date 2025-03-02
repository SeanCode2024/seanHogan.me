document.addEventListener("DOMContentLoaded", function () {
    let skills = document.querySelectorAll(".skill");

    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.classList.add("fade-in");
        }, index * 300);
    });

    document.querySelector(".scroll-down").addEventListener("click", function () {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    });
});
