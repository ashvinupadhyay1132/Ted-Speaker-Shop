const navSearch = document.getElementById("nav-search");
navSearch.addEventListener("click", () => navSearch.classList.toggle("open"));

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const sr = ScrollReveal();

sr.reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

const headerContent = [
  ".header__content .section__subheader",
  ".header__content h1",
  ".header__content .header__btn",
];

headerContent.forEach((selector, index) => {
  sr.reveal(selector, {
    ...scrollRevealOption,
    delay: 500 * (index + 1),
  });
});

sr.reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

const musicContent = [
  ".music__content .section__header",
  ".music__content p",
  ".music__btn",
];

musicContent.forEach((selector, index) => {
  sr.reveal(selector, {
    ...scrollRevealOption,
    delay: 500 * index,
  });
});

new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
});

const discountContent = [
  ".discount__content .section__header",
  ".discount__content p",
  ".discount__btn",
];

discountContent.forEach((selector, index) => {
  sr.reveal(selector, {
    ...scrollRevealOption,
    delay: 500 * index,
  });
});