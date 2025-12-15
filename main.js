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
