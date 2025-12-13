/* ---------------------------------------------
   POPUP SYSTEM
--------------------------------------------- */
function openPopup(title, nama, waifu, tt, status, charImg){
    document.getElementById("popup-title").innerText = title;
    document.getElementById("pp-nama").innerText = nama;
    document.getElementById("pp-waifu").innerText = waifu;
    document.getElementById("pp-tt").innerText = tt;
    document.getElementById("pp-status").innerText = status;
    document.getElementById("popup-character-img").src = charImg;

    // TOMBOL TIKTOK (DINAMIS PER JABATAN)
    const ttBtn = document.getElementById("popup-tt-btn");

    if(tt && tt.trim() !== ""){
        // kalau pakai @username
        if(tt.startsWith("@")){
            ttBtn.href = "https://www.tiktok.com/" + tt;
        } 
        // kalau username tanpa @
        else{
            ttBtn.href = "https://www.tiktok.com/@" + tt;
        }

        ttBtn.style.display = "inline-block";
    } else {
        // kalau gak ada akun
        ttBtn.style.display = "none";
    }

    document.getElementById("popup-bg").style.display = "flex";
}

function closePopup(){
    document.getElementById("popup-bg").style.display = "none";
}

/* ---------------------------------------------
   CLICK EFFECT (FLOWER POP)
--------------------------------------------- */
document.addEventListener("click", function(e){
    let flower = document.createElement("div");
    flower.classList.add("click-effect");
    flower.style.left = e.pageX + "px";
    flower.style.top = e.pageY + "px";
    document.body.appendChild(flower);

    setTimeout(()=>{ flower.remove(); }, 800);
});

/* ---------------------------------------------
   SAKURA FALL (AUTO)
--------------------------------------------- */
function createSakura(){
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");

    sakura.style.left = Math.random() * window.innerWidth + "px";
    sakura.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.getElementById("sakura-root").appendChild(sakura);

    setTimeout(()=>{ sakura.remove(); }, 9000);
}

setInterval(createSakura, 350);
