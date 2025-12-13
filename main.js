// ===== OPEN POPUP =====
function openPopup(title, nama, waifu, tt, status, charImg) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("pp-nama").innerText = nama;
    document.getElementById("pp-waifu").innerText = waifu;
    document.getElementById("pp-tt").innerText = tt;
    document.getElementById("pp-status").innerText = status;
    document.getElementById("popup-character-img").src = charImg;

       // SET LINK TIKTOK DINAMIS
    const ttBtn = document.getElementById("popup-tt-btn");

    if(tt && tt.trim() !== ""){
        // jika username pakai @
        if(tt.startsWith("@")){
            ttBtn.href = "https://www.tiktok.com/" + tt;
        } else {
            ttBtn.href = "https://www.tiktok.com/@" + tt;
        }
        ttBtn.style.display = "inline-block";
    } else {
        ttBtn.style.display = "none";
    }

    document.getElementById("popup-bg").style.display = "flex";
}

// ===== CLOSE POPUP =====
function closePopup() {
    document.getElementById("popup-bg").style.display = "none";
}

// ===== Pasang event listener tombol X & Tutup =====
document.addEventListener("DOMContentLoaded", () => {
    const btnCloseX = document.querySelector(".popup-close");
    const btnCloseFooter = document.querySelector(".close-btn");
    const popupBg = document.getElementById("popup-bg");

    btnCloseX.addEventListener("click", closePopup);
    btnCloseFooter.addEventListener("click", closePopup);

    // Klik di background juga tutup popup
    popupBg.addEventListener("click", function(e){
        if(e.target === popupBg) closePopup();
    });
});
