
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log('Hamburguesa clickeada');
});

let elementos1 = document.querySelector(".container-benefits1");
let elementos2 = document.querySelector(".container-benefits2");
const arrowLeft1_1 = document.querySelector(".arrow1-1");
const arrowRight1_2 = document.querySelector(".arrow1-2");
const arrowLeft2_1 = document.querySelector(".arrow2-1");
const arrowRight2_2 = document.querySelector(".arrow2-2");

elementos1 = elementos1.children;
elementos2 = elementos2.children;

elementos1 = [...elementos1];
elementos2 = [...elementos2];

let ordenAleatorio1 = [0, 1, 2]
let ordenAleatorio2 = [0, 1, 2]


arrowLeft1_1.addEventListener("click", function () {
    const n = ordenAleatorio1.length;

    elementos1.forEach((elemento, index) => {
        ordenAleatorio1[index] = ((ordenAleatorio1[index] - 1) % n + n) % n;
        elemento.style.order = ordenAleatorio1[index];
    });
});
arrowRight1_2.addEventListener("click", function () {
    elementos1.forEach((elemento, index) => {
        ordenAleatorio1[index] = (ordenAleatorio1[index] + 1) % ordenAleatorio1.length;
        elemento.style.order = ordenAleatorio1[index];
    });
});
arrowLeft2_1.addEventListener("click", function () {
    const n = ordenAleatorio2.length;

    elementos2.forEach((elemento, index) => {
        ordenAleatorio2[index] = ((ordenAleatorio2[index] - 1) % n + n) % n;
        elemento.style.order = ordenAleatorio2[index];
    });
});
arrowRight2_2.addEventListener("click", function () {
    elementos2.forEach((elemento, index) => {
        ordenAleatorio2[index] = (ordenAleatorio2[index] + 1) % ordenAleatorio2.length;
        elemento.style.order = ordenAleatorio2[index];
    });
});
