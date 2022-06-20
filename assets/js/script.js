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


window.requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;



// for topper slider

function mainSlider() {



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
    });

    rightButton.addEventListener("click", function () {
        // if (slideCount >= cardCount) return;
        // slideCount++;

        if (offset !== maxX) {
            offset -= carouselWidth + cardMarginRight;
            carousel.style.transform = `translateX(${offset}px)`;
        }
    });

    // End of testimonial slider 


    // Select the slider you'll need to manipulate and the buttons you'll add events to
    const slider = document.querySelector("[data-target='topper-slider']");
    const item = slider.querySelector("[data-target='item']");
    const leftBtn = document.querySelector("[data-action='toLeft']");
    const rightBtn = document.querySelector("[data-action='toRight']");


    let sliderWidth = slider.offsetWidth;






    const itemStyle = item.currentStyle || window.getComputedStyle(item)
    const itemMarginRight = Number(itemStyle.marginRight.match(/\d+/g)[0]);


    // Count the number of total items you have
    const slideCount = slider.querySelectorAll("[data-target='item']").length;
    slider.style.setProperty('--card-count', slideCount);


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
    });

    // end slider

    requestAnimationFrame(mainSlider);
}
requestAnimationFrame(mainSlider);
window.addEventListener('resize', mainSlider);



const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
  });


