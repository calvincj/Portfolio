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

// Yellow glow behind home image — follows mouse across the page
const homeGlow = document.querySelector('.home-glow');
if (homeGlow) {
    const wrapper = homeGlow.closest('.home-image-wrapper');
    document.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / window.innerWidth;
        const dy = (e.clientY - cy) / window.innerHeight;
        homeGlow.style.transform = `translate(calc(-50% + ${dx * 50}px), calc(-50% + ${dy * 50}px))`;
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
