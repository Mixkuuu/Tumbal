// ============================
// POPUP CONTROLLER + ANIMATION
// ============================

// ===== OPEN POPUP =====
function openPopup(title, nama, waifu, tt, status, charImg) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("pp-nama").innerText = nama;
    document.getElementById("pp-waifu").innerText = waifu;
    document.getElementById("pp-tt").innerText = tt;
    document.getElementById("pp-status").innerText = status;
    document.getElementById("popup-character-img").src = charImg;

    // TIKTOK LINK DINAMIS
    const ttBtn = document.getElementById("popup-tt-btn");
    if (tt && tt.trim() !== "") {
        let username = tt.startsWith("@") ? tt.slice(1) : tt;
        ttBtn.href = "https://www.tiktok.com/@" + username;
        ttBtn.style.display = "inline-block";
    } else {
        ttBtn.style.display = "none";
    }

    const popupBg = document.getElementById("popup-bg");
    const popupBox = document.querySelector(".popup-box");

    popupBg.style.display = "flex";

    // RESET & PLAY ANIMATION
    popupBox.classList.remove("popup-show");
    void popupBox.offsetWidth;
    popupBox.classList.add("popup-show");
}

// ===== CLOSE POPUP =====
function closePopup() {
    const popupBg = document.getElementById("popup-bg");
    const popupBox = document.querySelector(".popup-box");

    popupBox.classList.remove("popup-show");

    setTimeout(() => {
        popupBg.style.display = "none";
    }, 300);
}

// ===== EVENT LISTENER =====
document.addEventListener("DOMContentLoaded", () => {
    const btnCloseX = document.querySelector(".popup-close");
    const btnCloseFooter = document.querySelector(".close-btn");
    const popupBg = document.getElementById("popup-bg");

    if (btnCloseX) btnCloseX.addEventListener("click", closePopup);
    if (btnCloseFooter) btnCloseFooter.addEventListener("click", closePopup);

    popupBg.addEventListener("click", function (e) {
        if (e.target === popupBg) closePopup();
    });
});

// ============================
// PAGE INTRO ANIMATION (HOME)
// ============================

window.addEventListener("load", () => {

    // === ELEMEN YANG AKAN DIANIMASIKAN ===
    const introEls = document.querySelectorAll(
        ".hero, .hero *"
    );

    const sectionTitles = document.querySelectorAll(
        "h2, .section-title"
    );

    const cards = document.querySelectorAll(
        ".jabatan-card, .admin-card, .va-card"
    );

    const ctaBtn = document.querySelector(
        ".cta-btn"
    );

    // === HERO / HEADER ===
    introEls.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 80);
    });

    // === SECTION TITLE ===
    sectionTitles.forEach((title, i) => {
        setTimeout(() => {
            title.classList.add("show");
        }, 400 + i * 150);
    });

    // === CARD JABATAN / ADMIN ===
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add("show");
        }, 700 + i * 150);
    });

    // === CTA BUTTON ===
    if (ctaBtn) {
        setTimeout(() => {
            ctaBtn.classList.add("show");
        }, 1200);
    }

});
