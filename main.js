// ===== OPEN POPUP =====
function openPopup(title, nama, waifu, tt, status, charImg) {
    // Isi data popup
    document.getElementById("popup-title").innerText = title;
    document.getElementById("pp-nama").innerText = nama;
    document.getElementById("pp-waifu").innerText = waifu;
    document.getElementById("pp-tt").innerText = tt;
    document.getElementById("pp-status").innerText = status;
    document.getElementById("popup-character-img").src = charImg;

    // SET LINK TIKTOK DINAMIS
    const ttBtn = document.getElementById("popup-tt-btn");

    if(tt && tt.trim() !== ""){
        // Pakai tt apa adanya (boleh ada @)
        ttBtn.href = "https://www.tiktok.com/" + tt;
        ttBtn.style.display = "inline-block";
    } else {
        ttBtn.style.display = "none";
    }

    // Tampilkan popup
    document.getElementById("popup-bg").style.display = "flex";
}

// ===== CLOSE POPUP =====
function closePopup() {
    document.getElementById("popup-bg").style.display = "none";
}

// ===== PASANG EVENT LISTENER =====
document.addEventListener("DOMContentLoaded", () => {
    const btnCloseX = document.querySelector(".popup-close");
    const btnCloseFooter = document.querySelector(".close-btn");
    const popupBg = document.getElementById("popup-bg");

    if(btnCloseX) btnCloseX.addEventListener("click", closePopup);
    if(btnCloseFooter) btnCloseFooter.addEventListener("click", closePopup);

    // Klik di background tutup popup
    popupBg.addEventListener("click", function(e){
        if(e.target === popupBg) closePopup();
    });
});
