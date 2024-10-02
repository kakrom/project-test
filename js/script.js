
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector('.projects-gallery');

    let isDown = false;
    let startX;
    let scrollLeft;

    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        gallery.classList.add('active');
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => {
        isDown = false;
        gallery.classList.remove('active');
    });

    gallery.addEventListener('mouseup', () => {
        isDown = false;
        gallery.classList.remove('active');
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 3;
        gallery.scrollLeft = scrollLeft - walk;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector('.projects-gallery');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const scrollAmount = 500;
    nextButton.addEventListener('click', () => {
        gallery.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    prevButton.addEventListener('click', () => {
        gallery.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const catalogItems = document.querySelector('.catalog-items');
    const prevButton = document.getElementById('catalog-prev');
    const nextButton = document.getElementById('catalog-next');
    const scrollAmount = 500;
    nextButton.addEventListener('click', () => {
        catalogItems.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    prevButton.addEventListener('click', () => {
        catalogItems.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});
let btn = document.querySelector("#sec11-btn");

btn.addEventListener("click", () => {
  let userName = document.querySelector("#sec11-name").value;
  let phoneNumber = document.querySelector("#sec11-number").value;
  let email = document.querySelector("#sec11-email").value;
  let survey = document.querySelector("#sec11-survey").value;

  let user = {
    name: userName,
    phone: phoneNumber,
    email: email,
    survey: survey
  };  

  localStorage.setItem("user", JSON.stringify(user));
});
