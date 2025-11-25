// particle click effect
document.addEventListener("click", e=>{
    for(let i=0;i<10;i++){
        const p=document.createElement("span");
        p.className="particle";
        p.style.left=e.clientX+"px";
        p.style.top=e.clientY+"px";
        document.body.appendChild(p);

        const angle=Math.random()*2*Math.PI;
        const distance=Math.random()*80+20;
        p.style.setProperty("--x",Math.cos(angle)*distance+"px");
        p.style.setProperty("--y",Math.sin(angle)*distance+"px");

        setTimeout(()=>p.remove(),600);
    }
});
