let hamburger = document.querySelector(".hamburger");
let cross = document.querySelector(".cross");
let navlinks = document.querySelector(".nav-links");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hide');
    navlinks.classList.toggle('openClose');
});
cross.addEventListener('click', () => {
    hamburger.classList.toggle('hide');
    navlinks.classList.toggle('openClose');
});