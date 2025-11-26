// =============================
// POPUP FUNCTION
// =============================
function openPopup(title, nama, waifu, tt, status) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("pp-nama").innerText = nama;
    document.getElementById("pp-waifu").innerText = waifu;
    document.getElementById("pp-tt").innerText = tt;
    document.getElementById("pp-status").innerText = status;

    document.getElementById("popup-bg").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup-bg").style.display = "none";
}



// =============================
// BUNGA PARTIKEL SAAT KLIK UI
// =============================
document.querySelectorAll(".btn-click").forEach(btn => {
    btn.addEventListener("click", function (e) {

        for (let i = 0; i < 12; i++) {
            const p = document.createElement("span");
            p.classList.add("particle");

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 60 + 20;

            p.style.left = e.clientX + "px";
            p.style.top = e.clientY + "px";
            p.style.setProperty("--x", Math.cos(angle) * distance + "px");
            p.style.setProperty("--y", Math.sin(angle) * distance + "px");

            document.body.appendChild(p);

            setTimeout(() => p.remove(), 900);
        }
    });
});
