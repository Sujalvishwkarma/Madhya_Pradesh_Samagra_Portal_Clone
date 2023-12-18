var hamburger = document.querySelector('.hamburger'),
    primary_menu = document.querySelector(".primary-menu");
    hamburger.addEventListener("click",()=>{
        primary_menu.classList.toggle("primary-menu-active");
    })
    setTimeout(() => {
        window.location.replace("#popup-box");
    }, 3000);
ScrollReveal({ reset: true });

ScrollReveal().reveal('.hero-container');
ScrollReveal().reveal('.three-child', { delay: 500 });
ScrollReveal().reveal('footer', { delay: 2000 });