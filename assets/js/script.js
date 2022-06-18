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

// slider code starts here
const sliderWrapper = document.querySelector('.testimonial-container');
const sliderItem = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const lastItem = document.querySelector('.slider-item:last-child');
const firstItem = document.querySelector('.slider-item:first-child');


const lastClone = lastItem.cloneNode(true);
const firstClone = firstItem.cloneNode(true);

lastClone.id = 'last-clone';
firstClone.id = 'first-clone';
sliderWrapper.prepend(lastClone);
sliderWrapper.append(firstClone);



let slideCount = 1;


const size = sliderItem[0].clientWidth;

sliderWrapper.style.transform = 'translateX(' + (-size * slideCount) + 'px)';



nextBtn.addEventListener('click', () => {
    if(slideCount >= sliderItem.length - 1 ) return;
    sliderWrapper.style.transition = "transform 0.3s ease-in-out";
    slideCount++;
    sliderWrapper.style.transform = 'translateX(' + (-size * slideCount) + 'px)';
});
prevBtn.addEventListener('click', () => {
    if(slideCount <= 0) return;
    sliderWrapper.style.transition = "transform 0.3s ease-in-out";
    slideCount--;
    sliderWrapper.style.transform = 'translateX(' + (-size * slideCount) + 'px)';
});

sliderWrapper.addEventListener('transitioned', () => {
    if (sliderItem[slideCount].id === 'last-clone' ) {
        sliderWrapper.style.transition = "none";
        slideCount = sliderItem.length - 2;
        sliderWrapper.style.transform = 'translateX(' + (-size * slideCount) + 'px)';
    }
    if (sliderItem[slideCount].id === 'first-clone' ) {
        sliderWrapper.style.transition = "none";
        slideCount = sliderItem.length - slideCount;
        sliderWrapper.style.transform = 'translateX(' + (-size * slideCount) + 'px)';
    }
})