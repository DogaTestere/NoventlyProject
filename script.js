document.querySelector(".cta").addEventListener("click", () => {
    alert("Sizinle en kısa sürede iletişime geçeceğiz!");
});

const area = document.getElementById("animation-area");
const animDrones = [];

// 30 drone oluştur
for (let i = 0; i < 30; i++) {
    let d = document.createElement("div");
    d.className = "anim-drone";
    area.appendChild(d);
    animDrones.push(d);

    d.style.left = Math.random() * window.innerWidth + "px";
    d.style.top = Math.random() * 300 + "px";
}

// sürekli hareket
function animateDrones() {
    animDrones.forEach(d => {
        d.style.left = Math.random() * window.innerWidth + "px";
        d.style.top = Math.random() * 300 + "px";
    });
}

// her 2 saniyede değiş
setInterval(animateDrones, 2000);


document.addEventListener("DOMContentLoaded", () => {

    const area = document.getElementById("animation-area");

 

    // Hareket fonksiyonu
    function moveDrones() {
        drones.forEach(d => {
            d.style.left = Math.random() * area.clientWidth + "px";
            d.style.top = Math.random() * area.clientHeight + "px";
        });
    }

    // Sürekli animasyon
    setInterval(moveDrones, 2000);

});
