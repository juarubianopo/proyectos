document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.secciones', { delay: 300 });
ScrollReveal().reveal('.banner', { delay: 300 });
ScrollReveal().reveal('.banner2', { delay: 300 });