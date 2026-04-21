document.addEventListener("DOMContentLoaded", () => {
    const text = "MIŠKŲ VAIDMUO TVARUMO IR KLIMATO KAITOS KONTEKSTE";
    const element = document.getElementById("heroTitle");

    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text[i];
            i++;
            setTimeout(typing, 40);
        } else {
            element.classList.add("finished"); // 👈 stop cursor
        }
    }

    typing();
});

document.addEventListener("DOMContentLoaded", () => {
    const revealItems = document.querySelectorAll(".reveal-left, .reveal-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.25
    });

    revealItems.forEach((item) => observer.observe(item));
});