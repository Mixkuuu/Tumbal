// ============================
// PARTNER PAGE LOAD ANIMATION
// ============================

window.addEventListener("load", () => {
    const title = document.querySelector(".partner-title");
    const cards = document.querySelectorAll(".partner-card");

    // Judul muncul dulu
    if (title) {
        title.classList.add("show");
    }

    // Card muncul satu-satu
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, 300 + index * 200);
    });
});
