const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // add menu icon
        toggle.innerHTML = `<i class="fas fa-bars">`;
    }
    else {
        menu.classList.add("active");

        // add x (close menu) icon
        toggle.innerHTML = `<i class="fas fa-times"></i>`;
    }
}

toggle.addEventListener("click", toggleMenu, false);

// Yellow solid shadow on home image — shadow appears on the opposite side from the mouse
const homeImg = document.getElementById('home-img');
if (homeImg) {
    const wrapper = homeImg.closest('.home-image-wrapper');
    document.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = Math.max(-1.5, Math.min(1.5, (e.clientX - cx) / (rect.width / 2)));
        const dy = Math.max(-1.5, Math.min(1.5, (e.clientY - cy) / (rect.height / 2)));
        // Shadow sits opposite the mouse — mouse top-left → shadow bottom-right
        const ox = -dx * 18;
        const oy = -dy * 18;
        homeImg.style.filter = `drop-shadow(${ox}px ${oy}px 0px #FADA7A)`;
    });
}

// 3D tilt on about image
const aboutImg = document.getElementById('about-img');
if (aboutImg) {
    aboutImg.addEventListener('mousemove', (e) => {
        const rect = aboutImg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 18;
        const rotateX = ((y / rect.height) - 0.5) * -18;
        aboutImg.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        aboutImg.style.boxShadow = `${-rotateY * 1.5}px ${rotateX * 1.5}px 30px rgba(250, 218, 122, 0.25)`;
    });
    aboutImg.addEventListener('mouseleave', () => {
        aboutImg.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
        aboutImg.style.boxShadow = 'none';
    });
}
