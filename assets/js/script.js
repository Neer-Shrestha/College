// site header responsive 
const navContainer = document.querySelector('.nav-container');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.btn-close');

navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('opened');
    if (navContainer.classList.contains('opened')) {
        navContainer.classList.remove('closed')
    }
})
navClose.addEventListener('click', () => {
    navContainer.classList.remove('opened');
    navContainer.classList.add('closed');

})

function resize() {
    if (window.innerWidth > 992) {
        if (navContainer.classList.contains('opened')) {
            navContainer.classList.remove('opened')
        }
    }
}
resize();

// const size = document.querySelector

// Select the carousel you'll need to manipulate and the buttons you'll add events to
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// Prepare to limit the direction in which the carousel can slide, 
// and to control how much the carousel advances by each time.
// In order to slide the carousel so that only three cards are perfectly visible each time,
// you need to know the carousel width, and the margin placed on a given card in the carousel
let carouselWidth = carousel.offsetWidth;
function updateWidth() {
    requestAnimationFrame(updateWidth);
    carouselWidth = carousel.offsetWidth;
}
window.addEventListener('resize', updateWidth);

requestAnimationFrame(updateWidth);

const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);


// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;
carousel.style.setProperty('--card-count', cardCount);
// let slideCount = 0;
// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;
const maxX = -((cardCount / 1) * carouselWidth +
    (cardMarginRight * (cardCount / 1)) -
    carouselWidth - cardMarginRight);


// Add the click events
leftButton.addEventListener("click", function () {
    if (offset !== 0) {
        offset += carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})

rightButton.addEventListener("click", function () {
    // if (slideCount >= cardCount) return;
    // slideCount++;

    if (offset !== maxX) {
        offset -= carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})


// for topper slider


// Select the slider you'll need to manipulate and the buttons you'll add events to
const slider = document.querySelector("[data-target='topper-slider']");
const item = slider.querySelector("[data-target='item']");
const leftBtn = document.querySelector("[data-action='toLeft']");
const rightBtn = document.querySelector("[data-action='toRight']");

// Prepare to limit the direction in which the slider can slide, 
// and to control how much the slider advances by each time.
// In order to slide the slider so that only three items are perfectly visible each time,
// you need to know the slider width, and the margin placed on a given item in the slider
let sliderWidth = slider.offsetWidth;
function updateSlideWidth() {
    requestAnimationFrame(updateSlideWidth);
    sliderWidth = slider.offsetWidth;
}
window.addEventListener('resize', updateSlideWidth);

requestAnimationFrame(updateSlideWidth);

const itemStyle = item.currentStyle || window.getComputedStyle(item)
const itemMarginRight = Number(itemStyle.marginRight.match(/\d+/g)[0]);


// Count the number of total items you have
const slideCount = slider.querySelectorAll("[data-target='item']").length;
slider.style.setProperty('--card-count', slideCount);

// Define an offset property to dynamically update by clicking the button controls
// as well as a tMaxX property so the slider knows when to stop at the upper limit
let tOffset = 0;
const tMaxX = -((slideCount / 1) * sliderWidth +
    (itemMarginRight * (slideCount / 1)) -
    sliderWidth - itemMarginRight);


// Add the click events
leftBtn.addEventListener("click", function () {
    if (tOffset !== 0) {
        tOffset += sliderWidth + itemMarginRight;
        slider.style.transform = `translateX(${tOffset}px)`;
    }
})

rightBtn.addEventListener("click", function () {
    if (tOffset !== tMaxX) {
        tOffset -= sliderWidth + itemMarginRight;
        slider.style.transform = `translateX(${tOffset}px)`;
    }
})