// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Footer year updates automatically
const year = document.querySelector(".copyright");
if (year) {
    year.innerHTML = `© ${new Date().getFullYear()} Praharaju Vidya Sagar. All Rights Reserved.`;
}