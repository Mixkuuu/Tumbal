// ============================
// PARTNER PAGE INTRO ANIMATION
// ============================

document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".partner-title");
    const cards = document.querySelectorAll(".partner-card");

    // Animasi judul dulu
    setTimeout(() => {
        if (title) title.classList.add("show");
    }, 200);

    // Animasi card satu-satu (stagger)
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, 400 + index * 180);
    });
});
