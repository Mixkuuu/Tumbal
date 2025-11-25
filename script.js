function openTikTok() {
    window.open("https://www.tiktok.com/@username_group", "_blank");
}

/* Partikel Bunga */
const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let flowers = [];

function spawnFlowers(e) {
    for (let i = 0; i < 15; i++) {
        flowers.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 8 + 4,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            alpha: 1
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    flowers.forEach((f, i) => {
        f.x += f.speedX;
        f.y += f.speedY;
        f.alpha -= 0.015;

        ctx.globalAlpha = f.alpha;
        ctx.fillStyle = "#ffb7e3";
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fill();

        if (f.alpha <= 0) flowers.splice(i, 1);
    });

    requestAnimationFrame(animate);
}

animate();
