/* ===== POPUP (character image + info) ===== */
function openPopup(title, nama, waifu, tt, status, avatarImg, characterImg) {
  document.getElementById('popup-title').innerText = title || '';
  document.getElementById('pp-nama').innerText = nama || '';
  document.getElementById('pp-waifu').innerText = waifu || '';
  document.getElementById('pp-tt').innerText = tt || '';
  document.getElementById('pp-status').innerText = status || '';
  // avatarImg (not used inside popup) kept for backwards compatibility
  const charEl = document.getElementById('popup-character-img');
  if (characterImg) charEl.src = characterImg;
  else charEl.src = 'assets/character-placeholder.png';
  document.getElementById('popup-bg').style.display = 'flex';
  document.getElementById('popup-bg').setAttribute('aria-hidden','false');
}

function closePopup(){
  document.getElementById('popup-bg').style.display = 'none';
  document.getElementById('popup-bg').setAttribute('aria-hidden','true');
}

/* ===== particle on click (your original sakura burst) ===== */
document.querySelectorAll('.btn-click').forEach(btn=>{
  btn.addEventListener('click', function(e){
    for (let i=0;i<10;i++){
      const p = document.createElement('span');
      p.className = 'particle';
      const angle = Math.random()*2*Math.PI;
      const distance = Math.random()*60+12;
      p.style.left = e.clientX + 'px';
      p.style.top = e.clientY + 'px';
      p.style.setProperty('--x', Math.cos(angle)*distance + 'px');
      p.style.setProperty('--y', Math.sin(angle)*distance + 'px');
      p.style.width = p.style.height = (6 + Math.random()*8) + 'px';
      p.style.background = '#ffb2d9';
      p.style.position = 'fixed';
      p.style.borderRadius = '50%';
      p.style.pointerEvents='none';
      p.style.opacity = '0.95';
      p.style.transition = 'transform .9s ease-out, opacity .9s linear';
      document.body.appendChild(p);
      requestAnimationFrame(()=> {
        p.style.transform = `translate(${p.style.getPropertyValue('--x')}, ${p.style.getPropertyValue('--y')}) rotate(${Math.random()*360}deg) scale(.2)`;
        p.style.opacity = '0';
      });
      setTimeout(()=> p.remove(), 900);
    }
  });
});

/* ===== sakura falling background (continuous) ===== */
(function startSakura(){
  const root = document.getElementById('sakura-root');
  const max = 12; // petals at any time
  setInterval(()=>{
    const countNow = root.querySelectorAll('.sakura').length;
    if (countNow > max) return;
    const el = document.createElement('div');
    el.className = 'sakura';
    // random horizontal start
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = '-6vh';
    // random size & duration
    const dur = 6 + Math.random()*6; // 6s - 12s
    el.style.width = (10 + Math.random()*18) + 'px';
    el.style.height = el.style.width;
    el.style.animationDuration = dur + 's';
    el.style.opacity = (0.6 + Math.random()*0.4);
    el.style.transform = `rotate(${Math.random()*360}deg)`;
    root.appendChild(el);
    // remove after done
    setTimeout(()=> el.remove(), dur*1000 + 500);
  }, 600);
})();

/* ===== simple parallax on scroll for layer ===== */
(function parallax(){
  const layer = document.querySelector('.parallax-layer');
  if(!layer) return;
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY;
    // move slower than scroll for parallax
    layer.style.transform = `translateY(${y*0.12}px)`;
  }, {passive:true});
})();
