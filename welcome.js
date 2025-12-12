const enterBtn = document.getElementById("enterBtn");
const glitchScreen = document.getElementById("glitch-screen");
const clickSound = document.getElementById("clickSound");

enterBtn.addEventListener("click", () => {
    clickSound.play();

    // Tampilkan layer glitch
    glitchScreen.style.display = "block";
    glitchScreen.classList.add("glitch-animate");

    // Durasi glitch 1.2 detik → lalu ke halaman utama
    setTimeout(() => {
        window.location.href = "main.html"; 
    }, 1200);
});
